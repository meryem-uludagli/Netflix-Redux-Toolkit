import React from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import watchStyle from '../../styles/watchStyle';
import {Edit2} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {ADDNEWLIST, TAB} from '../../utils/routes';

const WatchlistScreen = () => {
  const navigation = useNavigation();
  const profiles = useSelector(state => state.profiles.profiles);
  const dispatch = useDispatch();

  const renderProfile = ({item}) => (
    <TouchableOpacity
      style={watchStyle.profileContainer}
      onPress={() => navigation.replace(TAB)}>
      <Image source={item.image} style={watchStyle.profileImage} />
      <Text style={watchStyle.profileText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={watchStyle.container}>
      <Edit2
        style={watchStyle.icon}
        onPress={() => navigation.navigate(ADDNEWLIST)}
      />

      <View style={watchStyle.headerContainer}>
        <Image
          style={watchStyle.image}
          source={require('../../assets/images/netlogo.png')}
        />
        <Text style={watchStyle.text}>Who’s Watching?</Text>
      </View>

      <FlatList
        data={profiles}
        renderItem={renderProfile}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={watchStyle.gridContainer}
      />
    </View>
  );
};

export default WatchlistScreen;
