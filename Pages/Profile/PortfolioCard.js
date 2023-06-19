import { View, Text } from "react-native"

const PortfolioCard = ({route}) => {
    const { data } = route.params
    return (
        <View>
            <Text>{data.name}</Text>
        </View>
    )
}
export default PortfolioCard