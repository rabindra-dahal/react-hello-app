import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',

    },
    txtInput:{
        height: 40,
        width: 200,
        borderColor: 'red',
        borderWidth: 10,
        color: 'blue'

    },
});
const Index = () =>{
  const [text, setText] = useState('');
      const handleTextChange = (newText: string) =>{
          setText(newText);
      };
  
      return(
          <View style={styles.container}>
              <TextInput
                  style={styles.txtInput}
                  onChangeText={handleTextChange}
                  value={text}
                  />
              <Text>You typed: {text}</Text>
          </View>
      );
};

export default Index;
