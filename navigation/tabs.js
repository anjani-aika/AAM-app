import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Accomodation from '../screens/accomodation';
import Events from '../screens/events';
import Profile from '../screens/profile';
import Navigation from '../screens/navigation';
import Notification from '../screens/notification';
import {View, Image} from 'react-native';
import {Icon} from '@rneui/themed';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        tabBarShowLabel: false,
        headerShown: false,
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
              <Icon name="event" />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Accomadation"
        component={Accomodation}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon name="hotel" />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="19 AAM"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon name="home" />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon name="navigation" />
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
              <Icon name="person" />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
