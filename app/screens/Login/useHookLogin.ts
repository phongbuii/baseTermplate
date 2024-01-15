import { useState } from "react"

const useHookLogin = () => {
    const [visible, setVisible] = useState(false)
    const [code,setCode]=useState("")
    return {
        visible,
        setVisible,
        code,
        setCode
    }
}
export default useHookLogin