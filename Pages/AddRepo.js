import { View, Text, FlatList } from "react-native"
import { getRepoList } from "../utils/functions"
import { useState } from "react"

const AddRepo = () => {
    const [repos, setRepos] = useState('')
    getRepoList('masonward99').then(data=>setRepos(data))
    return (
        <View>
            <Text>Repo list will go here</Text>
        </View>
    )
}
export default AddRepo