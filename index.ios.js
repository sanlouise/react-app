'use strict';

import RestaurantList from '../Components/RestaurantList'
import Search from '../Components/Search'
import User from '../Components/UserView'


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TabBarIOS,
} from 'react-native';

class RestaurantFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'user'
    };
  }
  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'user'}
              icon={require('./user.png')}
              onPress={() => {
                  this.setState({
                      selectedTab: 'user'
                  });
              }}>
              <User/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'restaurants'}
              icon={require('./res.png')}
              onPress={() => {
                  this.setState({
                      selectedTab: 'restaurants'
                  });
              }}>
              <RestaurantList/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'search'}
            icon={require('./Plus-50.png')}
            onPress={() => {
                this.setState({
                    selectedTab: 'search'
                });
            }}>
            <Search/>
        </TabBarIOS.Item>
      </TabBarIOS>

    );
  }
}


AppRegistry.registerComponent('RestaurantFinder', () => RestaurantFinder);