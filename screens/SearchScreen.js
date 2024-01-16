import { View, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const {width, height} =  Dimensions.get('window');


export default function SearchScreen() {
  return (
    <SafeAreaView className="bg-neutral-800 flex-1">

        {/* search input */}
        <View 
            className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full" >
        </View>
    </SafeAreaView>
  )
}