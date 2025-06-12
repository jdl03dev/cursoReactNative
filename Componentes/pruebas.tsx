import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function Pruebas() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
      <CheckBox
        value={isChecked}
        onValueChange={setIsChecked}
      />
      <Text>Acepto los términos y condiciones</Text>
    </View>
  );
}