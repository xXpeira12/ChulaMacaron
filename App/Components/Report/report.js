import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, Button, Dimensions } from 'react-native';
import Picker from 'react-native-picker-select';
import { launchImageLibrary } from 'react-native-image-picker';
// import DateComponent from './Date';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function report() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedList, setSelectedList] = useState(null);
  const [selectedListItem, setSelectedListItem] = useState(null);
  const [inputText, setInputText] = useState("");
  const [selectFaculty, setSelectFaculty] = useState(null);
  const [image, setImage] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const [bgColor, setBgColor] = useState('#E26199');

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

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleRegionChange = (region) => {
    const { latitude, longitude } = region;
    const newCoordinate = {
      latitude,
      longitude,
    };
    setInitialRegion(newCoordinate);
  };

  const placeholder = {
    label: "Select an option...",
    value: null,
  };

  const faculties = [
    { label: "คณะครุศาสตร์", value: "คณะครุศาสตร์" },
    { label: "คณะจิตวิทยา", value: "คณะจิตวิทยา" },
    { label: "คณะทันตแพทยศาสตร์", value: "คณะทันตแพทยศาสตร์" },
    { label: "คณะนิติศาสตร์", value: "คณะนิติศาสตร์" },
    { label: "คณะนิเทศศาสตร์", value: "คณะนิเทศศาสตร์" },
    { label: "คณะพยาบาลศาสตร์", value: "คณะพยาบาลศาสตร์" },
    {
      label: "คณะพาณิชยศาสตร์และการบัญชี",
      value: "คณะพาณิชยศาสตร์และการบัญชี",
    },
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

  const options = [
    { label: 'ถนน', value: 'ถนน', list: ['ถนนไม่เรียบ', 'ถนนลื่น', 'ถนนทรุดตัว', 'เส้นแบ่งช่องทางจราจรไม่ชัด', 'สีทางม้าลายไม่ชัด'] },
    { label: 'ความสะอาด', value: 'ความสะอาด', list: ['พื้นเปียก', 'ไม่มีกระดาษทิชชู่', 'สถานที่สกปรก', 'ขยะรอบอาคาร'] },
    { label: 'การจราจร', value: 'การจราจร', list: ['มีสิ่งกีดขวางทางจราจร', 'ไฟจราจรชำรุด'] },
    { label: 'ไฟฟ้า', value: 'ไฟฟ้า', list: ['ไฟดับ', 'ไฟกระพริบ', 'ไฟตก', 'ไฟรั่ว'] },
    { label: 'น้ำท่วม', value: 'น้ำท่วม', list: ['ถนนท่วมน้ำ', 'บริเวณรอบ ๆ ถนนท่วมน้ำ'] },
    { label: 'ต้นไม้', value: 'ต้นไม้', list: ['ต้นไม้ตาย', 'กิ่งไม้หัก', 'กิ่งไม้บดบังทัศนวิสัย', 'กิ่งไม้พันสายไฟ', 'ต้นไม้กีดกั้นทางเดิน'] },
    { label: 'ทางเท้า', value: 'ทางเท้า', list: ['ทางเท้าเสื่อมโทรม', 'มีสิ่งกีดขวางบนทางเท้า'] },
    { label: 'เสียงรบกวน', value: 'เสียงรบกวน', list: ['เสียงรบกวนจากการจราจร', 'เสียงรบกวนจากอุปกรณ์ชำรุด', 'เสียงรบกวนจากกิจกรรมโดยรอบ'] },
    { label: 'อุปกรณ์ชำรุด', value: 'อุปกรณ์ชำรุด', list: ['โพรเจกเตอร์ชำรุด', 'โทรทัศน์ชำรุด', 'เครื่องปรับอากาศชำรุด', 'รีโมทชำรุด', 'คอมพิวเตอร์ชำรุด', 'เก้าอี้ชำรุด', 'โต๊ะชำรุด'] },
    { label: 'สายสื่อสาร', value: 'สายสื่อสาร', list: ['สายสื่อสารชำรุด', 'สายสื่อสารตก', 'สายสื่อสารขาด'] },
    { label: 'ฝาท่อระบายน้ำ', value: 'ฝาท่อระบายน้ำ', list: ['ฝาท่อระบายน้ำชำรุด', 'ฝาท่อระบายน้ำหาย'] },
    { label: 'กลิ่นควัน', value: 'กลิ่นควัน', list: ['กลิ่นควันจากการเผาไหม้', 'กลิ่นไม่พึงประสงค์จากบริเวณโดยรอบ'] },
    { label: 'สัตว์', value: 'สัตว์', list: ['สุนัข', 'งู', 'หนู', 'นก'] },
    { label: 'น้ำประปา', value: 'น้ำประปา', list: ['น้ำรั่ว', 'น้ำไม่ไหล', 'น้ำไหลเบา', 'มีสิ่งปนเปื้อนในน้ำ', 'น้ำมีกลิ่น' ] },
    { label: 'อื่น ๆ', value: 'อื่น ๆ', list: ['ระบุรายละเอียดปัญหาในช่องถัดไป'] }
  ];

  const handleValueChange = (value) => {
    setSelectedValue(value);
    if (value) {
      const selectedOption = options.find((item) => item.value === value);
      setSelectedList(selectedOption?.list || null);
    } else {
      setSelectedList(null);
    }
  };

  const selectImage = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };
        setImage(source);
      }
    });
  };

  const handleSubmit = async () => {
    // Handle the submit action here
    setBgColor('#f5b7ce');

    let newReport = {
      id: generateUniqueId(),
      rootProblem: selectedValue,
      detailProblem: selectedListItem,
      detail: inputText,
      Faculty: selectFaculty,
      location: initialRegion,
      image: require('../../../assets/img/peko.jpg'),
      status: "waiting",
    };

    let mockReport1 = {
      id: generateUniqueId(),
      rootProblem: selectedValue,
      detailProblem: selectedListItem,
      detail: inputText,
      Faculty: selectFaculty,
      location: initialRegion,
      image: require('../../../assets/img/peko.jpg'),
      status: "inProgress",
    };

    let mockReport2 = {
      id: generateUniqueId(),
      rootProblem: selectedValue,
      detailProblem: selectedListItem,
      detail: inputText,
      Faculty: selectFaculty,
      location: initialRegion,
      image: require('../../../assets/img/peko.jpg'),
      status: "done",
    };

    try {
      // Retrieve the existing array from AsyncStorage
      const existingReport = await AsyncStorage.getItem("allProblem");
      let reportArray = new Array();
      let tempArray = JSON.parse(existingReport);

      if (existingReport !== null) {
        // If data already exists, parse it and add the new object
        tempArray.forEach((element) => {
          reportArray.push(element);
        });
      }
      // Add the new object to the array
      reportArray.push(newReport);
      // reportArray.push(mockReport1);
      // reportArray.push(mockReport2);
      console.log(reportArray);

      // Store the updated array back to AsyncStorage
      await AsyncStorage.setItem("allProblem", JSON.stringify(reportArray));
      // await AsyncStorage.removeItem("allProblem");
      console.log("Object added to array and stored successfully");
    } catch (error) {
      console.log("Error storing array:", error);
    }
  };

  return (
    <ScrollView>
    <View style={{padding:50}}>

    <Text style={{ marginHorizontal: 5,marginBottom:10, fontSize: 30, fontFamily: 'chulaBold', color:'#E26199' }}>รายงานปัญหา:</Text>
      {/* <View style={{ }}>
        <DateComponent />
      </View> */}

        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text
            style={{
              marginHorizontal: 5,
              fontSize: 20,
              fontFamily: "chulaReg",
            }}
          >
            เลือกปัญหา:
          </Text>
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
              placeholder={placeholder}
              items={options}
              onValueChange={handleValueChange}
              value={selectedValue}
            />
          </View>
        </View>

        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text
            style={{
              marginHorizontal: 5,
              fontSize: 20,
              fontFamily: "chulaReg",
            }}
          >
            เลือกรายละเอียดของปัญหา:
          </Text>
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
              placeholder={placeholder}
              items={
                selectedList
                  ? selectedList.map((item) => ({ label: item, value: item }))
                  : []
              }
              onValueChange={(value) => setSelectedListItem(value)}
              value={selectedListItem}
            />
          </View>
        </View>

        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text
            style={{
              marginHorizontal: 5,
              fontSize: 20,
              fontFamily: "chulaReg",
            }}
          >
            บอกรายละเอียดเพิ่มเติม
          </Text>
          {/* <View style={{ borderWidth: 2, borderRadius: 10, borderColor: '#E26199', margin: 5, padding: 10</View> }}> */}
          <TextInput
            style={{
              height: 120,
              borderColor: "#E26199",
              borderWidth: 2,
              padding: 10,
              margin: 5,
              borderRadius: 10,
            }}
            onChangeText={(text) => setInputText(text)}
            value={inputText}
            multiline={true}
          />
          {/* </View> */}
        </View>

        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text
            style={{
              marginHorizontal: 5,
              fontSize: 20,
              fontFamily: "chulaReg",
            }}
          >
            เลือกบริเวณคณะ:
          </Text>
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
              placeholder={placeholder}
              items={faculties}
              onValueChange={(value) => setSelectFaculty(value)}
              value={selectFaculty}
            />
          </View>
        </View>

        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text
            style={{
              marginHorizontal: 5,
              fontSize: 20,
              fontFamily: "chulaReg",
            }}
          >
            ปักหมุดบนแผนที่:
          </Text>
          <View
            style={{
              borderWidth: 2,
              borderRadius: 10,
              borderColor: "#E26199",
              margin: 5,
              padding: 1,
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
            >
              <Marker
                coordinate={initialRegion}
                anchor={{ x: 0.5, y: 0.9 }}
                style={{ zIndex: 999 }}
              ></Marker>
            </MapView>
          </View>
        </View>

        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text
            style={{
              marginHorizontal: 5,
              fontSize: 20,
              fontFamily: "chulaReg",
            }}
          >
            ใส่รูปภาพ:
          </Text>
          <Button
            title="เลือกรูปภาพจากแกลเลอรี่"
            onPress={selectImage}
            color="#E26199"
          />
          {image && (
            <Image style={{ width: 200, height: 200 }} source={image} />
          )}
        </View>

        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            borderWidth: 2,
            borderColor: "#E26199",
            borderRadius: 10,
            // backgroundColor: "#E26199",
            backgroundColor: bgColor,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Button title="Submit" onPress={handleSubmit} color="white" />
        </View>
      </View>
    </ScrollView>
  );
}
