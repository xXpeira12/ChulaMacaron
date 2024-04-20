import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import Macaron from "../../assets/img/logo.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

const screenWidth = Dimensions.get("window").width;

const { height } = Dimensions.get("window");

export default function Home({ navigation }) {
  const [allProblem, setAllProblem] = React.useState(null);

  const [countWaitingProblem, setCountWaitingProblem] = React.useState(0);
  const [countInProgressProblem, setCountInProgressProblem] = React.useState(0);
  const [countDoneProblem, setCountDoneProblem] = React.useState(0);
  const [countAllProblem, setCountAllProblem] = React.useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const [initialRegion, setInitialRegion] = useState(null);

  // Get waiting problem from async storage
  useEffect(() => {
    const getAllProblem = async () => {
      try {
        const value = await AsyncStorage.getItem("allProblem");
        if (value !== null) {
          setAllProblem(value);
        }
      } catch (e) {
        // error reading value
        console.log("Error reading allProblem", e);
      }
    };

    const findCountAllProblem = async () => {
      await getAllProblem();
      if (allProblem) {
        const allProblemArray = JSON.parse(allProblem);
        setCountAllProblem(allProblemArray.length);
        let countWaiting = 0;
        let countInProgress = 0;
        let countDone = 0;
        allProblemArray.forEach((problem) => {
          if (problem.status === "waiting") {
            countWaiting++;
          } else if (problem.status === "inProgress") {
            countInProgress++;
          } else if (problem.status === "done") {
            countDone++;
          }
        });
        setCountWaitingProblem(countWaiting);
        setCountInProgressProblem(countInProgress);
        setCountDoneProblem(countDone);
      }
    };
    findCountAllProblem();
  }, [allProblem]);
  // console.log(allProblem);
  // console.log(countAllProblem);

  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          setLocationError("Location permission denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});

        setInitialRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });
      } catch (error) {
        console.error("Error requesting location permission:", error);
      }
    };

    getLocation();
  }, []);

  const handleRegionChange = (region) => {
    const { latitude, longitude } = region;
    const newCoordinate = {
      latitude,
      longitude,
    };
    setInitialRegion(newCoordinate);
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ backgroundColor: "white", padding: 50 }}>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            fontWeight: "bold",
            paddingTop: 15,
            color: "#E26199",
          }}
        >
          CHULA MACARON
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            fontWeight: "bold",
            color: "#E26199",
          }}
        >
          make Nisit's life better
        </Text>

        <View style={{ flexDirection: screenWidth > 769 ? "row" : "column" }}>
          <View style={{ width: screenWidth > 769 ? "50%" : "100%" }}>
            <Text style={{ paddingTop: 20, color: "#E26199" }}>
              You can report any problems around Chulalongkorn University.
            </Text>

            <View style={{ paddingTop: 20 }}>
              <Text
                style={{ fontWeight: "bold", color: "#E26199", fontSize: 25 }}
              >
                แพลตฟอร์ม
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#E26199",
                  fontSize: 25,
                  paddingBottom: 10,
                }}
              >
                แจ้งและจัดการปัญหาในจุฬา
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {}}
              style={{
                backgroundColor: "#E26199",
                padding: 20,
                alignItems: "center",
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                width: screenWidth > 769 ? "40%" : "100%",
              }}
            >
              <Text style={{ color: "white" }}>
                แจ้งปัญหาได้ที่นี่ (Click Here)
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: screenWidth > 769 ? "column" : "column",
              paddingTop: 20,
              width: screenWidth > 769 ? "50%" : "100%",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                color: "#E26199",
                paddingBottom: 20,
              }}
            >
              OverView
            </Text>

            <View
              style={{
                width: "100%",
                height: Dimensions.get("screen").height * 0.23,
                borderRadius: 20,
                flexDirection: "row",
                backgroundColor: "#E26199",
              }}
            >
              <MapView
                style={{
                  width: "100%",
                  height: Dimensions.get("screen").height * 0.23,
                  borderRadius: 10,
                }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                showsMyLocationButton={true}
                initialRegion={initialRegion}
                onRegionChange={handleRegionChange}
              ></MapView>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 30 }}>
          <View
            style={{
              height: 100,
              width: "100%",
              borderRadius: 10,
              backgroundColor: "#FF8C8C",
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  color: "white",
                  padding: 15,
                  paddingBottom: 10,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                รอรับเรื่อง
              </Text>
              <Text
                style={{
                  color: "white",
                  paddingLeft: 15,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {countWaitingProblem}(
                {(countWaitingProblem / countAllProblem) * 100}%)
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "black",
                height: 80,
                width: 80,
                marginHorizontal: 15,
                marginVertical: 10,
                borderRadius: 9,
              }}
            ></View>
          </View>

          <View
            style={{
              height: 100,
              width: "100%",
              borderRadius: 10,
              backgroundColor: "#FFDAAF",
              marginTop: 20,
              paddingBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  color: "white",
                  padding: 15,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                ดำเนินการ
              </Text>
              <Text
                style={{
                  color: "white",
                  paddingLeft: 15,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {countInProgressProblem}(
                {(countInProgressProblem / countAllProblem) * 100}%)
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "black",
                height: 80,
                width: 80,
                marginHorizontal: 15,
                marginVertical: 10,
                borderRadius: 9,
              }}
            ></View>
          </View>

          <View
            style={{
              height: 100,
              width: "100%",
              borderRadius: 10,
              backgroundColor: "#A1E0A7",
              marginTop: 20,
              paddingBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  color: "white",
                  padding: 15,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                เสร็จสิ้น
              </Text>
              <Text
                style={{
                  color: "white",
                  paddingLeft: 15,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {countDoneProblem}({(countDoneProblem / countAllProblem) * 100}
                %)
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "black",
                height: 80,
                width: 80,
                marginHorizontal: 15,
                marginVertical: 10,
                borderRadius: 9,
              }}
            ></View>
          </View>
        </View>

        <View style={{ paddingTop: 30 }}>
          <Text style={{ fontWeight: "bold", fontSize: 25, color: "#E26199" }}>
            KIND OF REPORT ISSUES WE ACCEPT
          </Text>
          <View style={{ paddingTop: 15, flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#E26199",
                  paddingTop: 10,
                }}
              >
                ถนน
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#E26199",
                  paddingTop: 10,
                }}
              >
                ความสะอาด
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#E26199",
                  paddingTop: 10,
                }}
              >
                การจราจร
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#E26199",
                  paddingTop: 10,
                }}
              >
                ไฟฟ้า
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#E26199",
                  paddingTop: 10,
                }}
              >
                น้ำท่วม
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#E26199",
                  paddingTop: 10,
                }}
              >
                ต้นไม้
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#E26199",
                  paddingTop: 10,
                }}
              >
                ทางเท้า
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#E26199",
                  paddingTop: 10,
                }}
              >
                เสียงรบกวน
              </Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#E26199",
                  paddingTop: 10,
                }}
              >
                อุปกรณ์เสียหาย
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#E26199",
                  paddingTop: 10,
                }}
              >
                อาคารชำรุด
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#E26199",
                  paddingTop: 10,
                }}
              >
                สายสื่อสาร
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#E26199",
                  paddingTop: 10,
                }}
              >
                ฝาท่อระบายน้ำ
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#E26199",
                  paddingTop: 10,
                }}
              >
                กลิ่นควัน
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#E26199",
                  paddingTop: 10,
                }}
              >
                สัตว์
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#E26199",
                  paddingTop: 10,
                }}
              >
                น้ำประปา
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#E26199",
                  paddingTop: 10,
                }}
              >
                อื่นๆ
              </Text>
            </View>
          </View>
          <Image
            source={Macaron}
            style={{ width: "100%", resizeMode: "center" }}
          ></Image>
        </View>
      </View>
    </ScrollView>
  );
}
