import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
interface LoginFormState {
  username: string;
  password: string;
}

class LoginForm extends Component<{}, LoginFormState> {
  state: LoginFormState = {
    username: '',
    password: '',
  };

  handleLogin = () => {
    const { username, password } = this.state;
    // Xử lý logic đăng nhập ở đây
    console.log('Username:', username);
    console.log('Password:', password);
  };

  render() {
    const { username, password } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => this.setState({ username: text })}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => this.setState({ password: text })}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function Login({ navigation }:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.text}>Login</Text>
    <Text style={styles.text}>Email</Text>
    <Text style={styles.text}>Hoặc</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
        
    },
    
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    input: {
      width: '80%',
      padding: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },

    inputWithBorder: {
      borderColor: '#CCCCCC', // Adjust border color as per your preference
    },

    button: {
      width: '80%',
      backgroundColor: '#ccc',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
});

export default Login;