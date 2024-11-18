import React, { useEffect, useState } from "react";
import {
  Avatar,
  Card,
  IconButton,
  FAB,
  Snackbar,
  TextInput,
  Dialog,
  Portal,
  Button,
  Text,
  Surface,
  Divider,
  Searchbar,
  useTheme,
} from "react-native-paper";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";
import { fetchProducts } from "../utils/api";

export default function ShopViewScreen(props) {
  const isFocused = useIsFocused();

  const [products, setProducts] = useState([]);
  const [offline, setOffline] = useState(null);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductName, setSelectedProductName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setOffline(true);
        setError("Unable to fetch data, offline mode");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, []);

  // #region Navigation
  function showViewProduct(id) {
    props.navigation.navigate("ProductView", { id: id });
  }
  // #endregion

    async function handleDeleteTest() {
      const lastProduct = product[product.length - 1].id;
      try {
        const success = await deleteProduct(lastProduct);
        if (success) {
          fetchData();
        } else {
          setError("Failed to delete. Please try again.");
        }
      } catch (err) {
        console.error("Error deleting:", err);
        setError("Failed to delete. Check your connection.");
      }
    }
  return (
    <Surface
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text variant="displaySmall">ShopViewScreen</Text>
      {products.map((product) => (
        <Text key={product?.id}>{product?.name}</Text>
      ))}

      <Button mode="contained" icon="update" onPress={() => showViewProduct(3)}>
        View Product no 2
      </Button>
      <Button mode="contained" icon="update" onPress={() => showViewProduct(5)}>
        View Product no 5
      </Button>
      <Button mode="contained" icon="update" onPress={() => showEditProduct(-1)}>
        Add new Product
      </Button>
      <Button mode="contained" icon="update" onPress={() => handleDeleteTest()}>
        Delete Product
      </Button>
    </Surface>
  );
}
