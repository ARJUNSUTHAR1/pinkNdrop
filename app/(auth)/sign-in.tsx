import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { icons, images } from "../constants";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  // Handle the submission of the sign-in form
  const onSignInPress = async () => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email, // ✅ use form state
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(root)/(tabs)/home"); // ✅ redirect after login
      } else {
        console.error("Additional steps required:", JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      console.error("Sign in error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="w-full flex-1 relative h-[250px]">
        <Image source={images.newsignup} className="w-full h-[200px]" />
        <Text className="font-JakartaSemiBold text-2xl text-center py-5">
          Welcome to pickNdrop
        </Text>
      </View>

      <View className="flex-1 p-5">
        <InputField
          label="Email"
          placeholder="Enter your email"
          icon={icons.email}
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />

        <InputField
          label="Password"
          placeholder="Enter your password"
          icon={icons.lock}
          value={form.password}
          secureTextEntry={true}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />

        <CustomButton
          onPress={onSignInPress}
          title="Sign In" // ✅ fixed label
          className="mt-6"
        />

        <OAuth />

        <Link href="/sign-up" className="mt-6">
          <Text className="text-center text-lg font-JakartaMedium text-neutral-500">
            Don&apos;t have an account?{" "}
            <Text className="text-primary-500">Sign Up</Text>
          </Text>
        </Link>
      </View>
    </ScrollView>
  );
};

export default SignIn;
