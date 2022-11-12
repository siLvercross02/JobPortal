import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Card, Button, Badge, Searchbar} from 'react-native-paper';
import tw from 'twrnc';

const Dashboard = ({navigation}) => {
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
          <Text style={styles.textDash}>Good morning, John!</Text>
          <Text style={styles.titleDash}>Let's Find Your Dream Job</Text>
        </View>

        <View style={[tw`mt-4 mb-2`]}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>

        <View style={[tw`mt-2 mb-2`]}>
          <Text style={styles.subDash}>Categories</Text>
        </View>
        <ScrollView horizontal={true}>
          <Card style={styles.cardStyle}>
            <Card.Content>
              <View></View>
              <View>
                <Text style={styles.cardText}>Technology</Text>
              </View>
            </Card.Content>
          </Card>
          <Card style={styles.cardStyle}>
            <Card.Content>
              <View></View>
              <View>
                <Text style={styles.cardText}>Finance</Text>
              </View>
            </Card.Content>
          </Card>
          <Card style={styles.cardStyle}>
            <Card.Content>
              <View></View>
              <View>
                <Text style={styles.cardText}>Marketing</Text>
              </View>
            </Card.Content>
          </Card>
          <Card style={styles.cardStyle}>
            <Card.Content>
              <View></View>
              <View>
                <Text style={styles.cardText}>Manufacturing</Text>
              </View>
            </Card.Content>
          </Card>
          <Card style={styles.cardStyle}>
            <Card.Content>
              <View></View>
              <View>
                <Text style={styles.cardText}>Health</Text>
              </View>
            </Card.Content>
          </Card>
        </ScrollView>

        <View style={[tw`mt-2 mb-2`]}>
          <Text style={styles.subDash}>Recommended Jobs For You</Text>
        </View>
        <ScrollView>
          <TouchableOpacity onPress={() => navigation.navigate('ViewJob')}>
            <Card style={styles.jobCardStyle}>
              <Card.Content style={styles.viewCard}>
                <View style={[tw`ml-4`, styles.detailContainer]}>
                  <View>
                    <Text style={styles.listTitle}>Software Engineer</Text>
                    <Text style={styles.companyText}>Facebook</Text>
                    <Text style={styles.subText}>Philippines</Text>
                  </View>
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <Card style={styles.jobCardStyle}>
            <Card.Content style={styles.viewCard}>
              <View style={[tw`ml-4`, styles.detailContainer]}>
                <View>
                  <Text style={styles.listTitle}>Software Engineer</Text>
                  <Text style={styles.companyText}>Facebook</Text>
                  <Text style={styles.subText}>Philippines</Text>
                </View>
              </View>
            </Card.Content>
          </Card>
          <Card style={styles.jobCardStyle}>
            <Card.Content style={styles.viewCard}>
              <View style={[tw`ml-4`, styles.detailContainer]}>
                <View>
                  <Text style={styles.listTitle}>Software Engineer</Text>
                  <Text style={styles.companyText}>Facebook</Text>
                  <Text style={styles.subText}>Philippines</Text>
                </View>
              </View>
            </Card.Content>
          </Card>
          <Card style={styles.jobCardStyle}>
            <Card.Content style={styles.viewCard}>
              <View style={[tw`ml-4`, styles.detailContainer]}>
                <View>
                  <Text style={styles.listTitle}>Software Engineer</Text>
                  <Text style={styles.companyText}>Facebook</Text>
                  <Text style={styles.subText}>Philippines</Text>
                </View>
              </View>
            </Card.Content>
          </Card>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

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
  cardText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '700',
  },
  cardStyle: {
    borderColor: '#002FD6',
    borderLeftWidth: 5,
    borderRightColor: '#000',
    borderRadius: 5,
    padding: 8,
    marginTop: 5,
    marginBottom: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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
  detailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});
