import React from 'react';
import HomeHeader from './Header';
import SearchHeader from './SearchHeader';
import MessageHeader from './MessageHeader';
import NotificationHeader from './NotificationHeader';
import { StyleSheet, Platform, Text, TouchableNativeFeedback, View, ScrollView, Animated } from 'react-native';
import { Content, Header, Left, Body, Icon, Image, Right, Button, Title } from 'native-base';

class TabBarStyle extends React.Component {
  constructor() {
    super();
    this.state = {
      home: false,
      search: false,
      notification: false,
      message: false,
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  };
  onButtonPress(tabKey) {
    if (tabKey == 'SearchScreen') {
      this.setState({ search: true });
    } else {
      this.setState({ search: false });

    }
    if (tabKey == 'HomeScreen') {
      this.setState({ home: false });
    } else {
      this.setState({ home: true });

    }
    if (tabKey == 'NotificationsScreen') {
      this.setState({ notification: true });
    } else {
      this.setState({ notification: false });

    }
    if (tabKey == 'MessageScreen') {
      this.setState({ message: true });
    } else {
      this.setState({ message: false });

    }
  }
  render() {
    const {
    navigation,
      renderIcon,
      activeTintColor,
      inactiveTintColor,
      jumpToIndex
        } = this.props;
    const { routes } = navigation.state;
    let head = null;
    if (this.state.search) {
      head = <SearchHeader navigation={navigation} />
    } if (this.state.message) {
      head = <MessageHeader navigation={navigation} />;
    }
    if (this.state.notification) {
      head = <NotificationHeader navigation={navigation} />;
    } if (!this.state.home) {
      head = <HomeHeader navigation={navigation} />;
    }
    return (
      <View>
        {head}
        <View style={styles.tabbar}>
          {routes && routes.map((route, index) => {
            const focused = index === navigation.state.index;
            const tintColor = focused ? activeTintColor : inactiveTintColor;
            const tabKey = route.key;
            return (
              <TouchableNativeFeedback
                key={route.key}
                style={styles.tab}
                // on pressing of tabs route to that screen and also update state when search tab pressed
                onPress={() => { jumpToIndex(index); this.onButtonPress(tabKey) }}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.tab}>
                  {renderIcon({
                    route,
                    index,
                    focused,
                    tintColor
                  })}
                </View>
              </TouchableNativeFeedback>
            );
          })}
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  tabbar: {
    height: 40,
    flexDirection: 'row',
    borderBottomColor: '#0770D9',
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  tab: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

});

export default TabBarStyle;