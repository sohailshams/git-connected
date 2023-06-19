import { View, Text, Button } from "react-native"

const FormButtons = ({title1, title2, state, setState}) => {
    const handleButton1 = () => {
        setState(1)
    }
    const handleButton2 = () => {
        setState(2)
    }
    return (
        <View>
            <Button title={title1} onPress={handleButton1 } />
            <Button title={title2} onPress={handleButton2} />  
        </View>
    )
}
export default FormButtons