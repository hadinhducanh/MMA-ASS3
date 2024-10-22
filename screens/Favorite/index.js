import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from './components/context/FavoriteContext';
import styles from './components/style';

export default function Favorite({ navigation }) {
  const { favorites, removeFavorite } = useFavorites(); 

  const renderFavoriteItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity 
        style={styles.favoriteButton} 
        onPress={() => removeFavorite(item.id)} 
      >
        <Ionicons name="heart" size={24} color="tomato" />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.productDetails} 
        onPress={() => navigation.navigate('Detail', { product: item })} 
      >
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.artName}</Text>
          <Text style={styles.productBrand}>{item.brand}</Text>
          <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
          {item.limitedTimeDeal > 0 && (
            <>
              <Text style={styles.originalPrice}>
                ${(item.price * (1 - item.limitedTimeDeal)).toFixed(2)}
              </Text>
              <Text style={styles.limitedTimeDeal}>
                Limited Time Deal: {`${(item.limitedTimeDeal * 100).toFixed(0)}% off`}
              </Text>
            </>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <>
          <Text>No favorites yet!</Text>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.navigate('Home')} 
          >
            <Text style={styles.backButtonText}>Back to Home Page</Text>
          </TouchableOpacity>
        </>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderFavoriteItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}


