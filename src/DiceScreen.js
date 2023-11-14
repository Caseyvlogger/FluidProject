import { View, Text, Pressable, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Animated, { useSharedValue, withSpring, runOnJS } from 'react-native-reanimated';
import Dice from './components/Dice';

const DiceScreen = () => {

    const [randomDiceState, setRandomDiceState] = useState("");
    const [dicePlaying, setDicePlaying] = useState(false);
    const [buttonPressed, setButtonPressed] = useState(false);

    const screenHeight = Dimensions.get('window').height;
    const translateY = useSharedValue(screenHeight / 2 + 50);
    const rotate = useSharedValue("0deg");
    const newDice = () => {
        setDicePlaying(true);
        // rotate = useSharedValue("0deg");
        const screenHeight = Dimensions.get('window').height;
        const screenHeightHalf = Math.round(screenHeight / 2);
        const randomInteger = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        setRandomDiceState(randomInteger)
        translateY.value = screenHeightHalf;
        translateY.value = withSpring(0)
        rotate.value = withSpring("90deg")
        rotate.value = withSpring("180deg")
        rotate.value = withSpring("270deg")

        rotate.value = withSpring("360deg", {}, () => {
            // Callback for when the sequence is complete
            // runOnJS(setstate)("0deg")// Reset the rotation
            runOnJS(setRotate0deg)()// Reset the rotation
        })
        function setRotate0deg() {
            rotate.value = "0deg";
            setDicePlaying(false);
        }
        // function resetRotation() {
        //     rotate.value = withSpring("0deg")
        // }
        console.log(rotate.value)
        // rotate.value = withSpring("0deg")
    }
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: 'white' }}>
            <Animated.View
                style={[
                    // { transform: [{ rotate }] },
                    // { transform: [{ translateY }] }, // error
                    {
                        transform: [
                            { translateY },
                            { rotate }
                        ]
                    },
                    { backgroundColor: 'powderblue' },
                    { borderRadius: 10 }
                ]}>
                <Dice number={randomDiceState}></Dice>
            </Animated.View>
            <View style={{ position: 'absolute', top: "90%", }}>
                <Pressable onPressIn={() => { setButtonPressed(true) }} onPressOut={() => { newDice(), setButtonPressed(false) }} disabled={dicePlaying == true} style={[{ height: 50, width: 120, borderRadius: 10, justifyContent: 'center', borderBottomColor: 'lightgray' }, { backgroundColor: dicePlaying == true ? 'lightgray' : '#bae5ff' }, { borderBottomWidth: buttonPressed ? 0 : 6, }, { top: buttonPressed ? 4 : 0, }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Image source={require("../assets/dice.png")} style={{ height: 30, width: 30, alignSelf: 'center' }}></Image>
                        <Text style={[{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }, { color: dicePlaying == true ? 'gray' : '#389ced' }]}>Roll</Text>
                    </View>
                    {/* <View style={[{ height: 50, width: 120, borderRadius: 10, position: 'absolute', top: '60%' }, { backgroundColor: dicePlaying == true ? 'lightgray' : '#bae5ff' }]}></View> */}
                </Pressable>
            </View>
        </View>
    )
}

export default DiceScreen