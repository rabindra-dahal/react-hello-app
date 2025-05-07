import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);
  const titles = "Increment " + count + " by 1";
    return (
      <View style={{ 
          flex: 1, 
          backgroundColor: '#fff', 
          alignItems: 'center',
          justifyContent: 'center',
          }}
      >
          <Text>You clicked {count} times.</Text>
          <Button onPress={()=> setCount(count + 1)} title= {titles} />
      </View>
    );
}


