import {View, Text, SafeAreaView, Button} from 'react-native';
import React from 'react';
import ButtonComponent from '../../components/ButtonComponent';
import MainContainer from '@app/components/MainContainer';

const Cart = ({route, navigation}) => {
  const {name, data} = route.params;
  return (
    <MainContainer>
      {name.map(item => (
        <Text key={item}>{item}</Text>
      ))}
      {data ? <Text>{String(data)}</Text> : <Text>No data found</Text>}
      <ButtonComponent
        title2={data}
        onPress3={() => navigation.goBack()}
        style2={{backgroundColor: 'blue'}}
      />
    </MainContainer>
  );
};

export default Cart;

//destructuring
