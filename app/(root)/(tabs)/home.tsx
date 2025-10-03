import { SignedIn, useUser } from '@clerk/clerk-expo';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

// Avatar Component with proper size hierarchy and depth
const TiltedAvatar = ({ style, imageUrl, size = 'normal', tiltDirection = 'none', depth = 0 }) => {
  const getTiltStyle = () => {
    switch (tiltDirection) {
      case 'left':
        return { 
          transform: [
            { perspective: 1000 },
            { rotateY: '35deg' },
            {translateX: -100},
            {translateY: 5},
            // { rotateZ: '-8deg' },
            // { scale: depth > 0 ? 0.8 : 1 }
          ]
        };
      case 'right':
        return { 
          transform: [
            { perspective: 1000 },
            { rotateY: '-35deg' },
            {translateX: 100},
            {translateY: 5},
            // { rotateZ: '8deg' },
            // { scale: depth > 0 ? 0.8 : 1 }
          ]
        };
      case 'center':
        return { 
          transform: [
            { scale: 1.2 }  // Center avatar is bigger
          ]
        };
      default:
        return {};
    }
  };

  const getAvatarSize = () => {
    switch (size) {
      case 'large':
        return 'w-[120px] h-[120px]';  // 96px - for center
      case 'small':
        return 'w-[120px] h-[120px]';  // 64px - for sides
      default:
        return 'w-[120px] h-[120px]';  // 80px - default
    }
  };

  return (
    <View 
      style={[
        style, 
        getTiltStyle(),
        { zIndex: depth === 0 ? 10 : 5 }  // Center in front
      ]} 
      className="relative"
    >
      {/* Enhanced Glow Effect for center */}
      {/* <View className={`absolute -inset-1 ${size === 'large' ? 'bg-lime-400/40' : 'bg-lime-400/20'} rounded-3xl`} /> */}
      
      {/* Avatar Container with dynamic sizing */}
      <View className={`${getAvatarSize()} bg-white/95 rounded-3xl p-1 shadow-2xl`}>
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-full rounded-3xl"
          resizeMode="cover"
        />
      </View>
    </View>
  );
};


// Swiper Component matching the image design
const SwiperIndicator = () => {
  const [activeIndex, setActiveIndex] = useState(1); // middle is default active

  return (
    <View className="flex-row items-center justify-center mt-32 gap-2">
      {/* Left line */}
      <TouchableOpacity onPress={() => setActiveIndex(0)}>
        <View
          className={`h-3 rounded-2xl ${
            activeIndex === 0 ? "w-1 bg-gray-900" : "w-1 bg-gray-400/40"
          }`}
        />
      </TouchableOpacity>

      {/* Middle line */}
      <TouchableOpacity onPress={() => setActiveIndex(1)}>
        <View
          className={`h-5 w-1 rounded-2xl ${
            activeIndex === 1 ? "w-1 bg-gray-900" : "w-1 bg-gray-400/40"
          }`}
        />
      </TouchableOpacity>

      {/* Right line */}
      <TouchableOpacity onPress={() => setActiveIndex(2)}>
        <View
          className={`h-3 rounded-2xl ${
            activeIndex === 2 ? "w-1 bg-gray-900" : "w-1 bg-gray-400/40"
          }`}
        />
      </TouchableOpacity>
    </View>
  );
};

export default function Home() {
  const { user } = useUser();

  const avatarUrls = [
    'https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    'https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    'https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
  ];

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#7ED321" />
      <SignedIn>
        <LinearGradient
          colors={['#7ED321', '#9FE85D', '#7ED321']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="flex-1"
        >
          {/* Header */}
          <View className="items-center pt-20">
  <Text className="text-xl font-bold text-gray-900">new Life</Text>
</View>

          {/* Main Content */}
          <View className="flex-1 justify-center items-center px-5">
            {/* Tilted Avatars Section */}
            <View className="items-center justify-center mb-5">
              {/* Avatars Container with proper depth and sizing */}
              <View className="w-80 h-40 justify-center items-center relative">
                {/* Left Avatar - Small, behind, tilted with perspective */}
                <TiltedAvatar
                  style={{ position: 'absolute' }}
                  imageUrl={avatarUrls[0]}
                  size="small"
                  tiltDirection="left"
                  depth={1}
                />
                
                {/* Center Avatar - LARGE, front and center */}
                <TiltedAvatar
  style={{
    alignSelf: 'center',
    marginTop: 10,   // instead of absolute + top
    zIndex: 10,
  }}
  imageUrl={avatarUrls[1]}
  size="large"
  tiltDirection="center"
  depth={0}
/>
                
                {/* Right Avatar - Small, behind, tilted with perspective */}
                <TiltedAvatar
                  style={{ position: 'absolute'}}
                  imageUrl={avatarUrls[2]}
                  size="small"
                  tiltDirection="right"
                  depth={1}
                />
              </View>

              {/* Center Star Icon - positioned relative to large avatar */}
              <View className="absolute opacity-90 top-36 w-[100px] h-[100px] z-20" style={{ alignSelf: 'center' }}>
                <View className="w-[100px] h-[100px] bg-gray-900 rounded-3xl justify-center items-center shadow-xl border-2 border-white/20">
                  <Text className="text-lime-400 text-5xl font-bold">✦</Text>
                </View>
              </View>

              {/* Swiper Indicator matching image style */}
              <SwiperIndicator />
            </View>

            {/* Text Content */}
            <View className="items-center mb-16">
              <Text className="text-3xl font-bold text-gray-900 text-center leading-10 mb-4">
                Start your new{'\n'}Social Jrny
              </Text>
              <Text className="text-base text-gray-700/80 text-center leading-6">
                Post, react, and start conversations{'\n'}that bring good vibes only.
              </Text>
            </View>

            {/* Buttons */}
            <View className="w-full items-center">
              <TouchableOpacity 
                className="bg-gray-900 py-4 px-10 rounded-3xl w-4/5 items-center mb-4 shadow-lg"
                activeOpacity={0.8}
              >
                <Text className="text-white text-base font-semibold">
                  Get Started
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                className=" py-4 px-10 rounded-3xl w-4/5 items-center border border-gray-900"
               
              >
                <Text className="text-gray-900">
                  Add an existing account
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        </LinearGradient>
      </SignedIn>
    </>
  );
}
