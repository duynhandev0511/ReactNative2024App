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
const MatterQuizz: React.FC<{ navigation: any }> = ({ navigation }) => {
  const questions = [
    { question: 'Chất nào có thể bị phân hủy về mặt hóa học?', options: ['Ammonia', 'Iron', 'Neon', 'Hydrogen'], answer: 'Ammonia' },
    { question: 'Những đơn vị nào có thể được sử dụng để biểu thị lượng năng lượng hấp thụ hoặc giải phóng trong phản ứng hóa học?', options: ['Độ và gam', 'Torr và mmHg', 'Gam và lít', 'Calo và joule', 'Mét và cm³'], answer: 'Calo và joule' },
    { question: 'Chất nào đại diện cho một hỗn hợp đồng nhất?', options: ['CH₃OH(l)', 'CH₃OH(aq)', 'CH₃OH(g)', 'CH₃OH(s)', 'Không chất nào ở trên'], answer: 'CH₃OH(aq)' },
    { question: 'Một cuốn sách được nhấc lên khỏi sàn và đặt trên một cái bàn cao hơn sàn nhà một mét. Cuốn sách có?', options: ['Thu được năng lượng âm thanh', 'Mất năng lượng hóa học', 'Thu được thế năng', 'Thu được động năng', 'Mất năng lượng hạt nhân'], answer: 'Thu được thế năng' },
    { question: 'Tuyên bố nào không chính xác về năng lượng?', options: ['Năng lượng có thể tỏa ra trong một phản ứng', 'Phản ứng có thể thu được năng lượng', 'Năng lượng không thể tự sinh ra hay mất đi', 'Năng lượng có thể có nhiều dạng khác nhau', 'Năng lượng có khối lượng và chiếm không gian'], answer: 'Năng lượng có khối lượng và chiếm không gian' },
    { question: 'Khối lượng của một vật thể có mật độ 13 g / mL và thể tích 10 mL là bao nhiêu?', options: ['1.3 g/mL', '0.77 g/mL', '1.3 g/L', '130g', '130 g/L'], answer: '130g' },
    { question: 'Câu nào dưới đây không đúng?', options: ['Salad là hỗn hợp không đồng nhất', 'NaCl(aq) là một hỗn hợp đồng nhất', 'Sữa là một hỗn hợp đồng nhất', 'Cát và nước tạo thành một hỗn hợp không đồng nhất', 'Sắt nguyên chất là một hỗn hợp không đồng nhất'], answer: 'Sắt nguyên chất là một hỗn hợp không đồng nhất' },
    { question: 'Loại thay đổi nào khác với bốn loại còn lại?', options: ['Nướng khoai tây', 'Đinh sắt bị rỉ sét', 'Đốt một mảnh giấy', 'Làm tan chảy một viên đá', 'Đốt cháy propane'], answer: 'Làm tan chảy một viên đá' },
    { question: 'Điều nào sau đây không phải là tài sản vật chất?', options: ['Màu sắc', 'Trạng thái', 'Mùi', 'Điểm sôi', 'Phản ứng với oxygen'], answer: 'Phản ứng với oxygen' },
    { question: 'Sự khác biệt giữa năng lượng tiềm năng của sản phẩm và năng lượng tiềm năng của các chất phản ứng trong phản ứng được gọi là', options: ['Nhiệt độ phản ứng', 'Sức nóng của phản ứng', 'Sự thay đổi phản ứng', 'Phản ứng tỏa nhiệt', 'Phản ứng thu nhiệt'], answer: 'Sức nóng của phản ứng' },
    { question: 'Nghiên cứu về vật chất được gọi là', options: ['Hóa học', 'Sinh học', 'Địa chất', 'Vật lý', 'Tâm lý học'], answer: 'Hóa học' },
    { question: 'Tham khảo các lựa chọn sau: \n I. Rắn sang lỏng \nII. Lỏng sang khí \n III. Rắn sang khí \n Sự thay đổi trạng nào ở trên là thu nhiệt ', options: ['Chỉ có I', 'Chỉ có II', 'Chỉ có III', 'Chỉ có II và III', 'I, II và III'], answer: 'I, II và III' },
    { question: 'Năng lượng cần thiết để bắt đầu một phản ứng được gọi là ', options: ['Thế năng của chất phản ứng', 'Năng lượng tiềm năng của sản phẩm', 'Năng lượng kích hoạt', 'Nhiệt phản ứng', 'Năng lượng âm thanh'], answer: 'Năng lượng kích hoạt' },
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(Array.from({ length: questions.length }, () => -1));

  useEffect(() => {
    if (quizCompleted) {
      navigation.navigate('ScoreScreen', { score: score, totalQuestions: questions.length });
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
  }
});

export default MatterQuizz;
