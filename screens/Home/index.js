import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import styles from './components/style';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numColumns] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://66f7c380b5d85f31a3438d56.mockapi.io/api/products');
        setProducts(response.data);
        setSearchedProducts(response.data);
        setFilteredProducts(response.data);
        const uniqueBrands = [...new Set(response.data.map(product => product.brand))];
        setBrands(uniqueBrands);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = searchedProducts.filter(product =>
      selectedBrand === '' || product.brand === selectedBrand
    );
    setFilteredProducts(filtered);
  }, [selectedBrand, searchedProducts]);

  const updateSuggestions = (text) => {
    setSearchTerm(text);
    if (text) {
      const filteredSuggestions = products.filter(product =>
        product.artName.toLowerCase().includes(text.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    const filtered = products.filter(product =>
      product.artName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedProducts(filtered);
    setSuggestions([]);
  };

  const renderItem = ({ item }) => {
    const newPrice = item.price * (1 - item.limitedTimeDeal);
    return (
      <TouchableOpacity
        style={[styles.itemContainer, { flexDirection: numColumns === 1 ? 'row' : 'column' }]}
        onPress={() => navigation.navigate('Detail', { product: item })}
      >
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{item.artName}</Text>
          <Text style={styles.productBrand}>{item.brand}</Text>
          <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
          {item.limitedTimeDeal > 0 && (
            <>
              <Text style={styles.originalPrice}>${newPrice.toFixed(2)}</Text>
              <Text style={styles.limitedTimeDeal}>Limited Time Deal: {`${(item.limitedTimeDeal * 100).toFixed(0)}% off`}</Text>
            </>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const renderSuggestionItem = (item) => {
    return (
      <TouchableOpacity onPress={() => {
        setSearchTerm(item.artName);
        handleSearch();
      }}>
        <Text style={styles.suggestionItem}>{item.artName}</Text>
      </TouchableOpacity>
    );
  };

  const handleBrandPress = (brand) => {
    setSelectedBrand(brand);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="tomato" style={styles.loading} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.brandButtonsContainer}>
        <TouchableOpacity
          style={[styles.brandButton, selectedBrand === '' && styles.selectedBrandButton]}
          onPress={() => handleBrandPress('')}
        >
          <Text style={styles.brandButtonText}>All Brands</Text>
        </TouchableOpacity>
        {brands.map((brand) => (
          <TouchableOpacity
            key={brand}
            style={[styles.brandButton, selectedBrand === brand && styles.selectedBrandButton]}
            onPress={() => handleBrandPress(brand)}
          >
            <Text style={styles.brandButtonText}>{brand}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search by product name"
        value={searchTerm}
        onChangeText={updateSuggestions}
        onSubmitEditing={handleSearch}
      />

      {suggestions.length > 0 && (
        <View style={styles.suggestionsContainer}>
          <FlatList
            data={suggestions}
            renderItem={({ item }) => renderSuggestionItem(item)}
            keyExtractor={item => item.id}
          />
        </View>
      )}

      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        key={numColumns}
        numColumns={numColumns}
      />
      <StatusBar style="auto" />
    </View>
  );
}
