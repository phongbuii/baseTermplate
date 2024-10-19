import { StyleSheet, Text, View } from "react-native"

import React from "react"
import { Button } from "react-native-paper"
import { navigate } from "../navigators"

const ListDanhSach = () => {
  return (
    <View style={{ gap: 16, paddingHorizontal: 16, paddingVertical: 16 }}>
      <Button
        mode={"contained"}
        onPress={() => {
          navigate("ChiTietChuyenTien")
        }}
      >
        {"Chi tiết chuyển tiền"}
      </Button>
      <Button
        mode={"contained"}
        onPress={() => {
          navigate("ChuyenTienTrongNuoc")
        }}
      >
        {"Chuyển tiền trong nước"}
      </Button>
      <Button
        mode={"contained"}
        onPress={() => {
          navigate("HomeScreen")
        }}
      >
        {"Màn hình home"}
      </Button>
    </View>
  )
}

export default ListDanhSach

const styles = StyleSheet.create({})
