import { View, Text , Dimensions , Button,  TouchableOpacity ,ScrollView, Image} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Macaron from '../../assets/img/logo.png';
import Picker from 'react-native-picker-select';


const screenWidth = Dimensions.get('window').width;

const { height } = Dimensions.get('window')

// Mock data repository
const mockData = [
  {picture:require('../../assets/img/peko.jpg'), header: 'Header 1', description: 'Description 1', location: 'Location 1' },
  { picture:require('../../assets/img/peko.jpg'),header: 'Header 2', description: 'Description 2', location: 'Location 2' },
  { picture:require('../../assets/img/peko.jpg'),header: 'Header 3', description: 'Description 3', location: 'Location 3' },
  { picture:require('../../assets/img/peko.jpg'),header: 'Header 4', description: 'Description 4', location: 'Location 4' },
  // Add more items as needed
];

const faculties = [
  { label: 'คณะครุศาสตร์', value: 'คณะครุศาสตร์' },
  { label: 'คณะจิตวิทยา', value: 'คณะจิตวิทยา' },
  { label: 'คณะทันตแพทยศาสตร์', value: 'คณะทันตแพทยศาสตร์' },
  { label: 'คณะนิติศาสตร์', value: 'คณะนิติศาสตร์' },
  { label: 'คณะนิเทศศาสตร์', value: 'คณะนิเทศศาสตร์' },
  { label: 'คณะพยาบาลศาสตร์', value: 'คณะพยาบาลศาสตร์' },
  { label: 'คณะพาณิชยศาสตร์และการบัญชี', value: 'คณะพาณิชยศาสตร์และการบัญชี' },
  { label: 'คณะแพทยศาสตร์', value: 'คณะแพทยศาสตร์' },
  { label: 'คณะเภสัชศาสตร์', value: 'คณะเภสัชศาสตร์' },
  { label: 'คณะรัฐศาสตร์', value: 'คณะรัฐศาสตร์' },
  { label: 'คณะวิทยาศาสตร์', value: 'คณะวิทยาศาสตร์' },
  { label: 'คณะวิทยาศาสตร์การกีฬา', value: 'คณะวิทยาศาสตร์การกีฬา' },
  { label: 'คณะวิศวกรรมศาสตร์', value: 'คณะวิศวกรรมศาสตร์' },
  { label: 'คณะศิลปกรรมศาสตร์', value: 'คณะศิลปกรรมศาสตร์' },
  { label: 'คณะเศรษฐศาสตร์', value: 'คณะเศรษฐศาสตร์' },
  { label: 'คณะสถาปัตยกรรมศาสตร์', value: 'คณะสถาปัตยกรรมศาสตร์' },
  { label: 'คณะสหเวชศาสตร์', value: 'คณะสหเวชศาสตร์' },
  { label: 'คณะสัตวแพทยศาสตร์', value: 'คณะสัตวแพทยศาสตร์' },
  { label: 'คณะอักษรศาสตร์', value: 'คณะอักษรศาสตร์' },
  { label: 'อื่น ๆ', value: 'อื่น ๆ' },
];

const currentStatus = [
  { label: 'รอรับเรื่อง', value: 'รอรับเรื่อง' },
  { label: 'กำลังดำเนินการ', value: 'กำลังดำเนินการ' },
  { label: 'เสร็จสิ้น', value: 'เสร็จสิ้น' },
]

const placeholderFaculty = {
  label: 'เลือกตามคณะ',
  value: null,
};

const placeholderStatus = {
  label: 'เลือกตามสถานะ',
  value: null,
};

export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const [selectFaculty, setSelectFaculty] = useState(null);
  const [selectCurrentStatus, setCurrentStatus] = useState(null);

  return (
    <ScrollView style={{backgroundColor:'white'}}>
    <View style={{backgroundColor:'white', padding:50}}>
     
    <View style={{flexDirection: screenWidth > 769 ? 'row' : 'column'}}>
    <View style={{width: screenWidth > 769 ? '100%' : '100%',}}>

    <View style= {{paddingVertical:20}}>
      <Text style= {{fontWeight:'bold' , color:'#E26199' ,fontSize:25}}>รายงานทั้งหมด</Text>
    </View>

    {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> */}
    
      <View style={{ borderWidth: 2, borderRadius: 10, borderColor: '#E26199', margin: 5, padding: 10 }}>
        <Picker
          placeholder={placeholderFaculty}
          items={faculties}
          onValueChange={(selectFaculty) => {setSelectFaculty(selectFaculty)}}
          value={selectFaculty}
        />
      </View>

      <View style={{ borderWidth: 2, borderRadius: 10, borderColor: '#E26199', margin: 5, padding: 10 }}>
          <Picker
            placeholder={placeholderStatus}
            items={currentStatus}
            onValueChange={(selectCurrentStatus) => {setCurrentStatus(selectCurrentStatus)}}
            value={selectCurrentStatus}
          />
      </View>

    {/* </View> */}

    <View style={{ paddingTop:10}}>
    {mockData.map((item, index) => (
      <View style={{paddingTop:20}}>
  <View key={index} style={{ borderColor:"#E26199" , borderWidth:2 , borderRadius:10 }}>
  <View style={{padding:10, flexDirection:'row'}}>

    <View>
      <Image source={item.picture} style={{width: 150, height: 150, borderRadius:8.6}} />
    </View>

    <View style={{paddingLeft:15, flex: 1, justifyContent: 'space-between'}}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.header}</Text>
        <Text style={{fontSize: 20 , fontWeight:'bold'}}>{item.description}</Text>
        <Text style={{fontSize: 16}}>{item.location}</Text>
      </View>
      <TouchableOpacity onPress={() => {}}  style={{backgroundColor:'#E26199', width:'100%', height:40,  borderRadius:9 , paddingRight:'5%', alignItems:'center', justifyContent:'center'}}>
        <Text style={{textAlign:'center',fontWeight:'bold' , color:'white'}}>See Detail</Text>
      </TouchableOpacity>
    </View>

  </View>
</View>
</View>
))}
    </View>

    </View>
    </View>

    <Image source={Macaron} style={{width:'100%', resizeMode:'center'}}></Image>
    </View>
    </ScrollView>
  )
}