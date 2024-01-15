import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'
import { HEIGHT, WIDTH } from '@app/config/functions'
import { Text } from '@app/components/Text'
import R from '@app/assets/index'
type Props = {}
const LoginSocial: React.FC<Props> = () => {
    const { colors } = useTheme()
    return (
        <View>
            <View style={{ flexDirection: "row", marginTop: HEIGHT(40), alignItems: "center", justifyContent: "center" }} >
                <View style={{ height: HEIGHT(1), backgroundColor: colors.backdrop, width: "30%", marginLeft: HEIGHT(40) }} />
                <Text preset="default" style={{ marginHorizontal: WIDTH(10), color: colors.tertiary }} >Hoặc</Text>
                <View style={{ height: HEIGHT(1), backgroundColor: colors.backdrop, width: "30%", marginRight: HEIGHT(40) }} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: HEIGHT(20) }} >
                <TouchableOpacity>
                    <Image style={{ height: HEIGHT(60), width: HEIGHT(60), marginHorizontal: HEIGHT(10) }} source={R.images.google} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{ height: HEIGHT(60), width: HEIGHT(60), marginHorizontal: HEIGHT(10) }} source={R.images.facebook} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginSocial

const styles = StyleSheet.create({})