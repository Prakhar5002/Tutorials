import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState, useContext} from 'react';
import ButtonComponent from '../../components/ButtonComponent';
import APIRender from '../../components/APIRender';
import ThemeContext from '@app/context/ThemeContext';
import MainContainer from '@app/components/MainContainer';

const windowWidth = Dimensions.get('window').width;

const Home = props => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);

  // console.log('Home props---->', props);

  const makeApiCall = () => {
    props.navigation.navigate('cart', {
      name: ['Pradeep', 'Kalyani', 'Prakhar', 'Raman'],
      data: 1234,
    });
    // setLoading(true);
    // fetch('https://jsonplaceholder.typicode.com/photos')
    //   .then(response => response.json())
    //   .then(response => {
    //     setData(response);
    //   })
    //   .catch(err => console.log(err))
    //   .finally(() => props.navigation.goBack());
  };

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const renderItem = ({item}) => {
    return <APIRender data={item} />;
  };

  return (
    <MainContainer isLoading={loading}>
      <Text style={{color: theme !== 'light' ? '#fff' : '#000'}}>
        uyfhjgjkjkbjk
      </Text>
      <FlatList
        numColumns={Math.floor(windowWidth / 60) - 1}
        data={data}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderItem}
      />

      <ButtonComponent
        style2={{backgroundColor: 'blue'}}
        title2="CALL API"
        // onPress3={makeApiCall}
        onPress3={makeApiCall}
        textStyle={{color: '#fff'}}
      />
    </MainContainer>
  );
};

export default Home;

//Context
//Redux
