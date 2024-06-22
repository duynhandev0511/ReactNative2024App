import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { User, MainComponent, Notification} from 'iconsax-react-native';
import Nhietdo from './Nhietdo';


const Graham = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Định luật Graham</Text>
        <Text style={styles.content}>&emsp;Chắc chắn, bạn đã từng bước vào một căn phòng và cảm nhận được mùi hương từ một lọ nước hoa mở, phải không? Ngay cả khi lọ nước hoa ở một bên của căn phòng, bạn vẫn có thể ngửi thấy mùi ở bên kia. Đó là do khí di chuyển nhanh chóng và có thể lan tỏa hoặc khuếch tán. Theo Định luật Diffusion/Effusion của Graham, ở cùng nhiệt độ và áp suất, khí khuếch tán với tốc độ nghịch đảo tỉ lệ với căn bậc hai của khối lượng phân tử của chúng. Điều này có thể thấy trong phương trình:

</Text>
<View style={styles.boximg}><Image
                source={require('../anhlythuyet/Congthuc8Chapter2.png')}
                style={styles.image2}
              /></View>

<Text style={styles.content}>&emsp;Mặc dù điều này có vẻ khó hiểu một chút, nhưng có thể diễn đạt một cách đơn giản là "khí nhẹ, ít mật độ sẽ di chuyển với tốc độ lớn hơn."
Bởi vì khí nhẹ, bạn cần một mẫu khí lớn hơn để đo lường khối lượng của một mẫu cụ thể. Cho tiện lợi, bạn có thể giả định một mẫu 22.4 lít (về lý do sẽ thảo luận sau) và sử dụng phương trình:


</Text>
<View style={styles.boximg}><Image
                source={require('../anhlythuyet/Congthuc9Chapter2.png')}
                style={styles.image3}
              /></View>

        <Text style={styles.mtitle1}>Bài toán</Text>
        <Text style={styles.content}>&emsp;Tính tốc độ truyền khí nitơ thành khí oxy. Làm thế nào điều này so sánh với mật độ của khí?
</Text>
<View style={styles.boximg}><Image
                source={require('../anhlythuyet/Congthuc8Chapter2.png')}
                style={styles.image2}
              />
              <Image
                source={require('../anhlythuyet/Congthuc10Chapter2.png')}
                style={styles.image2}
              /></View>

<Text style={styles.mtitle1}>Hãy suy nghĩ về điều này:</Text>
        <Text style={styles.content}>&emsp;Khối lượng của một quả bóng chày là 145 gam và khối lượng của một quả bóng bowling có thể lớn hơn 22.000 gam. Bạn sẽ có khả năng ném cái nào qua không trung với tốc độ lớn hơn?{'\n'}
&emsp;Bởi vì giá trị của tỷ lệ giữa các tỷ lệ lớn hơn 1.00, tử số, tỷ lệ cho N2, có giá trị lớn hơn. Vì khí nitrogen nhẹ hơn về khối lượng, nó nên di chuyển với tốc độ nhanh hơn. Tính toán mật độ của các khí này,


</Text>
<View style={styles.boximg}><Image
                source={require('../anhlythuyet/Congthuc11Chapter2.png')}
                style={styles.image3}
              />
                 <Image
                source={require('../anhlythuyet/Congthuc12Chapter2.png')}
                style={styles.image3}
              />
              </View>

<Text style={styles.content}>&emsp;Bạn có thể thấy rằng mật độ và tốc độ khuếch tán có tỷ lệ nghịch đảo, N₂ có tốc độ khuếch tán cao hơn và mật độ thấp hơn.


</Text>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    // Remove flexDirection: 'row'
  },
  content: {
    color: 'black',
    fontWeight: '400',
    fontSize: 18,
    marginLeft: 20,
    textAlign: 'justify',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 313, // Giới hạn chiều cao của tiêu đề
    overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  mtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 313, // Giới hạn chiều cao của tiêu đề
    overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
    marginLeft: 20,
  },
  mtitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 313, // Giới hạn chiều cao của tiêu đề
    overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
    marginLeft: 20,
    marginTop: 10,
  },
  boximg: {
    alignItems: 'center'
  },
  image1: {
    width: 350,
    height: 350,
    resizeMode: 'cover',
  },
  image2: {
    width: '60%',
    resizeMode: 'contain',
  },
  image3: {
    width: '90%',
    resizeMode: 'contain',
  },
});
export default Graham;
