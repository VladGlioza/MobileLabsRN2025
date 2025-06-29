import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    runOnJS,
} from "react-native-reanimated";
import {
    Directions,
    Gesture,
    GestureDetector,
} from "react-native-gesture-handler";

type Props = {
    onSingleTap: () => void;
    onDoubleTap: () => void;
    onLongPress: () => void;
    onPan: () => void;
    onFlingRight: () => void;
    onFlingLeft: () => void;
    onPinch: () => void;
};

export const GestureHandler = ({
    onSingleTap,
    onDoubleTap,
    onLongPress,
    onPan,
    onFlingRight,
    onFlingLeft,
    onPinch,
}: Props) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const scale = useSharedValue(1);

    const tapSingle = Gesture.Tap()
        .numberOfTaps(1)
        .onEnd(() => runOnJS(onSingleTap)());

    const tapDouble = Gesture.Tap()
        .numberOfTaps(2)
        .onEnd(() => runOnJS(onDoubleTap)());

    const longPress = Gesture.LongPress()
        .minDuration(3000)
        .onEnd(() => runOnJS(onLongPress)());

    const pan = Gesture.Pan()
        .onUpdate((e) => {
            translateX.value = e.translationX;
            translateY.value = e.translationY;
        })
        .onEnd(() => runOnJS(onPan)());

    const pinch = Gesture.Pinch()
        .onUpdate((e) => {
            scale.value = e.scale;
        })
        .onEnd(() => {
            runOnJS(onPinch)();
            scale.value = withSpring(1);
        });

    const flingRight = Gesture.Fling()
        .direction(Directions.RIGHT)
        .onEnd(() => runOnJS(onFlingRight)());

    const flingLeft = Gesture.Fling()
        .direction(Directions.LEFT)
        .onEnd(() => runOnJS(onFlingLeft)());

    const composed = Gesture.Simultaneous(
        tapDouble,
        tapSingle,
        longPress,
        pan,
        pinch,
        flingRight,
        flingLeft
    );

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
            { scale: scale.value },
        ],
    }));

    return (
        <GestureDetector gesture={composed}>
            <Animated.View style={[styles.box, animatedStyle]} />
        </GestureDetector>
    );
};

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
        borderRadius: 12,
        margin: 20,
    },
});
