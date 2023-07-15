import { useRoute } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import firestore from "@react-native-firebase/firestore"


const Chat = () => {
    const [messages, setMessages] = useState([])
    const route = useRoute()
    useEffect(() => {


            const subscriber = firestore()
                .collection("chats")
                .doc(route.params.id + route.params.data.userId)
                .collection('messages')
                .orderBy("createdAt", "desc");
    
            subscriber.onSnapshot(querySnapshot => {
                const allMessages = querySnapshot.docs.map(item => {
                    return { ...item.data(),createdAt: Date.parse(new Date()) };
                });
                setMessages(allMessages);
            });
     
        return () => subscriber
    }, [])

    const onSend = useCallback((messages = []) => {

        console.log("route.params.id",route.params.id,"route.params.data.userId",route.params.data.userId)

        try{

            const msg = messages[0]
            const myMsg = {
                ...msg, sendby: route.params.id,
                sendTo: route.params.id,
                createdAt: Date.parse(msg.createdAt)
            }
            setMessages(previousMessages =>
                GiftedChat.append(previousMessages, myMsg),
            )
    
            firestore().collection("chats").doc("" + route.params.id + route.params.data.userId)
                .collection("messages")
                .add(myMsg)
    
            firestore().collection("chats").doc("" + route.params.data.userId + route.params.id)
                .collection("messages")
                .add(myMsg)
            }catch(error){
                console.log("ERRRO ON MSG SEND ", error)
            }



    }, [])

    return (
        <View style={{ flex: 1, width: "100%" }}>

            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: route.params.id,
                }}

            />


        </View>
    )
}

export default Chat
