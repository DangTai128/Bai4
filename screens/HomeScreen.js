import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.mapsContainer}>
        <Image
          source={{uri: 'https://byvn.net/F2W6'}}
          style={styles.mapsIcon}
        />
      </View>

      <View style={styles.searchContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios/50/000000/search--v1.png' }} 
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for meals or area"
          placeholderTextColor="#888"
        />
      </View>

     
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Categories</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryItem}>
            <Image
              source={require('../assets/pizza.jpg')} 
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Pizza</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Image
              source={require('../assets/burger.jpg')} 
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Burgers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Image
              source={require('../assets/steak.jpg')}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Steak</Text>
          </TouchableOpacity>
        </View>
      </View>

     
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemsContainer}>
          <TouchableOpacity style={styles.itemCard}>
            <Image
              source={require('../assets/food1.jpg')} 
              style={styles.itemImage}
            />
            <Text style={styles.itemName}>Food 1</Text>
            <Text style={styles.itemPrice}>$1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemCard}>
            <Image
              source={require('../assets/food2.jpg')} 
              style={styles.itemImage}
            />
            <Text style={styles.itemName}>Food 2</Text>
            <Text style={styles.itemPrice}>$2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemCard}>
            <Image
              source={require('../assets/chicken.jpg')}
              style={styles.itemImage}
            />
            <Text style={styles.itemName}>Food 3</Text>
            <Text style={styles.itemPrice}>$3</Text>
          </TouchableOpacity>
        </View>
      </View>

     
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemsContainer}>
          <TouchableOpacity style={styles.itemCard}>
            <Image
              source={require('../assets/food1.jpg')} 
              style={styles.itemImage}
            />
            <Text style={styles.offerText}>10% OFF</Text>
            <Text style={styles.itemName}>Food 4</Text>
            <Text style={styles.itemPrice}>$5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemCard}>
            <Image
              source={require('../assets/khoaitay.jpg')}
              style={styles.itemImage}
            />
            <Text style={styles.itemName}>Food 5</Text>
            <Text style={styles.itemPrice}>$4</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#ccc',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginHorizontal: 16,
    marginBottom: 16,
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  filterButton: {
    backgroundColor: '#FFA500', 
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  filterText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '30%',
    alignItems: 'center',
  },
  categoryImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  viewAllButton: {
    backgroundColor: '#FFA500', 
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  viewAllText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  itemCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 5,
  },
  offerText: {
    position: 'absolute',
    top: 10,
    left: 105,
    backgroundColor: 'red',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    fontSize: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;