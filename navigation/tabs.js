import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Accomodation from '../screens/accomodation';
import Events from '../screens/events';
import Profile from '../screens/profile';
import Navigation from '../screens/navigation';
import Notification from '../screens/notification';
import {View, Image} from 'react-native';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        style: {
          postion: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 90,
        },
      }}>
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/h4.jpg')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Accomdation"
        component={Accomodation}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/h2.webp')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 35,
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="19th AAM"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../images/bell.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/h1.webp')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
