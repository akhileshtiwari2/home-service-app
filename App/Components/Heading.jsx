import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({text,isViewAll=false}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {text}
      </Text>
      {isViewAll&& <Text>View All</Text>}
    </View>
  )
}
const styles = StyleSheet.create({
        heading:{
            fontSize:20,
            fontFamily:'outfit-medium',
            marginBottom:5
    
        },
        container:{
            display:'flex',
            flexDirection:'row',
            alignItem:'center',
            justifyContent:'space-between'

        }
})
