import { Text, View } from "react-native";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
    </View>
  );
}

function Tasks() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tasks</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={Home} name="Home" />
      <Drawer.Screen component={Tasks} name="Tasks" />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <View>
//       <View style={styles.header}>
//         <Text style={{ textAlign: "center" }}>GEORGIAN HANDMADE</Text>
//       </View>
//       <View>
//         <Image
//           source={require("./assets/pics/header1.png")}
//           style={{ width: "90%", height: 150, marginTop: 50, marginLeft: 20 }}
//           resizeMode="contain"
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: "orange",
//     height: 50,
//     width: "100%",
//   },
// });
