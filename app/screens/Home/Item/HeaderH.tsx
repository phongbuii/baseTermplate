import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '@app/config/functions'
import { Icon } from '@app/components/Icon'
import AvatarImage from 'react-native-paper/lib/typescript/components/Avatar/AvatarImage'
import { Avatar } from 'react-native-paper'
import R from '@app/assets/index'
import { spacing } from '@app/theme/spacing'
import { Text } from '@app/components/Text'
const HeaderH = () => {
    return (
        <View style={{ marginTop: HEIGHT(52), paddingHorizontal: WIDTH(spacing.md) }} >
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: HEIGHT(spacing.sm) }} >
                <TouchableOpacity>
                    <Avatar.Image size={HEIGHT(48)} source={R.images.avatar} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon size={HEIGHT(54)} icon="menu_v2" />
                </TouchableOpacity>
            </View>
            <Text preset="heading" >Xin chào Vinh Anh</Text>
            <Text preset="default" >Mừng trở lại!</Text>
        </View>
    )
}

export default HeaderH

const styles = StyleSheet.create({})