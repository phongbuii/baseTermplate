/* eslint-disable import/first */
/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
if (__DEV__) {
  // Load Reactotron configuration in development. We don't want to
  // include this in our production bundle, so we are using `if (__DEV__)`
  // to only execute this in development.
  require("./devtools/ReactotronConfig.ts")
}
import { OrientationLocker,  PORTRAIT } from "react-native-orientation-locker"
import { setLangInApp } from "./i18n"
import "./utils/ignoreWarnings"
import { useFonts } from "expo-font"
import React, { useEffect } from "react"
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import { Alert, Appearance, Platform } from "react-native"
import * as Linking from "expo-linking"
import { useInitialRootStore } from "./models"
import { AppNavigator, useNavigationPersistence } from "./navigators"
import * as storage from "./utils/storage"
import { customFontsToLoad } from "./theme"

import { PreferencesContext } from "./context/themeContext"
import { PaperProvider } from "react-native-paper"
import { colorExpandLight, lightTheme } from "./theme/colors/index"
import { createThemeFromSourceColor } from "./utils/m3/createMaterial3Theme"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducers from "./redux/reducers"
import Toast from "react-native-toast-message"
import rootSaga from "@app/redux/sagas"
export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"
import codePush from "react-native-code-push"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

// Web linking configuration
const prefix = Linking.createURL("/")
const config = {
  screens: {
    Login: {
      path: "",
    },
    Welcome: "welcome",
    Demo: {
      screens: {
        DemoShowroom: {
          path: "showroom/:queryIndex?/:itemIndex?",
        },
        DemoDebug: "debug",
        DemoPodcastList: "podcast",
        DemoCommunity: "community",
      },
    },
  },
}

interface AppProps {
  hideSplashScreen: () => Promise<void>
}

/**
 * This is the root component of our app.
 */

function App(props: AppProps) {
  const { hideSplashScreen } = props
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY)

  const [areFontsLoaded] = useFonts(customFontsToLoad)
  const [isThemeDark, setIsThemeDark] = React.useState(true)
  const [sourceColor, setSourceColor] = React.useState("#183E9F")
  const [isDefaultSystem, setIsDefaultSystem] = React.useState(false)
  const setDefaultSystem = React.useCallback(
    (value: boolean) => {
      return setIsDefaultSystem(value)
    },
    [isDefaultSystem],
  )
  const setSourceColorM3 = React.useCallback(
    (value: string) => {
      return setSourceColor(value)
    },
    [isDefaultSystem],
  )
  const toggleTheme = React.useCallback(
    (value: boolean) => {
      return setIsThemeDark(value)
    },
    [isThemeDark],
  )
  const getDataDarkMode = async () => {
    const dataDarkMode: any = await storage.load(storage.KEYSTORAGE.DATA_DARKMODE)
    const dataSourceColor = await storage.load(storage.KEYSTORAGE.SOURCE_COLOR)
    if (dataSourceColor !== null) {
      setSourceColor(dataSourceColor)
    }
    if (!dataDarkMode || (dataDarkMode && dataDarkMode?.isDefaultSystem)) {
      setDefaultSystem(true)
      const colorScheme = Appearance.getColorScheme()
      if (colorScheme === "dark") {
        toggleTheme(true)
      } else toggleTheme(false)
    } else {
      if (dataDarkMode && dataDarkMode?.isThemeDark) {
        toggleTheme(true)
      } else toggleTheme(false)
    }
  }

  useEffect(() => {
    setLangInApp()
    getDataDarkMode()
  }, [])
  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
      setDefaultSystem,
      isDefaultSystem,
      setSourceColorM3,
      sourceColor,
    }),
    [toggleTheme, isThemeDark, isDefaultSystem, setDefaultSystem, sourceColor, setSourceColorM3],
  )
  const { rehydrated } = useInitialRootStore(() => {
    setTimeout(hideSplashScreen, 500)
  })

  if (!rehydrated || !isNavigationStateRestored || !areFontsLoaded) return null

  const linking = {
    prefixes: [prefix],
    config,
  }
  const customTheme = createThemeFromSourceColor(sourceColor)
  codePush.checkForUpdate().then((update) => {
    if (!update) {
      console.log("The app is up to date!")
    } else {
      Alert.alert("Cập nhật", "Cập nhật phiên bản mới ngay!", [
        {
          text: "Ok",
          onPress: () => {
            codePush.sync()
          },
        },
        {
          text: "Hủy",
        },
      ])
      console.log("An update is available! Should we download it?")
    }
  })

  // const theme = isThemeDark
  //   ? { ...darkTheme, colors: { ...customTheme.dark, ...colorExpandDark } }
  //   : { ...lightTheme, colors: { ...customTheme.light, ...colorExpandLight } }
  const theme = { ...lightTheme, colors: { ...customTheme.light, ...colorExpandLight } }
  // otherwise, we're ready to render the app
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <PreferencesContext.Provider value={preferences}>
        <Provider store={store}>
          <PaperProvider theme={theme}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <AppNavigator
                linking={linking}
                initialState={initialNavigationState}
                onStateChange={onNavigationStateChange}
              />
              <Toast />
              <OrientationLocker orientation={PORTRAIT} />
            </GestureHandlerRootView>
          </PaperProvider>
        </Provider>
      </PreferencesContext.Provider>
    </SafeAreaProvider>
  )
}

export default codePush(App)
