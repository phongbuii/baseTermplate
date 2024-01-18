import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native"
import React from "react"
import { Text } from "@app/components/Text"
import { HEIGHT, WIDTH, getFont } from "@app/config/functions"
import { spacing } from "@app/theme/spacing"
import { DATA_HISTORY } from "./fakeData"
import R from "@app/assets/index"
import { colors } from "@app/theme/index"
type IItem = {
    img?: number
    create_date?: string
    directory?: string
    note?: string
    money?: number
}
type ListProps = {
    data?: IItem[]
}
const ListHistory: React.FC = (props: ListProps) => {
    const { data = DATA_HISTORY } = props
    const renderItem = ({ item, index }: { item: IItem; index: number }) => {
        return (
            <TouchableOpacity
                style={[
                    styles.item,
                    { backgroundColor: item.money > 0 ? colors.success : colors.card_chart2 },
                ]}
            >
                {__DEV__ && <Text>{index + 1}</Text>}
                <View style={styles.view_item}>
                    <Image
                        source={R.images.onboard}
                        style={styles.image}
                    />
                    <View>
                        <Text preset="baMedium" style={{ fontSize: getFont(spacing.md) }}>
                            {item.directory}
                        </Text>
                        <Text style={{ color: colors.describe }} preset="default">{item.create_date}</Text>
                    </View>
                </View>
                <View>
                    <Text
                        preset="baSemibold"
                        style={{
                            fontSize: getFont(spacing.md),
                            color: item.money > 0 ? colors.success_add : colors.error,
                        }}
                    >
                        {item.money > 0 && "+"}
                        {item.money}d
                    </Text>
                    <Text
                        preset="default"
                        style={{
                            color: colors.describe,
                            textAlign: "right"
                        }}
                    >
                        Người tạo
                    </Text>
                </View>

            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <Text preset="subheading" style={{ marginBottom: HEIGHT(spacing.md) }}>
                Lịch sử hôm nay
            </Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.flatlist}
                ItemSeparatorComponent={() => (
                    <View style={{ height: HEIGHT(spacing.md), backgroundColor: colors.background }} />
                )}
                keyExtractor={(it, idx) => (idx + 1).toString()}
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
}

export default ListHistory

const styles = StyleSheet.create({
    container: { marginHorizontal: WIDTH(spacing.md), marginTop: HEIGHT(spacing.md) },
    flatlist: {},
    image: {
        borderRadius: spacing.xxs,
        height: HEIGHT(40),
        marginRight: WIDTH(spacing.sm),
        marginTop: HEIGHT(spacing.xxs),
        width: HEIGHT(40),
    },
    item: {
        alignItems: "center",
        borderColor: colors.border,
        borderRadius: spacing.md,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: WIDTH(spacing.md),
    },
    view_item: {
        flexDirection: "row",
        paddingVertical: HEIGHT(spacing.sm)
    }
})
