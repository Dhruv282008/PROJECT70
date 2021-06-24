import React from 'react';
import { TextInput, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default class WriteStory extends React.Component{
    constructor() {
        super();
        this.state = {
            title: "",
            author: "",
            story: ""
        }
    }
    render() {
        return (
            <View>
                <KeyboardAvoidingView>
                    //TITLE
                    <TextInput
                        style={styles.textInputs}
                    placeholder="Title of the STORY"
                    onChangeText={(text) => {
                    this.setState({title:text})
                        }}></TextInput>
                    //AUTHOR
                    <TextInput
                        style={styles.textInputs}
                        placeholder="Author"
                        onChangeText={(text) => {
                            this.setState({ author: text })
                        }}></TextInput>
                    //STORY
                    <TextInput
                        style={styles.textInputs}
                        placeholder="Your Story"
                        onChangeText={(text) => {
                            this.setState({ story: text })
                        }}
                        multiline={true}
                    ></TextInput>
                    //SUBMIT
                    <TouchableOpacity style = {styles.button}>
                        <Text>Submit Your Story</Text>
                    </TouchableOpacity>
                    </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textInputs: {
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'red',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
    },
    button: {
        width: "75%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "darkblue",
    }
})