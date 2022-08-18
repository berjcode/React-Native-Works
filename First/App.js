import React,{useState} from "react";
import { StyleSheet, Text, View,FlatList,Alert,TouchableWithoutFeedback, Keyboard } from "react-native";
import Header from './components/header';
import ToDoItem from "./components/todoItem";
import AddToDo from "./components/addToDo";
import SandBox from "./components/sandbox";


export default function App(){

  const [todos, setTodos ] = useState([
    /*
    { text: 'buy coffe',key:"1"},
    { text: 'Create an app',key:"2"},
    { text: 'Play on the switch',key:"3"},
*/

  ]);

  const pressHandler = (key) => {
    setTodos((prevtodos) => {
      return prevtodos.filter(todo => todo.key != key);
    })

  }


  const submitHandler =(text) => {

      if(text.length >2) {
        
        setTodos((prevtodos) => {
          return  [
            {text:text,key:Math.random().toString() },
            ...prevtodos
          ]
        
        });

      } else {
        Alert.alert('Mesaj','En az 3 Karakter Girilmelidir.',[
          {text: 'Tamam', onPress: () => console.log("close") }
        ]);
      }




  }


  return(
  <TouchableWithoutFeedback onPress={() => {
    Keyboard.dismiss();
    console.log('xas');
  }} >
    <View style={styles.container} >  
    <Header/>
          <View style={styles.content} >
           <AddToDo  submitHandler= {submitHandler}/>
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
  </TouchableWithoutFeedback>
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
  },

  content: {
    padding:40,
    backgroundColor: 'white',
    flex:1,
    

  },

  list: {
      marginTop:30,
      backgroundColor:'white',
      
      
  },


});