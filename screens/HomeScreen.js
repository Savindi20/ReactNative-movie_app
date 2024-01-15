import { View, Text, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon } from 'react-native-heroicons/outline';

const ios = Platform.OS == 'ios';
export default function HomeScreen() {

  const [trending, setTrending] = useState([1,2,3]);

  return (
    <View className="bg-neutral-800">
      {/* Search Bar and logo */}
      <SafeAreaView className={ios?"-mb-2": 'mb-3'}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text 
            className="text-white text-3xl font-bold">
              <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{paddingBottom: 10}}
          >

            {/* Trending Movies Carousel */}
            <TrendingMovies data={trending} />

          </ScrollView>
    </View>
  )
}