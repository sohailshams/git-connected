import { View, Text, FlatList } from "react-native"
import { getRepoList } from "../utils/functions"
import { useEffect, useState } from "react"
import RepoCard from "../components/repoCard"

const AddRepo = ({navigation}) => {
    const [repos, setRepos] = useState('')
    useEffect(()=>{getRepoList('masonward99').then((data) => setRepos(data))}, [])
    
    const renderItem = ({item}) => {
        return <RepoCard data={item} navigation={navigation}/>
    }
    return (
        <View>
            <FlatList data={repos} renderItem={renderItem} />
            <Text>Repo list will go here</Text>
        </View>
    )
}
export default AddRepo