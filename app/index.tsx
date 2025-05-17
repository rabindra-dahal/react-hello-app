import React, { useState } from "react";
import { StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',

    },
    txtInput:{
        height: 90,
        width: '99%',
        borderColor: 'red',
        borderWidth: 1,
        color: 'blue',
        fontSize: 25,
        padding: 10,
        margin: 3,

    },
});
const Index = () =>{
  const [userNameText, setUserNameText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const handleUserNameTextChange = (newText: string) =>{
    setUserNameText(newText);
  };

  const handlePasswordTextChange = (newText: string) =>{
    setPasswordText(newText);
  };

  return(
      <View style={styles.container}>
          <TextInput
              style={styles.txtInput}
              onChangeText={handleUserNameTextChange}
              value={userNameText}
              placeholder="User Name"
              />
            <TextInput
              style={styles.txtInput}
              textContentType='password'
              placeholderTextColor={'maroon'}
              secureTextEntry= {true}
              onChangeText={handlePasswordTextChange}
              value={passwordText}
              placeholder="Password"
              passwordRules={"required: digit; minlength: 3;"}
              
              />
      </View>
  );
};

export default Index;
