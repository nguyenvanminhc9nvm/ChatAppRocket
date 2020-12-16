import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  splash_heed: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  splash_heed_title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 7,
    textAlignVertical: 'bottom',
  },
  splash_heed_sub_title: {
    flex: 3,
    fontSize: 10,
    color: 'grey',
    textAlignVertical: 'center',
  },
  splash_arms: {
    flex: 5,
  },
  splash_arms_image: {
    flex: 1,
    resizeMode: 'cover',
  },
  slpash_feet: {
    flex: 1,
    paddingHorizontal: '25%',
  },
  slpash_feet_button_sign_up: {
    borderRadius: 50,
    flex: 1,
  },
  slpash_feet_button_size: {
    flex: 0.75,
  },
  slpash_feet_button_size_sign_in: {
    flex: 0.4,
    alignItems: 'center',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'red',
    shadowOffset: {height: 0, width: 0},
    elevation: 3,
    borderRadius: 50,
  },
  slpash_feet_button: {
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
  },
  slpash_feet_text: {
    flex: 1,
    color: 'white',
    textAlignVertical: 'center',
  },
  slpash_feet_button_sign_in: {
    flex: 2,
    paddingHorizontal: '25%',
  },
  slpash_feet_text_sign_in: {
    flex: 1,
    color: 'black',
    textAlignVertical: 'center',
  },
});

export default styles;
