// import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
// import React from "react";
// import SectionComponent from "./SectionComponent";
// import { colors } from "../color";

// const SocialLogin = () => {
//     return (
//         <SectionComponent>
//             <Text style={{color: colors.grey, textAlign: 'center'}}>OR</Text>
//             <TouchableOpacity activeOpacity={0.7}>
//           <View style={styles.boxnew}>
//             <View style={styles.mainnews1}>
//             <Image
//                 source={require('../../assets/Images/google.png')}
//                 style={styles.img}
//               />
//               <Text style={styles.maintext1} >Đăng nhập với Google</Text>
//             </View>
//             </View>
//         </TouchableOpacity>

//         <TouchableOpacity activeOpacity={0.7}>
//           <View style={styles.boxnew}>
//             <View style={styles.mainnews1}>
//             <Image
//                 source={require('../../assets/Images/facebook.png')}
//                 style={styles.img}
//               />
//               <Text style={styles.maintext1} >Đăng nhập với Facebook</Text>
//             </View>
//             </View>
//         </TouchableOpacity>
//         </SectionComponent>
//     );
// };

// const styles = StyleSheet.create ({
//     boxnew: {
//         marginTop: 10,
//         alignItems: 'center',
//       },
//       mainnews1: {
//         width: 280 ,
//         height: 60,
//         borderRadius: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'white',
//         borderColor: '#ccc',
//         borderWidth: 1,
//         flexDirection: 'row'
//       },
//       img: {
//         width: 28 ,
//         height: 28,
//         resizeMode: 'stretch',
//         borderRadius: 10,
//       },
//       maintext1: {
//         width: 'auto',
//         color: 'black',
//         fontWeight: '400',
//         textAlign: 'center',
//         fontSize: 16,
//         marginLeft: 10,
//       },
// });

// export default SocialLogin;