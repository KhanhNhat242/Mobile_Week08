import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function LogIn({ navigation }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [accounts, setAccounts] = useState([])
    var flag = false

    useEffect(() => {
        fetch('https://653f4a7f9e8bd3be29e02d15.mockapi.io/accounts', {
            method: 'GET',
            headers: {'content-type':'application/json'},
        }).then(res => {
        if (res.ok) {
            return res.json()
        }
        // handle error
        }).then(accs => {
        // Do something with the list of tasks
            setAccounts(accs)
        }).catch(error => {
        // handle error
        })
    }, [])

    const handleLogIn = () => {
        accounts.forEach((a) => {
            if(a.username == username && a.password == password)
                flag = true
        })

        // console.log(flag)
        if(flag){
            alert('Log in successful')
            navigation.navigate('Main')
        }
        else
            alert('Log in fail')
    }

    return ( 
        <View style={styles.wrapper}>
            <Text style={styles.title}>LOG IN</Text>
            <TextInput style={styles.input} placeholder='username' onChangeText={setUsername} />
            <TextInput style={styles.input} placeholder='password' onChangeText={setPassword} />
            <TouchableOpacity style={styles.btn} onPress={handleLogIn}>
                <Text style={styles.btnTxt}>Log in</Text>
            </TouchableOpacity>
        </View>
     );
}

export default LogIn;

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