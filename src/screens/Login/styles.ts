import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  login_head: {
    flex: 3,
    alignItems: 'center',
  },
  login_head_title: {
    flex: 7,
    fontSize: 30,
    fontWeight: 'bold',
    textAlignVertical: 'bottom',
  },
  login_head_subtitle: {
    flex: 3,
    paddingHorizontal: '20%',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  login_arms: {
    flex: 5,
  },
  login_arms_email: {
    flex: 1.5,
    marginTop: '5%',
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingHorizontal: '10%',
  },
  login_arms_title: {
    flex: 3,
    fontSize: 10,
    textAlignVertical: 'bottom',
  },
  login_arms_input_email: {
    flex: 6.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_arms_input_email_icon: {
    flex: 0.5,
    tintColor: 'grey',
    resizeMode: 'contain',
    alignItems: 'center',
  },
  login_arms_input_email_text: {
    flex: 9.85,
  },
  login_arms_footer: {
    flex: 0.15,
    backgroundColor: 'grey',
  },
  login_arms_password: {
    flex: 1.5,
    marginTop: '5%',
    paddingHorizontal: '10%',
  },
  login_arms_sign_in: {
    flex: 2.5,
    justifyContent: 'space-around',
  },
  login_arms_sign_in_button: {
    borderRadius: 50,
    backgroundColor: '#0943BF',
    paddingVertical: 15,
    marginHorizontal: '23%',
  },
  login_arms_sign_in_text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  login_arms_forgot_pass_title: {
    flex: 4.5,
    alignItems: 'center',
    color: 'blue',
    textAlign: 'center',
  },
  login_feet: {
    flex: 2,
    textAlign: 'center',
  },
});

export default styles;
