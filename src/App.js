import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './navigation/RootStack';
import ThemeContext from './context/ThemeContext';

const App = props => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;
