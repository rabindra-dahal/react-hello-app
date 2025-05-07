import { Text, View } from "react-native";

export default function HelloApp() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
      }}
    >
      <Text style={{ color: 'blue', fontSize: 20 }}>Hello, World!!!</Text>
    </View>
  );
}


