import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Devteam = ({navigation}:any) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.tieude}>Đội ngũ phát triển</Text>
          <View style={styles.boxnews}>
            <View style={styles.mainnews}>
              <Image
                source={require('../assets/Images/CodeCircle-Broken-80px.png')}
                style={styles.imgnews}
              />
              <Text style={styles.maintext}>Trần Duy Nhân</Text>
              <Text style={styles.maintext1}>Lập trình viên</Text>
              <Text style={styles.maintext1}>0905935377</Text>
            </View>
          </View>

          <View style={styles.boxnews}>
            <View style={styles.mainnews}>
              <Image
                source={require('../assets/Images/CodeCircle-Broken-80px.png')}
                style={styles.imgnews}
              />
              <Text style={styles.maintext}>Trương Thành Đạt</Text>
              <Text style={styles.maintext1}>Lập trình viên</Text>
              <Text style={styles.maintext1}>0799747780</Text>
            </View>
          </View>
    
          <View style={styles.boxnews}>
            <View style={styles.mainnews}>
              <Image
                source={require('../assets/Images/Designtools-Broken-80px.png')}
                style={styles.imgnews}
              />
              <Text style={styles.maintext}>Vũ Mạnh Hiếu</Text>
              <Text style={styles.maintext1}>Thiết kế giao diện</Text>
              <Text style={styles.maintext1}>0859005874</Text>
            </View>
          </View>
    
          <View style={styles.boxnews}>
            <View style={styles.mainnews}>
              <Image
                source={require('../assets/Images/Designtools-Broken-80px.png')}
                style={styles.imgnews}
              />
              <Text style={styles.maintext}>Nguyễn Cao Nhân</Text>
              <Text style={styles.maintext1}>Thiết kế giao diện</Text>
              <Text style={styles.maintext1}>0921179630</Text>
            </View>
          </View>

          <View style={styles.boxnews}>
            <View style={styles.mainnews}>
              <Image
                source={require('../assets/Images/DocumentCloud-Broken-80px.png')}
                style={styles.imgnews}
              />
              <Text style={styles.maintext}>Nguyễn Hoàng Ân</Text>
              <Text style={styles.maintext1}>Nội dung</Text>
              <Text style={styles.maintext1}>0947341032</Text>
            </View>
          </View>
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
    fontSize: 24,
    marginTop: 60,
    marginBottom: 40,
    textAlign: 'center',
  },
  tieudetop: {
    color: '#696969',
    fontWeight: '700',
    fontSize: 22,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
  boxnews: {
    marginTop: 10,
    alignItems: 'center',
  },
  boxnew: {
    marginTop: 10,
    alignItems: 'center',
  },
  mainnews: {
    width: 300 ,
    height: 185,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  imgnews: {
    width: 50 ,
    height: 50,
    resizeMode: 'stretch',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 5,
  },
  maintext: {
    width: 310,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  maintext1: {
    width: '60%',
    color: '#696969',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 16,
    // marginTop: 20,
  },
});

export default Devteam;
