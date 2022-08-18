import React,{useState} from "react";
import { StyleSheet, Text,TouchableOpacity ,View} from "react-native";





export default function ToDoItem({item,pressHandler}){

    return(

            <TouchableOpacity onPress={()=> pressHandler(item.key)}>
                
                <View>
                
                    <Text style={ styles.item}>{item.text}  </Text>
                    <Text style={styles.delete}>Delete</Text>
               
                
                </View>

            </TouchableOpacity>


    );

}

const styles=StyleSheet.create({

    item: {
        padding:16,
        marginTop:15,
        borderColor:'black',
       // borderWidth:1,
       // borderStyle:'dashed',
       // borderRadius:15,
        color: 'black',
    },
    delete:{
        color: "black",
        padding:2,
        borderWidth:1,
        borderColor:'black',
        textAlign:'center',
    }
})