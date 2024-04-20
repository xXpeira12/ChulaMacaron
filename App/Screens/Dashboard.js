import {
  View,
  Text,
  Dimensions,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Macaron from "../../assets/img/logo.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const screenWidth = Dimensions.get("window").width;

const { height } = Dimensions.get("window");

export default function Home({ navigation }) {
  const [waitingProblem, setWaitingProblem] = React.useState(null);
  const [inProgressProblem, setInProgressProblem] = React.useState(null);
  const [doneProblem, setDoneProblem] = React.useState(null);

  const [countWaitingProblem, setCountWaitingProblem] = React.useState(0);
  const [countInProgressProblem, setCountInProgressProblem] = React.useState(0);
  const [countDoneProblem, setCountDoneProblem] = React.useState(0);
  const [countAllProblem, setCountAllProblem] = React.useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // Get waiting problem from async storage
  useEffect(() => {
    const getWaitingProblem = async () => {
      try {
        const value = await AsyncStorage.getItem("waitingProblem");
        if (value !== null) {
          setWaitingProblem(value);
        }
      } catch (e) {
        // error reading value
        console.log("Error reading waitingProblem", e);
      }
    };

    const findCountWaitingProblem = async () => {
      await getWaitingProblem();
      if (waitingProblem) {
        const waitingProblemArray = JSON.parse(waitingProblem);
        setCountWaitingProblem(waitingProblemArray.length);
      }
    };

    findCountWaitingProblem();
  });
  // console.log(waitingProblem);
  // console.log(countWaitingProblem);

  useEffect(() => {
    setCountAllProblem(
      countWaitingProblem + countInProgressProblem + countDoneProblem
    );
  }, [countWaitingProblem, countInProgressProblem, countDoneProblem]);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ backgroundColor: "white", padding: 50 }}>
        <View style={{ flexDirection: screenWidth > 769 ? "row" : "column" }}>
          <View style={{ width: screenWidth > 769 ? "100%" : "100%" }}>
            <View style={{ paddingVertical: 20 }}>
              <Text
                style={{ fontWeight: "bold", color: "#E26199", fontSize: 25 }}
              >
                รายงานทั้งหมด
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  backgroundColor: "white",
                  borderColor: "#E26199",
                  width: "47.5%",
                  height: 40,
                  borderWidth: 2,
                  borderRadius: 9,
                  paddingRight: "5%",
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  backgroundColor: "white",
                  borderColor: "#E26199",
                  width: "47.5%",
                  height: 40,
                  borderWidth: 2,
                  borderRadius: 9,
                }}
              ></TouchableOpacity>
            </View>
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
            ></View>
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
        </View>

        <Image
          source={Macaron}
          style={{ width: "100%", resizeMode: "center" }}
        ></Image>
      </View>
    </ScrollView>
  );
}
