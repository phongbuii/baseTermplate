// components/FavoriteFeatures.js
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native"
import {
  Settings2,
  DollarSign,
  Users,
  PiggyBank,
  Settings,
  Smartphone,
  Search,
  MoveRight,
  Navigation,
  NavigationIcon,
  ChevronRight,
} from "lucide-react-native"
import { getWidth, HEIGHT, WIDTH } from "@app/config/functions"
const DATA = [
  {
    title: "Quản lý chi tiêu",
    icon: <DollarSign color="#2c7a3f" size={24} />,
    isNew: true,
  },
  {
    title: "VCB Family",
    icon: <DollarSign color="#2c7a3f" size={24} />,
    isNew: true,
  },
]
const FeatureButton = ({ icon, label, isNew = false }) => (
  <TouchableOpacity style={styles.featureButton}>
    <View style={styles.iconContainer}>{icon}</View>
    <View style={{ gap: 4 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.newBadge}>
          <Text style={styles.newBadgeText}>Mới</Text>
        </View>
      </View>

      <Text style={styles.featureLabel}>{label}</Text>
    </View>
  </TouchableOpacity>
)
const ImageButtom = ({ icon, label, isNew = false }) => (
  <TouchableOpacity style={styles.imageButton}>{/* <Image source={''}/> */}</TouchableOpacity>
)

const NewAction = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Mới nhất trên VCB Digibank</Text>
        </View>
      </View>
      <FlatList
        data={DATA}
        ListHeaderComponent={<View style={{ width: WIDTH(16) }} />}
        style={{ overflow: "visible" }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <FeatureButton key={index} icon={item?.icon} label={item?.title} isNew={item?.isNew} />
          )
        }}
      />
      <FlatList
        data={DATA}
        ListHeaderComponent={<View style={{ width: WIDTH(16) }} />}
        style={{ overflow: "visible" }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <ImageButtom key={index} icon={item?.icon} label={item?.title} isNew={item?.isNew} />
          )
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingRight: WIDTH(16),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 8,
            paddingHorizontal: WIDTH(8),
            backgroundColor: "white",
            borderRadius: 100,
            paddingVertical: 2,
          }}
        >
          <View style={{ flexDirection: "row", gap: 3 }}>
            <View style={{ height: 6, width: 10, borderRadius: 100, backgroundColor: "#2c7a3f" }} />
            <View style={{ height: 6, width: 6, borderRadius: 100, backgroundColor: "gray" }} />
            <View style={{ height: 6, width: 6, borderRadius: 100, backgroundColor: "gray" }} />
          </View>
          <MoveRight color={"#2c7a3f"} size={16} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: HEIGHT(16),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginHorizontal: WIDTH(16),
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
  searchText: {
    color: "#2c7a3f",
    fontSize: 14,
    fontWeight: "400",
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureButton: {
    width: WIDTH(200),
    backgroundColor: "blue",
    marginRight: WIDTH(16),
    paddingHorizontal: WIDTH(12),
    paddingVertical: HEIGHT(8),
    borderRadius: 16,
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  featureLabel: {
    textAlign: "center",
    fontSize: 16,
    color: "#000000",
  },
  newBadge: {
    backgroundColor: "red",
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 2,
    flexDirection: "row",
  },
  newBadgeText: {
    color: "white",
    fontSize: 10,
  },
  viewAllButton: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  viewAllText: {
    color: "#2c7a3f",
    fontWeight: "bold",
  },
  buttonNav: {
    backgroundColor: "#2c7a3f",
    paddingVertical: 8,
    paddingLeft: 4,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    position: "absolute",
    right: -2,
    top: HEIGHT(72),
  },
  imageButton: {
    width: WIDTH(343),
    height: WIDTH(100),
    backgroundColor: "blue",
    marginRight: WIDTH(16),
    paddingHorizontal: WIDTH(12),
    paddingVertical: HEIGHT(8),
    borderRadius: 16,
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
})

export default NewAction
