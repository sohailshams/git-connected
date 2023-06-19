import { Text, View, Button} from "react-native"
import { TouchableOpacity } from "react-native"


const RepoListCard = ({data, navigation}) => {

    function handlePress() {
        navigation.navigate('Repo Form', {data})
    }
    return (
    <TouchableOpacity onPress={()=>handlePress}>
            <Button title={data.name} onPress={handlePress } />
    </TouchableOpacity>
    )
}
export default RepoListCard