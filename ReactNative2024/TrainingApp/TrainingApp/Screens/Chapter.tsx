import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { SearchNormal1, User, Notification } from 'iconsax-react-native';
import QuizzList from './QuizzList';

const Chapter = ({ navigation }: any) => {
  const Card = ({ quizz }: any) => {
    const handlePress = () => {
      let screenName;
      // Điều hướng đến màn hình tương ứng với mỗi quizz
      switch (quizz.name) {
        case 'Vật chất và năng lượng':
          screenName = 'MatterScreen';
          break;
        case 'Các pha của vật chất':
          screenName = 'Screen2';
          break;
        case 'Cấu trúc nguyên tử':
          screenName = 'Screen3';
          break;
        default:
          screenName = 'DefaultScreen'; // Màn hình mặc định nếu không khớp với bất kỳ quizz nào
          break;
      }
      navigation.navigate(screenName);
    };

    return (
      <TouchableOpacity  activeOpacity={1} onPress={handlePress}>
        <View style={styles.card}>
          <View style={styles.content}>
            <Image source={quizz.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{quizz.name}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={'#0C0042'} />
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/Images/logo1.png')} style={styles.logo} />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <User color="#fff" size={24} variant="Bold" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Notification color="#fff" size={24} variant="Bold" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <SearchNormal1 size="20" color="black" />
        <TextInput
          onChangeText={(text) => setSearchText(text)}
          autoCorrect={false}
          placeholder="Tìm kiếm"
          style={styles.input}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={QuizzList.filter(eachquizz => eachquizz.name.toLowerCase().includes(searchText.toLowerCase()))}
        renderItem={({ item }) => <Card quizz={item} />}
        keyExtractor={eachquizz => eachquizz.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    height: 70,
    backgroundColor: '#0C0042',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 40,
    marginRight: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
  },
  searchContainer: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
    flexDirection: 'row',
  },
  input: {
    color: '#000',
    fontWeight: '500',
    fontSize: 15,
    width: 'auto',
    marginLeft: 10,
  },
  card: {
    height: 170,
    width: 170,
    marginHorizontal: 5,
    marginVertical: 5,
    elevation: 5,
    marginTop: 50,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  content: {
    alignItems: 'center',
    top: -30,
  },
  image: {
    height: 80,
    width: 80,
  },
  textContainer: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginTop: 30,
    textAlign: 'center',
  },
  button: {
    width: 100,
    height: 'auto',
    backgroundColor: "black",
    padding: 8,
    borderRadius: 15,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
});

export default Chapter;
