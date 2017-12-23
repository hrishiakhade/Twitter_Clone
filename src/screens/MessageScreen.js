import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import HomeFooter from '../components/Footer';
import { Container, View, Header, Icon } from 'native-base';

class MessageScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="mail" style={{ color: tintColor }} />
    ),
  }
  render() {
    return (
      <Container>
        <View style={{
          flex: 1, justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            fontWeight: 'bold', fontSize: 30,
          }}>No Messages </Text>
        </View>
        <HomeFooter />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  }
});
export default MessageScreen;
