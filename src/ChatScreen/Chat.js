import { useRoute } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'


const Chat = () => {
    const [messages, setMessages] = useState([])
    const route =useRoute()
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: route.params.id,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )
    }, [])

    return (
        <View style={{flex:1,width:"100%"}}>

            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            
            />


        </View>
    )
}

export default Chat
