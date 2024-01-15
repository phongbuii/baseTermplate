/* eslint-disable camelcase */
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH, getWidth } from '@app/config/functions'
import { colors, spacing } from '@app/theme/index'
import { Icon, IconTypes } from '../Icon'
import { Text } from '../Text'
import { Card } from '../Card'
import CardHeader from './CardHeader'
type HeaderProps = {
    icon_right?: IconTypes,
    title?: string
}
const HeaderHome: React.FC<HeaderProps> = (props) => {
    // eslint-disable-next-line camelcase
    const { icon_right = "user_2", title } = props
    return (
        <View style={{ flex: 1 }} >
            <View style={{ height: HEIGHT(236), borderRadius: HEIGHT(50), backgroundColor: colors.primaryDim, marginTop: HEIGHT(-48), paddingHorizontal: WIDTH(spacing.md) }} >
                <View style={{ marginTop: HEIGHT(52 * 2), flexDirection: "row", justifyContent: "space-between", height: HEIGHT(64), alignItems: "center" }} >
                    <TouchableOpacity>
                        <Icon icon="menu" size={spacing.lg} />
                    </TouchableOpacity>
                    <Text preset="mdMedium" size="xxl" >{title}</Text>
                    <TouchableOpacity>
                        <Icon icon={icon_right} size={spacing.lg} />
                    </TouchableOpacity>
                </View>

            </View>
            <CardHeader />
        </View>
    )
}

export default HeaderHome

const styles = StyleSheet.create({})