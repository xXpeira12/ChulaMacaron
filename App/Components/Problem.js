import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import Picker from 'react-native-picker-select';

const placeholder = {
  label: 'ค้นหาปัญหา',
  value: null,
};

export default function Problem() {

  const [selectProblem, setSelectProblem] = useState(null);
  const [showList, setShowList] = useState(false);
  const [selectedProblemIndex, setSelectedProblemIndex] = useState(null);

  const problems = [
    { label: 'ถนน', value: 'ถนน', list: ['ถนนไม่เรียบ', 'ถนนลื่น', 'ถนนทรุดตัว', 'เส้นแบ่งช่องทางจราจรไม่ชัด', 'สีทางม้าลายไม่ชัด'] },
    { label: 'ความสะอาด', value: 'ความสะอาด', list: ['พื้นเปียก', 'ไม่มีกระดาษทิชชู่ในห้องน้ำ', 'สถานที่สกปรก', 'ขยะเกลื่อนกลาด'] },
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

  return (
    <ScrollView>
      <View style={{padding:50}}>
      <Text style={{ marginHorizontal: 5,marginBottom:10, fontSize: 35, fontFamily: 'chulaBold', color:'#E26199' }}>ปัญหาที่รับแจ้ง:</Text>

      {/* <View style={{ borderWidth: 2, borderRadius: 10, borderColor: '#E26199', margin: 5, padding: 10 }}>
        <TextInput
          onChangeText={(text) => setSelectProblem(text)}
          value={selectProblem}
        />
      </View> */}

      <View>
      {problems.map((problem, index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => setSelectedProblemIndex(index === selectedProblemIndex ? null : index)}>
            <Text style={{fontFamily: 'chulaBold', fontSize:20, color:index === selectedProblemIndex ? 'gray' : '#e26199',paddingTop:10}}>{index === selectedProblemIndex ? '▵' : '▿'} {problem.value}</Text>
          </TouchableOpacity>

          {selectedProblemIndex === index && problem.list.map((list, index) => (
            <View key={index} style={{marginLeft:20}}>
              <Text style={{fontFamily: 'chulaReg', fontSize:20, color:'',paddingTop:10}}>- {list}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>

      </View>
    </ScrollView>
  )
}