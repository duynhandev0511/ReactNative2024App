import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';

const Contact = ({navigation}:any) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.tieude}>Tiện ích</Text>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
            <Image
                source={require('../assets/Images/MessageText1-Bold-60px.png')}
                style={styles.img}
              />
              <Text style={styles.maintext1} >Phản hồi người dùng</Text>
            </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Contactteam')}>
          <View style={styles.boxnew}>
            <View style={styles.mainnews1}>
              <Image
                source={require('../assets/Images/Call-Bold-60px.png')}
                style={styles.img}
              />
              <Text style={styles.maintext1}>Liên hệ đội ngũ</Text>
            </View>
            </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tieude: {
    color: '#696969',
    fontWeight: '700',
    fontSize: 28,
    marginTop: 60,
    marginLeft: 10,
  },
  boxnew: {
    marginTop: 10,
    alignItems: 'center',
  },
  mainnews1: {
    width: 340 ,
    height: 80,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    flexDirection: 'row'
  },
  img: {
    width: 35 ,
    height: 35,
    resizeMode: 'stretch',
    borderRadius: 10,
    marginLeft: 10,
  },
  maintext1: {
    width: '60%',
    color: 'black',
    fontWeight: '500',
    textAlign: 'left',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default Contact;
