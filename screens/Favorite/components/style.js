import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
    },
    itemContainer: {
      flexDirection: 'row',
      marginBottom: 16,
      padding: 16,
      borderWidth: 1,
      borderColor: '#e0e0e0',
      borderRadius: 5,
      alignItems: 'center',
    },
    favoriteButton: {
      marginRight: 16,
    },
    productImage: {
      width: 100,
      height: 120,
      marginRight: 16,
    },
    productDetails: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    productInfo: {
      flex: 1,
      justifyContent: 'center',
    },
    productName: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    productBrand: {
      fontSize: 14,
      color: 'gray',
      textAlign: 'left',
    },
    productPrice: {
      fontSize: 16,
      color: 'tomato',
      marginTop: 4,
      textAlign: 'left',
    },
    originalPrice: {
      fontSize: 16,
      color: 'green',
      marginTop: 4,
      textAlign: 'left',
    },
    limitedTimeDeal: {
      fontSize: 14,
      color: 'red',
      marginTop: 4,
      textAlign: 'left',
    },
    backButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: 'tomato',
      borderRadius: 5,
      alignItems: 'center',
    },
    backButtonText: {
      color: '#fff',
      fontSize: 16,
    },
  });
  

export default styles;
