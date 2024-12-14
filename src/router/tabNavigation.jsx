import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import NewHot from '../screens/newHot';
import Search from '../screens/search';
import Downloads from '../screens/downloads';
import {DOWNLOADS, HOME, NETHOT, SEARCH} from '../utils/routes';
import TabBarIcon from '../components/router/tabIcon';

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabBarIcon
            focused={focused}
            color={color}
            size={size}
            route={route}
          />
        ),
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={NETHOT} component={NewHot} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={DOWNLOADS} component={Downloads} />
    </Tab.Navigator>
  );
}
export default TabNavigator;
