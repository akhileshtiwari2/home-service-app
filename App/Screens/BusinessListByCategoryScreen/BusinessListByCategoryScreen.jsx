import { View, Text,TouchableOpacity,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import {useRoute,useNavigation} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import GlobalApi from '../Utils/GlobalApi.js'
import BusinessListItem from "./BusinessListItem";
import Colors from "../Utils/Colors.js";
export default function BusinessListByCategoryScreen() {
    const param = useRoute().params;
    const navigation=useNavigation()

    const [businessList,setBusinessList] = useState([]);
    useEffect(()=>{
        param&&getBusinessByCategory()
    },[param])
     
    // Business List By Category
    const getBusinessByCategory=()=>{
        GlobalApi.getBusinessListByCategory(param.category).then(resp=>{
            setBusinessList(resp.businessLists);
        })
    }

  return (
    <View style={{padding:10,paddingTop:20}}>
        <TouchableOpacity style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}
        onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={30} color="black" />
         <Text style={{fontSize:25,fontFamily:'outfit-medium'}}>{param?.category}</Text>
        </TouchableOpacity>
        {businessList?.length>0?
        <FlatList
        data={businessList}
        style={{marginTop:15}}
        renderItem={({item,index})=>(
            <BusinessListItem business={item}/>
        )}
        
        />: <Text style={{fontFamily:'outfit-medium',
        color:Colors.GRAY,
        fontSize:20,
        textAlign:'center',
        marginTop:'20%'}}>No Business Found</Text>}
      
    </View>
  )
}