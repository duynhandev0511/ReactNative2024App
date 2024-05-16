import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardType } from "react-native";
import React, { ReactNode, useState } from "react";
import { CloseCircle, Eye, EyeSlash } from "iconsax-react-native";

interface Props {
    value: string;
    onChange: (val: string) => void;
    affix?: ReactNode;
    placeholder?: string
    suffix?: ReactNode
    isPassword?: boolean;
    allowClear?: boolean;
    type?: KeyboardType;
}

const InputComponent = (props: Props) => {
    const { value, onChange, affix, suffix, placeholder, isPassword, type, allowClear } = props;
    const [isShowPass, setIsShowPass] = useState(isPassword ?? false);

    return (
        <View style={styles.inputContainer}>
            {affix && <View style={styles.affixContainer}>{affix}</View>}
            <TextInput
                style={styles.input}
                value={value}
                placeholder={placeholder ?? ''}
                onChangeText={val => onChange(val)}
                secureTextEntry={isShowPass}
                placeholderTextColor="#747688"
                keyboardType={type ?? 'default'}
            />
            {suffix && <View style={styles.suffixContainer}>{suffix}</View>}
            <TouchableOpacity onPress={isPassword ? () => setIsShowPass(!isShowPass) : () => onChange('')}>
                {isPassword ? (
                    // Sử dụng Eye và EyeOff thay vì FontAwesome
                    <View>
                        {isShowPass ? (
                            <EyeSlash size={22} color="#696969" />
                        ) : (
                            <Eye size={22} color="#696969" />
                        )}
                    </View>
                ) : (
                    value.length > 0 &&
                    allowClear && (
                        <CloseCircle size={22} color="#696969" />
                    )
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#696969",
        width: '100%',
        minHeight: 56,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: 'white',
        marginBottom: 19,
    },
    input: {
        padding: 0,
        margin: 0,
        flex: 1,
        paddingHorizontal: 14,
        color: 'black',
    },
    affixContainer: {
        marginRight: 10,
    },
    suffixContainer: {
        marginLeft: 10,
    },
});

export default InputComponent;
