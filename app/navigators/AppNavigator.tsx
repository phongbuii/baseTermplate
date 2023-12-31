import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React, { useEffect, useState } from "react"
import { ActivityIndicator, View, useColorScheme } from "react-native"
import Config from "../config"
import { useStores } from "../models" // @demo remove-current-line
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { colors } from "@app/theme/colors/colors"
import R from "@app/assets"
import { KEYSTORAGE, load } from "@app/utils/storage"
import { setLoginedApp } from "@app/redux/actions"
import { useDispatch } from "react-redux"
import { useSelector } from "@app/redux/reducers"
import { api } from "@app/services/api"
import Login from "@app/screens/Login"


export type AppStackParamList = {
 Login:undefined
  // 🔥 Your screens go here
  // IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  // @demo remove-block-start
  const {
    authenticationStore: { isAuthenticated },
  } = useStores()
  const isLoggedIn = useSelector((state) => state.appReducers.isLoggedIn)

  // @demo remove-block-end
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, navigationBarColor: colors.background }}
      // initialRouteName={isAuthenticated ? "TabNavigator" : "Login"} // @demo remove-current-line

      initialRouteName={ "Login"} // @demo remove-current-line
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
})

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()
  const [loadToken, setLoadToken] = useState(true)
  const dispatch = useDispatch()
  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))
  useEffect(() => {
    async function loadDataLocal() {
      const dataTokenLocal = await load(KEYSTORAGE.LOGIN_DATA)
      if (dataTokenLocal !== null) {
        api.apisauce.setHeader("access-token", dataTokenLocal?.accessToken)
        dispatch(setLoginedApp(true))
        setLoadToken(false)
      } else {
        dispatch(setLoginedApp(false))
        setLoadToken(false)
      }
    }
    loadDataLocal()
  }, [])

  if (loadToken) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <ActivityIndicator color={R.colors.primary} size="small" />
      </View>
    )
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
