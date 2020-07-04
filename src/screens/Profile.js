import React, { Component, Profiler } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    FlatList,
    StyleSheet,
    Image
} from 'react-native';
import axios from 'axios';
import profile from '../components/images/profile.png'
import Config from 'react-native-config';
import { color } from 'react-native-reanimated';

//const BASE_URL = Config.NGROK_HTTPS_URL;

class Profile extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Profile',
            headerStyle: { backgroundColor: 'orange' },
            // headerTitleStyle: { color: 'green', alignSelf: 'center', },
        };
    };
    render() {
        return (
            <View style={styles.wrapper}>
            <View >
                <Image
                    style={styles.image}
                    source={profile}
                />
           </View>

           <View>
               <Text style={styles.info}>
                 Himani Chaudhary 
                 
               </Text>
           </View>
           <View >
               <Text style={styles.info}>
                   7060946938
                   
               </Text>
           </View>
           <View >
               <Text style={styles.info}>
               Sihani 
                Saddiq Nagar
               Ghaziabad Up
                201003 
                   
               </Text>
           </View>
           <View   style={styles.noOrder} >
              <Button
              title=" No Past Order Have Some"
              onPress={() => this.props.navigation.navigate('FoodList')}
              >
             
              </Button>
              
               
           </View>
           </View>
           

        );

    }


}

const styles = StyleSheet.create({
    headerButtonContainer: {
        marginRight: 10,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
    },
    info:{
        paddingTop:50,
      fontWeight:"500",
      color:"red",
      fontSize:30
    },
    noOrder:{
       backgroundColor:"orange",
        color:"red",
        marginTop:30,
        
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
    image: {
        width: 300,
        height: 300,
        marginBottom: 5,
    },
});

export default Profile