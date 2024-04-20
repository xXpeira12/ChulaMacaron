import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Detail({ route }) {
  const { item } = route.params;

  return (
    <View style={{ padding: 10, flexDirection: 'row' }}>
      <View>
        <Image source={item.picture} style={{ width: 150, height: 150, borderRadius: 8.6 }} />
      </View>

      <View style={{ paddingLeft: 15, flex: 1, justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.header}</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.description}</Text>
          <Text style={{ fontSize: 16 }}>{item.location}</Text>
        </View>
      </View>
    </View>
  );
}