import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
<<<<<<< HEAD
  useWindowDimensions
} from "react-native"
import React, { useEffect, useState } from "react"
// import allProducts from "../data/products.json"
import { useGetProductByIdQuery } from "../services/shopService"
import { useDispatch } from "react-redux"
import { addCartItem } from "../features/Cart/cartSlice"

const ItemDetail = ({ route, navigation }) => {

  const dispatch = useDispatch()
  // const [product, setProduct] = useState(null)
  const [orientation, setOrientation] = useState("portrait")
  const { width, height } = useWindowDimensions()

  const {productId: idSelected} = route.params

  const {data: product, error, isLoading} = useGetProductByIdQuery(idSelected)

  //Landscape = horizontal
  //Portrait = vertical

=======
} from "react-native"
import React, { useEffect, useState } from "react"
import allProducts from "../data/products.json"

const ItemDetail = ({ idSelected, setProductSelected }) => {
  console.log(idSelected)

  const [product, setProduct] = useState(null)
/*   const [orientation, setOrientation] = useState("portrait")
  const { width, height } = useWindowDimensions()

>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3
  useEffect(() => {
    if (width > height) setOrientation("landscape")
    else setOrientation("portrait")
  }, [width, height])

<<<<<<< HEAD
  /* useEffect(() => {
=======
  console.log(orientation) */

  useEffect(() => {
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3
    //Encontrar el producto por su id
    const productSelected = allProducts.find(
      (product) => product.id === idSelected
    )
    setProduct(productSelected)
<<<<<<< HEAD
  }, [idSelected]) */

  const handleAddCart = () => {
    dispatch(addCartItem({...product, quantity: 1}))
  }

  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go back" />
      {product ? (
        <View
          style={
            orientation === "portrait"?
            styles.mainContainer
            : styles.mainContainerLandscape
=======
  }, [idSelected])

  console.log(product)

  return (
    <View>
      <Button onPress={() => setProductSelected("")} title="Go back" />
      {product ? (
        <View
          style={
            // orientation === "portrait"?
            styles.mainContainer
            //   : styles.mainContainerLandscape
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3
          }
        >
          <Image
            source={{ uri: product.images[0] }}
<<<<<<< HEAD
            style={orientation === "portrait" ? styles.image : styles.imageLandscape}
            resizeMode="cover"
          />
          <View style={orientation === "portrait" ? styles.textContainer : styles.textContainerLandscape}>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Button title="Add cart" onPress={handleAddCart}></Button>
=======
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>${product.price}</Text>
            <Button title="Add cart"></Button>
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3
          </View>
        </View>
      ) : null}
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
<<<<<<< HEAD
    gap: 10,
=======
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3
  },
  image: {
    width: '100%',
    height: 250,
  },
<<<<<<< HEAD
  imageLandscape: {
    width: '45%',
    height: 200
  },
  textContainer: {
    flexDirection: "column",
  },

  textContainerLandscape: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    gap: 10,
  },
  price: {
    textAlign: 'right',
    width: '100%'
  }
=======
  textContainer: {
    flexDirection: "column",
  },
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3
})
