import React,{useState} from "react";
import { StyleSheet, Text, View,TextInput,Button} from "react-native";


export default function AddToDo({ submitHandler}){

    const [text,setText] = useState('');

    const changeHandler = (val) => {
        setText(val);

    }


    return(
            <View>
                <TextInput

                style={styles.input}
                   placeholder="Note Write"
                   onChangeText={changeHandler}
                />

                <Button onPress={ ()=>  submitHandler(text)}  title ="ADD"  color="black" />
               
            </View>

    );

}

const styles= StyleSheet.create({
    input: {
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'red',
        color:'black',
        

    }

});