import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import ChatListItem from '../components/ChatListItem';
import ChatRooms from '../data/ChatRooms';

export default function ChatsScreen({ navigation }: RootTabScreenProps<'Chats'>) {

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={ChatRooms.sort((a, b) => a.lastMessage.createdAt.localeCompare(b.lastMessage.createdAt)).reverse()}
        renderItem={({item}) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
