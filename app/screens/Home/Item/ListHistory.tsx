import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from '@app/components/Text'
import { HEIGHT, WIDTH, getFont } from '@app/config/functions'
import { spacing } from '@app/theme/spacing'
import { DATA_HISTORY } from './fakeData'
import R from '@app/assets/index'
import { colors } from '@app/theme/index'
type IItem = {
    img?: number,
    create_date?: string,
    directory?: string,
    note?: string,
    money?: number

}
type ListProps = {
    data?: IItem[]
}
const ListHistory: React.FC = (props: ListProps) => {
    const { data = DATA_HISTORY } = props
    const renderItem = ({ item, index }: { item: IItem, index: number }) => {
        return (
            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                <View style={{ flexDirection: "row", paddingVertical: HEIGHT(spacing.sm) }} >
                    <Image source={R.images.onboard} style={{ height: HEIGHT(40), width: HEIGHT(40), borderRadius: spacing.xxs, marginRight: WIDTH(spacing.sm), marginTop: HEIGHT(spacing.xxs) }} />
                    <View>
                        <Text>{item.create_date}</Text>
                        <Text preset="baSemibold" style={{ fontSize: getFont(spacing.md) }} >{item.directory}</Text>
                        <Text preset="mdRegular" >{item.note}</Text>
                    </View>
                </View>
                <Text preset="baSemibold" style={{ fontSize: getFont(spacing.md), color: colors.error }} >-{item.money}d </Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ marginHorizontal: WIDTH(spacing.md), marginTop: HEIGHT(spacing.md) }} >
            <Text>Lịch sử</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
}

export default ListHistory

const styles = StyleSheet.create({})