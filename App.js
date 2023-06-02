import * as React from 'react'
import {View,Text,Image,TouchableOpacity,Dimensions,ImageBackground} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Hello from './helo'
import Tabnav from './tab'
import NetInfo from '@react-native-community/netinfo'
import { useNetInfo } from '@react-native-community/netinfo'
import Login from './login'

// const sh = Dimensions.get('screen').height
// const sw = Dimensions.get('screen').width


const Drawer = createDrawerNavigator()

const Drawnav = () => {
    // const netInfo = useNetInfo()
    // const Refresh = () =>{
    //     return(
    //         NetInfo.refresh().then(state => {
    //             console.log("Connection type", state.type);
    //             console.log("Is connected?", state.isConnected);
    //         })
    //     )
    //     }
    return(
        <>
            {/* {/* {
            netInfo.isConnected ?  */}

             <NavigationContainer>
                <Drawer.Navigator initialRouteName='Network'>
                    <Drawer.Screen name='Hello' component={Hello}/>
                    <Drawer.Screen name='Tabnav' component={Tabnav} options={{headerShown:false}}/>
                    <Drawer.Screen name='Login' component={Login} options={{headerShown:false}}/>
                        </Drawer.Navigator>
             </NavigationContainer>
{/*}
            (<View style={{height:'100%',width:'100%',backgroundColor:'white',justifyContent:'space-evenly'}}>
            <Image source={require('./assets/skelton.png')} style={{height:0.22*sh,width:0.15*sh,alignSelf:'center'}} />
            <Text style={{fontSize:26,fontWeight:'600',marginTop:0.15*sh,textAlign:'center'}}>No Internet Connection</Text>
            <Text style={{textAlign:'center',fontSize:19}}>Please check your internet connection {'\n'} and try again</Text>
        <View>
            <ImageBackground style={{height:0.6*sw,width:sw,shadowColor:'#d3d3d3'}} source={require('./assets/map.png')} resizeMode='contain'>
            <TouchableOpacity onPress={Refresh} style={{marginTop:0.02*sh,justifyContent:'center',alignSelf:'center',height:0.07*sh,width:0.2*sh,borderWidth:1,backgroundColor:'black',borderRadius:0.05*sh}}>
                    <Text style={{color:'white',textAlign:'center',fontSize:18,fontWeight:'bold'}}>TRY AGAIN</Text>
                </TouchableOpacity>
                </ImageBackground>
            </View>   
            </View>)
        }      */}
        </>
        
    )
}
export default Drawnav