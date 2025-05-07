import { Text, View } from "react-native";

export default function ViewDemo() {
  return (
    <View style={{ flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, height: 20, width: 20, backgroundColor: 'red'}}></View>
      <View style={{flex: 2, height: 30, width: 30, backgroundColor: 'blue'}}></View>
      <View style={{flex: 3, height: 40, width: 40, backgroundColor: 'pink'}}></View>
    </View>
  );
}


