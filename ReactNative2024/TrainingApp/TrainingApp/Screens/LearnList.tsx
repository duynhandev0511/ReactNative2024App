import React from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageSourcePropType } from "react-native";

interface ListItem {
    id: number;
    name: string;
    image: ImageSourcePropType;
  }
  
  const LearnList = () => {
    const Listpro: ListItem[] = [
      {id: 1, name: 'Vật chất và năng lượng', image: require('../assets/Images/vatchatnangluong.png')},
      {id: 2, name: 'Các pha của vật chất', image: require('../assets/Images/phavatchat.png')},
      {id: 3, name: 'Cấu trúc nguyên tử', image: require('../assets/Images/cautrucnguyentu.png')},
      {id: 4, name: 'Vật chất và năng lượng', image: require('../assets/Images/bangtuanhoan.png')},
      {id: 5, name: 'Phép cân bằng và cân bằng hoá học trong dung dịch', image: require('../assets/Images/canbang.png')},
    ];
  
    // Example function to handle press action
    const handlePress = (item: ListItem) => {
      console.log("Pressed item: ", item.name);
      // You can add navigation logic or other interaction logic here
    };
  

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        data={Listpro}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
            <Image
              source={item.image}
              style={styles.image}
            />
            <View style={styles.desc}>
              <Text style={styles.textItems}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#FFF', // Optional: add background color
    borderRadius: 10, // Rounded corners for better aesthetics
  },
  image: {
    width: 158,
    height: 215,
    marginRight: 5,
    borderRadius: 10,
  },
  desc: {
    flex: 1,
  },
  textItems: {
    fontSize: 16,
  },
   title: { 
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
  }
});

export default LearnList;



