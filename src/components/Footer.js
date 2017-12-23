import React from 'react';
import { Footer, FooterTab, Button, Text, Right, Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HomeFooter = () => {
  return (
    <Footer style={{ backgroundColor: 'white', borderTopWidth: 1, borderTopColor: 'grey', height: 40 }}>
      <FooterTab>
        <Button style={{ backgroundColor: 'white' }}>
          <Text uppercase={false} style={{ color: '#0770D9', fontSize: 13, fontWeight: 'bold' }}>All</Text>
        </Button>
        <Button style={{ backgroundColor: 'white', }}>
          <Text uppercase={false} style={{ color: 'grey', fontSize: 13, fontWeight: 'bold' }}>Mentions</Text>
        </Button>

      </FooterTab>
      <Right>
        <Button transparent style={{ paddingRight: 15 }}>
          <Ionicons
            name="ios-settings-outline"
            size={30}
            style={{ color: '#0770D9' }} />
        </Button>
      </Right>
    </Footer>
  );
}
export default HomeFooter;
