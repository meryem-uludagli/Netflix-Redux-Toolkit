import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {colors} from '../../theme/colors';
import {SearchNormal1} from 'iconsax-react-native';

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <SearchNormal1 size={24} color={colors.textColor} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a show, movie, genre, etc."
          placeholderTextColor="#666"
        />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Popular Searches</Text>

        {/* Movie Items */}
        <View style={styles.movieContainer}>
          <View style={styles.movieRow}>
            <TouchableOpacity style={styles.movieItem}>
              <Image
                source={require('../../assets/images/film.jpg')}
                style={styles.movieImage}
              />
              <Text style={styles.movieTitle}>Movies</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.movieItem}>
              <Image
                source={require('../../assets/images/Netflix_Multiple_Device.jpg')}
                style={styles.movieImage}
              />
              <Text style={styles.movieTitle}>TV Shows</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.movieRow}>
            <TouchableOpacity style={styles.movieItem}>
              <Image
                source={require('../../assets/images/start.jpeg')}
                style={styles.movieImage}
              />
              <Text style={styles.movieTitle}>Top Rated</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.movieItem}>
              <Image
                source={require('../../assets/images/film.jpg')}
                style={styles.movieImage}
              />
              <Text style={styles.movieTitle}>Trending</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 12,
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 30,
  },
  searchInput: {
    flex: 1,
    color: colors.textColor,
    marginLeft: 10,
    fontSize: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    color: colors.textColor,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20,
  },
  movieContainer: {
    marginTop: 20,
  },
  movieRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  movieItem: {
    width: '47%',
  },
  movieImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  movieTitle: {
    color: colors.textColor,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Search;
