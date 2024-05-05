import { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import { SearchNormal1 } from 'iconsax-react-native';
import { User, MainComponent, Notification} from 'iconsax-react-native';
import QuizzList from './QuizzList';

const ChapterQuizz = ({ navigation }: any) => {

  const Card = ({ quizz, props }: any) => {
    return (
      <View style={styles.card}>
        <View style={styles.content}>
          <Image
            source={quizz.image}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{quizz.name}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Contactteam')}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Bắt đầu</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  };
  
  const [searchText, setSearchText] = useState('')
  const searchTextLowerCase = searchText.toLowerCase();
  const filteredList = QuizzList.filter(eachquizz => eachquizz.name.toLowerCase().includes(searchTextLowerCase));
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.header}>
        {/* Logo container */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/Images/logo1.png')}
            style={styles.logo}
          />
        </View>
        {/* Icon container */}
        <View style={styles.iconContainer}>
          {/* User icon */}
          <TouchableOpacity style={styles.icon}>
            <User color="#fff" size={24} variant="Bold" />
          </TouchableOpacity>
          {/* Notification icon */}
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
    justifyContent: 'space-between', // Chia không gian ngang đều cho các phần tử trong header
    paddingHorizontal: 20,
    paddingTop: 10,
    height: 70,
    backgroundColor: '#0C0042',
  },
  logoContainer: {
    flexDirection: 'row', // Hiển thị các phần tử trong logo container theo hàng ngang
    alignItems: 'center', // Canh giữa các phần tử trong logo container
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 40,
    marginRight: 10,
  },
    iconContainer: {
    flexDirection: 'row', // Hiển thị các phần tử trong icon container theo hàng ngang
    alignItems: 'center', // Canh giữa các phần tử trong icon container
  },
  icon: {
    marginLeft: 20, // Khoảng cách giữa các icon
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
    height: 220,
    width: 170,
    marginHorizontal: 5,
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
    fontSize: 15,
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

export default ChapterQuizz;
