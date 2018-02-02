import {StackNavigator} from 'react-navigation';
import Me from '../Me/Me';

const STNavigation = StackNavigator({
   Me: {
     screen: Me
   }
})
export default STNavigation;