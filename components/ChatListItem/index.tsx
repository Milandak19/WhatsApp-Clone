import React from "react";
import { View } from "../Themed";
import { ChatRoom } from "../../types";
import { Image, Text } from "react-native";
import styles from "./style";
import moment from "moment";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props

  const user = chatRoom.users[1]
  
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: user.imageUri }} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.lastMessage} ellipsizeMode='tail' numberOfLines={1}>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>
      <Text style={styles.time}>
        {
          moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY') === moment().format('DD/MM/YYYY') ? moment(chatRoom.lastMessage.createdAt).format('h:mm') : moment(chatRoom.lastMessage.createdAt).format('DD') == (+moment().format('DD')-1).toString() && moment().format('MM') == moment(chatRoom.lastMessage.createdAt).format('MM') ? 'Yesterday' : moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')
        }
      </Text>
    </View>
  )
}

export default ChatListItem