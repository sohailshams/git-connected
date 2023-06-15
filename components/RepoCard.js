import { Text, View, Button} from "react-native"
import { TouchableOpacity } from "react-native"


const RepoCard = ({data, navigation}) => {

    function handlePress() {
        navigation.navigate('Repo Form', {data})
    }
    return (
    <TouchableOpacity onPress={()=>handlePress}>
            <Button title={data.name} onPress={handlePress } />
    </TouchableOpacity>
    )
}
export default RepoCard