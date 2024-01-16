import { FlatList, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import React from "react"
import { HEIGHT, WIDTH, getWidth } from "@app/config/functions"
import { spacing } from "@app/theme/spacing"
import { colors } from "@app/theme/index"
import { Text } from "@app/components/Text"
type WeekITem = {
    day?: string
    dayOfWeek?: string
}
type CalendarWeekProps = {
    weekDays?: WeekITem[]
    styleContainer?: ViewStyle
}
const CalendarWeek = (props: CalendarWeekProps) => {
    const { weekDays, styleContainer, ...rest } = props
    const $ViewContainer: ViewStyle = {
        height: HEIGHT(44),
        width: HEIGHT(44),
        borderRadius: spacing.sm,
        backgroundColor: colors.background,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: WIDTH(spacing.xxs),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 2,
        alignSelf: "center"

    }
    const renderItem = (item: WeekITem, index: number) => {
        return (
            <TouchableOpacity key={index + 1} style={$ViewContainer}>
                <Text preset="smRegular"  >{item.dayOfWeek}</Text>
                <Text preset="subheading" >{item.day}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styleContainer} {...rest} >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    height: HEIGHT(60),
                    backgroundColor: colors.primaryDim,
                    marginLeft: WIDTH(spacing.md),
                    borderTopLeftRadius: HEIGHT(spacing.xl),
                    borderBottomLeftRadius: HEIGHT(spacing.xl),
                    marginTop: HEIGHT(spacing.md),
                    justifyContent: "space-between",

                }}
            >
                <Text style={{ marginHorizontal: WIDTH(spacing.md) }} >Tuần này</Text>
                <View style={{ width: getWidth(), }} >
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(it, idx) => (idx + 1).toString()}
                        horizontal
                        data={weekDays}
                        renderItem={({ item, index }) => renderItem(item, index)}
                    />
                </View>
            </View>

        </View>
    )
}

export default CalendarWeek

const styles = StyleSheet.create({})
