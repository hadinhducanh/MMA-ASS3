import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productBrand: {
    fontSize: 18,
    color: 'gray',
  },
  productPrice: {
    fontSize: 20,
    color: 'tomato',
    marginVertical: 8,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  limitedTimeDeal: {
    color: 'red',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    marginVertical: 8,
  },
  favoriteIcon: {
    marginVertical: 10,
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  reviewsContainer: {
    marginTop: 10,
  },
  reviewItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  reviewUsername: {
    fontWeight: 'bold',
  },
  reviewStar: {
    color: 'gold',
  },
  reviewFeedback: {
    marginTop: 4,
  },
});

export default styles;
