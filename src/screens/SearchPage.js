import React, { Component } from 'react';
import TextInput from 'react-native';
import {
    Container,
    View,
    Text,
    Header,
    Item,
    Icon,
    Input,
    Button,
    Left,
    Right,
    Body,
    Title
} from 'native-base';

export default class SearchPage extends React.Component {


    render() {
        const { navigate } = this.props.navigation;
        return (




            <Header searchBar style={{ backgroundColor: 'white', elevation: 0 }}>
                <Item onPress={() => this.props.navigation.goBack()}>

                    {/* <Icon name="ios-search" /> */}
                    <Icon name="arrow-back"
                        style={{ color: '#0770D9' }}
                    />
                    <Input
                        autoFocus={true}
                        placeholder='Search Twitter' />
                    {/* <Icon name="ios-people" /> */}

                </Item>


            </Header>
            //<Header placeholder="Search Twitter" keyboardType="default" autoFocus='true' searchBar rounded style={{backgroundColor:'white',elevation:0}}>



        );
    }
};