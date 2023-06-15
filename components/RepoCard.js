import { Text } from "react-native"
import { TouchableOpacity } from "react-native"

const RepoCard = (repo, {navigation}) => {
    function handlePress() {
        navigation.navigate('Repo Form', {name:repo.name})
    }
    return (
    <TouchableOpacity onPress={handlePress}>
        <Text>{repo.name }</Text>
        </TouchableOpacity>
    )
}
export default RepoCard