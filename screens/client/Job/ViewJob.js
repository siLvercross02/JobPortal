import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Card, Button} from 'react-native-paper';
import tw from 'twrnc';

const ViewJob = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <ScrollView style={styles.bgDash}>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginTop: 15,
          }}>
          <Text style={styles.titleDash}>Software Engineer</Text>
          <Text style={styles.textDash}>Philippines</Text>
        </View>

        <View style={styles.descWrapper}>
          <Card style={styles.cardStyleActive}>
            <Card.Content>
              <View></View>
              <View>
                <Text style={styles.cardTextActive}>Description</Text>
              </View>
            </Card.Content>
          </Card>
          <Card style={styles.cardStyle}>
            <Card.Content>
              <View></View>
              <View>
                <Text style={styles.cardText}>Company</Text>
              </View>
            </Card.Content>
          </Card>
          <Card style={styles.cardStyle}>
            <Card.Content>
              <View></View>
              <View>
                <Text style={styles.cardText}>Review</Text>
              </View>
            </Card.Content>
          </Card>
        </View>

        <View style={[tw`mt-2 mb-2`]}>
          <Text style={styles.subDash}>Responsibilities</Text>
        </View>

        <View style={[tw`mt-2 mb-2`]}>
          <Text style={styles.requireText}>
            Collaborate with web designers and back-end designers to complete
            projects Create wireframes and mockups of site/application designs
            Turn feedback into custom solutions for client needs Optimize
            apps/sites to improve performance and efficiency Author technical
            documentation
          </Text>
        </View>

        <View style={[tw`mt-2 mb-2`]}>
          <Text style={styles.subDash}>Minimum Qualifications</Text>
        </View>

        <View style={[tw`mt-2 mb-2`]}>
          <Text style={styles.requireTextSub}>
            Bachelor’s degree in Computer Science, Information Technology,
            Mathematics or other related courses. Undergraduates are welcome to
            apply
          </Text>
          <Text style={styles.requireTextSub}>
            Minimum of 1-2 years work experience in front end development
          </Text>
          <Text style={styles.requireTextSub}>
            Experience building functional and effective platforms
          </Text>
          <Text style={styles.requireTextSub}>
            Exposure to a formal working environment with experience in any of
            the following: ReactJS, VueJS, JavaScript, HTML/CSS
          </Text>
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
            }}>
            Apply Now
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewJob;

const styles = StyleSheet.create({
  bgDash: {
    // backgroundColor: '#deebf7'
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
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
});
