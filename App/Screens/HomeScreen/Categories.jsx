import { View, Text, StyleSheet,FlatList,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import GlobalApi from '../Utils/GlobalApi.js'
import Heading from '../../Components/Heading'
import Colors from '../Utils/Colors.js'

export default function Categories() {
    const [categories,setCategories]=useState([]);
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
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                    <Image source={{uri:item?.icon?.url}}
                    style={styles.sliderImage}
                    
                    />
                </View>
                <Text style={{fontFamily:'outfit-medium', marginTop:5}}>{item?.name}</Text>
                </View>
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