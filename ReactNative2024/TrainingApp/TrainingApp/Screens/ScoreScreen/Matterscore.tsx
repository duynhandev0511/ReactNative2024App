import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'iconsax-react-native';

const ScoreScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
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
        <Text style={styles.question}>Câu 1: Chất nào có thể bị phân hủy về mặt hóa học?</Text>
        <Text style={styles.answer}>Đáp án: Ammonia{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Hợp chất có thể bị phân hủy về mặt hóa học, còn các nguyên tố thì không. Ammonia là hợp chất duy nhất trong khi các lựa chọn khác đều là nguyên tố.</Text></Text>

        <Text style={styles.question}>Câu 2: Những đơn vị nào có thể được sử dụng để biểu thị lượng năng lượng hấp thụ hoặc giải phóng trong phản ứng hóa học?</Text>
        <Text style={styles.answer}>Đáp án: Calo và joule{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Nhiệt lượng được đo bằng calo hoặc jun. Một đơn vị khác mà bạn có thể gặp là kilojun, trong đó 1 kilojoule là 1.000 joule.</Text></Text>

        <Text style={styles.question}>Câu 3: Chất nào đại diện cho một hỗn hợp đồng nhất?</Text>
        <Text style={styles.answer}>Đáp án: CH₃OH(aq){'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Tất cả các dung dịch phải đồng nhất. Ký hiệu (aq) được sử dụng để chỉ định điều này.</Text></Text>

        <Text style={styles.question}>Câu 4: Một cuốn sách được nhấc lên khỏi sàn và đặt trên một cái bàn cao hơn sàn nhà một mét. Cuốn sách có?</Text>
        <Text style={styles.answer}>Đáp án: Thu được thế năng{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Việc nâng một vật gì đó lên một mức hoặc độ cao cao hơn sẽ cung cấp cho nó nhiều thế năng hơn.</Text></Text>

        <Text style={styles.question}>Câu 5: Tuyên bố nào không chính xác về năng lượng?</Text>
        <Text style={styles.answer}>Đáp án: Năng lượng có khối lượng và chiếm không gian{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Vật chất, không phải năng lượng, là thuật ngữ dùng để chỉ một vật có khối lượng và chiếm không gian.</Text></Text>

        <Text style={styles.question}>Câu 6: Khối lượng của một vật thể có mật độ 13 g / mL và thể tích 10 mL là bao nhiêu?</Text>
        <Text style={styles.answer}>Đáp án: 130g{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Hãy cẩn thận với các đơn vị! Mật độ là khối lượng/khối lượng. Vậy khối lượng = thể tích × mật độ. 10 mL × 13 g/mL = 130 gam.</Text></Text>

        <Text style={styles.question}>Câu 7: Câu nào dưới đây không đúng?</Text>
        <Text style={styles.answer}>Đáp án: Sắt nguyên chất là một hỗn hợp không đồng nhất{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Tất cả các nguyên tố và hợp chất đều là chất tinh khiết. Sắt, một nguyên tố, thuộc loại này.</Text></Text>

        <Text style={styles.question}>Câu 8: Loại thay đổi nào khác với bốn loại còn lại?</Text>
        <Text style={styles.answer}>Đáp án: Làm tan chảy một viên đá{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Sự tan chảy của một khối băng là một sự thay đổi vật lý. Các lựa chọn khác đều là những thay đổi hóa học.</Text></Text>

        <Text style={styles.question}>Câu 9: Điều nào sau đây không phải là tài sản vật chất?</Text>
        <Text style={styles.answer}>Đáp án: Phản ứng với oxygen{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Phản ứng của bất kỳ nguyên tố nào đều dẫn đến sự thay đổi hóa học.</Text></Text>

        <Text style={styles.question}>Câu 10: Sự khác biệt giữa năng lượng tiềm năng của sản phẩm và năng lượng tiềm năng của các chất phản ứng trong phản ứng được gọi là</Text>
        <Text style={styles.answer}>Đáp án: Sức nóng của phản ứng{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Hiệu chênh lệch thế năng của chất phản ứng và sản phẩm của phản ứng được gọi là Nhiệt phản ứng, ΔH.</Text></Text>

        <Text style={styles.question}>Câu 11: Nghiên cứu về vật chất được gọi là</Text>
        <Text style={styles.answer}>Đáp án: Hóa học{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Nghiên cứu về vật chất được gọi là Hóa học.</Text></Text>

        <Text style={styles.question}>Câu 12: Tham khảo các lựa chọn sau: {'\n'}I. Rắn sang lỏng {'\n'}II. Lỏng sang khí {'\n'}III. Rắn sang khí {'\n'}Sự thay đổi trạng nào ở trên là thu nhiệt </Text>
        <Text style={styles.answer}>Đáp án: I, II và III{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Cần thêm năng lượng nhiệt vào một chất để làm tan chảy, bay hơi hoặc thăng hoa nó. Tất cả các thay đổi pha được liệt kê được mô tả bằng cách làm nóng chảy, bay hơi hoặc thăng hoa của nó tương ứng.</Text></Text>

        <Text style={styles.question}>Câu 13: Năng lượng cần thiết để bắt đầu một phản ứng được gọi là</Text>
        <Text style={styles.answer}>Đáp án: Năng lượng kích hoạt{'\n'}<Text style={{fontWeight: 'bold'}}>Giải thích:</Text><Text style={{color: 'green'}}> Năng lượng kích hoạt là năng lượng cần thiết để đạt tới phức hợp được kích hoạt, điểm mà chất phản ứng trở thành sản phẩm.</Text></Text>
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

export default ScoreScreen;
