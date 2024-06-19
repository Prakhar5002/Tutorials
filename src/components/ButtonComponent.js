import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const ButtonComponent = ({title2, onPress3, style2, textStyle}) => {
  return (
    <TouchableOpacity style={[style2, styles.btn]} onPress={onPress3}>
      <Text style={textStyle}>{title2}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 150,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default ButtonComponent;
