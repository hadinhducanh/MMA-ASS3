import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  itemContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  productImage: {
    width: 100,
    height: 120,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
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
    textDecorationLine: 'line-through',
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
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  suggestionsContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    maxHeight: 200,
    marginBottom: 16,
    zIndex: 1,
    backgroundColor: '#fff',
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  suggestionItemSelected: {
    backgroundColor: '#e0e0e0',
  },
  brandButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  brandButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  selectedBrandButton: {
    backgroundColor: 'tomato',
  },
  brandButtonText: {
    color: '#000',
  },
});

export default styles;
