import { useContext, useState } from "react"
import { UserContext } from "../../contexts/User"
import { Text, View, TextInput, Button } from "react-native";
import { editProfile } from "../../utils/functions";

const EditProfile = ({ navigation, route }) => {
    const {data,count, setCount} =route.params
    const [name, setName] = useState(data.name)
    const [bio, setBio] = useState(data.bio)
    const [email, setEmail] = useState(data.email)
    const [location, setLocation] = useState(data.location)
    console.log(count)
    
    const handlePress = () => {
        navigation.navigate('own profile')
        editProfile(data.username, bio, email, location, name)
            .then(setCount(count + 1))
        console.log(count)
    }
    return (
        <View>
            <Text>Form to edit profile</Text>
            <Text>Name:</Text>
            <TextInput name='name' onChangeText={setName } value={name} />
            <Text>Bio</Text>
            <TextInput name='bio' onChangeText={setBio} value={bio} />
            <Text>Email</Text>
            <TextInput name='email' onChangeText={setEmail} value={email } />
            <Text>Location</Text>
            <TextInput name='location' onChangeText={setLocation} value={location} />
            <Button title='confirm changes' onPress={handlePress} />
        </View>
    )
}
export default EditProfile