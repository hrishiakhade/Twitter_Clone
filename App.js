import React, { Component } from "react";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from './src/screens/SearchScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import MessageScreen from './src/screens/MessageScreen';
import { TabNavigator, StackNavigator, DrawerNavigator } from "react-navigation";
import SideBar from "./src/SideBar/SideBar";
import { ScrollView, View } from 'react-native';
import TabBarStyle from './src/components/TabBarStyle';
import SearchHeader from './src/components/SearchHeader';
import SearchPage from './src/screens/SearchPage';

import { Content, Container, Picker, Button, Text } from 'native-base';

const HomeScreenTab = TabNavigator({
  HomeScreen: { screen: HomeScreen },
  SearchScreen: { screen: SearchScreen },
  NotificationsScreen: { screen: NotificationsScreen },
  MessageScreen: { screen: MessageScreen },
}, {
    tabBarComponent: props => (<TabBarStyle{...props} />),
    tabBarPosition: 'top',
    animationEnabled: true,
    backBehavior: 'none',

    tabBarOptions: {
      activeTintColor: '#0770D9',
      inactiveTintColor: 'grey',
      activeBackgroundColor: "white",
      inactiveBackgroundColor: "#fff",
      showIcon: true,
    },
  });


const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreenTab },
    //Profile: { screen:NavPage},
    // Lists: { screen: NavPage },
    // Moments: { screen: NavPage },
    // Highlights: { screen: NavPage },
    SearchPage:{screen:SearchPage}
  },
  {
    // passing all route info as props to the custom Sidebar component 
    contentComponent: props => <SideBar {...props} />

  },
);


export default class App extends Component<{}> {
  render() {
    return (<HomeScreenRouter />

    );

  }
}

