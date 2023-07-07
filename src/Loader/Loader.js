import React from "react";
import { View, Modal, StyleSheet, Dimensions, ActivityIndicator } from "react-native";


const Loader = () => {
    return (
        <Modal
        visible
        transparent
        >
            <View style={styles.modalView} >
                <View style={styles.mainView}>
                    <ActivityIndicator size={"large"}/> 

                </View>


            </View>
        </Modal>
    )
}
export default Loader


const styles=StyleSheet.create({
    modalView:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height,
        backgroundColor:"rgba(0,0,0,0",
        justifyContent:"center",
        alignItems:"center"
    },
    mainView:{
        width:100,
        height:100,
        borderRadius:50,
        justifyContent:"center",
        alignContent:"center",
        backgroundColor:"#ffffff"
    }
})