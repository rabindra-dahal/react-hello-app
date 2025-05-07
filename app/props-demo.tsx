import React from "react";
import { Text, View } from 'react-native';

type CatProps = { name : string; };
const Cat = (props: CatProps) => {
  return(
    <View>
      <Text style={{ 
        color: 'blue', 
        fontSize: 20, 
        margin: 1, 
        padding: 5,
        }}>
          Hello, I am {props.name} !
      </Text>
    </View>
  );
};

const PropsDemo = () =>{
  return(
    <View style={{ flex: 1, flexDirection: 'column'}}>
      <Cat name="Maru" />
      <Cat name="Jelly" />
    </View>
  );
};

export default PropsDemo;
