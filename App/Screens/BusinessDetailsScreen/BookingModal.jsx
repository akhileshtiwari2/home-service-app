import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  ToastAndroid 
} from "react-native";
import React, { useState, useEffect } from "react";
import PageHeading from "../../Components/PageHeading";
import CalendarPicker from "react-native-calendar-picker";
import Colors from "../Utils/Colors.js";
import Heading from "../../Components/Heading";
import {useUser} from '@clerk/clerk-expo';
import GlobalApi from '../Utils/GlobalApi.js'

export default function BookingModal({businessId,hideModal}) {
  const [timeList, setTimeList] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [note, setNote] = useState();
  const {user}=useUser();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }

    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    setTimeList(timeList);
  };

//   Create Booking Method 
const createNewBooking=()=>{
    if(!selectedTime || !selectedDate )
    {
        ToastAndroid.show('Please select Date and Time',ToastAndroid.LONG)
        return;
    }
    const data={
        userName:user?.fullName,
        userEmail:user?.primaryEmailAddress.emailAddress,
        time:selectedTime,
        date:selectedDate,
        businessId:businessId
    }
    GlobalApi.createBooking(data).then(resp=>{
        console.log("Resp", resp)
        ToastAndroid.show('Booking Created Successfully!',ToastAndroid.LONG)
    })
}

  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ padding: 20 }}>
        <PageHeading title={"Booking"} />
        {/* Calender Section */}
        <View style={{ marginTop: 20 }}>
          <Heading text="Select Date" />
        </View>

        <View style={styles.calenderContainer}>
          <CalendarPicker
            onDateChange={setSelectedDate}
            width={340}
            minDate={Date.now()}
            todayBackgroundColor={Colors.BLACK}
            todayTextStyle={{ color: Colors.WHITE }}
            selectedDayColor={Colors.PRIMARY}
            selectDayTextColor={Colors.WHITE}
          />
        </View>
        {/* Time Select Section */}
        <View style={{ marginTop: 10 }}>
          <Heading text={"Select Time Slot"} />
          <FlatList
            data={timeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => setSelectedTime(item.time)}
              >
                <Text
                  style={[
                    selectedTime == item.time
                      ? styles.selectedTime
                      : styles.unSelectedTime,
                  ]}
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* Note Section */}
        <View style={{ paddingTop: 10 }}>
          <Heading text={"Any Suggestion Note"} />
          <TextInput
            placeholder="Note"
            style={styles.noteTextArea}
            numberOfLines={4}
            multiline={true}
            onChange={(text) => setNote(text)}
          />
        </View>
        {/* Confirmation Button */}
        <TouchableOpacity style={{ marginTop: 10 }}
        onPress={()=>createNewBooking()}
        >
          <Text style={styles.confirmBtn}
          >Confirm & Book</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  calenderContainer: {
    backgroundColor: Colors.PRIMARY_LIGHT,
    padding: 10,
    borderRadius: 15,
  },
  selectedTime: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
    marginRight: 10,
    color: Colors.WHITE,
  },
  unSelectedTime: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 5,
    marginRight: 10,
  },
  noteTextArea: {
    borderWidth: 1,
    borderRadius: 15,
    textAlignVertical: "top",
    padding: 10,
    minHeight: 100,
    fontSize: 16,
    fontFamily: "outfit",
    borderColor: Colors.PRIMARY,
  },
  confirmBtn: {
    textAlign: "center",
    fontFamily: "outfit-medium",
    fontSize: 17,
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    padding: 10,
    borderRadius: 99,
    elevation: 2,
  },
});
