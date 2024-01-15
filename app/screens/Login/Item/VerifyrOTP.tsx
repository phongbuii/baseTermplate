import { Image, Keyboard, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import R from '@app/assets/index'
import OtpInputs from 'react-native-otp-inputs';
import { HEIGHT, WIDTH, getWidth } from '@app/config/functions'
import { spacing } from '@app/theme/spacing';
import { Text } from '@app/components/Text';
import { useTheme } from 'react-native-paper';
import { Button } from '@app/components/Button';
import { el } from 'date-fns/locale';
type VerifyrProps = {
    visible: boolean,
    setVisible: (val: boolean) => void,
    codes: string,
    setCode: (code: string) => void,
    onComfirmOTP: () => void
}
const VerifyrOTP = (_props: VerifyrProps) => {
    const { visible, setVisible, codes = "", setCode, onComfirmOTP } = _props
    const [comfirm, setComfirm] = useState(false)
    const { colors } = useTheme()
    const handleChange = (code: string) => {
        if (code.length === 1) {
            setComfirm(true)
        } else setComfirm(false)
    }
    return (
        <Modal visible={visible} style={{ flex: 1 }} >
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
                    <Text style={{ textAlign: "center" }} preset="baMedium" size="xl"  >Nhập mã OTP</Text>
                    <OtpInputs
                        inputMode="decimal"
                        inputContainerStyles={{ alignItems: "center", justifyContent: "center" }}
                        inputStyles={{ marginHorizontal: HEIGHT(spacing.xs), alignItems: "center", justifyContent: "center", borderWidth: 1, textAlign: "center", paddingHorizontal: spacing.xs }}
                        style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: HEIGHT(spacing.lg) }}
                        handleChange={(code) => {
                            handleChange(code)
                        }}
                        numberOfInputs={1} autofillFromClipboard={false} />
                    <Button
                        onPress={onComfirmOTP}
                        textStyle={{ color: colors.background }}
                        style={[{ width: WIDTH(200), alignSelf: "center", marginTop: HEIGHT(spacing.xxxl), }, { backgroundColor: comfirm ? colors.primary : colors.outline }]} text='Xác nhận' />
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default VerifyrOTP

const styles = StyleSheet.create({})