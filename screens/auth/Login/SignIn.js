import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  LogBox,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import LoginIcon from '../../../assets/images/Job.png';
import VectorSign from '../../../assets/images/vector-sign.png';
import tw from 'twrnc';

const SignIn = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={styles.containerMain}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}>
        <ScrollView>
          <View style={[tw`mx-auto`, styles.topHeader]}>
            <Image style={styles.loginLogo} source={LoginIcon} />
          </View>

          <View style={[tw`mt-12`]}>
            <TextInput
              autoComplete="email"
              style={styles.input}
              label={
                <Text
                  style={{
                    paddingVertical: 5,
                    fontSize: 10,
                    paddingTop: 20,
                    color: '#000',
                  }}>
                  Email Address
                </Text>
              }
              mode="outlined"
              dense={true}
              theme={{colors: {primary: '#002FD6'}}}
              outlineColor="#e6e6e6"
              activeOutlineColor="#03254c"
              selectionColor="#002FD6"
            />

            <TextInput
              style={styles.inputPassword}
              label={
                <Text style={{paddingVertical: 2, fontSize: 10, color: '#000'}}>
                  Password
                </Text>
              }
              mode="outlined"
              dense={true}
              theme={{colors: {primary: '#002FD6'}}}
              secureTextEntry={showPassword}
              right={
                showIcon === true ? (
                  <TextInput.Icon
                    name="eye"
                    style={{fontSize: 5}}
                    color="#000"
                    onPress={() => {
                      setShowPassword(!showPassword);
                      setShowIcon(false);
                    }}
                  />
                ) : (
                  <TextInput.Icon
                    name="eye-off"
                    style={{fontSize: 5}}
                    color="#000"
                    onPress={() => {
                      setShowPassword(!showPassword);
                      setShowIcon(true);
                    }}
                  />
                )
              }
              outlineColor="#e6e6e6"
              activeOutlineColor="#03254c"
            />
          </View>

          <View style={[tw`mb-6`, styles.viewBtn]}>
            <Button
              style={styles.btnReg}
              mode="contained"
              onPress={() => {
                navigation.navigate('HomeTabs');
              }}
              labelStyle={{
                fontFamily: 'Karla-Medium',
                fontSize: 14,
                color: '#fff',
              }}
              contentStyle={{
                width: '100%',
              }}
              loading={loading}>
              Submit
            </Button>
          </View>

          <View style={[tw`mx-auto`, styles.bottomContainer]}>
            <View>
              <Image style={styles.vector} source={VectorSign} />
              <Text style={styles.subText2}>
                © 2020. Affinity Capital. All rights reserved.
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  containerMain: {
    flex: 1,
    backgroundColor: '#003367',
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topHeader: {
    flex: 1,
    alignItems: 'center',
  },
  loginLogo: {
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 100,
  },
  vector: {
    width: 300,
    height: 200,
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 40,
  },
  signInTitle: {
    fontFamily: 'Karla-Medium',
    fontSize: 24,
    color: '#fff',
    marginTop: 20,
  },
  subText2: {
    fontFamily: 'Karla-Light',
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    fontSize: 12,
    color: '#002FD6',
  },
  inputPassword: {
    marginTop: 50,
    backgroundColor: '#fff',
    width: '100%',
    fontSize: 12,
    color: '#002FD6',
  },
  viewBtn: {
    fontFamily: 'Karla-Medium',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 70,
  },
  btnReg: {
    width: '100%',
    backgroundColor: '#002FD6',
    borderColor: '#002FD6',
  },
  bottomContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
