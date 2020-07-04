import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

import Config from 'react-native-config';
import NavHeaderLeft from '../components/NavHeaderLeft';
import NavHeaderRight from '../components/NavHeaderRight';
import ListCard from '../components/ListCard';
const BASE_URL = Config.NGROK_HTTPS_URL;

class FoodList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Hungry? Grab it',
      headerStyle: { backgroundColor: 'orange' },
      headerTitleStyle: { color: 'green',alignSelf: 'center', },
      headerLeft:(
        <NavHeaderLeft toScreen={'Profile'} buttonText={'Profile'} />
      ),
      headerRight: (
        <NavHeaderRight toScreen={'OrderSummary'} buttonText={'View Basket'} />
      ),
    };
  };
  //

  state = {
    foods: [],
    foodsVer:[],
    query: '',
  };
  //

  async componentDidMount() {
    try {
      const foods_response =  [
       
        {
          id: 1,
          name: 'Spicy Teriyaki',
          price: 19.25,
          image: 'spicy-teriyaki.jpg',
          path:  'spicy',
          restaurant: {
            id: 25,
            name: 'MIZ Japanese Restaurant',
            address: '17 Kampong Bahru Rd, Singapore 169347',
            location: [16.618037, 120.3146543],
          },
        },
        {
          id: 2,
          name: 'Honey Garlic Chicken',
          price: 5.5,
          image: 'honey-garlic-chicken.jpg',
          restaurant_id: 26,
          path:'honey',
          restaurant: {
            id: 26,
            name: 'Everton Food Place',
            address: '7 Everton Park, Singapore 080007',
            location: [1.2773164, 103.8384773],
          },
        },
        {
          id: 3,
          name: 'La-La White Bee Hoon',
          price: 15.94,
          image: 'white-bee-hoon.jpg',
          path:'white',
          restaurant: {
            id: 27,
            name: 'Botany Robertson Quay',
            address: '86, #01-03 Robertson Quay, Singapore 238245',
            location: [1.2900394, 103.8351518],
          },
        },
        {
          id: 4,
          name: 'Sesame Chicken Noodle',
          price: 15.94,
          image: 'sesame-chicken-noodle.jpg',
          restaurant_id: 28,
          restaurant: 'Hai Tien Lo',
          location: [1.292396, 103.8562925],
          path:'sesame'
        },
        {
          id: 5,
          name: 'Fried Mee Sua with Shrimps and Scallop',
          price: 15.94,
          image: 'fried-mee-sua.jpg',
          path:'fried',
          restaurant: {
            id: 29,
            name: 'Imperial Treasure Super Peking Duck',
            address: '7 Raffles Blvd, Singapore 039595',
            location: [1.3033948, 103.833346],
          },
        },
        {
          id: 6,
          name: ' Vegetables',
          price: 10.5,
          image: 'pork-with-veggies.jpg',
          path:'pork',
          restaurant: {
            id: 30,
            name: 'Pek Kio Market & Food Centre',
            address: '41 Cambridge Rd, Singapore 210041',
            location: [1.3161213, 103.8480768],
          },
        },
        {
          id: 7,
          name: 'Egg Noodles',
          price: 12.9,
          image: 'red-bbq-pork-noodles.jpg',
          path:'red',
          restaurant: {
            id: 31,
            name: 'Kim Keat Hokkien Mee',
            address: '92 Lor 4 Toa Payoh, Singapore 310092',
            location: [1.3380931, 103.8490967],
          },
        },
        {
          id: 8,
          name: 'Vietnamese Pho',
          price: 70,
          image: 'vietnamese-pho.jpg',
          path:'vietnam',
          restaurant: {
            id: 32,
            name: 'Mrs Pho',
            address: '221 Rangoon Rd, Singapore 218459',
            location: [1.2643737, 103.8201297],
          },
        },
        {
          id: 9,
          name: 'Rice with Roasted ',
          price: 20.1,
          image: 'rice-with-roasted-pork.jpg',
          path:'rice',
          restaurant: {
            id: 34,
            name: 'Seah Im Food Centre',
            address: '2 Seah Im Rd, Singapore 099114',
            location: [1.2664712, 103.8173126],
          },
        },
        {
          id: 10,
          name: 'Tori Karaage',
          price: 30,
          image: 'tori-karaage.jpg',
          path:'tori',
          restaurant: {
            id: 35,
            name: 'Tatsuya',
            address: '22 Scotts Rd, Goodwood Park Hotel, Singapore 228221',
            location: [1.3084636, 103.8317653],
          },
        },
        {
          id: 11,
          name: 'Salmon Sashimi',
          price: 80,
          image: 'salmon-sashimi.jpg',
          path:'salmon',
          restaurant: {
            id: 35,
            name: 'Tatsuya',
            address: '22 Scotts Rd, Goodwood Park Hotel, Singapore 228221',
            location: [1.3084636, 103.8317653],
          },
        },
        {
          id: 12,
          name: 'Gyoza',
          price: 40.99,
          image: 'gyoza.jpg',
          path:'gyoza',
          restaurant: {
            id: 35,
            name: 'Tatsuya',
            address: '22 Scotts Rd, Goodwood Park Hotel, Singapore 228221',
            location: [1.3084636, 103.8317653],
          },
        },
        {
          id: 1,
          name: 'Spicy Teriyaki',
          price: 19.25,
          image: 'spicy-teriyaki.jpg',
          path:  'spicy',
          restaurant: {
            id: 25,
            name: 'MIZ Japanese Restaurant',
            address: '17 Kampong Bahru Rd, Singapore 169347',
            location: [16.618037, 120.3146543],
          },
        },
        {
          id: 2,
          name: 'Honey Garlic Chicken',
          price: 5.5,
          image: 'honey-garlic-chicken.jpg',
          restaurant_id: 26,
          path:'honey',
          restaurant: {
            id: 26,
            name: 'Everton Food Place',
            address: '7 Everton Park, Singapore 080007',
            location: [1.2773164, 103.8384773],
          },
        },
        {
          id: 3,
          name: 'La-La White Bee Hoon',
          price: 15.94,
          image: 'white-bee-hoon.jpg',
          path:'white',
          restaurant: {
            id: 27,
            name: 'Botany Robertson Quay',
            address: '86, #01-03 Robertson Quay, Singapore 238245',
            location: [1.2900394, 103.8351518],
          },
        },
        {
          id: 4,
          name: 'Sesame Chicken Noodle',
          price: 15.94,
          image: 'sesame-chicken-noodle.jpg',
          restaurant_id: 28,
          restaurant: 'Hai Tien Lo',
          location: [1.292396, 103.8562925],
          path:'sesame'
        },
        {
          id: 5,
          name: 'Fried Mee Sua with Shrimps and Scallop',
          price: 15.94,
          image: 'fried-mee-sua.jpg',
          path:'fried',
          restaurant: {
            id: 29,
            name: 'Imperial Treasure Super Peking Duck',
            address: '7 Raffles Blvd, Singapore 039595',
            location: [1.3033948, 103.833346],
          },
        },
        {
          id: 6,
          name: ' Vegetables',
          price: 10.5,
          image: 'pork-with-veggies.jpg',
          path:'pork',
          restaurant: {
            id: 30,
            name: 'Pek Kio Market & Food Centre',
            address: '41 Cambridge Rd, Singapore 210041',
            location: [1.3161213, 103.8480768],
          },
        },
        {
          id: 7,
          name: 'Egg Noodles',
          price: 12.9,
          image: 'red-bbq-pork-noodles.jpg',
          path:'red',
          restaurant: {
            id: 31,
            name: 'Kim Keat Hokkien Mee',
            address: '92 Lor 4 Toa Payoh, Singapore 310092',
            location: [1.3380931, 103.8490967],
          },
        },
        {
          id: 8,
          name: 'Vietnamese Pho',
          price: 70,
          image: 'vietnamese-pho.jpg',
          path:'vietnam',
          restaurant: {
            id: 32,
            name: 'Mrs Pho',
            address: '221 Rangoon Rd, Singapore 218459',
            location: [1.2643737, 103.8201297],
          },
        },
        {
          id: 9,
          name: 'Rice with Roasted ',
          price: 20.1,
          image: 'rice-with-roasted-pork.jpg',
          path:'rice',
          restaurant: {
            id: 34,
            name: 'Seah Im Food Centre',
            address: '2 Seah Im Rd, Singapore 099114',
            location: [1.2664712, 103.8173126],
          },
        },
        {
          id: 10,
          name: 'Tori Karaage',
          price: 30,
          image: 'tori-karaage.jpg',
          path:'tori',
          restaurant: {
            id: 35,
            name: 'Tatsuya',
            address: '22 Scotts Rd, Goodwood Park Hotel, Singapore 228221',
            location: [1.3084636, 103.8317653],
          },
        },
        {
          id: 11,
          name: 'Salmon Sashimi',
          price: 80,
          image: 'salmon-sashimi.jpg',
          path:'salmon',
          restaurant: {
            id: 35,
            name: 'Tatsuya',
            address: '22 Scotts Rd, Goodwood Park Hotel, Singapore 228221',
            location: [1.3084636, 103.8317653],
          },
        },
        {
          id: 12,
          name: 'Gyoza',
          price: 40.99,
          image: 'gyoza.jpg',
          path:'gyoza',
          restaurant: {
            id: 35,
            name: 'Tatsuya',
            address: '22 Scotts Rd, Goodwood Park Hotel, Singapore 228221',
            location: [1.3084636, 103.8317653],
          },
        },
      
      ];;
      const foods_resp =  [
        {
          id: 3,
          name: 'La-La White Bee Hoon',
          price: 15.94,
          image: 'white-bee-hoon.jpg',
          path:'white',
          restaurant: {
            id: 27,
            name: 'Botany Robertson Quay',
            address: '86, #01-03 Robertson Quay, Singapore 238245',
            location: [1.2900394, 103.8351518],
          },
        },
        {
          id: 6,
          name: ' Vegetables',
          price: 10.5,
          image: 'pork-with-veggies.jpg',
          path:'pork',
          restaurant: {
            id: 30,
            name: 'Pek Kio Market & Food Centre',
            address: '41 Cambridge Rd, Singapore 210041',
            location: [1.3161213, 103.8480768],
          },
        },
        {
          id: 9,
          name: 'Rice with Roasted ',
          price: 20.1,
          image: 'rice-with-roasted-pork.jpg',
          path:'rice',
          restaurant: {
            id: 34,
            name: 'Seah Im Food Centre',
            address: '2 Seah Im Rd, Singapore 099114',
            location: [1.2664712, 103.8173126],
          },
        },
        {
          id: 10,
          name: 'Tori Karaage',
          price: 30,
          image: 'tori-karaage.jpg',
          path:'tori',
          restaurant: {
            id: 35,
            name: 'Tatsuya',
            address: '22 Scotts Rd, Goodwood Park Hotel, Singapore 228221',
            location: [1.3084636, 103.8317653],
          },
        },
        {
          id: 11,
          name: 'Salmon Sashimi',
          price: 80,
          image: 'salmon-sashimi.jpg',
          path:'salmon',
          restaurant: {
            id: 35,
            name: 'Tatsuya',
            address: '22 Scotts Rd, Goodwood Park Hotel, Singapore 228221',
            location: [1.3084636, 103.8317653],
          },
        },
        {
          id: 12,
          name: 'Gyoza',
          price: 40.99,
          image: 'gyoza.jpg',
          path:'gyoza',
          restaurant: {
            id: 35,
            name: 'Tatsuya',
            address: '22 Scotts Rd, Goodwood Park Hotel, Singapore 228221',
            location: [1.3084636, 103.8317653],
          },
        },
        {
          id: 1,
          name: 'Spicy Teriyaki',
          price: 19.25,
          image: 'spicy-teriyaki.jpg',
          path:  'spicy',
          restaurant: {
            id: 25,
            name: 'MIZ Japanese Restaurant',
            address: '17 Kampong Bahru Rd, Singapore 169347',
            location: [16.618037, 120.3146543],
          },
        },
        {
          id: 2,
          name: 'Honey Garlic Chicken',
          price: 5.5,
          image: 'honey-garlic-chicken.jpg',
          restaurant_id: 26,
          path:'honey',
          restaurant: {
            id: 26,
            name: 'Everton Food Place',
            address: '7 Everton Park, Singapore 080007',
            location: [1.2773164, 103.8384773],
          },
        },
       
        {
          id: 4,
          name: 'Sesame Chicken Noodle',
          price: 15.94,
          image: 'sesame-chicken-noodle.jpg',
          restaurant_id: 28,
          restaurant: 'Hai Tien Lo',
          location: [1.292396, 103.8562925],
          path:'sesame'
        },
        {
          id: 5,
          name: 'Fried Mee Sua with Shrimps and Scallop',
          price: 15.94,
          image: 'fried-mee-sua.jpg',
          path:'fried',
          restaurant: {
            id: 29,
            name: 'Imperial Treasure Super Peking Duck',
            address: '7 Raffles Blvd, Singapore 039595',
            location: [1.3033948, 103.833346],
          },
        },
        
        {
          id: 7,
          name: 'Egg Noodles',
          price: 12.9,
          image: 'red-bbq-pork-noodles.jpg',
          path:'red',
          restaurant: {
            id: 31,
            name: 'Kim Keat Hokkien Mee',
            address: '92 Lor 4 Toa Payoh, Singapore 310092',
            location: [1.3380931, 103.8490967],
          },
        },
        {
          id: 8,
          name: 'Vietnamese Pho',
          price: 70,
          image: 'vietnamese-pho.jpg',
          path:'vietnam',
          restaurant: {
            id: 32,
            name: 'Mrs Pho',
            address: '221 Rangoon Rd, Singapore 218459',
            location: [1.2643737, 103.8201297],
          },
        },
       
      
      ];;


      this.setState({
        foods: foods_response,
        foodsVer:foods_resp
      });
    } catch (err) {
      console.log('err: ', err);
    }
  }

  onChangeQuery = text => {
    this.setState({
      query: text,
    });
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: 30,
          backgroundColor: "blue",
          margin: 10
        }}
      >
       <Text>

       </Text>
      </View>
    );
  };
  render() {
    const { foods, query,foodsVer } = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.topWrapper}>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.textInput}
              onChangeText={this.onChangeQuery}
              value={query}
              placeholder={'What are you craving for?'}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              onPress={() => this.filterList()}
              title="Go"
              color="#c53c3c"
            />
          </View>
        </View>

        <FlatList
          data={foodsVer}
          renderItem={this.renderFood}
          contentContainerStyle={styles.list}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
         // ItemSeparatorComponent={this.renderSeparator}
        />
        <FlatList
          data={foods}
          renderItem={this.renderFoodViertical}
          contentContainerStyle={styles.list}
          keyExtractor={item => item.id.toString()}
        //  numColumns={2}
         // ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    ); f
  }
  //

  filterList = async () => {
    const { query } = this.state;
    const foods_response = await axios.get(`${BASE_URL}/foods?query=${query}`);
    console.log(foods_response);
    this.setState({
      foods: foods_response.data.foods,
      query: '',
    });
  };

  viewItem = item => {
    this.props.navigation.navigate('FoodDetails', {
      item,
    });
  };

  renderFood = ({ item }) => {
     return <ListCard item={item} viewItem={this.viewItem} />;
  };
  renderFoodViertical = ({ item }) => {
    return <ListCard item={item} viewItem={this.viewItem} position={"vertical"} />;
 };
}
//

const styles = StyleSheet.create({
  headerButtonContainer: {
    marginRight: 10,
  },
  wrapper: {
    flex: 1,
    padding: 10,
  },
  topWrapper: {
    flexDirection: 'row',
  },
  textInputWrapper: {
    flex: 4,
  },
  textInput: {
    height: 35,
    borderColor: '#5d5d5d',
    borderWidth: 1,
  },
  buttonWrapper: {
    flex: 1,
  },
  list: {
    marginTop: 20,
  },
});

export default FoodList;