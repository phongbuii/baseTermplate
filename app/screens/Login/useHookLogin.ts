import { navigate } from "@app/navigators/navigationUtilities"
import { validatePhoneNumber } from "@app/utils/validate"
import { useEffect, useState } from "react"
import { Keyboard } from "react-native"
import auth from '@react-native-firebase/auth';
// const RNfirebaseConfig = {
//     apiKey: "........",
//     authDomain: "note-app-rn.firebaseapp.com",
//     projectId: "note-app-rn",
//     storageBucket: "note-app-rn.appspot.com",
//     messagingSenderId: ".....",
//     appId: "......"
// };
const useHookLogin = () => {
    const [visible, setVisible] = useState(false)
    const [code, setCode] = useState("")
    const [phone, setPhone] = useState<string>("0336268877")
    const [isSendOtp, setIsSendOtp] = useState(false)
    const [errorPhone, setErrorPhone] = useState(false)
    const [loading, setLoading] = useState(false)
    const [confirm, setConfirm] = useState(null);
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const handleSendOTP = () => {
        const isValidNumber = validatePhoneNumber(phone)
        if (!isValidNumber) {
            setErrorPhone(true)
        } else {
            // setVisible(true)
            setLoading(true)
            signInWithPhoneNumber()
        }
        Keyboard.dismiss()
        setIsSendOtp(true)
    }
    function onAuthStateChanged(user) {
        console.log("userrrrrr", user);

        setUser(user);
        if (initializing) setInitializing(false);
    }

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    //     return subscriber; // unsubscribe on unmount
    // }, []);
    async function signInWithPhoneNumber() {
        const confirmation = await auth().signInWithPhoneNumber(phone);
        console.log("confirmation", confirmation);

        setConfirm(confirmation);
    }
    const onChangeText = (txt) => {
        setPhone(txt)
        setErrorPhone(false)
    }
    return {
        visible,
        setVisible,
        code,
        setCode,
        handleSendOTP,
        setPhone,
        phone,
        isSendOtp,
        setErrorPhone,
        errorPhone,
        onChangeText,
        loading,
        setLoading
    }
}
export default useHookLogin