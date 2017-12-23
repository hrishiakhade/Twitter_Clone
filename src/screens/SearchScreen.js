import React, { Component } from 'react';
import { Text } from 'react-native';
import HomeFooter from '../components/Footer';
import { Container, View, Header, Icon, } from 'native-base';
import SearchHeader from '../components/SearchHeader';
class SearchScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='search' style={{ color: tintColor }} />
    ),
  }
  render() {
    return (
      <Container>

        <View style={{ flex: 1 }}>
        </View>
        <HomeFooter />
      </Container>
    );
  }
}
export default SearchScreen;
