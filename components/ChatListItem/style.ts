import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10
  },
  leftContainer: {
    flexDirection: 'row'
  },
  midContainer: {
    justifyContent: 'space-around'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 16
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16
  },
  lastMessage: {
    fontSize: 16,
    color: 'gray',
    maxWidth: 200,
  },
  time: {
    fontSize: 14,
    color: 'gray'
  }
})

export default styles