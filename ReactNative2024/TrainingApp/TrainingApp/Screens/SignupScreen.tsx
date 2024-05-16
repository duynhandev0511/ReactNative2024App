import React, {useState} from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image, Switch, SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputComponent from "./auth/InputComponent";
import { Lock, Sms, User } from "iconsax-react-native";
import SectionComponent from "./auth/SectionComponent";
import RowComponent from "./auth/RowComponent";
import { colors } from "./color";
import SocialLogin from "./auth/SocialLogin";
import { ArrowLeft } from "iconsax-react-native";

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const Signup = ({navigation}:any) => {
  const [values, setValues] = useState(initValue);
  const handleChangeValue= (key: string, value: string) => {
    const data: any = {...values};
    data[`${key}`] = value;
    setValues(data);
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <ArrowLeft size="32" color="black"/>
          </TouchableOpacity>
      </View>
     <ScrollView showsVerticalScrollIndicator={false}>
     <View style={styles.container}> 
    <SectionComponent>
      <Text style={{color: 'black', marginBottom: 20, fontSize: 24, fontWeight:'600',}}>Đăng kí</Text>
    <InputComponent 
    value={values.username} 
    placeholder="User name"  
    onChange={val => handleChangeValue('username', val)}
    // isPassword
    allowClear
    affix = {<User size={22} color="#696969" />}
    />
     <InputComponent 
    value={values.email} 
    placeholder="Email"
    onChange={val => handleChangeValue('email', val)}
    // isPassword
    allowClear
    affix = {<Sms size={22} color="#696969" />}
    />

<InputComponent 
    value={values.password} 
    placeholder="Password"
    onChange={val => handleChangeValue('password', val)}
    isPassword
    allowClear
    affix = {<Lock size={22} color="#696969" />}
    />

<InputComponent 
    value={values.confirmPassword} 
    placeholder="Confirm Password"
    onChange={val => handleChangeValue('confirmPassword', val)}
    isPassword
    allowClear
    affix = {<Lock size={22} color="#696969" />}
    />
    </SectionComponent>
    <SectionComponent>
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.button}>
        <Text style={styles.text}>Đăng kí</Text>
        </View>
        </TouchableOpacity>
    </SectionComponent>
    <SocialLogin />
    <RowComponent justify='center'>
    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}><Text style={{fontSize: 14, color: 'black',}}>Chưa có tài khoản?</Text></TouchableOpacity>
    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('LoginScreen')}><Text style={{fontSize: 14, color: colors.blue, fontWeight: '600'}}> Đăng kí</Text></TouchableOpacity>
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
        backgroundColor: 'white',
        padding: 20,
        
    },
    header: {
      flexDirection: 'row',
      textAlign: 'right',
      paddingHorizontal: 20,
      paddingTop: 10,
      height: 50,
      backgroundColor: 'white',
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

export default Signup;