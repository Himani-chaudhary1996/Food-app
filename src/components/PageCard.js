import React from 'react';
import {View, Text, Image, Button, Dimensions, StyleSheet} from 'react-native';
import Config from 'react-native-config';
import {SimpleStepper} from 'react-native-simple-stepper';
import gyoza from './images/gyoza.jpg';
import fried from './images/fried.jpg';
import honey from './images/honey.jpg'
import pork from './images/pork.jpg'
import red from './images/red.jpg'
import rice from './images/rice.jpg'
import salmon from './images/salmon.jpg'
import sesame from './images/sesame.jpg'
import spicy from './images/spicy.jpg'
import tori from './images/tori.jpg'
import vietnam from './images/vietnam.jpg'
import white from './images/white.jpg'

const screenWidth = Dimensions.get('window').width;

const BASE_URL = Config.NGROK_HTTPS_URL;

const PageCard = ({item, qty, qtyChanged, addToCart}) => {
  const {id, image, price} = item;
  return (
    <View style={styles.wrapper}>
      {
            item.path == "gyoza" ?
              <Image
                style={styles.image}
                source={gyoza}

              />
              :
              item.path == "fried" ?
                <Image
                  style={styles.image}
                  source={fried}

                />
                :
                item.path == "honey" ?
                  <Image
                    style={styles.image}
                    source={honey}

                  />
                  :
                  item.path == "pork" ?
                    <Image
                      style={styles.image}
                      source={pork}

                    />
                    :
                    item.path == "red" ?
                      <Image
                        style={styles.image}
                        source={red}

                      />
                      :
                      item.path == "rice" ?
                        <Image
                          style={styles.image}
                          source={rice}

                        />
                        :
                        item.path == "salmon" ?
                          <Image
                            style={styles.image}
                            source={salmon}

                          />
                          :
                          item.path == "sesame" ?
                            <Image
                              style={styles.image}
                              source={sesame}

                            />
                            :
                            item.path == "spicy" ?
                              <Image
                                style={styles.image}
                                source={spicy}

                              />
                              :
                              item.path == "tori" ?
                                <Image
                                  style={styles.image}
                                  source={tori}

                                />
                                :
                                item.path == "vietnam" ?
                                  <Image
                                    style={styles.image}
                                    source={vietnam}

                                  />
                                  :
                                  item.path == "white" ?
                                    <Image
                                      style={styles.image}
                                      source={white}

                                    />
                                    : null


          }

      <View style={styles.smallItemContainer}>
        <Text style={styles.mainText}>{item.name}</Text>
      </View>

      <View style={styles.smallItemContainer}>
        <Text style={styles.subText}>by {item.restaurant.name}</Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.priceText}>${price}</Text>
      </View>

      <View style={styles.smallItemContainer}>
        <Text style={styles.labelText}>How many?</Text>
      </View>

      <View style={styles.itemContainer}>
        <SimpleStepper
          valueChanged={value => qtyChanged(value)}
          initialValue={1}
          minimumValue={1}
          maximumValue={10}
          showText={true}
          containerStyle={styles.stepperContainer}
          incrementImageStyle={styles.stepperButton}
          decrementImageStyle={styles.stepperButton}
          textStyle={styles.stepperText}
        />
      </View>

      <View style={styles.itemContainer}>
        <Button
          onPress={() => {
            addToCart(item, qty);
          }}
          title="Add to Basket"
          color="#c53c3c"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: screenWidth - 20,
    height: 300,
    marginBottom: 5,
  },
  stepperContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    borderColor: '#ccc',
  },
  itemContainer: {
    marginBottom: 20,
  },
  smallItemContainer: {
    marginBottom: 5,
  },
  mainText: {
    fontSize: 20,
  },
  subText: {
    fontSize: 14,
    color: '#3a3a3a',
  },
  priceText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  labelText: {
    fontSize: 18,
    color: '#303540',
  },
  stepperButton: {
    height: 20,
    width: 20,
  },
  stepperText: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default PageCard;