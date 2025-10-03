import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";


const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View className="w-12 h-12 items-center justify-center">
    <View
      className={`rounded-full w-12 h-12 items-center justify-center ${
        focused ? "bg-general-400" : ""
      }`}
    >
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        className="w-7 h-7"
      />
    </View>
  </View>
);

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom: 20,
          height: 78,
          display: "none",
          justifyContent: "center", // Changed from space-between
          alignItems: "center",
          position: "absolute",
          flexDirection: "row",
          
          paddingBottom: 30, // Add padding for better spacing
        },
        tabBarItemStyle: {
          // Add this for individual tab centering
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {/* <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "Rides",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.list} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.chat} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.profile} focused={focused} />
          ),
        }}
      /> */}
    </Tabs>
  );
}