import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import NavigationService from '../../navigation/NavigationRef';

interface IState {
  // state object for screen
}

const Splash: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.splash_heed}>
        <Text style={styles.splash_heed_title}>Get Started</Text>
        <Text style={styles.splash_heed_sub_title}>
          Start with signing up or sign in.
        </Text>
      </View>
      <View style={styles.splash_arms}>
        <Image
          source={{
            uri:
              'https://cdn4.vectorstock.com/i/1000x1000/04/83/people-with-smartphone-in-hand-and-chat-vector-16090483.jpg',
          }}
          style={styles.splash_arms_image}
        />
      </View>
      <View style={styles.slpash_feet}>
        <View style={styles.slpash_feet_button_sign_up}>
          <TouchableOpacity style={styles.slpash_feet_button_size}>
            <LinearGradient
              style={styles.slpash_feet_button}
              colors={['#0943BF', '#5095f6', '#5095f6']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={styles.slpash_feet_text}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.slpash_feet_button_sign_in}>
        <TouchableOpacity
          style={styles.slpash_feet_button_size_sign_in}
          onPress={() => {
            NavigationService.navigate('Login');
          }}>
          <Text style={styles.slpash_feet_text_sign_in}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;
