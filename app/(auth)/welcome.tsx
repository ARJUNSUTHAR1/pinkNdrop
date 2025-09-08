import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { onboarding } from '../constants';

const OnBoarding = () => {

    const swiperRef = useRef<Swiper>(null)
    const [activeIndex,setActiveIndex] = useState(0)
    const isLastSlide = activeIndex === onboarding.length - 1
    return (
        <SafeAreaView className="flex items-center justify-between h-full bg-white text-red-600">
            <TouchableOpacity 
            onPress={()=> router.replace('/(auth)/sign-up')}
            className="w-full flex justify-end items-end p-5">
                <Text className="text-md text-black font-JakartaBold">Skip</Text>
            </TouchableOpacity>
            <Swiper
             ref={swiperRef}
            loop={false}
            dot={<View className="w-[32px] h-[4px] bg-[#E2E8F0] mx-1 rounded-full" />}
            activeDot={<View className="w-[32px] h-[4px] bg-[#0286FF] mx-1 rounded-full" />}
            onIndexChanged={(index)=>{
                setActiveIndex(index)
            }}
            >
            {onboarding.map((slide)=>(
                <View key={slide.id} className="flex items-center justify-center">
                    <Image
                    source={slide.image}
                    resizeMode="cover"
                    className="w-full h-[300px]"
                    />
                    <View className='flex flex-row justify-center items-center w-full mt-10 px-5'>
                    <Text className='text-3xl font-bold mx-10 text-center text-black'>{slide.title}</Text>
                    </View>
                    
                    <Text className=' px-5 text-lg font-JakartaSemiBold text-center mt-3 text-[#858585]'>{slide.description}</Text>
                    
                </View>
            ))}
            </Swiper>
            <CustomButton
            onPress={()=>(isLastSlide ? router.replace('/(auth)/sign-up') : swiperRef?.current?.scrollBy(1)) }
            title={isLastSlide ? "Get Started" : "Next"}
            className="w-11/12 mt-10"
            />

        </SafeAreaView>
    )
}

export default OnBoarding;