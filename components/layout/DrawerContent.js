import React, {useState} from 'react';
import {Icon} from '@rneui/themed';
import {View, StyleSheet} from 'react-native';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import tw from 'twrnc';

export default function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 30}}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>John Doe</Title>
                <Caption style={styles.caption}>test@gmail.com</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={[tw`mt-8`]}>
            <DrawerItem
              icon={() => (
                <Icon name="home" type="material" color="#0052e1" size={40} />
              )}
              label="Home"
              labelStyle={{
                fontFamily: 'Karla-Medium',
                fontSize: 12,
                color: '#0052e1',
              }}
              //   onPress={() =>
              //     props.navigation.navigate('HomeTabs', {
              //       screen: 'Dashboard',
              //       params: {
              //         screen: 'Dashboard',
              //       },
              //     })
              //   }
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => (
            <Icon name="logout" type="material" color="#0052e1" size={40} />
          )}
          label="Sign Out"
          labelStyle={{
            fontFamily: 'Karla-Medium',
            fontSize: 12,
            color: '#0052e1',
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 14,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 10,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
