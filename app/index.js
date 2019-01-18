import React from 'react';
import { createBottomTabNavigator, SafeAreaView, createStackNavigator } from 'react-navigation';
import {
  Component, StyleSheet, Platform, Image, TextInput
  , Button, Text, View, ScrollView, TouchableOpacity, Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

//引用插件

import Otherpage from './page/home/otherpage';
import otherHpage from './page/home/otherHpage';

import Webview from './page/web/Webview';

import QRcode from './page/qrcode/QRvue';


// import Registered from './app/page/registered/Registered';

// import Info from './app/page/home/Dinfo';
const { width, height } = Dimensions.get('window');



class index_Screen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <Top />,
    title: 'Details',

  };

  // 滑动tab
  renderScrollableTab() {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text>Home!</Text>
        <Icon name="battery-full" size={30} color="#900" />
        <Icon name="battery-three-quarters" size={30} color="#900" />
        <Icon name="battery-half" size={30} color="#900" />
        <Icon name="battery-quarter" size={30} color="#900" />
        <Icon name="battery-empty" size={30} color="#900" />
        <Icon name="bed" size={30} color="#900" />
        <Icon name="american-sign-language-interpreting" size={30} color="#777" />

      </View>

    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.container}>
         
          <View style={{ flex: 1 }}>
            {this.renderScrollableTab()}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}






export default createBottomTabNavigator({

  info: { screen: Webview },

  index: { screen: index_Screen },
  Other: { screen: Otherpage },
  QRcode:{screen:QRcode},
  otherHpage:{screen:otherHpage}
  // Registered:{screen:Registered}


}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'QRcode') {
          iconName = "address-card";
        } else if (routeName === 'info') {
          iconName = "android";
        }  else if (routeName === 'otherHpage') {
          iconName = "assistive-listening-systems";

        } else if (routeName === 'IOT') {
          iconName = "expeditedssl";

        } else if (routeName === 'Reply') {
          iconName = "calendar-check";

        } else if (routeName === 'Other') {
          iconName = "expeditedssl";
        } else if (routeName === 'index') {
          iconName = "bell-slash";
        }






        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        return (
             
              <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
       
      );
      },
    }),

    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#FEDFE1',
      },
    },
  },


);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },  background: {
    height: 800,
    width: 600,
    position: 'absolute',
    
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  navLeft: {
    alignItems: 'center',
    marginLeft: 10,
  },
  navRight: {
    alignItems: 'center',
    marginRight: 10,
  },
  navIcon: {
    height: 20,
    width: 20,
  },
  navText: {
    fontSize: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    backgroundColor: '#ededed',
    borderRadius: 5,
    height: 30,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  searchContent: {
    color: '#666',
    fontSize: 14,
  },
  tabBarUnderline: {
    backgroundColor: '#b4282d',
    height: 2,
    width: width / 8,
    marginLeft: 6
  }

});



