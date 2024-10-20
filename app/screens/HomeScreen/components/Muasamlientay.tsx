// components/FavoriteFeatures.js
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native"
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
import LinearGradient from "react-native-linear-gradient"
const DATA = [
  {
    label: "page1",
    data: [
      {
        title: "Đặt vé xe",
        icon: <DollarSign color="#2c7a3f" size={24} />,
      },
      {
        title: "Đặt hoa",
        icon: <DollarSign color="#2c7a3f" size={24} />,
      },
      {
        title: "Đặt vé tàu",
        icon: <DollarSign color="#2c7a3f" size={24} />,
        isNew: true,
      },
      {
        title: "Đặt vé phim",
        icon: <DollarSign color="#2c7a3f" size={24} />,
      },
    ],
  },
  {
    label: "page2",
    data: [
      {
        title: "VNPAY Taxi",
        icon: <DollarSign color="#2c7a3f" size={24} />,
      },
      {
        title: "Mua sắm VnShop",
        icon: <DollarSign color="#2c7a3f" size={24} />,
      },
      {
        title: "Đặt vé máy bay",
        icon: <DollarSign color="#2c7a3f" size={24} />,
        isNew: true,
      },
      {
        title: "Đặt phòng khách sạn",
        icon: <DollarSign color="#2c7a3f" size={24} />,
      },
    ],
  },
]
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

const Muasamlientay = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#86f440", "#86C440"]}
        style={styles.header}
      >
        <Text style={styles.title}>{"Mua sắm liền tay"}</Text>
      </LinearGradient>
      <View style={styles.body}>
        <FlatList
          data={DATA}
          style={{ overflow: "visible" }}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item, index }) => {
            return (
              <View style={{ width: getWidth() }}>
                <FlatList
                  style={{
                    width: getWidth(),
                    paddingHorizontal: WIDTH(16),
                    overflow: "visible",
                  }}
                  data={item?.data}
                  numColumns={4}
                  renderItem={({ item, index }) => {
                    return (
                      <FeatureButton
                        key={index}
                        icon={item?.icon}
                        label={item?.title}
                        isNew={item?.isNew}
                      />
                    )
                  }}
                />
              </View>
            )
          }}
        />
        <TouchableOpacity style={styles.buttonNav}>
          <ChevronRight color={"black"} size={20} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ flexDirection: "row", gap: 4 }}>
            <View style={{ height: 6, width: 16, borderRadius: 100, backgroundColor: "#2c7a3f" }} />
            <View style={{ height: 6, width: 6, borderRadius: 100, backgroundColor: "gray" }} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: -2,
  },
  header: {
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: HEIGHT(8),
    width: WIDTH(250),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "blue",
    marginHorizontal: WIDTH(16),
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  title: {
    fontSize: 16,
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
    width: (getWidth() - WIDTH(32)) / 4,
    paddingHorizontal: WIDTH(4),
    alignItems: "center",
    overflow: "visible",
  },
  iconContainer: {
    marginBottom: 8,
  },
  featureLabel: {
    textAlign: "center",
    fontSize: 13,
    color: "#000000",
  },
  newBadge: {
    position: "absolute",
    top: 0,
    left: (getWidth() - WIDTH(32)) / 6 + 4,
    backgroundColor: "red",
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 2,
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
    top: HEIGHT(56),
  },
  body: {
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: HEIGHT(16),
    paddingBottom: 24,
    gap: HEIGHT(16),
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
})

export default Muasamlientay
