import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class Explore extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Chào mừng bạn đến với ứng dụng SAT Chemistry - nguồn tài nguyên toàn diện để bạn chuẩn bị cho kỳ thi một cách hiệu quả nhất</Text>
        <Button title="Bắt đầu" onPress={() => {}} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000'
},
})
export default Explore;
