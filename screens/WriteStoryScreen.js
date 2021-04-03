import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Button,
  KeyboardAvoidingView
} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super()
    this.state={
      title:'',
      author:'',
      story:''
    }
  }
  submitStory=()=>{
    db.collection("Stories").add({
      'Title':this.state.title,
      'Author':this.state.author,
      'Story':this.state.story
    })

    this.setState({
      title:'',
      author:'',
      story:''
    })

    alert("Your story has beem submitted.")
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}
      behavior="padding" enabled>
        <View style={styles.textBox}>
        <Text style={styles.text}>Story Hub</Text>
        </View>
        <View>
         <TextInput style={styles.inputBox} placeholder="Story Title"
         onChangeText={text=>this.setState({title:text})}/>
         </View>
         <View>
                  <TextInput style={styles.inputBox} placeholder="Author"
                   onChangeText={text=>this.setState({author:text})}/>
                  </View> <View style={styles.inputView}>
               
               <TextInput 
     style={styles.textArea}
     placeholder="Write a Story..."
     numberOfLines={10}
     multiline={true}
     onChangeText={text=>this.setState({story:text})}
   />
   <View>
      <TouchableOpacity
         style={styles.submitButton}
         onPress={this.submitStory}>
         <Text style={styles.submitButtonText}>Submit</Text>
       </TouchableOpacity>

</View>
</View>
</KeyboardAvoidingView>
   );
 }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        alignSelf:"center",
        textAlign:"center",
        margin:10
      },
      text:{
        textAlign:'center',
        fontSize:30, 
        fontWeight: "bold",
        fontFamily:"cursive"
      },
      submitButton:{
        backgroundColor:"orange",
        borderRadius:15,
        borderWidth:0.5,
        width:80,
        height:40,
        textAlign:"center",
        justifyContent:"center",
        alignSelf:"center",
      },
      inputBox:{
        borderWidth:1,
        marginTop:10,
        marginBottom:10,
        width:300,
        height:30
      },
      textArea:{
        marginTop:10,
        marginBottom:20,
        borderWidth:1,
        height:300,
        width:500
      },
      submitButtonText:{
        color:"white"
      },
      textBox:{
        backgroundColor:"orange",
        textAlign:"center",
        length:50,
        width:1400
      }
  });