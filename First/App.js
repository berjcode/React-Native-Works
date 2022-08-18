import React,{useState} from "react";
import { StyleSheet, Text, View,FlatList } from "react-native";
import Header from './components/header';
import ToDoItem from "./components/todoItem";


export default function App(){

  const [todos, setTodos ] = useState([
    { text: 'buy coffe',key:"1"},
    { text: 'Create an app',key:"2"},
    { text: 'Play on the switch',key:"3"},


  ]);

  const pressHandler = (key) => {
    setTodos((prevtodos) => {
      return prevtodos.filter(todo => todo.key != key);
    })
  }
  return(

    <View style={styles.container} >  
    <Header/>
          <View style={styles.content} >
           {/*To Form*/}
            <View style={styles.list}>
          <FlatList
              data={todos}
              renderItem = {({item}) => (
                <ToDoItem item={item} 
                pressHandler ={pressHandler}
                />
                )} 
          />

          </View> 
             </View>
    </View>

  );
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
  },

  content: {
    padding:40,
    

  },

  list: {
      marginTop:30,
  },


});