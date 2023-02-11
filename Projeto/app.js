import React,{Component, component} from 'react';
import {SafeAreaView,Text,StyleSheet, FlatList,} from 'react-native'
import api from './Src/Services/Api';
import Filme from './Src/Pages/Filme'

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            filmes: []
        }
    }

    async componentDidMount() {
        const response = await api.get('/filmes');
        this.setState({
            filmes: response.data
        })
    }

    render() {
        return(
            <SafeAreaView style={style.container}>
                <FlatList>
                    data={this.state.filmes}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <Filme data={item}/>}
                </FlatList>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex: 1,    
        backgroundColor: 'black'

    }
})