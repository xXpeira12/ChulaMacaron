import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { Callout } from "react-native-maps";

const screenWidth = Dimensions.get("window").width;

const CustomCallout = ({ marker }) => {
  return (
    <Callout tooltip>
      <View>
        <View style={styles.container}>
          <Image
            source={marker.image}
            resizeMode="cover"
            style={{ width: 100, height: "100%" }}
          ></Image>
          <View style={{ paddingHorizontal: 16, paddingVertical: 8, flex: 1 }}>
            <Text>
              {marker.status}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
              }}>
              {marker.rootProblem}
            </Text>
            <Text>
              {marker.detailProblem}
            </Text>
          </View>
        </View>
      </View>
    </Callout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: screenWidth * 0.8,
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 12,
    overflow: "hidden",
  },
  triangle: {
    left: (screenWidth * 0.8) / 2 - 10,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 20,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderLeftWidth: 10,
    borderTopColor: "black",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
  },
});

export default CustomCallout;