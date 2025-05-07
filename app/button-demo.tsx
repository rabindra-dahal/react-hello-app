import React, {useState} from "react";
import { View, Text, Button } from "react-native";

export default function ViewDemo() {
    const [count, setCount] = useState(0);
  return (
    <View style={{ 
        flex: 1, 
        backgroundColor: '#fff', 
        alignItems: 'center',
        justifyContent: 'center',
        }}
    >
        <Text>You clicked {count} times.</Text>
        <Button onPress={()=> setCount(count + 1)} title="Increment by 1" />
    </View>
  );
}


