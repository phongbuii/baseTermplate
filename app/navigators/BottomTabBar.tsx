import { Animated, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { HEIGHT, WIDTH, getFont, getWidth } from "@app/config/functions"
import { colors } from "../theme"


const BottomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const tabBarIconType =
        { focused: false, color: colors.background, size: 20 }

    return (
        <View style={{ flexDirection: 'row', backgroundColor: colors.border, justifyContent: "space-between" }}>
            {state.routes.map((route, index) => {
                ;
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    // eslint-disable-next-line react/jsx-key

                    <TouchableOpacity
                        key={(index + 1).toString()}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[{ flex: 1, height: HEIGHT(120), paddingTop: HEIGHT(10), alignItems: "center", paddingLeft: index == 0 ? 0 : WIDTH(50), paddingRight: index == 1 ? 0 : WIDTH(50) }]}                  >
                        <Animated.View
                            {...(Platform.OS === 'android' && {
                            })}
                            style={{
                                backgroundColor: isFocused ? colors.primaryDim : null,
                                paddingHorizontal: WIDTH(20),
                                paddingVertical: HEIGHT(3),
                                borderRadius: HEIGHT(20)
                            }}
                        >
                            {options.tabBarIcon(tabBarIconType)}
                        </Animated.View>
                        <Text style={{ color: colors.text }}>{label}</Text>
                    </TouchableOpacity>
                )
            })}
            <TouchableOpacity style={{ position: "absolute", left: getWidth() / 2 - WIDTH(35), height: HEIGHT(80), width: HEIGHT(80), backgroundColor: colors.tint, borderRadius: HEIGHT(80), marginTop: HEIGHT(-40), alignItems: "center", justifyContent: "center" }} >
                <Text style={{ textAlign: "center", color: colors.background, fontSize: getFont(40), marginTop: HEIGHT(-5) }} >+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomTabBar

const styles = StyleSheet.create({})
