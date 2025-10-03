import { Redirect } from "expo-router";
import { useState } from "react";
import '../global.css';

const Home = () => {
    const [activeCategory, setActiveCategory] = useState("Breakfast");
    return (
        <Redirect href="/(auth)/welcome" />
//         <View className="flex-1 relative ">
//             <Image blurRadius={10} source={require("../assets/images/get-started.png")} className="absolute w-full h-full"/>
//             <SafeAreaView className="flex-1 mt-12">
//                 <View className="flex-row items-center justify-between mx-4">
//                     <View className="bg-white p-2 rounded-2xl shadow-md">
//                         <Bars3CenterLeftIcon size="25" color="black" stroke={100}/>
//                     </View>
//                     <View style={{backgroundColor: 'rgba(255, 255, 255, 0.5)',padding: 3,borderRadius: 10}} >
//                         <Image source={require("../assets/images/icon.png")} className="w-12 h-12 rounded-xl" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}/>
//                     </View>
//                 </View>
//                 <View className="my-12 space-y-5">
//                     <Text className=" mx-4 text-slate-900 text-5xl font-medium">Fast and</Text>
//                     <Text className="mx-4 text-5xl text-slate-900 font-medium">
//                     <Text className="text-5xl font-bold">Delicious</Text> Food

//                     </Text>
                   
//                 </View>

//                 <View className="mx-4 flex-row items-center justify-between gap-3">
//                     <View className="flex-1 items-center flex-row bg-white px-4 py-1 rounded-2xl shadow-md">
//                     <MagnifyingGlassIcon size="25" color="black" stroke={40}/>
//                     <TextInput placeholder="Food" value="Search" className="ml-2 text-gray-600 "/>
//                     </View>
//                     <View className="bg-white p-4 rounded-2xl shadow-md">
//                         <AdjustmentsHorizontalIcon size="25" color="black" stroke={40}/>
//                     </View>
//                 </View>

//                 <ScrollView
//                 className="my-6 max-h-10"
//                 showsHorizontalScrollIndicator={false}
//                 horizontal
//                 contentContainerStyle={{
//                     paddingHorizontal: 20,
//                 }}
//                 >
//                  {categories.map((category) => {
//                     let isActive = category === activeCategory;
//                     let activeStyle = isActive ? "font-bold" : "";

//                    return <TouchableOpacity
//                     onPress={()=>setActiveCategory(category)}
//                     key={category} className="flex items-center justify-center px-4 rounded-2xl shadow-md mr-4">
//                         <Text className={`text-white text-base tracking-widest ${activeStyle}`}>{category}</Text>
//                         {isActive && <View className="w-7 h-2 bg-white rounded-2xl" />}
//                     </TouchableOpacity>
// })}
//                 </ScrollView>
//             </SafeAreaView>
//         </View>
    )
}

export default Home;