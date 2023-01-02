import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {Card, Searchbar, DataTable} from 'react-native-paper';
import tw from 'twrnc';
import Jobs from '../../../constants/jobs';
import users from '../../../constants/users';
import courses from '../../../constants/courses';

const optionsPerPage = [2, 3, 4];

const Dashboard = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [jobQuery, setJobsQuery] = useState(Jobs);
  const [listItem, setListItem] = useState([]);
  const [page, setPage] = useState(0);
  const [items, setItems] = useState(10);
  const [usersList, setUsersList] = useState([]);

  console.log(usersList);

  const onChangeSearch = query => {
    setSearchQuery(query);
    const searchJobs = Jobs.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    );

    setJobsQuery(searchJobs);
  };

  useEffect(() => {
    let list = [];

    const finaArray = () => {
      users.forEach(data => {
        courses.forEach(item => {
          if (item.user_id === data.id) {
            list.push({
              id: item.user_id,
              userId: item.id,
              name: data.name,
              phone: data.phone,
              email: data.phone,
              course_name: item.course_name,
              course_selection: item.course_selection,
              semester: item.semester,
            });

            setListItem(list);
          }
        });
      });
    };

    finaArray();
  }, [users, courses]);

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/JCGonzaga01/9c9e3590fb23274263678b6c4bcf9963/raw/600c8281f9db7eaba959a732912eba350bf7387d/user-course-selection.json',
    )
      .then(res => res.json())
      .then(json => setUsersList(json));
  }, [usersList]);

  // useEffect(() => {
  //   const newArray = () => {
  //     const output = Object.values(
  //       listItem.reduce((acc, cur) => {
  //         console.log('acc', acc);
  //         acc[cur.id] = acc[cur.id] || {
  //           id: cur.user_id,
  //           name: cur.name,
  //           phone: cur.phone,
  //           course: [],
  //         };
  //         acc[cur.user_id].course.push({
  //           course_name: cur.course_name,
  //           course_selection: cur.course_selection,
  //           semester: cur.semester,
  //         });
  //         return acc;
  //       }, {}),
  //     );

  //     console.log('outpult', output);
  //   };

  //   newArray();
  // }, [users, courses]);

  // useEffect(() => {
  //   const result = listItem.reduce(
  //     (a, o) => ({
  //       ...a,
  //       ...{
  //         [o.id]: {...o},
  //       },
  //     }),
  //     {},
  //   );

  //   console.log('result', result);
  // }, [listItem]);

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
        {/* <ScrollView>
          {jobQuery.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('HomeTabs', {
                    screen: 'Dashboard',
                    params: {
                      screen: 'Home',
                      params: {
                        screen: 'ViewJobScreen',
                        params: {
                          items: item,
                        },
                      },
                    },
                  });
                }}
                key={index}>
                <Card style={styles.jobCardStyle}>
                  <Card.Content style={styles.viewCard}>
                    <Icon
                      name="work"
                      type="material"
                      color="#0052e1"
                      size={30}
                    />
                    <View style={[tw`ml-4`, styles.detailContainer]}>
                      <View>
                        <Text style={styles.listTitle}>{item.title}</Text>
                        <Text style={styles.companyText}>{item.company}</Text>
                        <Text style={styles.subText}>{item.location}</Text>
                      </View>
                    </View>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            );
          })}
        </ScrollView> */}

        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Phone</DataTable.Title>
            <DataTable.Title>Email</DataTable.Title>
            <DataTable.Title>Course Name</DataTable.Title>
            <DataTable.Title>Course Selection</DataTable.Title>
            <DataTable.Title>Semester</DataTable.Title>
          </DataTable.Header>

          {/* {listItem.map((item, index) => {
            let source = [];

            return (
              <DataTable.Row key={index}>
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell>{item.phone}</DataTable.Cell>
                <DataTable.Cell>{item.email}</DataTable.Cell>
                <DataTable.Cell>{item.course_name}</DataTable.Cell>
                <DataTable.Cell>{item.course_selection}</DataTable.Cell>
                <DataTable.Cell>{item.semester}</DataTable.Cell>
              </DataTable.Row>
            );
          })} */}

          {listItem.map((item, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell>{item.phone}</DataTable.Cell>
                <DataTable.Cell>{item.email}</DataTable.Cell>
                <DataTable.Cell>{item.course_name}</DataTable.Cell>
                <DataTable.Cell>{item.course_selection}</DataTable.Cell>
                <DataTable.Cell>{item.semester}</DataTable.Cell>
              </DataTable.Row>
            );
          })}

          {/* <DataTable.Pagination
            page={page}
            numberOfPages={3}
            onPageChange={page => setPage(page)}
            label="1-2 of 6"
            optionsPerPage={optionsPerPage}
            itemsPerPage={items}
            setItemsPerPage={setItems}
            showFastPagination
            optionsLabel={'Rows per page'}
          /> */}
        </DataTable>
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
  viewCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
