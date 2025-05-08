import React, { useState } from "react";
import { Text, TextInput, View } from 'react-native';

const TextInputChangeTextEventHandler = () =>{
    const [text, setText] = useState('');
    const handleTextChange = (newText: string) =>{
        setText(newText);
    };

    return(
        <View>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                onChangeText={handleTextChange}
                value={text}
                />
            <Text>You typed: {text}</Text>
        </View>
    );

};