import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Home({ navigation }) {
    return ( 
        <View style={styles.wrapper}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.btnTxt}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('LogIn')}>
                <Text style={styles.btnTxt}>Log in</Text>
            </TouchableOpacity>
        </View>
     );
}

export default Home;

const styles = StyleSheet.create({
    wrapper:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
    },
    logo: {
        width: 250,
        height: 270,
    },
    btn: {
        width: '20%',
        height: 30, 
        backgroundColor: 'orange',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
    },
    btnTxt: {
        color: '#fff',
    }
})