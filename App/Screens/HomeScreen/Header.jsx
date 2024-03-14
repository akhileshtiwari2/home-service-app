import { View, Text,Image,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import {useUser} from '@clerk/clerk-expo'
import Colors from '../Utils/Colors.js'
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const {user,isLoading}=useUser();
  return user&&(
    <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.porfileMainContainer}>
        <View style={styles.profileContainer}>
        <Image source={{uri:user?.imageUrl}}
        style={styles.userImage}/>
           <View>
                <Text style={{color:Colors.WHITE}}>Welcome</Text>
                <Text style={{color:Colors.WHITE,fontSize:20}}>{user.fullName}</Text>
          </View>
        </View>
        <FontAwesome name="bookmark-o" size={27} color="white" />
        </View>
        {/* Search Bar Section */}
        <View>
            <TextInput placeholder='Search' 
            style={styles.textInput}/>
        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25

    },
    porfileMainContainer:{
        dispaly: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    profileContainer:{
        dispaly: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        gap:10
    },
    userImage:{
        width:45,
        height:45,
        borderRadius:99
    },
    textInput:{

    }

})