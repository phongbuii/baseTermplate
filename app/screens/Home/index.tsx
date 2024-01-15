import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Screen } from '@app/components/Screen'
import colors from "@app/assets/colors"
import HeaderHome from '@app/components/headers'
import { WIDTH } from '@app/config/functions'
import { spacing } from '@app/theme/spacing'
import CalendarStrip from "react-native-calendar-strip"
const Home = () => {
    const datesBlacklistFunc = date => {
        return date.isoWeekday() === 6; // disable Saturdays
    }
    return (
        <Screen preset="scroll" style={styles.container}>
            <HeaderHome title='Vinh Anh' />
            <CalendarStrip
                datesBlacklist={datesBlacklistFunc}
            />
        </Screen>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray_1,
        flex: 1,
    },
})