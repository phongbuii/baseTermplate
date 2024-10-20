// components/FavoriteFeatures.js
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Heart, DollarSign, Users, PiggyBank, Settings, Smartphone } from "lucide-react-native"

const FeatureButton = ({ icon, label, isNew = false }) => (
  <TouchableOpacity style={styles.featureButton}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.featureLabel}>{label}</Text>
    {isNew && (
      <View style={styles.newBadge}>
        <Text style={styles.newBadgeText}>Mới</Text>
      </View>
    )}
  </TouchableOpacity>
)

const FavoriteFeatures = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Heart color="#2c7a3f" size={24} />
          <Text style={styles.title}>Chức năng ưa thích</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.searchText}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.featuresGrid}>
        <FeatureButton
          icon={<DollarSign color="#2c7a3f" size={24} />}
          label="Chuyển tiền từ thiện"
        />
        <FeatureButton
          icon={<DollarSign color="#2c7a3f" size={24} />}
          label="Chuyển tiền trong nước"
        />
        <FeatureButton
          icon={<Users color="#2c7a3f" size={24} />}
          label="Quản lý nhóm"
          isNew={true}
        />
        <FeatureButton icon={<PiggyBank color="#2c7a3f" size={24} />} label="Mở tiết kiệm" />
        <FeatureButton
          icon={<Settings color="#2c7a3f" size={24} />}
          label="Cài đặt hạn mức chuyển+"
        />
        <FeatureButton
          icon={<Smartphone color="#2c7a3f" size={24} />}
          label="Nạp tiền điện thoại"
        />
      </View>
      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>Xem tất cả</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 16,
    borderRadius: 8,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  searchText: {
    color: "#2c7a3f",
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureButton: {
    width: "30%",
    alignItems: "center",
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  featureLabel: {
    textAlign: "center",
    fontSize: 12,
  },
  newBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  newBadgeText: {
    color: "white",
    fontSize: 10,
  },
  viewAllButton: {
    alignItems: "center",
    marginTop: 16,
  },
  viewAllText: {
    color: "#2c7a3f",
    fontWeight: "bold",
  },
})

export default FavoriteFeatures
