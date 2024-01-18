import { FlatList, ScrollView, StatusBar, StyleSheet, View } from "react-native"
import React from "react"
import { Screen } from "@app/components/Screen"
import HeaderHome from "@app/components/headers"
import { HEIGHT, WIDTH, getWidth } from "@app/config/functions"
import { spacing } from "@app/theme/spacing"
import CalendarStrip from "react-native-calendar-strip"
import { Calendar, LocaleConfig } from "react-native-calendars"
import moment from "moment"
import { Text } from "@app/components/Text"
import { covertDayofWeek } from "@app/utils/formatDate"
import CalendarWeek from "./Item/CalendarWeek"
import { colors } from "@app/theme/index"
import ListHistory from "./Item/ListHistory"
import HeaderH from "./Item/HeaderH"
import GeneralChar from "./Item/GenganarChar"
const Home = () => {
    const mapWeekDays = () => {
        const startOfWeek = moment().startOf("week").isoWeekday(1)
        const endOfWeek = moment().endOf("week").isoWeekday(7)

        const days = []
        let currentDay = startOfWeek.clone()

        while (currentDay.isSameOrBefore(endOfWeek)) {
            days.push({
                day: currentDay.format("DD"),
                dayOfWeek: covertDayofWeek(currentDay.format("dddd")),
            })
            currentDay.add(1, "day")
        }

        return days
    }

    // Example usage
    const weekDays = mapWeekDays()
    return (
        <Screen style={styles.container}>
            <HeaderH />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: HEIGHT(200) }} >
                <GeneralChar />
                <ListHistory />
            </ScrollView>
        </Screen>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
    },
})
