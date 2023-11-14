import { View, Text } from 'react-native'
import React from 'react'

const FourDot = () => {
    return (
        <View style={{ backgroundColor: 'powderblue', height: 80, width: 80, borderRadius: 10, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <View style={{ flexDirection: 'row', borderColor: 'blue', width: "60%", justifyContent: 'space-between' }}>
                <View style={{ height: 15, width: 15, borderRadius: 7.5, backgroundColor: 'black', }}></View>
                <View style={{ height: 15, width: 15, borderRadius: 7.5, backgroundColor: 'black', }}></View>
            </View>
            <View style={{ flexDirection: 'row', borderColor: 'blue', width: "60%", justifyContent: 'space-between' }}>
                <View style={{ height: 15, width: 15, borderRadius: 7.5, backgroundColor: 'black', }}></View>
                <View style={{ height: 15, width: 15, borderRadius: 7.5, backgroundColor: 'black', }}></View>
            </View>
        </View>
    )
}

export default FourDot