import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";

const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "Map",
  },
  {
    id: "2",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "Eat",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 mr-0 w-40"
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View className={`${!origin && "opacity-20"}`}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <Icon
              style={{
                backgroundColor: "black",
                padding: 8,
                borderRadius: 50,
                width: 40,
                marginTop: 16,
              }}
              type="antdesign"
              name="arrowright"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
