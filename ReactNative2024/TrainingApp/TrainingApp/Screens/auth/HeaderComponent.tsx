import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { User, Notification } from "iconsax-react-native";

const HeaderComponent = () => {
    return (
        <View style={styles.header}>
        {/* Logo container */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/Images/logo1.png')}
            style={styles.logo}
          />
        </View>
        {/* Icon container */}
        <View style={styles.iconContainer}>
          {/* User icon */}
          <TouchableOpacity style={styles.icon}>
            <User color="#fff" size={24} variant="Bold" />
          </TouchableOpacity>
          {/* Notification icon */}
          <TouchableOpacity style={styles.icon}>
            <Notification color="#fff" size={24} variant="Bold" />
          </TouchableOpacity>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Chia không gian ngang đều cho các phần tử trong header
        paddingHorizontal: 20,
        paddingTop: 10,
        height: 70,
        backgroundColor: '#0C0042',
      },
      logoContainer: {
        flexDirection: 'row', // Hiển thị các phần tử trong logo container theo hàng ngang
        alignItems: 'center', // Canh giữa các phần tử trong logo container
        justifyContent: 'center',
      },
      logo: {
        width: 80,
        height: 40,
        marginRight: 10,
      },
    iconContainer: {
        flexDirection: 'row', // Hiển thị các phần tử trong icon container theo hàng ngang
        alignItems: 'center', // Canh giữa các phần tử trong icon container
      },
      icon: {
        marginLeft: 20, // Khoảng cách giữa các icon
      },
});

export default HeaderComponent;