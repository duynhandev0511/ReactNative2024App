import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'iconsax-react-native';

const PhasesScoreScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
  const { score, totalQuestions } = route.params;

  // Calculate the percentage score
  const percentageScore = (score / totalQuestions) * 100;
  const totalScore = ((score / totalQuestions) * 10).toFixed(1);


  return (
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('ChapterQuizz')}>
          <ArrowLeft size="32" color="black"/>
          </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.circle}>
        <Text style={styles.heading}>Tổng điểm</Text>
        <Text style={styles.score}>{totalScore}/10</Text>
        <Text style={styles.percentage}>{percentageScore.toFixed(1)}%</Text>
        </View>
    </View>
    <View style={styles.boxcontainer}>
    <Text style={styles.title}>Đáp án</Text>
        <Text style={styles.question}>Câu 1: Loại khí nào dưới nhiệt độ cao và áp suất thấp hành xử giống nhất như một khí lý tưởng?</Text>
        <Text style={styles.answer}>Đáp án: He{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Càng nhỏ khí, nó sẽ càng hành xử giống như khí lý tưởng hơn. Hơn nữa, khí hành xử giống như khí lý tưởng nhất khi cách xa nhau. Điều này xảy ra ở áp suất thấp và nhiệt độ cao.</Text></Text>

        <Text style={styles.question}>Câu 2: Mẫu nào thể hiện hạt được sắp xếp theo một mẫu hình hình học đều?</Text>
        <Text style={styles.answer}>Đáp án: CO₂ (s){'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Một mô hình hình học đều mô tả tốt nhất một chất rắn.</Text></Text>

        <Text style={styles.question}>Câu 3: Ở nhiệt độ nào, mẫu nước có năng lượng kinet trung bình cao nhất?</Text>
        <Text style={styles.answer}>Đáp án: 100 độ Celsius{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Năng lượng Kinet Trung bình là thuật ngữ mô tả nhiệt độ. Nhiệt độ cao nhất có mặt trong các mẫu này là 100 độ Celsius, tương ứng với 373 Kelvin.</Text></Text>

        <Text style={styles.question}>Câu 4: Một chất lỏng sẽ sôi khi</Text>
        <Text style={styles.answer}>Đáp án: Áp suất hơi của nó bằng với áp suất xung quanh{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Một chất lỏng sẽ sôi khi áp suất hơi của nó bằng với áp suất khí quyển xung quanh. Bởi vì áp suất khí quyển có thể thay đổi, nhiệt độ sôi của một chất lỏng cũng có thể thay đổi.</Text></Text>

        <Text style={styles.question}>Câu 5: Khí nào được dự kiến sẽ có tỷ lệ tràn ra cao nhất?</Text>
        <Text style={styles.answer}>Đáp án: He{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Khí nhẹ nhất sẽ có mật độ thấp nhất và tỷ lệ tràn ra cao nhất. Trong số các lựa chọn, helium là khí nhẹ nhất.</Text></Text>

        <Text style={styles.question}>Câu 6: Quá trình chuyển pha nào được mô tả đúng?</Text>
        <Text style={styles.answer}>Đáp án: Chuyển từ lỏng sang rắn được gọi là đóng băng.{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Quá trình đóng băng của một chất lỏng sẽ tạo ra một chất rắn.</Text></Text>

        <Text style={styles.question}>Câu 7: Một chất rắn, chất lỏng và khí có thể tồn tại cùng một lúc ở</Text>
        <Text style={styles.answer}>Đáp án: Điểm tam giác{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Điểm tam giác kết hợp các điều kiện phù hợp về áp suất và nhiệt độ để một chất có thể tồn tại ở cùng một lúc ở cả ba pha rắn, lỏng và khí.</Text></Text>

        <Text style={styles.question}>Câu 8: Một hỗn hợp khí tồn tại trong một container kín với các phần trăm sau đây: helium 40%, neon 50%, và argon 10% Nếu áp suất tổng của các khí là 1100 torr, thì điều nào sau đây đúng về các khí này?</Text>
        <Text style={styles.answer}>Đáp án: Áp suất riêng của khí neon là 550 torr.{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Neon chiếm 50% số phân tử khí hiện có. Neon cũng sẽ đóng góp 50% tổng áp suất. (1100 torr)(0.50) = 550 torr.</Text></Text>

        <Text style={styles.question}>Câu 9: Khí nào được dự kiến sẽ có mật độ thấp nhất ở STP?</Text>
        <Text style={styles.answer}>Đáp án: Ar{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Mật độ của một khí là khối lượng mol của khí chia cho 22.4L. Đối với argon, điều này sẽ là 39.95g/22.4L = 1.78 g/L. Hãy nhớ rằng không cần máy tính. Vì argon là khí nhẹ nhất, nó sẽ có mật độ thấp nhất.</Text></Text>

        <Text style={styles.question}>Câu 10: Một khí lý tưởng ở STP chiếm 22.4 lít. Nếu áp suất lên khí được tăng lên 1000 torr và nhiệt độ của khí giảm xuống 250 K, điều gì có thể được nói về khí?</Text>
        <Text style={styles.answer}>Đáp án: Thể tích của khí đã giảm.{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Trong vấn đề này, áp suất thay đổi từ 760 torr lên 1000 torr. Nhiệt độ thay đổi từ 273 K xuống 250 K. Cả hai thay đổi trong điều kiện đều chỉ ra một giảm thể tích. Khi Luật Khí Kết hợp được sử dụng, thể tích sẽ giảm từ 22.4 L xuống 15.6 L.</Text></Text>

        <Text style={styles.question}>Câu 11: Điều nào không nhất quán với Lý thuyết phân tử động?</Text>
        <Text style={styles.answer}>Đáp án: Các phân tử khí có lực hấp dẫn với nhau.{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Lí tưởng, các phân tử khí cần phải xa cách nhau và không có sức hấp dẫn cho nhau. Hơn nữa, các khí nhỏ như hydro và helium là lý tưởng.</Text></Text>

        <Text style={styles.question}>Câu 12: Tham khảo các lựa chọn sau: {'\n'}I. Định luật Boyle{'\n'} II. Định luật Charles{'\n'} III. Định luật Khí kết hợp{'\n'} Cái nào trong số trên có thể được sử dụng để tính toán sự thay đổi về thể tích khi có sự thay đổi về áp suất ở nhiệt độ không đổi?</Text>
        <Text style={styles.answer}>Đáp án: Chỉ có I và III{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Cả Luật Boyle và Luật Khí Kết hợp đều có biến số cho áp suất và thể tích. Luật Charles chỉ xem xét sự thay đổi về thể tích khi có sự thay đổi về nhiệt độ.</Text></Text>

        <Text style={styles.question}>Câu 13: Tham chiếu đến đồ thị nhiệt độ trong Hình 2.7, điều nào sau đây không liên quan đến đồ thị nhiệt độ của nước?</Text>
        <Text style={styles.answer}>Đáp án: Ngưng tụ{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Đồ thị nhiệt độ cho một chất sẽ không cho thấy khi một chất trực tiếp. Tuy nhiên, quá trình trực tiếp này có thể được chỉ ra trong đồ thị bao gồm điểm tam giác.</Text></Text>
    </View>
      </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    textAlign: 'right',
    paddingHorizontal: 20,
    paddingTop: 10,
    height: 50,
    backgroundColor: 'white',
  },
  boxcontainer:{
    flex: 1,
    marginTop: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  score: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  percentage: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center'
  },
  circle: {
    marginTop: 30,
    width: 150,
    height: 150,
    backgroundColor: 'transparent',
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#1089ff',
    borderWidth: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
  },
  question: {
    textAlign: 'left',
    marginTop: 30,
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
    marginHorizontal: 10,
  },
  answer: {
    color: 'black',
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'justify',
    marginTop: 5,
  },
});

export default PhasesScoreScreen;
