import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DOWNLOADS, HOME, NETHOT, SEARCH} from '../../utils/routes';
import {
  ArrowCircleDown2,
  Home2,
  SearchNormal1,
  VideoPlay,
} from 'iconsax-react-native';
import Home from '../../screens/home';

const TabBarIcon = ({route, color, size}) => {
  switch (route.name) {
    case HOME:
      return <Home2 color={color} size={size} />;
    case NETHOT:
      return <VideoPlay color={color} size={size} />;
    case SEARCH:
      return <SearchNormal1 color={color} size={size} />;
    case DOWNLOADS:
      return <ArrowCircleDown2 color={color} size={size} />;
    default:
      <Home />;
  }
};

export default TabBarIcon;

const styles = StyleSheet.create({});
