import React from 'react';
import { Image } from 'react-native';
import { Text, Header, Left, Button, Body, Item, Right, Input, Icon, Thumbnail } from 'native-base';
import { } from 'react-navigation';
const SearchHeader = (props) => {
  const { navigation } = props;
  return (
    <Header searchBar style={{ backgroundColor: 'white', elevation: 0 }}>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
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
      <Body >
        <Item rounded style={{ width: 230, height: 35, backgroundColor: '#F1F2F3', alignItems: "center" }}>
          <Icon />

          <Input placeholder='Search Twitter' onFocus={() => navigation.navigate('SearchPage')} />
        </Item>
      </Body>
      <Right>

        <Icon
          name='md-person-add'
          size={26}
          style={{ color: '#0770D9' }}
        />

      </Right>
    </Header>
  );
};
export default SearchHeader;
