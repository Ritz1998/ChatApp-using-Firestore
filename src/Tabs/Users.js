import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import firestore from "@react-native-firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Users = () => {

    const navigation=useNavigation()


    const [users, setUsers] = useState([])


    useEffect(() => {
        getUser()

    }, [])

    const getUser = () => {
        const email = AsyncStorage.getItem("email")

        let tempArr=[]

        firestore().collection('users').where("email", "!=", email).get().then(res => {
            if (res.docs !== []) {

                res.docs.map((ele)=>{
                    tempArr.push(ele.data())
                })

            }
            setUsers(tempArr)
            console.log("response get", res.docs)
        })

    }

    return (
        <View style={styles.Userscontainer}>
            <View style={styles.userHeader}>

                <Text style={styles.title}>
                    FIREBASE CHAT APP
                </Text>

                <FlatList
                    data={users}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={styles.userList} onPress={()=>navigation.navigate('chat',{data:item,id:id})}>
                                {console.log("ITEM",item)}
                                <Image
                                source={require("../Assets/Images/user.png")}
                                style={styles.userImg}
                                />

                                <Text style={styles.userName}>{item.email.split("@")[0]}</Text>

                            </TouchableOpacity>
                        )

                    }}
                />


            </View>

        </View>
    )
}

export default Users