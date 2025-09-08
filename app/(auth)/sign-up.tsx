import { Image, ScrollView, Text, View } from "react-native";
import { images } from "../constants";
const SignUp = () => {
    return (
        <ScrollView className="flex-1 bg-white">
            <View className="w-full flex-1 relative h-[250px]">
                <Image 
                source={images.newsignup}
                className="w-full h-[250px]"
                />
                <Text className="absolute bottom-5 left-5 font-JakartaSemiBold text-2xl bg-gradient-to-t from-black to-transparent">Create Your Account</Text>
            </View>

            <View className="flex-1 p-5">
                <InputField />
            </View>
        </ScrollView>
    )
}

export default SignUp;