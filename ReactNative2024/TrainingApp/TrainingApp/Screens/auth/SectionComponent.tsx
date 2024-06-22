import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import { globalstyle } from './Globalstyle';

interface Props {
    children: ReactNode;
    styles?: StyleProp<ViewStyle>
}

const SectionComponent = (props: Props) => {
    const {children, styles} = props;
    return <View style={[globalstyle.section, styles]}>{children}</View>
};
export default SectionComponent;