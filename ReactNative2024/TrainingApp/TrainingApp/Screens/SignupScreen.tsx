// import React, { useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';
// import InputComponent from "./auth/InputComponent";
// import { Lock, Sms, User } from "iconsax-react-native";
// import SectionComponent from "./auth/SectionComponent";
// import RowComponent from "./auth/RowComponent";
// import { colors } from "./color";
// import SocialLogin from "./auth/SocialLogin";
// import { ArrowLeft } from "iconsax-react-native";
// import auth from '@react-native-firebase/auth';

// const initValue = {
//   username: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// }

// const Signup = ({ navigation }: any) => {
//   const [values, setValues] = useState(initValue);

//   const handleChangeValue = (key: string, value: string) => {
//     const data: any = { ...values };
//     data[`${key}`] = value;
//     setValues(data);
//   }

//   const handleRegister = async () => {
//     const { email, password, confirmPassword } = values;

//     if (!email || !password || !confirmPassword) {
//       Alert.alert("Error", "Please fill all fields");
//       return;
//     }

//     if (password !== confirmPassword) {
//       Alert.alert("Error", "Passwords do not match");
//       return;
//     }

//     if (password.length < 6) {
//       Alert.alert("Error", "Password must be at least 6 characters");
//       return;
//     }

//     try {
//       const userCredential = await auth().createUserWithEmailAndPassword(email, password);
//       const user = userCredential.user;
//       if (user) {
//         Alert.alert("Success", "Account created successfully");
//         navigation.navigate('LoginScreen');
//       }
//     } catch (error) {
//       console.log('Registration error: ', error);
//       Alert.alert("Error", "Registration failed. Please try again.");
//     }
//   }

//   return (
//     <SafeAreaView>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
//           <ArrowLeft size="32" color="black" />
//         </TouchableOpacity>
//       </View>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.container}>
//           <SectionComponent>
//             <Text style={{ color: 'black', marginBottom: 20, fontSize: 24, fontWeight: '600', }}>Đăng kí</Text>
//             <InputComponent
//               value={values.username}
//               placeholder="User name"
//               onChange={val => handleChangeValue('username', val)}
//               allowClear
//               affix={<User size={22} color="#696969" />}
//             />
//             <InputComponent
//               value={values.email}
//               placeholder="Email"
//               onChange={val => handleChangeValue('email', val)}
//               allowClear
//               affix={<Sms size={22} color="#696969" />}
//             />
//             <InputComponent
//               value={values.password}
//               placeholder="Password"
//               onChange={val => handleChangeValue('password', val)}
//               isPassword
//               allowClear
//               affix={<Lock size={22} color="#696969" />}
//             />
//             <InputComponent
//               value={values.confirmPassword}
//               placeholder="Confirm Password"
//               onChange={val => handleChangeValue('confirmPassword', val)}
//               isPassword
//               allowClear
//               affix={<Lock size={22} color="#696969" />}
//             />
//           </SectionComponent>
//           <SectionComponent>
//             <TouchableOpacity activeOpacity={0.7} onPress={handleRegister}>
//               <View style={styles.button}>
//                 <Text style={styles.text}>Đăng kí</Text>
//               </View>
//             </TouchableOpacity>
//           </SectionComponent>
//           <SocialLogin />
//           <RowComponent justify='center'>
//             <TouchableOpacity activeOpacity={0.7} onPress={() => { }}><Text style={{ fontSize: 14, color: 'black', }}>Chưa có tài khoản?</Text></TouchableOpacity>
//             <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('LoginScreen')}><Text style={{ fontSize: 14, color: colors.blue, fontWeight: '600' }}> Đăng nhập</Text></TouchableOpacity>
//           </RowComponent>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     textAlign: 'right',
//     paddingHorizontal: 20,
//     paddingTop: 10,
//     height: 50,
//     backgroundColor: 'white',
//   },
//   button: {
//     borderRadius: 12,
//     width: 250,
//     minHeight: 46,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     backgroundColor: colors.blue,
//     marginTop: 16,
//   },
//   text: {
//     color: colors.white,
//     fontSize: 20,
//     fontWeight: '500',
//   },
// });

// export default Signup;
