// components/AccountCard.js
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { User, Eye, Clock, CreditCard } from "lucide-react-native"

const AccountCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.userInfo}>
        <User color="white" size={24} />
        <Text style={styles.userName}>DO THI HIEN</Text>
      </View>
      <Text style={styles.accountNumber}>Số tài khoản 1021985776</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Số dư</Text>
        <Text style={styles.balanceValue}>*********</Text>
        <TouchableOpacity>
          <Eye color="white" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardActions}>
        <TouchableOpacity style={styles.action}>
          <Clock color="white" size={20} />
          <Text style={styles.actionText}>Lịch sử giao dịch</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.action}>
          <CreditCard color="white" size={20} />
          <Text style={styles.actionText}>Tài khoản & Thẻ</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.qrButton}>
        <Text style={styles.qrButtonText}>QR</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2c7a3f",
    margin: 16,
    borderRadius: 8,
    padding: 16,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  userName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  accountNumber: {
    color: "white",
    marginBottom: 8,
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  balanceLabel: {
    color: "white",
    marginRight: 8,
  },
  balanceValue: {
    color: "white",
    fontWeight: "bold",
    marginRight: 8,
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    color: "white",
    marginLeft: 8,
  },
  divider: {
    width: 1,
    backgroundColor: "white",
    marginHorizontal: 8,
  },
  qrButton: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 4,
  },
  qrButtonText: {
    color: "#2c7a3f",
    fontWeight: "bold",
  },
})

export default AccountCard
