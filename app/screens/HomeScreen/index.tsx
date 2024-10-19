import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Bell, Settings, LogOut, Search } from "lucide-react-native"

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.logo}>VCBDigibank</Text>
    <View style={styles.headerIcons}>
      <Bell color="white" size={24} />
      <Text style={styles.notificationBadge}>2</Text>
      <Settings color="white" size={24} />
      <LogOut color="white" size={24} />
    </View>
  </View>
)

const AccountCard = () => (
  <View style={styles.accountCard}>
    <View style={styles.accountInfo}>
      <Text style={styles.accountName}>DO THI HIEN</Text>
      <Text style={styles.accountNumber}>Số tài khoản 1021985776</Text>
      <Text style={styles.balance}>Số dư *********</Text>
    </View>
    <TouchableOpacity style={styles.qrButton}>
      <Text style={styles.qrButtonText}>QR</Text>
    </TouchableOpacity>
  </View>
)

const QuickActionButton = ({ icon, label }) => (
  <TouchableOpacity style={styles.quickActionButton}>
    {icon}
    <Text style={styles.quickActionLabel}>{label}</Text>
  </TouchableOpacity>
)

const QuickActions = () => (
  <View style={styles.quickActions}>
    <Text style={styles.sectionTitle}>Chức năng ưa thích</Text>
    {/* <View style={styles.quickActionButtons}>
      <QuickActionButton
        icon={<Image source={require("./assets/transfer-icon.png")} style={styles.icon} />}
        label="Chuyển tiền từ thiện"
      />
      <QuickActionButton
        icon={<Image source={require("./assets/domestic-transfer-icon.png")} style={styles.icon} />}
        label="Chuyển tiền trong nước"
      />
      <QuickActionButton
        icon={<Image source={require("./assets/group-management-icon.png")} style={styles.icon} />}
        label="Quản lý nhóm"
      />
      <QuickActionButton
        icon={<Image source={require("./assets/savings-icon.png")} style={styles.icon} />}
        label="Mở tiết kiệm"
      />
      <QuickActionButton
        icon={<Image source={require("./assets/transfer-limit-icon.png")} style={styles.icon} />}
        label="Cài đặt hạn mức chuyển+"
      />
      <QuickActionButton
        icon={<Image source={require("./assets/phone-topup-icon.png")} style={styles.icon} />}
        label="Nạp tiền điện thoại"
      />
    </View> */}
  </View>
)

const BottomNavigation = () => (
  <View style={styles.bottomNavigation}>
    {/* <TouchableOpacity style={styles.navItem}>
      <Image source={require("./assets/products-icon.png")} style={styles.navIcon} />
      <Text style={styles.navLabel}>Sản phẩm</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require("./assets/qr-icon.png")} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require("./assets/settings-icon.png")} style={styles.navIcon} />
      <Text style={styles.navLabel}>Cài đặt</Text>
    </TouchableOpacity> */}
  </View>
)

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <Header />
      <AccountCard />
      <QuickActions />
    </ScrollView>
    <BottomNavigation />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2c7a3f",
    padding: 16,
  },
  logo: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationBadge: {
    backgroundColor: "red",
    color: "white",
    borderRadius: 10,
    paddingHorizontal: 5,
    marginLeft: -10,
    marginRight: 10,
  },
  accountCard: {
    backgroundColor: "#2c7a3f",
    padding: 16,
    margin: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  accountNumber: {
    color: "white",
    marginTop: 4,
  },
  balance: {
    color: "white",
    marginTop: 8,
  },
  qrButton: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  qrButtonText: {
    color: "#2c7a3f",
    fontWeight: "bold",
  },
  quickActions: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  quickActionButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  quickActionButton: {
    width: "30%",
    alignItems: "center",
    marginBottom: 16,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  quickActionLabel: {
    textAlign: "center",
    fontSize: 12,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingVertical: 8,
    backgroundColor: "white",
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
  },
})

export default HomeScreen
