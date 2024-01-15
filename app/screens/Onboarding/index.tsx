import { StyleSheet, View, SafeAreaView } from 'react-native';
import React, { useRef, useState } from 'react';
import Swiper from 'react-native-swiper';
import { HEIGHT, WIDTH } from '@app/config/functions';
import { useTheme } from 'react-native-paper';
import ItemOnBoard from './Item/ItemOnBoard';
import { navigate } from "@app/navigators/navigationUtilities"

const Onboarding = () => {
    const { colors } = useTheme();
    const swiper = useRef(null);
    const [indexPage, setIndexPage] = useState(0);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Swiper
                ref={swiper}
                scrollEnabled={false}
                dotStyle={{ marginBottom: HEIGHT(200), }}
                activeDotStyle={{
                    width: WIDTH(20),
                    backgroundColor: colors.primary,
                    marginBottom: HEIGHT(200),
                }}
                horizontal
                loop={false}>
                <ItemOnBoard
                    indexPage={indexPage}
                    onNext={() => {
                        swiper.current?.scrollBy(1);
                        setIndexPage(1);

                    }}
                />
                <ItemOnBoard
                    indexPage={indexPage}
                    onNext={() => {
                        swiper.current?.scrollBy(1);
                        setIndexPage(2);
                    }}
                />
                <ItemOnBoard onNext={() => { navigate("Login") }} indexPage={indexPage} />
            </Swiper>
        </SafeAreaView>
    );
};

export default Onboarding;

const styles = StyleSheet.create({});