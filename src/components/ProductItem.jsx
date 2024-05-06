<<<<<<< HEAD
import { Image, StyleSheet, Text, Pressable } from "react-native"
import React from "react"
import Card from "./Card"
import { colors } from "../constants/colors"
import { useDispatch } from "react-redux"
import { setIdSelected } from "../features/Shop/shopSlice"

const ProductItem = ({
  product,
  setProductSelected = () => {},
  navigation,
}) => {

  const dispatch = useDispatch()
  const handleNavigate = () => {
    dispatch(setIdSelected(product.title))
    navigation.navigate('ItemDetail', {productId: product.id})
  }
  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable
        style={styles.pressable}
        onPress={handleNavigate}
      >
=======
import { Image, StyleSheet, Text, Pressable, useWindowDimensions } from "react-native"
import React from "react"
import Card from "./Card"
import { colors } from "../constants/colors"

const ProductItem = ({ product, setProductSelected = () => {} }) => {
  const {height, width} = useWindowDimensions()
  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable style={styles.pressable}>
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3
        <Text style={styles.textCategory}>{product.title}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.images[0] }}
        />
      </Pressable>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: 120,
<<<<<<< HEAD
    width: "30%",
=======
    width: 100,
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3
    borderRadius: 8,
  },
  additionalStylesCard: {
    height: 120,
    width: 300,
    margin: 10,
  },
  textCategory: {
<<<<<<< HEAD
    width: "70%",
    color: colors.teal200,
  },
  pressable: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
  },
=======
    color: colors.teal200,
  },
  pressable: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    paddingLeft: 10,
  }
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3
})
