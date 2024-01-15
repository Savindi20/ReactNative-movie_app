import { View, Text } from 'react-native'
import React from 'react'

export default function MovieList({title, hideSeeAll, data}) {
  const navigation = useNavigation();
  return (
    <View className="mb-8 space-y-4">
      
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-lg">{title}</Text>
        {
          !hideSeeAll && (
            <TouchableOpacity>
              <Text style={styles.text} className="text-lg">See All</Text>
            </TouchableOpacity>
          )
        }
        
        
      </View>
    </View>
  )
}