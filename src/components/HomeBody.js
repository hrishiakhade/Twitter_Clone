import React from 'react';
import { CardItem, Card, Left, Thumbnail, Body, Text, Icon, Button, Right, RefreshControl, List, ListItem } from 'native-base';
import { Image, ScrollView } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const HomeBody = () => {

  return (
    <ScrollView
    >
      <Card style={{
        borderBottomColor: 'grey',
        borderBottomWidth: 1, marginBottom: 0, elevation: 0
      }}>
        <CardItem style={{ flexDirection: 'row' }}>
          <Left >
            <Image
              source={require('../img/logo.png')}
              style={styles.logostyle}
            >
            </Image>
            <Body style={{ alignSelf: 'flex-start' }}>
              <Text style={{ fontWeight: 'bold' }}>
                Incredible!ndia
        <Text style={{ color: 'grey', fontWeight: 'normal' }}>
                  {' '} @incrediblein.. 2h
        </Text>
              </Text>
              <Text >Get a stunning panoramic view of Shillong's vistas atop the sublime Laitlum Canyons
               <Text style={{ color: 'blue' }}>{' '}#Meghalaya #Paradise #IncredibleIndia
               </Text>
              </Text>
            </Body>
          </Left>


        </CardItem>
        <CardItem style={{ flexDirection: 'column', paddingTop: 0 }}>
          <Image source={require('../img/home.png')}
            style={styles.post
            }></Image>
        </CardItem>
        <CardItem style={{ alignSelf: 'flex-end', paddingTop: 0, flexDirection: 'row' }}>
          <EvilIcons name='comment' size={27} />
          <Text style={styles.icontext}>{' '}270</Text>
          <EvilIcons name="retweet" size={27} />
          <Text style={styles.icontext}>{' '}476</Text>
          <EvilIcons name='heart' size={27} />
          <Text style={styles.icontext}>{' '}3.2K</Text>
          <EvilIcons name='envelope' size={27} />
          <Text style={styles.icontext}>{' '}</Text>
        </CardItem>
      </Card>






      <Card style={{
        borderBottomColor: 'grey',
        borderBottomWidth: 1, marginBottom: 0, elevation: 0
      }}>
        <CardItem style={{ flexDirection: 'row' }}>
          <Left >
            <Image
              source={require('../img/logo.png')}
              style={styles.logostyle}
            >
            </Image>
            <Body style={{ alignSelf: 'flex-start' }}>
              <Text style={{ fontWeight: 'bold' }}>
                Incredible!ndia
        <Text style={{ color: 'grey', fontWeight: 'normal' }}>
                  {' '} @incrediblein.. 6h
        </Text>
              </Text>
              <Text >Go White water rafting in Zanskar river and experience the spectacular charm of the surrounding landscape.
               <Text style={{ color: 'blue' }}>{' '}#IncredibleIndia
               </Text>
              </Text>
            </Body>
          </Left>


        </CardItem>
        <CardItem style={{ flexDirection: 'column', paddingTop: 0 }}>
          <Image source={require('../img/home3.png')}
            style={styles.post}>
          </Image>
        </CardItem>
        <CardItem style={{ alignSelf: 'flex-end', paddingTop: 0, flexDirection: 'row' }}>
          <EvilIcons name='comment' size={27} />
          <Text style={styles.icontext}>{' '}278</Text>
          <EvilIcons name="retweet" size={27} />
          <Text style={styles.icontext}>{' '}973</Text>
          <EvilIcons name='heart' size={27} />
          <Text style={styles.icontext}>{' '}1.82K</Text>
          <EvilIcons name='envelope' size={27} />
          <Text style={styles.icontext}>{' '}</Text>
        </CardItem>
      </Card>



      <Card style={{
        borderBottomColor: 'grey',
        borderBottomWidth: 1, marginBottom: 0, elevation: 0
      }}>
        <CardItem style={{ flexDirection: 'row' }}>
          <Left >
            <Image
              source={require('../img/logo.png')}
              style={styles.logostyle}
            >
            </Image>
            <Body style={{ alignSelf: 'flex-start' }}>
              <Text style={{ fontWeight: 'bold' }}>
                Incredible!ndia
        <Text style={{ color: 'grey', fontWeight: 'normal' }}>
                  {' '} @incrediblein.. 8h
        </Text>
              </Text>
              <Text >Lose yourself in white sandy beaches, rich coral reefs and lush greenery. Discover another side of life.
               <Text style={{ color: 'blue' }}>{' '}#Havelock #Andaman #IncredibleIndia
               </Text>
              </Text>
            </Body>
          </Left>


        </CardItem>
        <CardItem style={{ flexDirection: 'column', paddingTop: 0 }}>
          <Image source={require('../img/home2.png')}
            style={styles.post}>
          </Image>
        </CardItem>
        <CardItem style={{ alignSelf: 'flex-end', paddingTop: 0, flexDirection: 'row' }}>
          <EvilIcons name='comment' size={27} />
          <Text style={styles.icontext}>{' '}2K</Text>
          <EvilIcons name="retweet" size={27} />
          <Text style={styles.icontext}>{' '}4.7K</Text>
          <EvilIcons name='heart' size={27} />
          <Text style={styles.icontext}>{' '}18K</Text>
          <EvilIcons name='envelope' size={27} />
          <Text style={styles.icontext}>{' '}</Text>
        </CardItem>
      </Card>








      <Card style={{
        borderBottomColor: 'grey',
        borderBottomWidth: 1, marginBottom: 0, elevation: 0
      }}>
        <CardItem style={{ flexDirection: 'row' }}>
          <Left >
            <Image
              source={require('../img/logo.png')}
              style={styles.logostyle

              }
            >
            </Image>
            <Body style={{ alignSelf: 'flex-start' }}>
              <Text style={{ fontWeight: 'bold' }}>
                Incredible!ndia
        <Text style={{ color: 'grey', fontWeight: 'normal' }}>
                  {' '} @incrediblein.. 9h
        </Text>
              </Text>
              <Text >Qutub Minar, a UNESCO World Heritage Site in Mehrauli, New Delhi - with 379 steps - is a true architectural marvel.
               <Text style={{ color: 'blue' }}>{' '}#Heritage #IncredibleIndia
               </Text>
              </Text>
            </Body>
          </Left>


        </CardItem>
        <CardItem style={{ flexDirection: 'column', paddingTop: 0 }}>
          <Image source={require('../img/home4.png')}
            style={styles.post}>
            </Image>
        </CardItem>
        <CardItem style={{ alignSelf: 'flex-end', paddingTop: 0, flexDirection: 'row' }}>
          <EvilIcons name='comment' size={27} />
          <Text style={styles.icontext}>{' '}920</Text>
          <EvilIcons name="retweet" size={27} />
          <Text style={styles.icontext}>{' '}1.2K</Text>
          <EvilIcons name='heart' size={27} />
          <Text style={styles.icontext}>{' '}1.8K</Text>
          <EvilIcons name='envelope' size={27} />
          <Text style={styles.icontext}>{' '}</Text>
        </CardItem>
      </Card>


      <Card style={{
        borderBottomColor: 'grey',
        borderBottomWidth: 1, marginBottom: 0, elevation: 0
      }}>
        <CardItem style={{ flexDirection: 'row' }}>
          <Left >
            <Image
              source={require('../img/logo.png')}
              style={
                styles.logostyle}
            >
            </Image>
            <Body style={{ alignSelf: 'flex-start' }}>
              <Text style={{ fontWeight: 'bold' }}>
                Incredible!ndia
        <Text style={{ color: 'grey', fontWeight: 'normal' }}>
                  {' '} @incredib.. Dec 14
        </Text>
              </Text>
              <Text >Yes! There’s a day to celebrate monkeys and all things simian, and as you might have guessed, it’s called the Monkey Day!
               Is monkeying around allowed on this special day? We are pretty sure it is! So, a very happy
               <Text style={{ color: 'blue' }}>#MonkeyDay</Text> to all of us!
               <Text style={{ color: 'blue' }}>{' '}#WildLife #IncredibleIndia
               </Text>
              </Text>
            </Body>
          </Left>


        </CardItem>
        <CardItem style={{ flexDirection: 'column', paddingTop: 0 }}>
          <Image source={require('../img/home5.png')}
            style={styles.post}></Image>
        </CardItem>
        <CardItem style={{ alignSelf: 'flex-end', paddingTop: 0, flexDirection: 'row' }}>
          <EvilIcons name='comment' size={27} />
          <Text style={styles.icontext}>{' '}562</Text>
          <EvilIcons name="retweet" size={27} />
          <Text style={styles.icontext}>{' '}1K</Text>
          <EvilIcons name='heart' size={27} />
          <Text style={styles.icontext}>{' '}2.5K</Text>
          <EvilIcons name='envelope' size={27} />
          <Text style={styles.icontext}>{' '}</Text>
        </CardItem>
      </Card>


    </ScrollView>
  );
}
const styles = {
  icontext: {
    padding: 10,
    paddingLeft: 0,
    color: 'grey'
  },
  post: {
    width: 260, height: 200, alignSelf: 'flex-end', marginRight: 0, borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  logostyle: {
    height: 60,
    borderRadius: 60,

    width: 60,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  }
};
export default HomeBody;
