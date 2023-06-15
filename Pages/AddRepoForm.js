import { View, Text } from "react-native"
import FormButtons from "../components/FormButtons"
import { useState } from "react"
import PortfolioForm from "../components/PortfolioForm"

const AddRepoForm = ({ navigation, route }) => {
    const { data } = route.params
    const [state, setState] = useState(1);
    return (
        <View>
            <Text>repo form here</Text>
            <FormButtons title1='portfolio' title2='colab' state={state} setState={setState} />
            {state === 1 ? <PortfolioForm data={data} navigation={navigation} /> : null}
        </View>
)
}
export default AddRepoForm