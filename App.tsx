import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


interface ITodo{
  id: number;
  name: string
}

export default function App() {

  const [todo, setTodo] = useState("");

  const [listTodo, setListTodo] = useState<ITodo[]>([])

function randomInteger(min : number, max: number){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const handleAddTodo = () => {
  if(!todo ) return;
  setListTodo([...listTodo, 
    { id: randomInteger(2, 200000), name: todo }
  ]);
  setTodo ("")
}
  return (
    <View style={styles.container}>
      {/* {header } */}
              <Text style={styles.header}>Xin Chao Hoai An</Text>

              {/* {form} */}
              <View style={styles.body}>
                <TextInput 
                value={todo}
                style={styles.todoInput}
                onChangeText={(value) => setTodo(value)}
                />
                <Button title='Add todo'
                onPress={handleAddTodo}

                />
                
              </View>

              {/* {list todo} */}
              <View style={styles.body}>
                <FlatList
                  data={listTodo}
                  keyExtractor={item => item.id + ""}
                  renderItem={({item}) => {
                      return (
                        <Text style={styles.todoItem}>{item.name}</Text>
                      )
                  }}                  
                />
          
              </View>

            </View>
        );
      }
    


 //CSS
const styles = StyleSheet.create({
  header: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 40
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',

  },

  todoInput :{
    borderBottomWidth: 1, 
    borderBottomColor: "green",
    padding : 5,
    margin: 15
},

todoItem: {
  fontSize: 20,
  borderWidth: 1,
  borderStyle: "dashed",
  marginBottom: 20,
  padding: 10
},

body: {
  paddingHorizontal: 10,
  marginBottom: 20
}


});
