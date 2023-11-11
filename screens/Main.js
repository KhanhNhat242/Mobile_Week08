import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function Main() {
    return ( 
        <View style={styles.wrapper}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Text note</Text>
                <TouchableOpacity style={styles.addBtn}>
                    <Text style={styles.addTxt}>Add note</Text>
                </TouchableOpacity>
            </View>
            <TextInput style={styles.searchInput} placeholder='Search' />
            <View style={styles.itemWrapper}>
                <Text style={styles.item}>Notes</Text>
            </View>
        </View>
    );
}

export default Main;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        padding: 30,
    },
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title:{
        fontSize: 20,
        fontWeight: 700,
    },
    addBtn: {
        backgroundColor: 'orange',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: 30,
        borderRadius: 10,
    },
    addTxt: {
        color: '#fff',
    },
    searchInput: {
        border: 'none',
        backgroundColor: '#ececec',
        paddingTop: 5, 
        paddingBottom: 5,
        paddingLeft: 5, 
        borderRadius: 5,  
        marginTop: 20,
        marginBottom: 20,
    },
    itemWrapper: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10,
    },
    item: {
        fontSize: 15,
    },
})