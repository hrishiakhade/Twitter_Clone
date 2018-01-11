import React from 'react';
import {
    View,
    Container,
    Content,
    List,
    ListItem,
    Text,
    Picker,
    Item,
    Left,
    Right,
    Body,
    Footer,
    FooterTab,
    Button,
    Card,
    CardItem
} from 'native-base';
import { Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

//import NavPage from '../screens/NavPage';
class SideBar extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Container>
                <Content style={{ marginLeft: 0 }}>

                    <Card style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1, marginBottom: 0, elevation: 0
                    }}>

                        <CardItem >


                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', padding: 10 }}>
                                <Image
                                    source={require('../img/india.png')}
                                    style={{
                                        height: 60,
                                        width: 60,
                                        alignSelf: "stretch",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: 100,

                                    }}
                                >
                                </Image>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Hrushikesh Akhade</Text>
                                <Text note>@hrishi_akhade</Text>
                                <Text>  </Text>
                                <View style={{ flexDirection: 'row', }} >
                                    <Text style={{ fontWeight: 'bold', fontSize: 14 }}>37 {' '} </Text>
                                    <Text style={{ fontSize: 14, color: 'grey' }}>Following {' '}</Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{' '} 8 {' '}</Text>
                                    <Text style={{ fontSize: 14, color: 'grey' }}>Followers {' '}</Text>
                                </View>
                            </View>
                        </CardItem>
                    </Card>

                    <Card style={{
                        borderBottomColor: 'grey', elevation: 0,
                        borderBottomWidth: 1, marginBottom: 0
                    }}>
                    
                        <CardItem style={{flexDirection: 'row'}}>
                            <List >
                            
                                <ListItem icon noBorder>
                                    

<View style={{width: 40, flexDirection: 'row', justifyContent: 'center'}}>
        <MaterialIcons name='person-outline' size={26} style={{textAlign: 'center'}}/>
      </View>
<View style={{flex: 1}}>
        <Text>Profile</Text>
      </View>


      
                                </ListItem>
                               

                               <ListItem icon noBorder>
                                    

<View style={{width: 40, flexDirection: 'row', justifyContent: 'center'}}>
        <Ionicons name="ios-list-box-outline" size={26} style={{textAlign: 'center'}}/>
      </View>
<View style={{flex: 1}}>
        <Text>Lists</Text>
      </View>

</ListItem>
      
<ListItem icon noBorder>

      <View style={{width: 40, flexDirection: 'row', justifyContent: 'center'}}>
         <Ionicons name="ios-flash-outline" size={26} style={{textAlign: 'center'}}/>
      </View>
      
<View style={{flex: 1}}>
        <Text>Moments</Text>
      </View>

</ListItem>


                                   
    <ListItem icon noBorder>
    <Left>
      <View style={{width: 40, flexDirection: 'row', justifyContent: 'center'}}>
         <MaterialIcons name="content-copy" size={26}  style={{textAlign: 'center'}}/>
      </View>
      </Left>
<View style={{flex: 0}}>
        <Text style={{marginLeft:-17}}>Hightlights</Text>
      </View>

</ListItem>  
    </List>

                        </CardItem>
                  
                    </Card>   
                  
                                
                                
                               {/* <ListItem icon noBorder >
                                    
                                        <MaterialIcons name="content-copy" size={26} 
                                        style={{ paddingRight: 0 ,textAlign: 'center',justifyContent: 'flex-start'}}/>
                                    


                                    <Text >Hightlights</Text>

                                    

                                </ListItem>*/}

                       

 
                    <Card style={{
                        borderBottomColor: 'grey', elevation: 0,
                        borderBottomWidth: 1, marginBottom: 0
                    }}>
                        <CardItem style={{flexDirection: 'row'}}>
                            <List>
                                <ListItem noBorder>
                                    <Text>Settings and Privacy</Text>
                                </ListItem>
                                <ListItem noBorder>
                                    <Text>Help Center</Text>
                                </ListItem>
                            </List>
                        </CardItem>
                    </Card>
                   
                



                {/* <Footer style={{backgroundColor: 'transparent'}}>
                    <ListItem icon noBorder >
                        <Left>
                            <Icon name={'moon-o'}  />
                        </Left>
                        <Body>
                        </Body>
                        <Right>
                            <Icon name="qrcode" />
                        </Right>
                    </ListItem>
                </Footer> */}




                <Footer style={{ backgroundColor: 'transparent', height: 35 }}>
                    <Left>
                        <Button transparent style={{ paddingLeft: 10 }}>
                            <Icon
                                name='moon-o'
                                size={26}
                                style={{ color: '#0770D9' }} />
                        </Button>
                    </Left>
                    <Body>
                        <Text> </Text>
                    </Body>
                    <Right>
                        <Button transparent style={{ paddingRight: 10 }}>
                            <Icon
                                name='qrcode'
                                size={26}
                                style={{ color: '#0770D9' }} />
                        </Button>
                    </Right>
                </Footer>



</Content>
            </Container>

        );
    }
};
export default SideBar;
