import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import * as loginActions from '../../store/actions/loginActions';
import styles from './styles';
import {ILoginState} from '../../models/reducers/login';
import NavigationService from '../../navigation/NavigationRef';

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const [state, setState] = useState({
    user: '',
    password: '',
  });
  const handleChange = (
    name: string,
    {nativeEvent: {eventCount, target, text}},
  ) => {
    setState((prevState) => ({
      ...prevState,
      [name]: text,
    }));
  };
  const authToken = useSelector(
    (state: IState) => state.loginReducer.authToken,
  );
  const dispatch = useDispatch();
  const onLogin = () =>
    dispatch(loginActions.requestLogin(state.user, state.password));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.login_head}>
        <Text style={styles.login_head_title}>Login</Text>
        <Text style={styles.login_head_subtitle}>
          Remember to get up & strecth once in a while - your friends at chat
        </Text>
      </View>
      <View style={styles.login_arms}>
        <View style={styles.login_arms_email}>
          <Text style={styles.login_arms_title}>Email</Text>
          <View style={styles.login_arms_input_email}>
            <Image
              source={require('../../../assets/avatar.png')}
              style={styles.login_arms_input_email_icon}
            />
            <TextInput
              style={styles.login_arms_input_email_text}
              value={state.user}
              onChange={(event) => handleChange('user', event)}
            />
          </View>
          <View style={styles.login_arms_footer} />
        </View>
        <View style={styles.login_arms_password}>
          <Text style={styles.login_arms_title}>Password</Text>
          <View style={styles.login_arms_input_email}>
            <Image
              source={require('../../../assets/padlock.png')}
              style={styles.login_arms_input_email_icon}
            />
            <TextInput
              style={styles.login_arms_input_email_text}
              value={state.password}
              onChange={(event) => handleChange('password', event)}
            />
          </View>
          <View style={styles.login_arms_footer} />
        </View>
        <View style={styles.login_arms_sign_in}>
          <TouchableOpacity
            style={styles.login_arms_sign_in_button}
            onPress={onLogin}>
            <Text style={styles.login_arms_sign_in_text}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.login_arms_forgot_pass_title}>
          <Text>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.login_feet}>this is token{authToken}</Text>
    </SafeAreaView>
  );
};

export default Login;
