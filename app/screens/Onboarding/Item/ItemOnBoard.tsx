import {
    StyleSheet,
    View,

    TouchableOpacity,
    Image,
} from 'react-native';
import React, { } from 'react';
import { HEIGHT, WIDTH } from '@app/config/functions';
import R from '@app/assets/index';
import { useTheme } from 'react-native-paper';
import { spacing } from '@app/theme/spacing';
import { Text } from '@app/components/Text';
import { Icon } from '@app/components/Icon';
import { Button } from '@app/components/Button';
import { navigate } from '@app/navigators/navigationUtilities';
type OnBoardProps = {
    onNext?: () => void;
    indexPage?: number;
};
const ItemOnBoard = (props: OnBoardProps) => {
    const { onNext, indexPage } = props;
    const { colors } = useTheme();
    const NextPageComponent = () => {
        return (
            <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: WIDTH(24),
                    marginTop: HEIGHT(112),
                }}>
                <TouchableOpacity onPress={() => navigate("Login")} >
                    <Text text="Skip" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onNext}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        backgroundColor: colors.primary,
                        borderRadius: spacing.lg,
                        paddingVertical: HEIGHT(spacing.md),
                        paddingHorizontal: WIDTH(spacing.sm),
                        alignItems: 'center',
                    }}>
                    <Text style={{ color: colors.background }} text="Tiếp theo " />
                    <Icon
                        color={colors.backdrop}
                        style={{ tintColor: colors.background, marginTop: HEIGHT(spacing.xxs), }}
                        size={HEIGHT(18)}
                        icon="caretRight"
                    />
                </TouchableOpacity>
            </View>
        );
    };
    const StartComponent = () => {
        return (
            <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    alignItems: 'center',
                    marginHorizontal: WIDTH(24),
                    marginTop: HEIGHT(112),
                }}>
                <Button onPress={onNext} textStyle={{ color: colors.background }} text="Bắt đầu thôi" style={{ borderRadius: spacing.sm, backgroundColor: colors.primary }} />
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <Text
                weight="bold"
                size="xxl"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{ marginTop: HEIGHT(80), textAlign: "center" }}
                text={`WELCOME TO \n DAILY SPENDING`}
            />
            <Image
                resizeMode="contain"
                style={{ height: HEIGHT(375), width: WIDTH(375) }}
                source={R.images.onboard}
            />
            <Text
                size="md"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{ marginHorizontal: WIDTH(32), textAlign: "center" }}
            >
                We can help you to be a better version of
                <Text
                    style={{ color: colors.primary }}
                    size="md"
                    text=" yourself"
                />
            </Text>
            {indexPage === 2 ? StartComponent() : NextPageComponent()}
        </View>
    );
};
export default ItemOnBoard;

const styles = StyleSheet.create({});