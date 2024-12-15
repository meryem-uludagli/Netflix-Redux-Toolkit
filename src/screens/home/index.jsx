import {FlatList, Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import HomePage from '../../styles/homePage';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCategories,
  getTopRatedMovies,
} from '../../store/actions/movieActions';
import CategoryItem from '../../components/movie/categoryItem';
import {Add, InfoCircle, Play} from 'iconsax-react-native';

const Home = () => {
  const {topRatedMovies, categories} = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <View style={HomePage.container}>
      <FlatList
        horizontal
        data={categories}
        renderItem={({item}) => <CategoryItem item={item} />}
      />
      <Image
        source={require('../../assets/images/film.jpg')}
        style={HomePage.image}
      />
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
    </View>
  );
};

export default Home;
