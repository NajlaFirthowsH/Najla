import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import {ImageBackground,View,Text,TextInput,TouchableOpacity,Dimensions,StyleSheet} from 'react-native'


const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

const Login = () => {
    const [id,setId] = React.useState()
    const [password,setPassword] = React.useState()
    return (
        <View style={{backgroundColor:'white',height:screenHeight,width:screenWidth}}>
            <StatusBar/>
            <ImageBackground style={{height:'100%',width:'100%'}} source={require('./assets/ba.jpg')}>
                <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
                <View style={[styles.inputView,{marginTop:0.4*screenHeight}]}>
                <Text style={[styles.label,{marginBottom:0.01*screenHeight}]}>     User ID </Text>
                <Text style={[styles.label,{marginTop:0.03*screenHeight}]}> Password </Text>
                </View>
                <View>
                <View style={[styles.inputView,{marginTop:0.4*screenHeight}]}>
                    
                    <TextInput 
                    placeholder=' Enter Your User Id Here'
                    value={id}
                    onChangeText= {()=>{setId}}
                    style={styles.input}
                    />
                </View>
                <View style={[styles.inputView,{marginTop:0.02*screenHeight}]}>
                    <TextInput 
                    placeholder=' Enter Password'
                    value={password}
                    onChangeText= {()=>{setPassword}}
                    style={styles.input}
                    secureTextEntry
                    />
                </View>
                </View>
                </View>
                <View >
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color:'white',textAlign:'center',fontSize:18,fontWeight:600}}> Login </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
    
        borderWidth:1,
        
        borderColor:'black',
        height:0.06*screenHeight,
        width:0.4*screenWidth
    },
    label:{
        color:'black',
        fontSize:18,
        marginRight:0.01*screenHeight
    },
    inputView:{
        justifyContent:'center',
        alignContent:'center',
    },
    button:{
        marginTop:0.04*screenHeight,
        alignSelf:'center',
        justifyContent:'center',
        height:0.08*screenHeight,
        width:0.3*screenWidth,
        backgroundColor:'black',
        borderWidth:1,
        borderRadius:0.02*screenHeight
    }
})

export default Login