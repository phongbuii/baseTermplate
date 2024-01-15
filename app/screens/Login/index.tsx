import { Image, ImageBackground, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React, { useRef } from 'react'
import { HEIGHT, WIDTH, getWidth } from '@app/config/functions'
import R from '@app/assets/index';
import { Text } from '@app/components/Text';
import { TextField } from '@app/components/TextField';
import { Button } from '@app/components/Button';
import { useTheme } from 'react-native-paper';
import { spacing } from '@app/theme/spacing';
import LoginSocial from './Item/LoginSocial';
import VerifyrOTP from './Item/VerifyrOTP';
import useHookLogin from './useHookLogin';
import { navigate } from '@app/navigators/navigationUtilities';
const Login = () => {
  const { colors } = useTheme()
  const { visible, setVisible, code, setCode } = useHookLogin()
  const openOTP = () => {
    setVisible(true)
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <View style={{ flex: 1 }} >
        <Image
          style={{
            height: HEIGHT(234),
            width: getWidth(),
            marginTop: HEIGHT(44),
          }}
          resizeMode="contain"
          source={R.images.logo_login}
        />
        <Text style={{ textAlign: "center" }} preset="bold" size="xxxl" text="Chi Tiêu Gia Đình" />
        <TextField
          label="Số điện thoại đăng nhập"
          keyboardType="numeric"
          textAlign="center"
          containerStyle={{ width: "80%", alignSelf: "center", marginTop: HEIGHT(20) }}
          placeholder='Số điện thoại' />
        <Button
          onPress={openOTP}
          textStyle={{ color: colors.background }}
          style={{ width: "60%", alignSelf: "center", marginTop: HEIGHT(40), backgroundColor: colors.primary }}
          text='Gửi OTP'
        />
        <LoginSocial />
        <ImageBackground style={{ position: "absolute", width: "100%", height: HEIGHT(130), bottom: HEIGHT(55), alignItems: "center" }} source={R.images.bottom_login} >
          <Text style={{ textAlign: "center", position: "absolute", bottom: HEIGHT(10) }} >APK team</Text>
        </ImageBackground>
        <VerifyrOTP
          onComfirmOTP={() => { navigate("TabNavigator") }}
          codes={code}
          setCode={setCode}
          visible={visible}
          setVisible={setVisible} />
      </View >
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({})