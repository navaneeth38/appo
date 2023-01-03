import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';

function App() {
  
  const [todos,setTodos] = useState([
    {per: "kokachio ", id: '1'},
    {per: 'mahane', id: '2'},
  ])



  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="black" />
      <View style={styles.header}><Text style={[{fontWeight: "bold"},{fontSize: 25}]}>My Todo</Text></View>
      <View style={styles.content}>
        <View style={styles.list}></View>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <TouchableOpacity >
              <Text style={styles.item}>{item.per}</Text>
            </TouchableOpacity>
          )}
          extraData={todos}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  header: {
    width: 40,
    height: 40,
    backgroundColor: "orange"
  },
  content: {
    backgroundColor: 'yellowgreen',
    borderRadius: 20,
    padding: 10,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'green',
    color: 'black',
    fontSize: 20,
    width: 250,
  },
  list: {
    paddingTop: 5,
  },
});

export default App;
