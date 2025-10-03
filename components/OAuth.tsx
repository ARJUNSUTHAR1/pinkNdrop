import { icons } from "@/app/constants";
import { Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";
const OAuth = ()=>{
    const handleGoogleSignIn = ()=>{
        
    }
    return(
        <View>
            <View className=" flex flex-row items-center justify-center mt-4 gap-x-3">
            <View className='flex-1 h-[1px] bg-general-100'/>
            <Text className='text-lg'>Or</Text>
            <View className='flex-1 h-[1px] bg-general-100'/>
            </View>

            <CustomButton
            title="Sign In with Google"
            className="mt-3 w-full shadow-none"
            bgVariant="outline"
            textVariant="primary"
            IconLeft={()=>{
                return (
                    <Image source={icons.google} resizeMode="contain" className="w-6 h-6 mx-2"/>
                )}}
            onPress={()=>{handleGoogleSignIn}}
            />


        </View>
    )
}

export default OAuth;