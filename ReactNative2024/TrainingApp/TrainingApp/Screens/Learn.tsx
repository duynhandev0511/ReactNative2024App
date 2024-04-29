import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
class Learn extends Component {
  render() {
    return (
      <View>
        <Text>Chào mừng bạn đến với ứng dụng SAT Chemistry - nguồn tài nguyên toàn diện để bạn chuẩn bị cho kỳ thi một cách hiệu quả nhất</Text>
        <Button title="Bắt đầu" onPress={() => {}} />
      </View>
    );
  }
}


const styles = StyleSheet.create({})
export default Learn;
