import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GETSTARTED, SIGNIN, WATCHLIST} from '../utils/routes';
import StartScreen from '../screens/getStarted';
import SigninScreen from '../screens/signin';
import WatchlistScreen from '../screens/watchList';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={GETSTARTED} component={StartScreen} />
      <Stack.Screen name={SIGNIN} component={SigninScreen} />
      <Stack.Screen name={WATCHLIST} component={WatchlistScreen} />
    </Stack.Navigator>
  );
}
export {StackNavigation};
