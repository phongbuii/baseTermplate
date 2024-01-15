import { StyleSheet, TouchableOpacity, View, ViewProps, ViewStyle, processColor } from "react-native"
import React, { useState } from "react"
import { colors, spacing } from "@app/theme/index"
import { Text } from "../Text"
import { HEIGHT, WIDTH, getWidth } from "@app/config/functions"
import CircularProgress from 'react-native-circular-progress-indicator';
enum CONTAIN_TAB {
    CHI_TIEU = 1,
    THU_NHAP = 2,
}
const TAB_CARD = [
    {
        title: "Chi tiêu",
        value: CONTAIN_TAB.CHI_TIEU,
    },
    {
        title: "Thu Nhập",
        value: CONTAIN_TAB.THU_NHAP,
    },
]
const CardHeader: React.FC = () => {
    const [tabCard, setTabCard] = useState(1)
    const setColorTittleTab = (tab: number) => {
        if (tab === tabCard)
            return {
                borderBottomColor: colors.background,
                borderBottomWidth: 1,
            }
    }



    return (
        <View>
            <View style={styles.container}>

                <View style={{}}>
                    <View style={{ flexDirection: "row", width: "70%" }}>
                        {TAB_CARD.map((tab, _idx) => (
                            <TouchableOpacity
                                key={tab.value.toString()}
                                onPress={() => setTabCard(_idx + 1)}
                                style={[styles.title_tab, setColorTittleTab(tab.value)]}
                            >
                                <Text preset="baMedium" style={{ color: colors.background }}>
                                    {tab.title}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={{ alignItems: "center", flexDirection: "row" }}>

                        <View style={{ flex: 3, paddingHorizontal: WIDTH(spacing.md), paddingVertical: HEIGHT(spacing.xs), marginTop: HEIGHT(spacing.xs) }} >
                            <Text preset="formLabel" style={{ color: colors.separator }} >Chi tiêu hôm nay</Text>
                            <Text preset="xxxlsemibold" style={{ color: colors.background }} >1.500.500 đ </Text>
                            <Text preset="formLabel" style={{ color: colors.separator }}>Tổng chi tiêu tháng này</Text>
                            <Text preset="mdRegular" style={{ color: colors.background }} >1.500.500 đ </Text>
                        </View>
                        <View style={{ flex: 2.5 }} >
                            <CircularProgress
                                activeStrokeColor={colors.background}
                                value={50}
                                activeStrokeWidth={12}
                                progressValueColor={colors.background}
                                title="1,5tr"
                                valueSuffix="%"
                            />
                        </View>

                    </View>

                </View>



            </View>
        </View>
    )
}

export default CardHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.card,
        borderRadius: HEIGHT(28),
        height: HEIGHT(194),
        marginHorizontal: WIDTH(spacing.md),
        marginTop: HEIGHT(-72),
    },
    title_tab: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        paddingVertical: HEIGHT(14),
    },
})
