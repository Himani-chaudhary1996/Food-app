import React from 'react';
import { View, Button, StyleSheet,Ima } from 'react-native';
import { withNavigation } from 'react-navigation';
import profile from './images/profile.png'
const NavHeaderLeft = ({ navigation, toScreen, buttonText }) => {
    return (
        <View style={styles.headerButtonContainer}>
            <Button
                 onPress={() => navigation.navigate(toScreen)}
                title={buttonText}
                color="grey"
            >

            </Button>
        </View>

    );
};

const styles = StyleSheet.create({
    headerButtonContainer: {
        marginRight: 10,
       // backgroundColor: "red",
        marginLeft:10
    },
    image: {
        width: 20,
        height: 20
    }
});

export default withNavigation(NavHeaderLeft);
