import React,{Component} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

export default class Filme extends Component {
    render() {
        return(
            <View>
                <Text style={style.nomeFilme}>
                    {this.props.data.nome}
                </Text>

                <TouchableOpacity onPress={()=> alert(this.props.data.nome)} >
                    <Image style={style.capaFilme} source={{uri: this.props.data.foto}}>
                    </Image>
                </TouchableOpacity>

                
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{

    },

    nomeFilme:{
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        justifyContent: "center",
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30,
    },

    capaFilme: {
        width: 200,
        height: 250,
        alignSelf: 'Center',
        borderRadius: 30,
    }

})