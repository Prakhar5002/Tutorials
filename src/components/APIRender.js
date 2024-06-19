import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const APIRender = ({data}) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: 18,
        alignItems: 'center',
      }}>
      <Image
        style={{width: 60, height: 60}}
        source={{uri: data.thumbnailUrl}}
      />
      {/* <Text>{data.title}</Text> */}
    </TouchableOpacity>
  );
};

export default APIRender;
