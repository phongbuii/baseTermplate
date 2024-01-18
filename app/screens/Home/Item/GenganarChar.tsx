/* eslint-disable react-native/no-color-literals */
import { FlatList, StatusBar, StyleSheet, TouchableOpacity, View, processColor } from "react-native"
import React, { useEffect } from "react"
import { HEIGHT, WIDTH } from "@app/config/functions"
import { spacing } from "@app/theme/spacing"
import { colors } from "@app/theme/index"
import { Icon } from "@app/components/Icon"
import { Text } from "@app/components/Text"
import { BarChart, LineChart } from 'react-native-charts-wrapper';
import { retry } from "redux-saga/effects"
import { covertDayofWeek, customArrayWeek } from "@app/utils/formatDate"
import moment from "moment"
import { color } from "react-native-reanimated"
type IItem = {
    day?: string,
    value?: number
}
const NGAY_BAT_DAU = 0
const NGAY_KET_THUC = 4
type GeneralCharProps = {}
const GeneralChar: React.FC<GeneralCharProps> = (props) => {
    const { } = props

    const WEEK_DATA =
        customArrayWeek()

    const heightChart = (value: number) => {
        const height = 100 / HEIGHT(134) * value
        return height
    }
    useEffect(() => {
        console.log("covertWeek", covertWeek());

    }, [])
    const covertWeek = () => {
        const dataWeek = []
        customArrayWeek().forEach((element) => {
            dataWeek.push({ date: moment(element).format("DD/MM"), day: covertDayofWeek(moment(element).format("dddd")), value: 100 })
        })
        return dataWeek
    }
    const renderItemWeek = ({ item, index }: { item: IItem, index: number }) => {
        return (
            <View style={{ alignItems: "flex-end", justifyContent: "flex-end" }} >
                <View style={{
                    width: WIDTH(spacing.sm),
                    backgroundColor: colors.column_chart,
                    height: heightChart(item.value),
                    borderRadius: spacing.xxs

                }} />
                <Text preset="default" style={{ color: colors.column_chart }} >{item.day}</Text>
            </View>

        )
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card_chart}>
                <View style={{ height: HEIGHT(134), marginTop: HEIGHT(28) }} >
                    <FlatList
                        ItemSeparatorComponent={<View style={{ width: WIDTH(spacing.sm), backgroundColor: colors.card_chart1 }} />}
                        horizontal
                        renderItem={renderItemWeek}
                        data={covertWeek()} />
                </View>
                <Text style={{ marginTop: HEIGHT(spacing.md) }} preset="baSemibold" >Thống kê</Text>
                <Text preset="default" style={{ marginTop: HEIGHT(spacing.xxs), color: colors.describe }} >{covertWeek()[NGAY_BAT_DAU].date}-{covertWeek()[NGAY_KET_THUC].date}</Text>
            </TouchableOpacity>
            <View>
                <TouchableOpacity style={styles.card_money1}>
                    <Icon icon="coin" size={spacing.lg} />
                    <Text style={styles.thunhap} preset="default">
                        Thu nhập hôm nay
                    </Text>
                    <Text style={styles.money} preset="subheading">
                        240,000 d
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card_money2}>
                    <Icon icon="wallet" size={spacing.lg} />
                    <Text style={styles.thunhap} preset="default">
                        Thu nhập hôm nay
                    </Text>
                    <Text style={styles.money} preset="subheading">
                        240,000 d
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GeneralChar

const styles = StyleSheet.create({
    card_chart: {
        alignItems: "center",
        backgroundColor: colors.card_chart1,
        borderColor: colors.border,
        borderRadius: spacing.lg + spacing.xxs,
        borderWidth: 1,
        elevation: 2,
        height: HEIGHT(256),
        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        width: WIDTH(164)
    },
    card_money1: {
        backgroundColor: colors.card_chart2,
        borderColor: colors.border,
        borderRadius: spacing.lg + spacing.xxs,
        borderWidth: 1,
        elevation: 2,
        height: HEIGHT(120),
        padding: spacing.md,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        width: WIDTH(164),
    },
    card_money2: {
        backgroundColor: colors.card_chart3,
        borderColor: colors.border,
        borderRadius: spacing.lg + spacing.xxs,
        borderWidth: 1,
        elevation: 2,
        height: HEIGHT(120),
        marginTop: HEIGHT(spacing.md),
        padding: spacing.md,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        width: WIDTH(164),
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: HEIGHT(spacing.md),
        paddingHorizontal: WIDTH(spacing.md),
    },
    money: { marginTop: HEIGHT(spacing.xxs) },
    thunhap: {
        color: colors.describe,
        marginTop: HEIGHT(spacing.sm)
    }
})
