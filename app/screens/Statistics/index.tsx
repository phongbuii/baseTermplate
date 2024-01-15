import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Screen } from '@app/components/Screen'
import HeaderHome from '@app/components/headers'

const Statistics = () => {
    return (
        <Screen preset="scroll" style={styles.container}>
            <HeaderHome icon_right="trailing" title='Thống kê' />
        </Screen>
    )
}

export default Statistics

const styles = StyleSheet.create({})