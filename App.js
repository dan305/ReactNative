<<<<<<< HEAD
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native"
import { colors } from "./src/constants/colors"
import { useFonts } from "expo-font"
import Navigator from "./src/navigation/Navigator"
import { Provider } from "react-redux"
import store from "./src/store"
=======
import { StyleSheet, View } from "react-native"
import Home from "./src/screens/Home"
import { colors } from "./src/constants/colors"
import Header from "./src/components/Header"
import ItemListCategory from "./src/screens/ItemListCategory"
import { useState } from "react"
import { useFonts } from "expo-font"
import ItemDetail from "./src/screens/ItemDetail"
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  })
<<<<<<< HEAD
=======
  const[itemIdSelected, setItemIdSelected] = useState()
  const [categorySelected, setCategorySelected] = useState("")
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3

  if (!fontsLoaded || fontError) {
    return null
  }

  if (fontsLoaded && !fontError) {
    return (
<<<<<<< HEAD
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Navigator/>
        </Provider>
      </SafeAreaView>
=======
      <View style={styles.container}>
        <Header title={"Titulo de la app"} />
        {!categorySelected ? (
          <Home setCategorySelected={setCategorySelected} />
        ) : (
          <ItemListCategory
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
          />
        )}
      </View>
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3
    )
  }
}

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
=======
    // marginTop: 30,
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3
    flex: 1,
    // alignItems: "center",
    backgroundColor: colors.teal200,
  },
})

export default App
