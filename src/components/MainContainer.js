import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';
import ThemeContext from '@app/context/ThemeContext';

const MainContainer = ({children, isLoading = false}) => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme === 'light' ? '#fff' : '#000'}}>
      {children}
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
          size="small"
          color="#fff"
        />
      )}
    </SafeAreaView>
  );
};

export default MainContainer;
