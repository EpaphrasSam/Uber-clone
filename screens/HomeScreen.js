import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-5">
        <Image
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
        />

        <GooglePlacesAutocomplete
          styles={{
            container: {
              backgroundColor: "white",
              paddingTop: 20,
              flex: 0,
            },
            textInput: {
              backgroundColor: "#DDDDDF",
              borderRadius: 0,
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry?.location,
                description: data?.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavOptions />

        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
