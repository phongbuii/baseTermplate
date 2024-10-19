import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ArrowLeft, ChevronDown, FileText } from "lucide-react-native"

const Header = () => (
  <View style={styles.header}>
    <TouchableOpacity>
      <ArrowLeft color="#000" size={24} />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Chuyển tiền trong nước</Text>
    <TouchableOpacity style={styles.headerRight}>
      <View style={styles.headerRightIcon} />
    </TouchableOpacity>
  </View>
)

const SourceAccount = ({ accountNumber, balance }) => (
  <TouchableOpacity style={styles.sourceAccount}>
    <View>
      <Text style={styles.sourceAccountLabel}>Tài khoản nguồn</Text>
      <Text style={styles.sourceAccountNumber}>{accountNumber}</Text>
    </View>
    <View style={styles.sourceAccountRight}>
      <Text style={styles.sourceAccountBalance}>{balance}</Text>
      <ChevronDown color="#000" size={20} />
    </View>
  </TouchableOpacity>
)

const RecipientInfo = () => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Thông tin người nhận</Text>
      <TouchableOpacity>
        <Text style={styles.transferTemplateText}>Mẫu chuyển tiền</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.input}>
      <Text>Vietcombank - Ngân hàng TMCP Ngoại th...</Text>
      <ChevronDown color="#000" size={20} />
    </TouchableOpacity>
    <View style={styles.input}>
      <TextInput placeholder="123 45678 25353" />
      <TouchableOpacity>
        <FileText color="#2c7a3f" size={20} />
      </TouchableOpacity>
    </View>
    <TextInput style={styles.input} placeholder="Nguyen Chu Thuy Trang" />
    <View style={styles.switchContainer}>
      <Text>Lưu người nhận</Text>
      <Switch />
    </View>
  </View>
)

const TransactionInfo = () => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Thông tin giao dịch</Text>
      <TouchableOpacity>
        <Text style={styles.limitText}>Hạn mức</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.amountInput}>
      <TextInput placeholder="123,456" keyboardType="numeric" style={styles.amountText} />
      <Text style={styles.currencyText}>VND</Text>
    </View>
    <TextInput
      style={[styles.input, styles.contentInput]}
      placeholder="Nguyen Van An Chuyen Tien"
      multiline
    />
  </View>
)

const ChuyenTienTrongNuoc = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <Header />
      <SourceAccount accountNumber="100100xxxxxxx" balance="*** *** *** VND" />
      <RecipientInfo />
      <TransactionInfo />
    </ScrollView>
    <TouchableOpacity style={styles.continueButton}>
      <Text style={styles.continueButtonText}>Tiếp tục</Text>
    </TouchableOpacity>
    <Text style={styles.versionText}>Phiên bản trải nghiệm VCB Digibank</Text>
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
    padding: 16,
    backgroundColor: "white",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerRightIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#2c7a3f",
    borderRadius: 12,
  },
  sourceAccount: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2c7a3f",
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  sourceAccountLabel: {
    color: "white",
    marginBottom: 4,
  },
  sourceAccountNumber: {
    color: "white",
    fontWeight: "bold",
  },
  sourceAccountRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  sourceAccountBalance: {
    color: "white",
    marginRight: 8,
  },
  section: {
    backgroundColor: "white",
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transferTemplateText: {
    color: "#2c7a3f",
  },
  limitText: {
    color: "#2c7a3f",
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amountInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  amountText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  currencyText: {
    fontSize: 16,
  },
  contentInput: {
    height: 80,
  },
  continueButton: {
    backgroundColor: "#2c7a3f",
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  versionText: {
    textAlign: "center",
    color: "red",
    marginBottom: 16,
  },
})

export default ChuyenTienTrongNuoc
