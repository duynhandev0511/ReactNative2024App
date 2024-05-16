import {View, Text, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import React, { ReactNode } from 'react';
import { globalstyle } from './Globalstyle';

interface Props  {
    justify?:
    |"space-between"
    |"center"
    |undefined;
    styles?: StyleProp<ViewStyle>;
    children: ReactNode;
    onPress?: () => void
}

const RowComponent = (props: Props) => {
    const {styles, justify, children, onPress} = props;
    const localstyle = [globalstyle.row, styles, {justifyContent: justify}];
    return onPress ? (<TouchableOpacity activeOpacity={1} onPress={onPress} style={localstyle}>
        {children}
    </TouchableOpacity>) :(
    <View style={localstyle}>{children}</View>
);
};

export default RowComponent;