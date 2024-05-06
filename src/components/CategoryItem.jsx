import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { colors } from "../constants/colors"
import Card from "./Card"
<<<<<<< HEAD
import {useDispatch, useSelector} from 'react-redux'
import { setCategorySelected } from "../features/Shop/shopSlice"

const CategoryItem = ({ category, navigation }) => {

  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setCategorySelected(category))
    navigation.navigate('ItemListCategory', {category})
  }

  return (
    <Card style={{ marginVertical: 10, marginHorizontal: 10 }}>
      <Pressable onPress={handleNavigate}>
=======

const CategoryItem = ({ category, selectCategory = () => {} }) => {
  return (
    <Card style={{ marginVertical: 10, marginHorizontal: 10 }}>
      <Pressable onPress={()=>selectCategory(category)}>
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  text: {
    color: colors.platinum,
    textAlign: "center",
    fontSize: 20,
  },
})
