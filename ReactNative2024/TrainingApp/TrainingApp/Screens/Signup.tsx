import React, {useState} from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputComponent from "./auth/InputComponent";
import { Lock, Sms } from "iconsax-react-native";
import SectionComponent from "./auth/SectionComponent";
import RowComponent from "./auth/RowComponent";
import { colors } from "./color";
import SocialLogin from "./auth/SocialLogin";

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);

  return (
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
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.button}>
        <Text style={styles.text}>Đăng nhập</Text>
        </View>
        </TouchableOpacity>
    </SectionComponent>
    <SocialLogin />
    <RowComponent justify='center'>
    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}><Text style={{fontSize: 14, color: 'black',}}>Chưa có tài khoản?</Text></TouchableOpacity>
    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}><Text style={{fontSize: 14, color: colors.blue,}}>Đăng kí</Text></TouchableOpacity>
    </RowComponent>
    </View>
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

export default SignupScreen;