import { React, useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { fetchProducts } from '../utils/api'; 
export default function HomeScreen(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>HomeScreen</Text>
            {products.map((product) => (
                <Text variant="headlineMedium" key={product.id}> {product.name} </Text>
          ))
          }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});