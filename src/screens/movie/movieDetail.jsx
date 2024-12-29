import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import MovieDetStyle from '../../styles/movieDetailStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieData} from '../../store/actions/movieActions';
import {IMAGE_BASE_URL} from '../../service/urls';
import {colors} from '../../theme/colors';

const {width, height} = Dimensions.get('window');
const MovieDetail = ({route}) => {
  const {movieId} = route?.params;
  const {pendingDetailData, movieDetailData} = useSelector(
    state => state.movies,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMovieData({
        movieId: movieId,
      }),
    );
  }, []);

  return (
    <View style={MovieDetStyle.container}>
      {pendingDetailData ? (
        <View>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ScrollView>
          <Image
            source={{uri: IMAGE_BASE_URL + movieDetailData?.backdrop_path}}
            style={styles.img}
          />
          <Text style={styles.title}>{movieDetailData.original_title}</Text>
        </ScrollView>
      )}
    </View>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  img: {
    width: width,
    height: height / 2,

    borderRadius: 5,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textColor,
  },
});
