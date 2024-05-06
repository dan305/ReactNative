import { FlatList, StyleSheet, Text, View } from "react-native"
import { colors } from "../constants/colors"
<<<<<<< HEAD
// import products from "../data/products.json"
import ProductItem from "../components/ProductItem"
import Search from "../components/Search"
import { useState, useEffect } from "react"
import { useGetProductsByCategoryQuery } from "../services/shopService"

const ItemListCategory = ({
  setCategorySelected = () => {},
  navigation,
  route
=======
import products from "../data/products.json"
import ProductItem from "../components/ProductItem"
import Search from "../components/Search"
import { useState, useEffect } from "react"

const ItemListCategory = ({
  categorySelected = "",
  setCategorySelected = () => {},
  setItemCategorySelected = () => {},
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3
}) => {
  const [keyWord, setKeyword] = useState("")
  const [productsFiltered, setProductsFiltered] = useState([])
  const [error, setError] = useState("")

<<<<<<< HEAD
  const {category: categorySelected} = route.params

  const {data: productsFetched, error: errorFromFetch, isLoading} = useGetProductsByCategoryQuery(categorySelected)

  /* console.log(errorFromFetch);
  console.log(isLoading); */

=======
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3
  useEffect(() => {
    //Products filtered by category

    //No digits validation
    const regexDigits = /\d/
    const hasDigits = regexDigits.test(keyWord)
    if (hasDigits) {
      setError("Don't use digits")
      return
    }
    //3 or more characters
    const regexThreeOrMore = /[a-zA-Z]{3,}/
    const hasThreeOrMoreChars = regexThreeOrMore.test(keyWord)

    if (!hasThreeOrMoreChars && keyWord.length) {
      setError("Type 3 or more characters")
      return
    }

<<<<<<< HEAD
    /* const productsPrefiltered = products.filter(
      (product) => product.category === categorySelected
    ) */
    //Product filtered by name
    if (!isLoading) {
      const productsFilter = productsFetched.filter((product) =>
        product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
      )
      setProductsFiltered(productsFilter)
      setError("")
    }
  }, [keyWord, categorySelected, productsFetched, isLoading])
=======
    const productsPrefiltered = products.filter(
      (product) => product.category === categorySelected
    )
    //Product filtered by name
    const productsFilter = productsPrefiltered.filter((product) =>
      product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
    )
    setProductsFiltered(productsFilter)
    setError("")
  }, [keyWord, categorySelected])
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3

  return (
    <View style={styles.flatListContainer}>
      <Search
        error={error}
        onSearch={setKeyword}
<<<<<<< HEAD
        goBack={() => navigation.goBack()}
      />
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => (
          <ProductItem product={item} navigation={navigation}/>
        )}
=======
        goBack={() => setCategorySelected("")}
      />
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => <ProductItem product={item} />}
>>>>>>> 09f365d4ea36f1159d36f492b4df4d9a824af5f3
        keyExtractor={(producto) => producto.id}
      />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.teal400,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
})
