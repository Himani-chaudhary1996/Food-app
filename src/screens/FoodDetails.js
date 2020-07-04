import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import  AppContext  from '../../myContext';
import NavHeaderRight from '../components/NavHeaderRight';
import PageCard from '../components/PageCard';

class FoodDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('item').name.substr(0, 12) + '...',
      
      headerRight: (
        <NavHeaderRight toScreen={'OrderSummary'} buttonText={'View Basket'} />
      ),
      
    };
  };

  static contextType = AppContext;

  

  state = {
    qty: 1,
    value:{}
  };

  //

  constructor(props,context) {
    super(props,context);
    const { navigation } = this.props;
    this.item = navigation.getParam('item');
     this.value;
    console.log(this.item)
    console.log(this)

    // this.addToCart=this.addToCart.bind(this)
  }

  qtyChanged = value => {
    const nextValue = Number(value);
    this.setState({ qty: nextValue });
  };

  addToCart = (item, qty) => {
    console.log(this.value)
    const item_id = this.context.cart_items.findIndex(
      el => el.restaurant.id !== item.restaurant.id,
    );
    if (item_id === -1) {
      alert(
        'Added to basket',
        `${qty} ${item.name} was added to the basket.`,
      );
      Alert.alert(
        'Added to basket',
        `${qty} ${item.name} was added to the basket.`,
      );
      this.context.addToCart(item, qty);
    } else {
     
      alert(
        'Cannot add to basket',
        'You can only order from one restaurant for each order.',
      );
      Alert.alert(
        'Cannot add to basket',
        'You can only order from one restaurant for each order.',
      );
    }
  };

  render() {
    const { qty } = this.state;
    return (
      <PageCard
        item={this.item}
        qty={qty}
        qtyChanged={this.qtyChanged}
        addToCart={this.addToCart.bind(this)}
      />
    );
  }
}
//

export default FoodDetails;
