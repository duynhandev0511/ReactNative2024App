import React, { useState } from 'react';
import { View, Text, Button, ProgressBarAndroid, ImageBackground, StyleSheet } from 'react-native';

const MatterQuizz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const questions = [
    { question: 'What is 2 + 2?', answer: '4' },
    { question: 'What is the capital of France?', answer: 'Paris' },
    // Add more questions here
  ];

  const handleAnswer = (selectedAnswer: string) => {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Navigate to answer screen
    }
  };

  return (
    <ImageBackground source={require('../anhlythuyet/QuizzSplashScreen.png')} resizeMode='cover' style={styles.image}>
        {/* Progress bar */}
      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={(currentQuestion + 1) / questions.length}
      />
        <Text style={styles.dem}>Câu hỏi: {currentQuestion + 1}/{questions.length}</Text>
        <Text style={styles.Question}>{questions[currentQuestion].question}</Text>
         <View style={styles.container}>
            <View style={styles.options}>
            <Button title="Answer 1" onPress={() => handleAnswer('Answer 1')} />
      <Button title="Answer 2" onPress={() => handleAnswer('Answer 2')} />
      <Button title="Answer 3" onPress={() => handleAnswer('Answer 3')} />
      <Button title="Answer 4" onPress={() => handleAnswer('Answer 4')} />
            </View>
      {/* Display score */}
      {currentQuestion === questions.length && (
        <View>
          <Text>Your score: {score}/{questions.length}</Text>
          <Button title="View Answers" onPress={() => {/* Navigate to answer screen */}} />
        </View>
      )}
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        width: '90%',
        height: '50%',
        borderRadius: 10,
    },
    dem: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    Question: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'justify',
        marginTop: 10,
        marginBottom: 10,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    options: {
        justifyContent: 'center'
    },
})

export default MatterQuizz;
