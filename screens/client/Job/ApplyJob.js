import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {Icon} from '@rneui/themed';
import {TextInput, Button, Card} from 'react-native-paper';
import tw from 'twrnc';

const ApplyJob = ({route, navigation}) => {
  const [file, setFile] = useState([]);
  const {title, company, location} = route.params;

  console.log('route apply', route);

  const handleUpload = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
      });
      setFile(pickerResult);
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <View style={styles.bgDash}>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="work" type="material" color="#0052e1" size={30} />
          <View style={[tw`ml-4 mt-4`]}>
            <Text style={styles.titleDash}>{title}</Text>
            <Text style={styles.textDash}>{company}</Text>
            <Text style={styles.textDash}>{location}</Text>
          </View>
        </View>

        <View style={[tw`mt-8 mb-2`]}>
          <TextInput
            style={styles.input}
            label={
              <Text
                style={{
                  paddingVertical: 5,
                  fontSize: 10,
                  paddingTop: 20,
                }}>
                Full Name
              </Text>
            }
            mode="outlined"
            dense={true}
            theme={{colors: {primary: '#002FD6'}}}
          />
        </View>

        <View style={[tw`mt-4 mb-2`]}>
          <TextInput
            autoComplete="email"
            style={styles.input}
            label={
              <Text
                style={{
                  paddingVertical: 5,
                  fontSize: 10,
                  paddingTop: 20,
                }}>
                Email Address
              </Text>
            }
            mode="outlined"
            dense={true}
            theme={{colors: {primary: '#002FD6'}}}
          />
        </View>

        <View style={[tw`mt-4 mb-2`]}>
          <TextInput
            style={styles.input}
            label={
              <Text
                style={{
                  paddingVertical: 5,
                  fontSize: 10,
                  paddingTop: 20,
                }}>
                Mobile Number
              </Text>
            }
            mode="outlined"
            dense={true}
            theme={{colors: {primary: '#002FD6'}}}
          />
        </View>

        <View style={[tw`mt-4 mb-2`]}>
          <Card style={styles.cardOutlined}>
            <View style={styles.wrapper}>
              <Text style={styles.uploadText}>Upload Resume</Text>
              <Button
                style={[tw`mt-10 mb-10`, styles.btnUpload]}
                mode="outlined"
                dark={true}
                compact={true}
                onPress={handleUpload}
                theme={{colors: {primary: '#002FD6'}}}
                labelStyle={{
                  fontFamily: 'Karla-Medium',
                  fontSize: 12,
                  color: '#848484',
                }}
                contentStyle={{
                  width: '100%',
                }}>
                Doc, PDF, png, jpeg(max 10 mb)
              </Button>
            </View>
          </Card>
        </View>
      </View>
      <View style={[tw`mx-auto`, styles.bottomContainer]}>
        <View style={[styles.viewBtn]}>
          <Button
            style={styles.btnReg}
            mode="contained"
            onPress={() => {
              navigation.navigate('HomeTabs', {
                screen: 'Dashboard',
                params: {
                  screen: 'Home',
                  params: {
                    screen: 'SuccessScreen',
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
            Submit
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ApplyJob;

const styles = StyleSheet.create({
  bgDash: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 3,
    padding: 20,
  },
  bottomContainer: {
    flex: 1,
    flexWrap: 'wrap',
    // flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  textDash: {
    fontSize: 16,
    color: '#848484',
    fontWeight: '600',
  },
  titleDash: {
    fontSize: 24,
    color: '#002FD6',
    fontWeight: '600',
  },
  subDash: {
    fontSize: 16,
    color: '#002FD6',
    fontWeight: '600',
  },
  requireText: {
    fontSize: 12,
    color: '#848484',
    fontWeight: '600',
  },
  requireTextSub: {
    fontSize: 12,
    color: '#848484',
    fontWeight: '600',
    marginBottom: 5,
  },
  cardTextActive: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '700',
  },
  cardText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '700',
  },
  cardStyleActive: {
    backgroundColor: '#002FD6',
    borderRadius: 7,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  cardStyle: {
    borderRadius: 7,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  jobCardStyle: {
    borderColor: '#002FD6',
    borderLeftWidth: 5,
    borderRightColor: '#000',
    borderRadius: 5,
    padding: 3,
    marginTop: 5,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  jobContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  descWrapper: {
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  listTitle: {
    fontFamily: 'Karla-Medium',
    fontSize: 16,
    color: '#000',
    fontWeight: '700',
    width: 200,
  },
  companyText: {
    fontFamily: 'Karla-Medium',
    fontSize: 14,
    fontWeight: '600',
    color: '#8f8f8f',
  },
  subText: {
    fontFamily: 'Karla-Medium',
    fontSize: 12,
    fontWeight: '400',
    color: '#8f8f8f',
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
  btnUpload: {
    width: '100%',
    backgroundColor: '#fff',
    borderBottomColor: '#848484',
    borderColor: '#848484',
    borderWidth: 1,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    fontSize: 12,
    color: '#002FD6',
  },
  wrapper: {
    padding: 10,
  },
  uploadText: {
    fontSize: 10,
    color: '#848484',
  },
  cardOutlined: {
    borderColor: '#848484',
    borderWidth: 1,
  },
});
