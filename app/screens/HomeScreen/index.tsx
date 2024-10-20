// App.js
import React from "react"
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native"
import Header from "./components/Header"
import AccountCard from "./components/AccountCard"
import FavoriteFeatures from "./components/FavoriteFeatures"
import ChatWithDigibot from "./components/ChatWithDigibot"
import BottomNavigation from "./components/BottomNavigation"
// import Header from "./components/Header"
// import AccountCard from "./components/AccountCard"
// import FavoriteFeatures from "./components/FavoriteFeatures"
// import BottomNavigation from "./components/BottomNavigation"
// import ChatWithDigibot from "./components/ChatWithDigibot"

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <AccountCard />
        <FavoriteFeatures />
      </ScrollView>
      <ChatWithDigibot />
      <BottomNavigation />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
})

export default App
