import { View, Text, StyleSheet,FlatList,Image,TouchableOpacity  } from 'react-native'
import React,{useEffect,useState} from 'react'
import GlobalApi from '../Utils/GlobalApi.js'
import Heading from '../../Components/Heading'
import Colors from '../Utils/Colors.js'
import {useNavigation} from '@react-navigation/native'

export default function Categories() {
    const [categories,setCategories]=useState([]);
    const navigation=useNavigation()

    useEffect(() => {
        getCategories();
      
    }, [])
    
    const getCategories=()=>{
        GlobalApi.getCategories().then(resp=>{
            setCategories(resp?.categories)
        })

    }
  return (
    <View style={{marginTop:10}}>
        
        <Heading text={'Categories'} isViewAll={true}/>
        <FlatList
            data={categories}
            numColumns={4}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>index<=3&&(
                <TouchableOpacity  style={styles.container}
                onPress={()=>navigation.push('business-list',
                {category:item.name})}>
                    <View style={styles.iconContainer}>
                    <Image source={{uri:item?.icon?.url}}
                    style={styles.sliderImage}
                    
                    />
                </View>
                <Text style={{fontFamily:'outfit-medium', marginTop:5}}>{item?.name}</Text>
                </TouchableOpacity >
            )
        }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
  
    sliderImage:{
        width:30,
        height:30,
        borderRadius:20,
        objectFit:'contain'
    },
    iconContainer:{
        backgroundColor:Colors.LIGHT_GRAY,
        padding:17,
        borderRadius:99,

    }

})