import React, { useState, useEffect } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

// Component Progress Bar
const CustomProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <View style={{ flexDirection: 'row', height: 15, width: 200, backgroundColor: '#ddd', marginTop: 30,  }}>
      <View style={{ flex: progress, backgroundColor: 'orange' }} />
      <View style={{ flex: 1 - progress, backgroundColor: 'transparent' }} />
    </View>
  );
};

// Main Component MatterQuizz
const PhasesQuizz: React.FC<{ navigation: any }> = ({ navigation }) => {
  const questions = [
    { question: 'Loại khí nào dưới nhiệt độ cao và áp suất thấp hành xử giống nhất như một khí lý tưởng?', options: ['He', 'O₂', ' NH₃', 'CO₂', 'Ne'], answer: 'He' },
    { question: 'Mẫu nào thể hiện hạt được sắp xếp theo một mẫu hình hình học đều?', options: ['CO₂ (g)', 'CO₂ (s)', 'CO₂ (l)', 'CO₂ (aq)', 'Không có cái nào phù hợp'], answer: 'CO₂ (s)' },
    { question: 'Ở nhiệt độ nào, mẫu nước có năng lượng kinet trung bình cao nhất?', options: ['0 độ Celsius', '100 độ Celsius', '0 K', '100 K', '273 K'], answer: '100 độ Celsius' },
    { question: 'Một chất lỏng sẽ sôi khi', options: ['Điểm đóng băng bằng với điểm nóng chảy của nó', 'Một lượng muối đã được thêm vào chất lỏng', 'Áp suất hơi của nó bằng với điểm nóng chảy', 'Nó được đun nóng ở một nhiệt độ thấp hơn nhiệt độ sôi', 'Áp suất hơi của nó bằng với áp suất xung quanh'], answer: 'Áp suất hơi của nó bằng với áp suất xung quanh' },
    { question: 'Khí nào được dự kiến sẽ có tỷ lệ tràn ra cao nhất?', options: ['O₂', 'F₂', 'H₂O', 'He', 'CH₄'] ,answer: 'He'},
    { question: 'Quá trình chuyển pha nào được mô tả đúng?', options: ['Chuyển từ rắn sang khí được gọi là sự đặt (deposition).', 'Chuyển từ khí sang rắn được gọi là quá trình hoán vị (sublimation).', 'Chuyển từ lỏng sang rắn được gọi là đóng băng.', '130gChuyển từ rắn sang lỏng được gọi là hơi hóa.', 'Chuyển từ lỏng sang khí được gọi là ngưng tụ.'], answer: 'Chuyển từ lỏng sang rắn được gọi là đóng băng.' },
    { question: 'Một chất rắn, chất lỏng và khí có thể tồn tại cùng một lúc ở', options: ['Điểm bay hơi', 'Điểm tam giác', 'Điểm sôi', 'Điểm đóng băng', 'Điểm nóng chảy'], answer: 'Điểm tam giác' },
    { question: 'Một hỗn hợp khí tồn tại trong một container kín với các phần trăm sau đây: helium 40%, neon 50%, và argon 10% Nếu áp suất tổng của các khí là 1100 torr, thì điều nào sau đây đúng về các khí này?', options: ['Thể tích và nhiệt độ có một mối quan hệ nghịch.', 'Thể tích và áp suất có một mối quan hệ thuận.', 'Áp suất riêng của khí neon là 550 torr.', 'Áp suất riêng của khí argon là 100 torr.', 'Các áp suất riêng của các khí không thể được tính toán với thông tin đã cho.'], answer: 'Áp suất riêng của khí neon là 550 torr.' },
    { question: 'Khí nào được dự kiến sẽ có mật độ thấp nhất ở STP?', options: ['SO₂', 'CO₂', 'Cl₂', 'Xe', 'Ar'], answer: 'Ar' },
    { question: 'Một khí lý tưởng ở STP chiếm 22.4 lít. Nếu áp suất lên khí được tăng lên 1000 torr và nhiệt độ của khí giảm xuống 250 K, điều gì có thể được nói về khí?', options: ['Số mol của khí đã thay đổi.', 'Thể tích của khí đã tăng.', 'Thể tích của khí đã giảm.', 'Áp suất và nhiệt độ có một mối quan hệ nghịch. ', 'Không có điều gì ở trên.'], answer: 'Thể tích của khí đã giảm.' },
    { question: 'Điều nào không nhất quán với Lý thuyết phân tử động?', options: ['Các phân tử khí có lực hấp dẫn với nhau.', 'Các phân tử khí di chuyển theo hướng ngẫu nhiên, thẳng.', 'Các phân tử khí có một khối lượng có thể bỏ qua so với khối lượng chúng chiếm.', 'Các va chạm giữa các phân tử khí dẫn đến sự truyền năng lượng được bảo toàn.', 'Tất cả các câu trên đều đúng.'], answer: 'Các phân tử khí có lực hấp dẫn với nhau.' },
    { question: 'Tham khảo các lựa chọn sau: I. Định luật Boyle II. Định luật Charles III. Định luật Khí kết hợp Cái nào trong số trên có thể được sử dụng để tính toán sự thay đổi về thể tích khi có sự thay đổi về áp suất ở nhiệt độ không đổi? ', options: ['Chỉ có I', 'Chỉ có II', 'Chỉ có II và III', 'Chỉ có I và III', 'I và II'], answer: 'Chỉ có I và III' },
    { question: 'Tham chiếu đến đồ thị nhiệt độ trong Hình 2.7, điều nào sau đây không liên quan đến đồ thị nhiệt độ của nước? ', options: ['Cung cấp năng lượng nhiệt', 'Nóng chảy', 'Sôi', 'Tăng năng lượng động', 'Ngưng tụ'], answer: 'Ngưng tụ' },
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(Array.from({ length: questions.length }, () => -1));

  useEffect(() => {
    if (quizCompleted) {
      navigation.navigate('PhasesScoreScreen', { score: score, totalQuestions: questions.length });
    }
  }, [quizCompleted]);
  
  const handleAnswer = (selectedOption: string, optionIndex: number) => {
    if (quizCompleted || currentQuestion >= questions.length) return; 
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(updatedSelectedAnswers);
  
    if (currentQuestion === questions.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <ImageBackground source={require('../anhlythuyet/Quizzgame.png')} style={{flex: 1}}>
      <View style={{ alignItems: 'center'}}>
        {/* Progress bar */}
        <CustomProgressBar progress={(currentQuestion + 1) / questions.length} />
        <Text style={{textAlign: 'center', fontWeight: '600', fontSize:16, color: 'white', marginTop: 20, marginBottom: 20,  }}>Câu hỏi {currentQuestion + 1}/{questions.length}</Text>
        {questions[currentQuestion] && (
          <>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize:16, color: 'white', marginHorizontal: 10, }}>{questions[currentQuestion].question}</Text>
            <View style={styles.boxbutton}>
              {questions[currentQuestion].options.map((option, index) => (
                <TouchableOpacity key={index} onPress={() => handleAnswer(option, index)}>
                  <View style={[styles.button, { backgroundColor: selectedAnswers[currentQuestion] === index ? (option === questions[currentQuestion].answer ? 'green' : 'red') : 'white', borderWidth: selectedAnswers[currentQuestion] === index ? 1 : 0 }]}>
                    <Text style={styles.question}>{option}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  boxbutton: {
    alignItems: 'center',
    marginTop: 20,  
  },
  button: {
    borderRadius: 30,
    width: 250,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#696969',
    marginBottom: 10,
  },
  question: {
    textAlign: 'center',
    color: 'black', // Added color for text
    paddingHorizontal: 5,
  }
});

export default PhasesQuizz;
