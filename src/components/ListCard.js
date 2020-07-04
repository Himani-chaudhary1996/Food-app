import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
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






const ListCard = ({ item, viewItem, position }) => {
  //const path = require(`./images/${item.image}`)
  console.log(item.path)
  const value = item.path
  return (
    <TouchableOpacity
      onPress={() => {
        viewItem(item);
      }}>
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
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

          {/* /Users/himanichaudhary/Project/Fresh-start/very-special/images/salmon-sashimi.jpg */}
        </View>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  //
};


const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginBottom: 15,
    marginLeft: 15
  },
  imageWrapper: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#303540',
  },
});

export default ListCard;
