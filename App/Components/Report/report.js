import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Picker from 'react-native-picker-select';
// import DatePicker from 'react-native-datepicker';
import DateComponent from './Date';

export default function report() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedList, setSelectedList] = useState(null);
  const [selectedListItem, setSelectedListItem] = useState(null);
  const [inputText, setInputText] = useState('');
  const [date, setDate] = useState(new Date());

  const placeholder = {
    label: 'Select an option...',
    value: null,
  };

  const options = [
    { label: 'ถนน', value: 'ถนน', list: ['ถนนเป็นหลุม', 'ถนนลื่น', 'อุบัติเหตุบนถนน', 'ไฟจราจรหัก', 'สภาพถนนไม่เป็นกันเอง'] },
    { label: 'ความสะอาด', value: 'ความสะอาด', list: ['พื้นเปียก', 'ไม่มีกระดาษทิชชู่', 'ขยะรกบนถนน', 'บริเวณรอบถนนไม่ได้รับการดูแล'] },
    { label: 'การจราจร', value: 'การจราจร', list: ['มีสิ่งกีดขวาง', 'รถติดขัด', 'การจราจรไม่เป็นระบบ', 'จุดเสียหายอุบัติเหตุ'] },
    { label: 'ไฟฟ้า', value: 'ไฟฟ้า', list: ['ไฟฟ้าดับ', 'ไฟฟ้าสะดุ้ง', 'ปัญหาการจ่ายไฟฟ้า'] },
    { label: 'น้ำท่วม', value: 'น้ำท่วม', list: ['ถนนท่วมน้ำ', 'บริเวณรอบๆ ถนนท่วมน้ำ'] },
    { label: 'ต้นไม้', value: 'ต้นไม้', list: ['ต้นไม้ตาย', 'กิ่งไม้หัก'] },
    { label: 'ทางเท้า', value: 'ทางเท้า', list: ['ทางเท้าเสื่อมโทรม', 'อุปสร้างบนทางเท้าเสียหาย'] },
    { label: 'เสียงรบกวน', value: 'เสียงรบกวน', list: ['เสียงรบกวนจากการจราจร', 'เสียงรบกวนจากอุปกรณ์ชำรุด'] },
    { label: 'อุปกรณ์ชำรุด', value: 'อุปกรณ์ชำรุด', list: ['ไฟจราจรชำรุด', 'สัญญาณไฟจราจรเสีย'] },
    { label: 'สายสื่อสาร', value: 'สายสื่อสาร', list: ['สายสื่อสารที่ชำรุด', 'สายสื่อสารตก'] },
    { label: 'ฝาท่อระบายน้ำ', value: 'ฝาท่อระบายน้ำ', list: ['ฝาท่อระบายน้ำชำรุด', 'ฝาท่อระบายน้ำหาย'] },
    { label: 'กลิ่นควัน', value: 'กลิ่นควัน', list: ['กลิ่นควันมากเกินไป', 'รถเสียเกิดกลิ่นควัน'] },
    { label: 'สัตว์', value: 'สัตว์', list: ['สัตว์หลบหนีจากป่าเขา'] },
    { label: 'น้ำประปา', value: 'น้ำประปา', list: ['ปัญหาการจ่ายน้ำประปา', 'ปัญหาคุณภาพน้ำประปา'] }
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

  return (
    <View style={{padding:50}}>

      <View style={{ }}>
        <DateComponent />
      </View>

      <View style={{marginTop:10, marginBottom:10}}>
        <Text style={{ marginHorizontal: 5, fontSize: 20, fontFamily: 'chulaReg' }}>เลือกปัญหา:</Text>
        <View style={{ borderWidth: 2, borderRadius: 10, borderColor: '#E26199', margin: 5, padding: 10 }}>
          <Picker
            placeholder={placeholder}
            items={options}
            onValueChange={handleValueChange}
            value={selectedValue}
          />
        </View>
      </View>

      <View style={{marginTop:10, marginBottom:10}}>
        <Text style={{ marginHorizontal: 5, fontSize: 20, fontFamily: 'chulaReg' }}>เลือกรายละเอียดของปัญหา:</Text>
        <View style={{ borderWidth: 2, borderRadius: 10, borderColor: '#E26199', margin: 5, padding: 10 }}>
          <Picker
            placeholder={placeholder}
            items={selectedList ? selectedList.map((item) => ({ label: item, value: item })) : []}
            onValueChange={(value) => setSelectedListItem(value)}
            value={selectedListItem}
          />
        </View>
      </View>

      <View style={{marginTop:10, marginBottom:10}}>
        <Text style={{ marginHorizontal: 5, fontSize: 20, fontFamily: 'chulaReg' }}>บอกรายละเอียดเพิ่มเติม</Text>
        {/* <View style={{ borderWidth: 2, borderRadius: 10, borderColor: '#E26199', margin: 5, padding: 10 }}> */}
          <TextInput
            style={{ height: 120, borderColor: '#E26199', borderWidth: 2, padding: 10, margin: 5, borderRadius: 10}}
            onChangeText={text => setInputText(text)}
            value={inputText}
            multiline
          />
        {/* </View> */}
      </View>
    </View>
  );
}