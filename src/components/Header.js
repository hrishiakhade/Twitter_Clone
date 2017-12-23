import { Image } from 'react-native';
import React, { Component } from 'react';
import { Header, Left, Body, Icon, Title, Button, Thumbnail } from 'native-base';
import HomeScreen from '../screens/HomeScreen';
const HomeHeader = (props) => {
  const { navigation } = props;
  return (

    <Header style={{ backgroundColor: 'white', elevation: 0 }} hasTabs='true'>
      <Left>

        <Button transparent onPress={() => navigation.navigate('DrawerOpen', {})}>
          <Image
            source={require('../img/india.png')}
            style={{
              height: 38,
              width: 38,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",

            }}
          >
          </Image>
        </Button>
      </Left>
      <Body>
        <Title style={{ color: 'black' }}>Home</Title>
      </Body>

    </Header>

  );

}
export default HomeHeader;
