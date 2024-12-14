import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNEWLIST, GETSTARTED, SIGNIN, TAB, WATCHLIST} from '../utils/routes';
import StartScreen from '../screens/getStarted';
import SigninScreen from '../screens/signin';
import WatchlistScreen from '../screens/watchList';
import AddNewList from '../screens/watchList/addNewList';
import TabNavigator from './tabNavigation';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={GETSTARTED} component={StartScreen} />
      <Stack.Screen name={SIGNIN} component={SigninScreen} />
      <Stack.Screen name={WATCHLIST} component={WatchlistScreen} />
      <Stack.Screen name={ADDNEWLIST} component={AddNewList} />
      <Stack.Screen name={TAB} component={TabNavigator} />
    </Stack.Navigator>
  );
}
export {StackNavigation};
