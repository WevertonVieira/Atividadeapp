import * as React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Component } from 'react';
import { Button } from 'react-native-elements';


export interface HomeProps {
}

export function Home (props: HomeProps) {
    return (
    <View style={styles.background}>
        <View style={styles.head}>
            <Text style={[{fontSize: 30},styles.textHead]}>Bem vindo, Weverton</Text>
            <View>
                <Text style={styles.textHead}>Você Gastou Hoje</Text>
                <Text style={[{fontSize: 30}, styles.textHead]}>R$500</Text>
            </View>
            <View>
                <Text style={styles.textHead}>ESCOLHER O PERIODO </Text>
                <View style={styles.periodo}>
                    <Text style={styles.textHead}>Hoje</Text>
                    <Text style={styles.textHead}>Essa Semana</Text>
                    <Text style={styles.textHead}>Esse Mês</Text>
                </View>
            </View>
        </View>  
        <View style={styles.body}>
            <View style={styles.container}>
                <Button buttonStyle={styles.buttons} icon={{name:'flight', color: 'white'}}/>
                <Button buttonStyle={styles.buttons} icon={{name:'home', color: 'white'}}/>
                <Button buttonStyle={styles.buttons} icon={{name:'local-dining', color: 'white'}}/>
                <Button buttonStyle={styles.buttons} icon={{name:'directions-car', color: 'white'}}/>
                <Button buttonStyle={styles.buttons} icon={{name:'build', color: 'white'}}/>
            </View>
            <View>
                <View style={styles.container1}>
                    <Text>Pizza(R$ 30)</Text>
                    <Text>20/01/2020</Text>
                </View>
                <View style={styles.container1}>
                    <Text>Coca-Cola(R$ 10)</Text>
                    <Text>20/01/2020</Text>
                </View>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F7EBE8',
        width:'100%',
        height:'100%'
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    
    container1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: 40,
        margin: 10,
        alignItems: 'center',
        borderRadius: 5,
        padding: 12
    },

    periodo:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    body:{
        flex: 1,
        paddingTop: 20,
    },

    textHead:{
        color: 'white',
        textAlign: 'center',
    },

    head:{
        backgroundColor: '#E54B4B',
        justifyContent: 'space-around',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flex: 1,
    },

    buttons:{
        backgroundColor: '#444140',
        width:40,
        height: 40,
        borderRadius: 5,
    }
});