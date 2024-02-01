import {
  Image,
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import React, { useRef } from "react"
import { HEIGHT, WIDTH, getWidth } from "@app/config/functions"
import R from "@app/assets/index"
import { Text } from "@app/components/Text"
import { TextField } from "@app/components/TextField"
import { Button } from "@app/components/Button"
import { useTheme } from "react-native-paper"
import { spacing } from "@app/theme/spacing"
import LoginSocial from "./Item/LoginSocial"
import VerifyrOTP from "./Item/VerifyrOTP"
import useHookLogin from "./useHookLogin"
import { navigate } from "@app/navigators/navigationUtilities"
import { LoadingOpacity } from "@app/components/loading/LoadingOpacity"
const Login = () => {
  const { colors } = useTheme()
  const { visible,
    setVisible,
    code,
    setCode,
    setPhone,
    phone,
    handleSendOTP,
    errorPhone,
    onChangeText,
    loading } = useHookLogin()

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>
        <Image style={styles.logo}
          resizeMode="contain"
          source={R.images.logo_login} />
        <Text
          style={styles.txt_logo}
          preset="bold"
          size="xxxl"
          text="Chi Tiêu Gia Đình" />
        <TextField
          value={phone}
          onChangeText={onChangeText}
          label="Số điện thoại đăng nhập"
          keyboardType="numeric"
          inputWrapperStyle={{ borderColor: errorPhone ? colors.error : colors.primary, borderWidth: 1 }}
          containerStyle={styles.input}
          placeholder="Số điện thoại"
        />
        {errorPhone && (
          <Text preset="smRegular" style={[styles.error, { color: colors.error }]}>
            Vui lòng kiểm tra lại số điện thoại
          </Text>
        )}
        <Button
          disabled={!phone.length}
          onPress={handleSendOTP}
          textStyle={{ color: colors.background }}
          style={[styles.open_otp, { backgroundColor: !phone.length ? colors.backdrop : colors.primary }]}
          text="Gửi OTP"
        />
        <LoginSocial />
        <ImageBackground style={styles.img_bottom} source={R.images.bottom_login}>
          <Text style={styles.apk_team}>APK team</Text>
        </ImageBackground>
        <VerifyrOTP
          onComfirmOTP={() => {
            navigate("TabNavigator")
          }}
          codes={code}
          setCode={setCode}
          visible={visible}
          setVisible={setVisible}
        />
        {loading && <LoadingOpacity />}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
  logo: {
    height: HEIGHT(234),
    width: getWidth(),
    marginTop: HEIGHT(44),
  },
  txt_logo: { textAlign: "center" },
  open_otp: { width: "60%", alignSelf: "center", marginTop: HEIGHT(40) },
  img_bottom: {
    position: "absolute",
    width: "100%",
    height: HEIGHT(180),
    bottom: HEIGHT(0),
    alignItems: "center",
  },
  apk_team: { textAlign: "center", position: "absolute", bottom: HEIGHT(10) },
  input: {
    width: "80%",
    alignSelf: "center",
    marginTop: HEIGHT(20)
  },
  error: { marginTop: HEIGHT(spacing.xs), marginHorizontal: WIDTH(38), }
})
