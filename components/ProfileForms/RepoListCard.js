import { Text, View, Button} from "react-native"
import { TouchableOpacity } from "react-native"


const RepoListCard = ({data, navigation, count, setCount}) => {

    function handlePress() {
        navigation.navigate('Repo Form', { data, count, setCount })
        console.log(count)
    }
    return (
    <TouchableOpacity onPress={handlePress}>
            <Text>{data.name}</Text>
    </TouchableOpacity>
    )
}
export default RepoListCard