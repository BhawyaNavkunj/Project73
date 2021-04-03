import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ToastAndroid,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import db from '../config';

export default class ReadStoryScreen extends React.Component {
  state = {
    search: '',
    allStories: [],
    dataSource: [],
  };

  componentDidMount = async () => {
    this.retrieveStories();
  };

  updateSearch=(search)=>{
        this.setState({search});
    }

  retrieveStories = async () => {
    try {
      var allStories = [];
      var stories = db
        .collection('Stories')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots

            allStories.push(doc.data());
            console.log('These are the stories:', allStories);
          });
          this.setState({
            allStories: allStories,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  SearchFilterFunction=async(text)=>{
     const newData = await this.state.allStories.filter((item)=> {
          const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          dataSource: newData,
          search: text,
        });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ backgroundColor: '#E0C8EA', marginBottom: 10 }}>
          <Text style={styles.text}>Bedtime Stories</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <SearchBar
            platform="android"
            placeholder="Search for a story"
            value={this.state.search}
            inputContainerStyle={styles.searchBox}
            onChangeText={text => this.SearchFilterFunction(text)}
            onClear={text => this.SearchFilterFunction('')}
          />
        </View>
          <View>
            {this.state.search === ''
              ? this.state.allStories.map((item) => (
                  <View style={styles.box}>
                    <Text>Title : {item.Title}</Text>
                    <Text>Author : {item.Author}</Text>
                  </View>
                ))
              : this.state.dataSource.map((item) => (
                  <View
                    style={{
                      borderColor: 'purple',
                      borderWidth: 2,
                      padding: 10,
                      alignItems: 'center',
                      margin: 30,
                    }}>
                    <Text>Title : {item.title}</Text>
                    <Text>Author : {item.author}</Text>
                  </View>
                ))}
          </View>
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  searchBox: {
    height: 35,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderWidth: 2,
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'cursive',
  },
  box: {
    borderColor: 'purple',
    borderWidth: 2,
    padding: 10,
    alignItems: 'center',
    margin: 10,
  },
});
