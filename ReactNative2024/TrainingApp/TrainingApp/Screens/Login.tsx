import React, {useState} from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image, Switch, SafeAreaView, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputComponent from "./auth/InputComponent";
import { Lock, Sms } from "iconsax-react-native";
import SectionComponent from "./auth/SectionComponent";
import RowComponent from "./auth/RowComponent";
import { colors } from "./color";
import SocialLogin from "./auth/SocialLogin";
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const LoginScreen = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const [rePass, setRePass] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState<FirebaseAuthTypes.User>();

  // Hàm xử lý đăng nhập
  const handleLogin = async () => {
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          const user = userCredential.user;

          if (user) {
            setIsLogin(true);
          }
        })
        .catch(error => {
          // Hiển thị thông báo lỗi khi không thể đăng nhập
          Alert.alert('Error', 'Could not log in. Please check your email and password.');
          console.log('can not login: ', error);
        });
    } catch (error) {
      console.log('can not login: ', error);
    }
  };

  // Hàm xử lý đăng kí
  const handleRegister = async () => {
    // check value
    if (email && password && rePass) {
      if (rePass !== password) {
        // Hiển thị thông báo lỗi khi mật khẩu xác nhận không khớp
        Alert.alert('Error', 'Password confirmation does not match.');
      } else {
        if (password.length < 6) {
          // Hiển thị thông báo lỗi khi mật khẩu quá ngắn
          Alert.alert('Error', 'Password must contain at least 6 characters.');
        } else {
          await auth()
            .createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
              const user = userCredential.user;

              if (user) {
                setUserInfo(user);
                setIsRegister(false);
              }
            })
            .catch(error => {
              // Hiển thị thông báo lỗi khi không thể đăng kí
              Alert.alert('Error', 'Could not register. Please try again later.');
              console.log('can not register: ', error);
            });
        }
      }
    } else {
      // Hiển thị thông báo lỗi khi email, mật khẩu hoặc mật khẩu xác nhận trống
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  // Kiểm tra nếu chưa có tài khoản thì chuyển sang màn hình đăng kí
  const handleNavigateToSignUp = () => {
    if (!isLogin && !isRegister) {
      navigation.navigate('Signup');
    }
  };


  return (
    <SafeAreaView>
     <ScrollView showsVerticalScrollIndicator={false}>
     <View style={styles.container}> 
    <SectionComponent styles={{
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Image source={require('../assets/Images/logotext.png')}
      style={{
        width: 230,
        height: 230,
      }}
      />
    </SectionComponent>
    <SectionComponent>
      <Text style={{color: 'black', marginBottom: 20, fontSize: 24, fontWeight:'600',}}>Đăng nhập</Text>
    <InputComponent 
    value={email} 
    placeholder="Email"  
    onChange={val => setEmail(val)}
    // isPassword
    allowClear
    affix = {<Sms size={22} color="#696969" />}
    />
     <InputComponent 
    value={password} 
    placeholder="Password"
    onChange={val => setPassword(val)}
    isPassword
    allowClear
    affix = {<Lock size={22} color="#696969" />}
    />
    <RowComponent justify='space-between'>
      <RowComponent onPress={() => setIsRemember(!isRemember)}>
      <Switch 
      trackColor={{true: colors.blue}}
      thumbColor={colors.white} 
      value={isRemember} 
      onChange={() => setIsRemember(!isRemember)}
      />
      <Text style={{fontSize: 15, color: 'black', fontWeight: '500',}}>Nhớ mật khẩu</Text>
      </RowComponent>
      <TouchableOpacity activeOpacity={0.7} onPress={() => {}}><Text style={{fontSize: 14, color: 'black',}}>Quên mật khẩu</Text></TouchableOpacity>
    </RowComponent>
    </SectionComponent>
    <SectionComponent>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Tabs')}>
        <View style={styles.button}>
        <Text style={styles.text}>Đăng nhập</Text>
        </View>
        </TouchableOpacity>
    </SectionComponent>
    <SocialLogin />
    <RowComponent justify='center'>
    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}><Text style={{fontSize: 14, color: 'black',}}>Chưa có tài khoản?</Text></TouchableOpacity>
    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Signup')}><Text style={{fontSize: 14, color: colors.blue, fontWeight: '600'}}> Đăng kí</Text></TouchableOpacity>
    </RowComponent>
    </View>
     </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
        
    },
    button: {
        borderRadius: 12,
        width: 250,
        minHeight: 46,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: colors.blue,
        marginTop: 16,
    },
    text: {
      color: colors.white,
      fontSize: 20,
      fontWeight: '500',
    },
});

export default LoginScreen;