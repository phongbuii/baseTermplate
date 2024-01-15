/* eslint-disable react/react-in-jsx-scope */
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { CommonActions, CompositeScreenProps } from "@react-navigation/native"
import { BottomNavigation } from "react-native-paper"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import Home from "@app/screens/Home"
import { Platform, TextStyle, ViewStyle } from "react-native"
import { colors, spacing, typography } from "../theme"
import { HEIGHT } from "@app/config/functions"
import R from "@app/assets"
import { Icon, Text } from "../components"
import Login from "@app/screens/Login"
import Statistics from "@app/screens/Statistics"
import BottomTabBar from "./BottomTabBar"
export type DemoTabParamList = {
    Home: undefined,
    Statistics: undefined

}

export type DemoTabScreenProps<T extends keyof DemoTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<DemoTabParamList, T>,
    AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<DemoTabParamList>()
export function TabNavigator() {
    const { bottom } = useSafeAreaInsets()

    // navigate("Login")
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: [$tabBar, { height: bottom + 70, backgroundColor: colors.error }],
                tabBarActiveTintColor: colors.text,
                tabBarInactiveTintColor: colors.text,
                tabBarLabelStyle: $tabBarLabel,
                tabBarItemStyle: $tabBarItem,
                tabBarShowLabel: false,
            }}
            tabBar={(props) => (
                <BottomTabBar

                    {...props} />
            )}
        >
            <Tab.Screen component={Home} name="Home" options={{
                tabBarLabel: "Home",
                tabBarIcon: () => (
                    <Icon

                        size={HEIGHT(spacing.lg)}
                        icon="ic_home_bt" />
                )
            }} />
            <Tab.Screen component={Statistics} name="Statistics"
                options={{

                    tabBarLabel: "Thống kê",
                    tabBarIcon: () => (
                        <Icon size={HEIGHT(spacing.lg)} icon="ic_statistics_bt" />
                    )
                }}
            />

        </Tab.Navigator>
    )
}

const $tabBar: ViewStyle = {
    backgroundColor: colors.background,
    borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
    paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
    fontSize: 12,
    fontFamily: typography.primary.medium,
    lineHeight: 16,
    flex: 1,
}
