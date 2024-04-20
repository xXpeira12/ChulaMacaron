import {
  View,
  Text,
  Dimensions,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Macaron from "../../assets/img/logo.png";
import Detail from "./Detail";
import { useNavigation } from "@react-navigation/native";
import Picker from "react-native-picker-select";
import AsyncStorage from "@react-native-async-storage/async-storage";

const screenWidth = Dimensions.get("window").width;

const { height } = Dimensions.get("window");

// Mock data repository
const mockData = [
  {
    Faculty: "คณะเภสัชศาสตร์",
    detail: "I’m",
    detailProblem: "เสียงรบกวนจากอุปกรณ์ชำรุด",
    image: require("../../assets/img/peko.jpg"),
    location: {
      latitude: 37.78583393333568,
      longitude: -122.40641713142395,
    },
    rootProblem: "เสียงรบกวน",
    status: "waiting",
  },
  {
    Faculty: "คณะวิศวกรรมศาสตร์",
    detail: "I’m",
    detailProblem: "ไฟดับ",
    image: require("../../assets/img/peko.jpg"),
    location: {
      latitude: 37.78583393333568,
      longitude: -122.40641713142395,
    },
    rootProblem: "ไฟฟ้า",
    status: "waiting",
  },
  {
    Faculty: "คณะวิศวกรรมศาสตร์",
    detail: "I’m",
    detailProblem: "เสียงรบกวนจากอุปกรณ์ชำรุด",
    image: require("../../assets/img/peko.jpg"),
    location: {
      latitude: 37.78583393333568,
      longitude: -122.40641713142395,
    },
    rootProblem: "เสียงรบกวน",
    status: "done",
  },
  {
    Faculty: "คณะนิติศาสตร์",
    detail: "I’m",
    detailProblem: "ไฟกระพริบ",
    image: require("../../assets/img/peko.jpg"),
    location: {
      latitude: 37.78583393333568,
      longitude: -122.40641713142395,
    },
    rootProblem: "ไฟฟ้า",
    status: "inProgress",
  },
  {
    Faculty: "คณะสถาปัตยกรรมศาสตร์",
    detail: "I’m",
    detailProblem: "ถนนลื่น",
    image: require("../../assets/img/peko.jpg"),
    location: {
      latitude: 37.78583393333568,
      longitude: -122.40641713142395,
    },
    rootProblem: "ถนน",
    status: "done",
  },
  {
    Faculty: "คณะนิเทศศาสตร์",
    detail: "I’m",
    detailProblem: "กิ่งไม้บดบังทัศนวิสัย",
    image: require("../../assets/img/peko.jpg"),
    location: {
      latitude: 37.78583393333568,
      longitude: -122.40641713142395,
    },
    rootProblem: "ต้นไม้",
    status: "inProgress",
  },
];

const faculties = [
  { label: "คณะครุศาสตร์", value: "คณะครุศาสตร์" },
  { label: "คณะจิตวิทยา", value: "คณะจิตวิทยา" },
  { label: "คณะทันตแพทยศาสตร์", value: "คณะทันตแพทยศาสตร์" },
  { label: "คณะนิติศาสตร์", value: "คณะนิติศาสตร์" },
  { label: "คณะนิเทศศาสตร์", value: "คณะนิเทศศาสตร์" },
  { label: "คณะพยาบาลศาสตร์", value: "คณะพยาบาลศาสตร์" },
  { label: "คณะพาณิชยศาสตร์และการบัญชี", value: "คณะพาณิชยศาสตร์และการบัญชี" },
  { label: "คณะแพทยศาสตร์", value: "คณะแพทยศาสตร์" },
  { label: "คณะเภสัชศาสตร์", value: "คณะเภสัชศาสตร์" },
  { label: "คณะรัฐศาสตร์", value: "คณะรัฐศาสตร์" },
  { label: "คณะวิทยาศาสตร์", value: "คณะวิทยาศาสตร์" },
  { label: "คณะวิทยาศาสตร์การกีฬา", value: "คณะวิทยาศาสตร์การกีฬา" },
  { label: "คณะวิศวกรรมศาสตร์", value: "คณะวิศวกรรมศาสตร์" },
  { label: "คณะศิลปกรรมศาสตร์", value: "คณะศิลปกรรมศาสตร์" },
  { label: "คณะเศรษฐศาสตร์", value: "คณะเศรษฐศาสตร์" },
  { label: "คณะสถาปัตยกรรมศาสตร์", value: "คณะสถาปัตยกรรมศาสตร์" },
  { label: "คณะสหเวชศาสตร์", value: "คณะสหเวชศาสตร์" },
  { label: "คณะสัตวแพทยศาสตร์", value: "คณะสัตวแพทยศาสตร์" },
  { label: "คณะอักษรศาสตร์", value: "คณะอักษรศาสตร์" },
  { label: "อื่น ๆ", value: "อื่น ๆ" },
];

const currentStatus = [
  { label: "รอรับเรื่อง", value: "waiting" },
  { label: "กำลังดำเนินการ", value: "inProgress" },
  { label: "เสร็จสิ้น", value: "done" },
];

const placeholderFaculty = {
  label: "เลือกตามคณะ",
  value: null,
};

const placeholderStatus = {
  label: "เลือกตามสถานะ",
  value: null,
};

const statusColors = {
  waiting: "#FF8C8C",
  inProgress: "#FFDAAF",
  done: "#A1E0A7",
};

const StatusWithColor = ({ status }) => {
  // Look up the color for the status
  const color = statusColors[status] || "gray";
  return color;
};

export default function Dashboard({ navigation }) {
  const [reportArray, setReportArray] = useState([]);
  // useEffect(() => {
  //   const getAllProblem = async () => {
  //     try {
  //       const existingReport = await AsyncStorage.getItem("allProblem");
  //       if(existingReport) {
  //         setReportArray(JSON.parse(existingReport));
  //       }
  //     } catch(error) {
  //       console.log("Error storing array:", error);
  //     }
  //   };
  //   getAllProblem();
  // }, []);

  useEffect(() => {
    const intervalID = setInterval(() => {
      const getAllProblem = async () => {
        try {
          const existingReport = await AsyncStorage.getItem("allProblem");
          if (existingReport) {
            setReportArray(JSON.parse(existingReport));
          }
        } catch (error) {
          console.log("Error storing array:", error);
        }
      };
      getAllProblem();
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const [selectFaculty, setSelectFaculty] = useState(null);
  const [selectCurrentStatus, setCurrentStatus] = useState(null);
  const filteredElements = reportArray.filter(
    (element) =>
      (!selectFaculty || element.Faculty === selectFaculty) &&
      (!selectCurrentStatus || element.status === selectCurrentStatus)
  );

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ backgroundColor: "white", padding: 50 }}>
        <View style={{ flexDirection: screenWidth > 769 ? "row" : "column" }}>
          <View style={{ width: screenWidth > 769 ? "100%" : "100%" }}>
            <View style={{ paddingVertical: 20 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#E26199",
                  fontSize: 30,
                  fontFamily: "chulaBold",
                }}
              >
                รายงานทั้งหมด:
              </Text>
            </View>

            {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> */}

            <View
              style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: "#E26199",
                margin: 5,
                padding: 10,
              }}
            >
              <Picker
                placeholder={placeholderFaculty}
                items={faculties}
                onValueChange={(selectFaculty) => {
                  setSelectFaculty(selectFaculty);
                }}
                value={selectFaculty}
              />
            </View>

            <View
              style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: "#E26199",
                margin: 5,
                padding: 10,
              }}
            >
              <Picker
                placeholder={placeholderStatus}
                items={currentStatus}
                onValueChange={(selectCurrentStatus) => {
                  setCurrentStatus(selectCurrentStatus);
                }}
                value={selectCurrentStatus}
              />
            </View>

            {/* </View> */}

            {filteredElements.map((item, index) => (
              <View style={{ paddingTop: 20 }}>
                <View
                  key={index}
                  style={{
                    borderColor: "#E26199",
                    borderWidth: 2,
                    borderRadius: 10,
                  }}
                >
                  <View style={{ padding: 10, flexDirection: "row" }}>
                    <View>
                      <Image
                        source={item.image}
                        style={{ width: 150, height: 150, borderRadius: 8.6 }}
                      />
                    </View>

                    <View
                      style={{
                        paddingLeft: 15,
                        flex: 1,
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ width: "80%" }}>
                          <Text
                            style={{
                              fontWeight: "bold",
                              fontSize: 20,
                              color: "#E26199",
                              fontFamily: "chulaBold",
                            }}
                          >
                            {item.rootProblem}
                          </Text>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: "bold",
                              color: "#E26199",
                              fontFamily: "chulaBold",
                            }}
                          >
                            {item.detailProblem}
                          </Text>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: "bold",
                              color: "#E26199",
                              paddingTop: 10,
                              fontFamily: "chulaReg",
                            }}
                          >
                            {item.Faculty}
                          </Text>
                        </View>

                        <View>
                          <View
                            style={{
                              backgroundColor: StatusWithColor({
                                status: item.status,
                              }),
                              padding: 5,
                              borderRadius: 15,
                              width: 30,
                              height: 30,
                            }}
                          ></View>
                        </View>

                        {/* // status color */}
                        {/* <Text style={{fontSize: 16}}>{item.status}</Text> */}
                      </View>
                      <Text style={{ fontSize: 16 }}>{item.faculty}</Text>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("Detail", { item: item })
                        }
                        style={{
                          backgroundColor: "#E26199",
                          width: "100%",
                          height: 40,
                          borderRadius: 9,
                          paddingRight: "5%",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "white",
                            fontFamily: "chulaBold",
                            fontSize: 15,
                          }}
                        >
                          See Detail
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}

            {/* <View style={{ paddingTop:10}}>
    {mockData.map((item, index) => (
      <View style={{paddingTop:20}}>
  <View key={index} style={{ borderColor:"#E26199" , borderWidth:2 , borderRadius:10 }}>
  <View style={{padding:10, flexDirection:'row'}}>

    <View>
      <Image source={item.picture} style={{width: 150, height: 150, borderRadius:8.6}} />
    </View>

    <View style={{paddingLeft:15, flex: 1, justifyContent: 'space-between'}}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.prob}</Text>
        <Text style={{fontSize: 20 , fontWeight:'bold'}}>{item.detail}</Text>
        <Text style={{fontSize: 16}}>{item.faculty}</Text>
        <Text style={{fontSize: 16}}>{item.status}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })}  style={{backgroundColor:'#E26199', width:'100%', height:40,  borderRadius:9 , paddingRight:'5%', alignItems:'center', justifyContent:'center'}}>
  <Text style={{textAlign:'center',fontWeight:'bold' , color:'white'}}>See Detail</Text>
</TouchableOpacity>
    </View>

  </View>
</View>
</View>
))}
    </View> */}
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
