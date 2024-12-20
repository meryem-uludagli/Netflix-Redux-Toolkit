import {ScrollView, Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCategories,
  getTopRatedMovies,
} from '../../store/actions/movieActions';
import {Add, InfoCircle, Play} from 'iconsax-react-native';
import Categories from '../../widgets/categories';
import HomePage from '../../styles/homePage';
import Sections from '../../widgets/sections';

const Home = () => {
  const {topRatedMovies, categories} = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTopRatedMovies());
  }, []);

  return (
    <ScrollView contentContainerStyle={HomePage.scrollContainer}>
      {/* Categories */}
      <Categories />

      {/* Film Afişi */}
      <Image
        source={require('../../assets/images/film.jpg')}
        style={HomePage.image}
      />

      {/* Icons */}
      <View style={HomePage.iconContainer}>
        {/* Add */}
        <View style={HomePage.iconGroup}>
          <Add size={32} style={HomePage.icon} />
          <Text style={HomePage.text}>My List</Text>
        </View>

        {/* Play */}
        <View style={HomePage.playContainer}>
          <Play size={32} style={HomePage.playicon} />
          <Text style={HomePage.playtext}>Play</Text>
        </View>

        {/* InfoCircle */}
        <View style={HomePage.iconGroup}>
          <InfoCircle size={32} style={HomePage.icon} />
          <Text style={HomePage.text}>Info</Text>
        </View>
      </View>

      {/* Sections */}
      <Sections />
    </ScrollView>
  );
};

export default Home;
