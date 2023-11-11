import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function SignUp({ navigation }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        const data = {
            username: username,
            password: password
        }

        fetch('https://653f4a7f9e8bd3be29e02d15.mockapi.io/accounts', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify(data)
        }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
        }).then(task => {
        // do something with the new task
        }).catch(error => {
        // handle error
        })

        navigation.navigate('Home')
    }

    return ( 
        <View style={styles.wrapper}>
            <Text style={styles.title}>SIGN UP</Text>
            <TextInput style={styles.input} placeholder='username' onChangeText={setUsername}/>
            <TextInput style={styles.input} placeholder='password' onChangeText={setPassword}/>
            <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
                <Text style={styles.btnTxt}>Sign Up</Text>
            </TouchableOpacity>
        </View>
     );
}

export default SignUp;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        width: '70%',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
    },
    btn: {
        width: '50%',
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        marginTop: 20,
    },
    btnTxt: {
        color: '#fff',
    }
})