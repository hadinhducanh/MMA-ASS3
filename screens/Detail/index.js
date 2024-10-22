import React from 'react';
import { View, Text, Image, Button, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../Favorite/components/context/FavoriteContext';
import styles from './components/style';

export default function Detail({ route, navigation }) {
  const { product } = route.params;
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some(item => item.id === product.id);

  const handleFavoritePress = () => {
    if (isFavorite) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  const renderReviewItem = ({ item }) => (
    <View style={styles.reviewItem}>
      <Text style={styles.reviewUsername}>{item.username}</Text>
      <Text style={styles.reviewStar}>{`⭐ ${item.star}`}</Text>
      <Text style={styles.reviewFeedback}>{item.feedback}</Text>
    </View>
  );

  const data = [
    {
      key: 'product',
      content: (
        <View style={styles.detailsContainer}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
          <Text style={styles.productName}>{product.artName}</Text>
          <Text style={styles.productBrand}>{product.brand}</Text>
          <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
          {product.limitedTimeDeal > 0 && (
            <>
              <Text style={styles.originalPrice}>
                ${(product.price * (1 - product.limitedTimeDeal)).toFixed(2)}
              </Text>
              <Text style={styles.limitedTimeDeal}>
                Limited Time Deal: {`${(product.limitedTimeDeal * 100).toFixed(0)}% off`}
              </Text>
            </>
          )}
          <Text style={styles.productDescription}>{product.description}</Text>
          <Ionicons 
            name={isFavorite ? 'heart' : 'heart-outline'} 
            size={32}
            color="red"
            onPress={handleFavoritePress}
            style={styles.favoriteIcon}
          />
          <View>
            <Button title="Go to favorite" onPress={() => navigation.navigate('Favorite')} />
          </View>
        </View>
      ),
    },
    {
      key: 'reviews',
      content: (
        <View>
          <Text style={styles.reviewsTitle}>Customer Reviews</Text>
          <FlatList
            data={product.reviews}
            renderItem={renderReviewItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.reviewsContainer}
          />
        </View>
      ),
    },
  ];

  const renderItem = ({ item }) => item.content;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      showsVerticalScrollIndicator={false}
    />
  );
}
