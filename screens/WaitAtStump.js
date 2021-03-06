import React from 'react';
import { Text, View,  Image, Button,  ScrollView } from 'react-native';
import styles from '../Styles/Styles';
import * as Animatable from 'react-native-animatable';


export default class WaitAtStumpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quiz_num: 2, //story_num: Math.floor(Math.random() * 10)};
    story_num: 1, };
  }
  static navigationOptions = {
    title: 'M.A.S.H.',
  };


  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const profile = navigation.getParam('profile',{name: "Madelyn",age: "21", color: "Blue",});
    const love_interest = navigation.getParam('love_interest',{ l1: "Harry", l2: "John",l3: "Peter",});
    const cities = navigation.getParam('cities', { c1: "New York",c2: "L.A.", c3: "Nashville",});
    const no_kids = navigation.getParam('no_kids', { n1: 0, n2: 1, n3: 2});
    const professions = navigation.getParam('professions',{ pr1: "Doctor", pr2: "Lawyer",pr3: "programmer",});
    const vehicles = navigation.getParam('vehicles',{ v1: "Car", v2: "Bus",v3: "Truck",});
    const money_in_bank = navigation.getParam('money_in_bank',{ m1: "100", m2: "200",m3: "300",});
    const type_pet = navigation.getParam('type_pet',{ p1: "Cat", p2: "Dog",p3: "Goat",});
    const numbers  = navigation.getParam('number', {quiz_num: 0, story_num: 0});

      //console.log(this.props.navigation.state.params);
    return (
<View style={styles.parentViewStyling}>
      <ScrollView style={styles.textStyling}>
        <Text style={styles.questionStyling}>You think you'd better not try to be a hero.</Text>




    <Text style={styles.storyStyling}>
    {'\t\t'}Apparently the fox isn't too concerned with you not following him because after he leaves,
    he doesn't come back. You sit on the stump for hours, wondering what could take this man so long. 
    </Text>

               <Animatable.View animation="fadeInDown"  direction="alternate" style={{flex: 2}}>
              <Image
            style={{flex:1, height: 350, width: undefined}}
            source={require('../images/tree_stump.png')}
            resizeMethod="resize"
            resizeMode="contain"
          />
      </Animatable.View>

      <Text style={styles.storyStyling}>
    {'\t\t'} It doesn't dawn on you until, well, dawn, that the old man is not coming back. Maybe he
    forgot about you. Or a dragon ate him. Or he's stuck in another dimension. Oh well. It would have been
    cool to have been a real wizard and do magic like in Harry Potter.
     You take your leave of the tired old stump and head back to the hill you came from. {'\n'}

     </Text>


    <Animatable.View animation="slideInUp" style={styles.adventureGroupButtonStyling}>
      <View style={styles.adventureSoloButtonStyling}>
  <Button  title="Head back"  color="#1698bc"  onPress={() =>
      navigate('Wizards', {
      profile: profile,
      mash: {
          M: "Mansion",
          A: "Apartment",
          S: "Shack",
          H: "House",
        },
        number: numbers,
      love_interest: love_interest,
      cities: cities,
     no_kids: no_kids,
  professions: professions,
   vehicles: vehicles,
    money_in_bank: money_in_bank,
  type_pet: type_pet,
     }
    )} />
  </View>
        </Animatable.View>
        </ScrollView>
      </View>




    );
  }
}
