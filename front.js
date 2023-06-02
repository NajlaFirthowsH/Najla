import * as React from 'react'
import {ScrollView,View,Text,TouchableOpacity,StyleSheet,Dimensions,Image,ImageBackground,ActivityIndicator} from 'react-native'
import {useNetInfo} from "@react-native-community/netinfo";
import NetInfo from "@react-native-community/netinfo";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import User from './user';

const sh = Dimensions.get('screen').height
const sw = Dimensions.get('screen').width

const Me = () => {
    const [refreshing,setRefreshing] = React.useState(false)
    const netInfo = useNetInfo()
    const [on,setOn] = React.useState()
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);
    const Refresh = () =>{
        return(
            NetInfo.refresh().then(state => {
                console.log("Connection type", state.type);
                console.log("Is connected?", state.isConnected);
            })
        )
        }
    return (
        <View style={{backgroundColor:'white'}}>
        {
            netInfo.isConnected ? (<User/>):(<View style={{height:'100%',width:'100%',backgroundColor:'white',justifyContent:'space-evenly'}}>
            <Image source={require('./assets/skelton.png')} style={{height:0.22*sh,width:0.15*sh,alignSelf:'center'}} />
            <Text style={{fontSize:26,fontWeight:'600',marginTop:0.15*sh,textAlign:'center'}}>No Internet Connection</Text>
            <Text style={{textAlign:'center',fontSize:19}}>Please check your internet connection {'\n'} and try again</Text>
        <View>
            <ImageBackground style={{height:0.6*sw,width:sw,shadowColor:'#d3d3d3'}} source={require('./assets/map.png')} resizeMode='contain'>
            <TouchableOpacity onPress={()=>{setOn(!on)
            Refresh}} style={{marginTop:0.02*sh,justifyContent:'center',alignSelf:'center',height:0.07*sh,width:0.2*sh,borderWidth:1,backgroundColor:'black',borderRadius:0.05*sh}}>
                    
                        <Text style={{color:'white',textAlign:'center',fontSize:18,fontWeight:'bold'}}>TRY AGAIN</Text>
                    
                </TouchableOpacity>
                { on ? 
                    (<View style={{justifyContent:'center'}}>
                    <ActivityIndicator size='small' color='black' visible={refreshing} style={{color:'black',justifyContent:'center',marginTop:0.01*sh}}/>
                </View>):null
                }
                </ImageBackground>
            </View>   
            </View>)
        }
        </View>
    )
}

export default Me


