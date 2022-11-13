import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {Button} from 'react-native-paper';
import tw from 'twrnc';
import Check from '../../../assets/images/check.png';

const Success = ({navigation}) => {
  return (
    <View style={styles.bgDash}>
      <View style={styles.container}>
        <Image source={Check} style={[tw`mt-12`, styles.image]} />
        <View>
          <Text style={[tw`mt-12`, styles.contentTitle]}>
            Success you've applied a job!
          </Text>
          <Text style={[tw`mt-8`, styles.contentText]}>
            Email confirmation will be sent to your email address.
          </Text>
          <Text style={[styles.contentText]}>
            Kindly check your email address
          </Text>
        </View>
      </View>
      <View style={[tw`mx-auto`, styles.bottomContainer]}>
        <View style={[tw`mb-4`, styles.viewBtn]}>
          <Button
            style={styles.btnReg}
            mode="contained"
            onPress={() => {
              navigation.navigate('HomeTabs', {
                screen: 'Dashboard',
                params: {
                  screen: 'Home',
                  params: {
                    screen: 'DashboardScreen',
                  },
                },
              });
            }}
            labelStyle={{
              fontFamily: 'Karla-Medium',
              fontSize: 14,
              color: '#fff',
            }}
            contentStyle={{
              width: '100%',
            }}>
            Done
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  bgDash: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    flexWrap: 'wrap',
    // flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  contentTitle: {
    fontFamily: 'Karla-Medium',
    fontSize: 20,
    color: '#002FD6',
    fontWeight: '700',
    textAlign: 'center',
  },
  contentText: {
    fontFamily: 'Karla-Medium',
    fontSize: 12,
    color: '#848484',
    fontWeight: '400',
    textAlign: 'center',
  },
  viewBtn: {
    fontFamily: 'Karla-Medium',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  btnReg: {
    width: '100%',
    backgroundColor: '#6ECB95',
    borderColor: '#6ECB95',
  },
  image: {
    width: 100,
    height: 100,
  },
});
