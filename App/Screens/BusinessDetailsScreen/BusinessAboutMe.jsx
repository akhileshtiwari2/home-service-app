import { View, Text, TouchableOpacity } from 'react-native'
import Colors from '../Utils/Colors.js'
import Heading from '../../Components/Heading'
import React,{useState} from 'react'

export default function BusinessAboutMe({business}) {
    const [isReadMore,setIsReadMore]=useState(false);
  return (
     <View>
     <Heading text={'About Me'}/>
     <Text style={{fontFamily:'outfit',color:Colors.GRAY,fontSize:16,lineHeight:20}} numberOfLines={isReadMore?20:5}>{business.about}</Text>
     <TouchableOpacity onPress={()=>setIsReadMore(!isReadMore)}>
     <Text style={{color:Colors.PRIMERY, fontSize:16,fontFamily:'outfit'}}>{isReadMore?'Read Less':'Read More'}</Text>
     </TouchableOpacity>
     <View style={{borderWidth:0.4,borderColor:Colors.GRAY,marginTop:10,marginBottom:20}}></View>
   </View>
   
  )
}