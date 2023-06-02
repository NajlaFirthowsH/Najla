
import * as React from 'react'
import {ScrollView,View,Text,TouchableOpacity,StyleSheet,Dimensions,Image,ImageBackground} from 'react-native'
import {useNetInfo} from "@react-native-community/netinfo";
import NetInfo from "@react-native-community/netinfo";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';


const sh = Dimensions.get('screen').height
const sw = Dimensions.get('screen').width



const User = () => {
    return (
        
        <View style={{marginTop:0.02*sh,padding:0.02*sh,backgroundColor:'white',height:'100%',width:'100%'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:0.02*sh}}>
           <View style={{flexDirection:'row'}}>
            <FontAwesome5 name="clipboard-list" size={40} color="gray" />
           <View style={{flexDirection:'column',marginLeft:0.01*sh}}>
            <View>
                <Text style={{fontWeight:'500'}}> GATE & ESE - ...  <Entypo name="chevron-down" size={24} color="black" /></Text>
            </View>
            <View>
                <Text style={{color:'gray',fontSize:12}}> Free trial until 12 may 2023 </Text>
            </View>
            </View>
            </View>
            <View>
                <TouchableOpacity style={{height:0.05*sh,justifyContent:'center',borderWidth:1,borderRadius:0.01*sh,width:0.15*sh,borderColor:'gray'}}>
                    <Text style={{textAlign:'center',fontSize:12,fontWeight:'bold'}}> Manage </Text>
                </TouchableOpacity>
            </View>
        </View>
        <ScrollView>
            <View style={{flexDirection:'row',marginTop:0.01*sh}}>
                <Image source = {require('./assets/u.jpg')} style={{height:0.15*sh,width:0.15*sh,borderRadius:0.5*sh}}/>
              <View style={{flexDirection:'column',marginTop:0.02*sh}}>
                <Text style={{fontWeight:'400',fontSize:20}}>Bavith</Text>
                <View>
                    <Text style={{color:'#daa520',fontWeight:'bold',marginBottom:0.01*sh}}>Beginner . 400 </Text>
                    <View>
                        <TouchableOpacity style={{width:0.3*sh,justifyContent:'center',borderWidth:1,height:0.05*sh,borderColor:'#d3d3d3',borderRadius:0.02*sh}}>
                            <Text style={{color:'gray',textAlign:'center'}}><FontAwesome5 name="medal" size={15} color="gray" />   Rank 0 in GATE Feb 2023 </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>
            <View  style={{flexDirection:'row',marginTop:0.05*sh}}>
            <View style={{flexDirection:'column'}}>
                    
                    <TouchableOpacity style={styles.Touch}>
                        <Text style={styles.txt}> <AntDesign name="youtube" size={15} color="#6495ed" />    Enrollments </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.Touch}>
                        <Text style={styles.txt}> <Feather name="bookmark" size={15} color='#daa520' />     Saved </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.Touch}>
                        <Text style={styles.txt}> <Feather name="bell" size={15} color="#228b22" />   Updates </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.Touch}>
                        <Text style={styles.txt}> <FontAwesome name="question-circle" size={15} color="#40e0d0" />  FAQs </Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'column',marginLeft:0.01*sh}}>
                    
                <TouchableOpacity style={styles.Touch}>
                    <Text style={styles.txt}><AntDesign name="clockcircle" size={15} color="#fa8072" />   History </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.Touch}>
                    <Text style={styles.txt}><FontAwesome name="download" size={15} color="#da70d6" />   Downloads </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.Touch}>
                    <Text style={styles.txt}><Entypo name="user" size={15} color="#4169e1" />   My educators </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.Touch}>
                    <Text style={styles.txt}><AntDesign name="setting" size={15} color="gray" />   Settings </Text>
                </TouchableOpacity>
                </View>   
            </View>
            <View style={{marginTop:0.01*sh}}>
                <Text style={{fontSize:14,fontWeight:'400'}}> Rating progress </Text>
            </View>
            <View>
              <TouchableOpacity style={{flexDirection:'row',marginTop:0.02*sh}}>
              <Image source = {require('./assets/hu.png')} style={{height:0.06*sh,width:0.06*sh}}/>
                <Text style={{fontWeight:'bold',fontSize:14,marginTop:0.02*sh,marginLeft:0.02*sh}}>Draw</Text>
                <Text style={{fontSize:14,marginTop:0.02*sh}}> against Priniju</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginBottom:0.04*sh}}>
                <Text style={{fontWeight:'400',marginTop:0.02*sh}}>Leaderborad </Text>
                <View style={{flexDirection:"row",marginTop:0.04*sh}}>
                <View>
                    <TouchableOpacity style={styles.category}>
                        <Text style={{fontWeight:'normal',textAlign:'center'}}>GATE Feb 2023 <Entypo name="chevron-down" size={24} color="black" /></Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.category}>
                        <Text style={{fontWeight:'normal',textAlign:'center'}}>Tamil Nadu <Entypo name="chevron-down" size={24} color="black" /></Text>
                    </TouchableOpacity>
                </View>
                </View>
                <View style={{marginTop:0.02*sh}}>
                    <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',marginTop:0.01*sh}}>
        
                        <View style={{flexDirection:'row'}}>
                        <Image source = {require('./assets/11.jpg')} style={{height:0.04*sh,width:0.04*sh,marginTop:0.01*sh,marginRight:0.01*sh}} />
                        <Image source={require('./assets/hu.png')}  style={{height:0.06*sh,width:0.06*sh}} />
                        <View style={{marginLeft:0.02*sh}}>
                            <Text><MaterialCommunityIcons name="hexagon" size={15} color="purple" /> Akash</Text>
                            <View>
                                <Text style={{color:'gray',fontSize:10}}> Tamil Nadu </Text>
                            </View>
                        </View>
                        </View>
                        <View>
                            <Text style={{color:'gray'}}> 3896 </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',marginTop:0.01*sh}}>
        
                        <View style={{flexDirection:'row'}}>
                        <Image source = {require('./assets/2.jpg')} style={{height:0.04*sh,width:0.04*sh,marginTop:0.01*sh,marginRight:0.01*sh}} />
                        <Image source={require('./assets/hu.png')}  style={{height:0.06*sh,width:0.06*sh}} />
                        <View style={{marginLeft:0.02*sh}}>
                            <Text><MaterialCommunityIcons name="pentagon" size={15} color="#ff4500" /> Venkat</Text>
                            <View>
                                <Text style={{color:'gray',fontSize:10}}> Tamil Nadu </Text>
                            </View>
                        </View>
                        </View>
                        <View>
                            <Text style={{color:'gray'}}> 3896 </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',marginTop:0.01*sh}}>
        
                        <View style={{flexDirection:'row'}}>
                        <Image source = {require('./assets/3.jpg')} style={{height:0.04*sh,width:0.04*sh,marginTop:0.01*sh,marginRight:0.01*sh}} />
                        <Image source={require('./assets/hu.png')}  style={{height:0.06*sh,width:0.06*sh}} />
                        <View style={{marginLeft:0.02*sh}}>
                            <Text><MaterialCommunityIcons name="triangle" size={15} color="#daa520" /> PK </Text>
                            <View>
                                <Text style={{color:'gray',fontSize:10}}> Tamil Nadu </Text>
                            </View>
                        </View>
                        </View>
                        <View>
                            <Text style={{color:'gray'}}> 3896 </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',marginTop:0.01*sh}}>
        
                        <View style={{flexDirection:'row'}}>
                        <Image source = {require('./assets/r.jpg')} style={{height:0.04*sh,width:0.04*sh,marginTop:0.01*sh,marginRight:0.01*sh}} />
                        <Image source={require('./assets/hu.png')}  style={{height:0.06*sh,width:0.06*sh}} />
                        <View style={{marginLeft:0.02*sh}}>
                            <Text><MaterialCommunityIcons name="triangle" size={15} color="#daa520" /> PK </Text>
                            <View>
                                <Text style={{color:'gray',fontSize:10}}> Tamil Nadu </Text>
                            </View>
                        </View>
                        </View>
                        <View>
                            <Text style={{color:'gray'}}> 3896 </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',marginTop:0.01*sh}}>
        
                        <View style={{flexDirection:'row'}}>
                        <Image source = {require('./assets/r.jpg')} style={{height:0.04*sh,width:0.04*sh,marginTop:0.01*sh,marginRight:0.01*sh}} />
                        <Image source={require('./assets/hu.png')}  style={{height:0.06*sh,width:0.06*sh}} />
                        <View style={{marginLeft:0.02*sh}}>
                            <Text><MaterialCommunityIcons name="triangle" size={15} color="#daa520" /> PK </Text>
                            <View>
                                <Text style={{color:'gray',fontSize:10}}> Tamil Nadu </Text>
                            </View>
                        </View>
                        </View>
                        <View>
                            <Text style={{color:'gray'}}> 3896 </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginTop:0.02*sh}}>
                        <TouchableOpacity style={{height:0.05*sh,width:0.90*sw,borderWidth:1,borderColor:'black',justifyContent:'center'}}>
                            <Text style={{textAlign:'center'}}> View Full Leaderborads </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:0.02*sh}}>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:14,width:0.4*sh}}>Refers friends to win Amazon vouchers and Plus subscription</Text>
                        <Text style={{color:'#a9a9a9',width:0.2*sh}}>For every successfull referral win up to Rs.2500. Also get 1 month plus subscription once</Text>
                        <View style={{marginLeft:0.06*sh}}>
                            <TouchableOpacity style={{backgroundColor:'gray',justifyContent:'center',borderColor:'gray',borderWidth:1,borderRadius:0.01*sh, height:0.05*sh,width:0.3*sw}}>
                                <Text style={{textAlign:'center',fontWeight:'bold',fontSize:12}}> Refer a Friend </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                        <Image source={require('./assets/g.jpg')} style={{height:0.2*sh,width:0.2*sh}} />
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:0.04*sh}}>
                        <Text style={{fontWeight:'bold'}}> Activity </Text>
                        <Text style={{color:'gray'}}> Today </Text>
                    </View>
                    <View style={{marginTop:0.03*sh,flexDirection:'row',justifyContent:'space-between'}}>
                        <View >
                        <Text style={{color:'#48d1cc',fontSize:20}}>0/10 </Text>
                        <Text style={{color:'gray'}}>Mins Watched</Text>
                        <Text style={{color:'#00ff7f',fontSize:20,marginTop:0.01*sh}}>2/5 </Text>
                        <Text style={{color:'gray'}}>Questions attempted </Text>
                        </View>
                        
                    </View>
                    <View style={{marginTop:0.02*sh}}>
                        <TouchableOpacity style={{height:0.05*sh,width:0.90*sw,borderWidth:1,borderColor:'black',justifyContent:'center'}}>
                            <Text style={{textAlign:'center'}}> View Summary </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:0.04*sh}}>
                        <Text style={{fontWeight:'bold'}}> Streak </Text>
                        <Text style={{color:'gray'}}> Daily goals: 10 mins.5 questions </Text>
                    </View>
                    <View style={{marginTop:0.02*sh,justifyContent:'space-evenly',flexDirection:'row',borderWidth:1,borderRadius:0.01*sh,height:0.2*sh,width:0.9*sw}}>
                        <View style={{marginTop:0.07*sh}}>
                            <Text style={{color:'gray',fontWeight:'bold'}}>CURRENT</Text>
                            <View>
                                <Text style={{color:'#6a5acd',fontWeight:'bold'}}> 0 days </Text>
                            </View>
                        </View>
                        <View style={{marginTop:0.07*sh}}>
                            <Text style={{color:'gray',fontWeight:'bold'}}>LONGEST</Text>
                            <View>
                                <Text style={{color:'#daa520',fontWeight:'bold'}}> 2 days </Text>
                            </View>
                        </View>
                        <View style={{marginTop:0.1*sh,marginRight:0.01*sh}}>
                                <Image source={require('./assets/ff.png')} style={{height:0.09*sh,width:0.09*sh,position:'absolute',top:0,bottom:0}}/>
                            </View>
                    </View>
                    <View style={{marginTop:0.02*sh}}>
                        <View >
                            <Text style={{textAlign:'right'}}>S      M      T      W     T       F     S    </Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:0.02*sh}}>
                            <Text style={{color:'gray'}}>16 - 22 Apr</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:0.02*sh}}>
                            <Text style={{color:'gray'}}>23 - 29 Apr</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:0.02*sh}}>
                            <Text style={{color:'gray'}}>30 Apr - 6 May </Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:0.02*sh}}>
                            <Text style={{fontWeight:'bold'}}>This Week</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:0.04*sh}}>
                        <Text style={{fontWeight:'bold'}}> Stats </Text>
                        <Text style={{color:'gray'}}> ALL TIME </Text>
                    </View>
                   <View style={{flexDirection:'row',marginTop:0.01*sh}}>
                   <View style={{flexDirection:'column'}}>
                    
                    <TouchableOpacity style={styles.kit}>
                        <Text style={{color:'gray',fontSize:12,fontWeight:'bold'}}>TOTAL MINS WATCHED</Text>
                        <View>
                            <Text style={{fontSize:12}}>114</Text>
                        </View>
                        <MaterialIcons name="class" size={24} color="#4682b4" style={{position:'absolute',right:0,bottom:0}} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.kit}>
                        <Text style={{color:'gray',fontSize:12,fontWeight:'bold'}}>QUESTIONS ATTEMPTED</Text>
                        <View>
                            <Text style={{fontSize:12}}>5</Text>
                        </View>
                        <AntDesign name="questioncircle" size={24} color="green" style={{position:'absolute',right:0,bottom:0}}   />
                    </TouchableOpacity>
                    </View>        
                    <View style={{flexDirection:'column',marginLeft:0.01*sh}}>
                    
                    <TouchableOpacity style={styles.kit}>
                        <Text style={{color:'gray',fontSize:12,fontWeight:'bold'}}>LESSON COMPLETED</Text>
                        <View>
                            <Text style={{fontSize:12}}>5</Text>
                        </View>
                        <Entypo name="youtube-with-circle" size={24} color="gray" style={{position:'absolute',right:0,bottom:0}} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.kit}>
                        <Text style={{color:'gray',fontSize:12,fontWeight:'bold'}}>TESTS ATTEMPTED</Text>
                        <View>
                            <Text style={{fontSize:12}}>13</Text>
                        </View>
                        <MaterialCommunityIcons name="sticker-check" size={24} color="blue" style={{position:'absolute',right:0,bottom:0}} />
                    </TouchableOpacity>
                    </View>        
                   </View>
                   <View style={{flexDirection:'row',marginTop:0.04*sh}}>
                        <Text style={{fontWeight:'bold'}}> Achivements </Text>
                    </View>
                   <View>
                    <ScrollView horizontal>
                    <View style={{marginTop:0.02*sh,marginLeft:0.02*sh,width:0.1*sh}}>
                        <Image source={require('./assets/bc.jpg')} style={{height:0.07*sh,width:0.09*sh,marginBottom:0.02*sh}}/>
                        <Text style={{fontSize:12}}>Teacher's Day Hat</Text>
                        <View>
                            <Text style={{fontSize:10,color:'gray',}}>Happy Teacher's Da...</Text>
                        </View>
                    </View>
                    <View style={{marginTop:0.02*sh,marginLeft:0.02*sh,width:0.1*sh}}>
                        <Image source={require('./assets/re.jpg')} style={{height:0.07*sh,width:0.09*sh,marginBottom:0.02*sh}}/>
                        <Text style={{fontSize:12}}>Orange Hat</Text>
                        <View>
                            <Text style={{fontSize:10,color:'gray'}}>100 minutes</Text>
                        </View>
                    </View>
                    <View style={{marginTop:0.02*sh,marginLeft:0.02*sh,width:0.1*sh}}>
                        <Image source={require('./assets/ye.jpg')} style={{height:0.07*sh,width:0.09*sh,marginBottom:0.02*sh}}/>
                        <Text style={{fontSize:12}}>Yellow Hat</Text>
                        <View>
                            <Text style={{fontSize:10,color:'gray'}}>50 minutes</Text>
                        </View>
                    </View>
                    <View style={{marginTop:0.02*sh,marginLeft:0.02*sh,width:0.1*sh}}>
                        <Image source={require('./assets/w.jpg')} style={{height:0.07*sh,width:0.09*sh,marginBottom:0.02*sh}}/>
                        <Text style={{fontSize:12}}>White Hat</Text>
                        <View>
                            <Text style={{fontSize:10,color:'gray'}}>25 minutes</Text>
                        </View>
                    </View>
                    <View style={{marginTop:0.02*sh,marginLeft:0.02*sh,width:0.1*sh}}>
                        <Image source={require('./assets/gr.jpg')} style={{height:0.07*sh,width:0.09*sh,marginBottom:0.02*sh}}/>
                        <Text style={{fontSize:12}}>Green Hat</Text>
                        <View>
                            <Text style={{fontSize:10,color:'gray'}}>15 minutes</Text>
                        </View>
                    </View>
                    <View style={{marginTop:0.02*sh,marginLeft:0.02*sh,width:0.1*sh}}>
                        <Image source={require('./assets/bl.jpg')} style={{height:0.07*sh,width:0.09*sh,marginBottom:0.02*sh}}/>
                        <Text style={{fontSize:12}}>Blue Hat</Text>
                        <View>
                            <Text style={{fontSize:10,color:'gray'}}>10 Lessons</Text>
                        </View>
                    </View>
                    </ScrollView>
                   </View>
                   <View style={{marginTop:0.02*sh}}>
                        <TouchableOpacity style={{height:0.05*sh,width:0.90*sw,borderWidth:1,borderColor:'black',justifyContent:'center'}}>
                            <Text style={{textAlign:'center'}}> View All </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:0.04*sh}}>
                        <Text style={{fontWeight:'bold',fontSize:14}}>GATE & ESE - ME & CH Leaderboard </Text>
                        <Text style={{color:'gray',fontSize:14}}> Last 30 days </Text>
                    </View>
                    <View style={{marginTop:0.02*sh}}>
                    <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',marginTop:0.01*sh}}>
                        <View style={{flexDirection:'row'}}>
                        
                        <Image source={require('./assets/hu.png')}  style={{height:0.06*sh,width:0.06*sh}} />
                        <View style={{marginLeft:0.02*sh}}>
                            <Text><MaterialCommunityIcons name="hexagon" size={15} color="purple" /> Akash</Text>
                            <View>
                                <Text style={{color:'gray',fontSize:10}}> 29,900 mins </Text>
                            </View>
                        </View>
                    </View>
                <View>
                <Image source = {require('./assets/11.jpg')} style={{height:0.04*sh,width:0.04*sh,marginTop:0.01*sh,marginRight:0.01*sh}} />
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',marginTop:0.01*sh}}>
                        <View style={{flexDirection:'row'}}>
                        
                        <Image source={require('./assets/hu.png')}  style={{height:0.06*sh,width:0.06*sh}} />
                        <View style={{marginLeft:0.02*sh}}>
                            <Text><MaterialCommunityIcons name="pentagon" size={15} color="#daa520" /> Akash</Text>
                            <View>
                                <Text style={{color:'gray',fontSize:10}}> 29,900 mins </Text>
                            </View>
                        </View>
                    </View>
                <View>
                <Image source = {require('./assets/2.jpg')} style={{height:0.04*sh,width:0.04*sh,marginTop:0.01*sh,marginRight:0.01*sh}} />
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',marginTop:0.01*sh}}>
                        <View style={{flexDirection:'row'}}>
                        
                        <Image source={require('./assets/hu.png')}  style={{height:0.06*sh,width:0.06*sh}} />
                        <View style={{marginLeft:0.02*sh}}>
                            <Text><MaterialCommunityIcons name="triangle" size={15} color="red" /> Akash</Text>
                            <View>
                                <Text style={{color:'gray',fontSize:10}}> 29,900 mins </Text>
                            </View>
                        </View>
                    </View>
                <View>
                <Image source = {require('./assets/3.jpg')} style={{height:0.04*sh,width:0.04*sh,marginTop:0.01*sh,marginRight:0.01*sh}} />
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',marginTop:0.01*sh}}>
                        <View style={{flexDirection:'row'}}>
                        
                        <Image source={require('./assets/hu.png')}  style={{height:0.06*sh,width:0.06*sh}} />
                        <View style={{marginLeft:0.02*sh}}>
                            <Text><MaterialCommunityIcons name="square" size={15} color="green" /> Akash</Text>
                            <View>
                                <Text style={{color:'gray',fontSize:10}}> 29,900 mins </Text>
                            </View>
                        </View>
                    </View>
                <View>
                <Image source = {require('./assets/r.jpg')} style={{height:0.04*sh,width:0.04*sh,marginTop:0.01*sh,marginRight:0.01*sh}} />
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',marginTop:0.01*sh}}>
                        <View style={{flexDirection:'row'}}>
                        
                        <Image source={require('./assets/hu.png')}  style={{height:0.06*sh,width:0.06*sh}} />
                        <View style={{marginLeft:0.02*sh}}>
                            <Text><MaterialCommunityIcons name="square" size={15} color="green" /> Akash</Text>
                            <View>
                                <Text style={{color:'gray',fontSize:10}}> 29,900 mins </Text>
                            </View>
                        </View>
                    </View>
                <View>
                <Image source = {require('./assets/r.jpg')} style={{height:0.04*sh,width:0.04*sh,marginTop:0.01*sh,marginRight:0.01*sh}} />
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:0.02*sh}}>
                        <TouchableOpacity style={{height:0.05*sh,width:0.90*sw,borderWidth:1,borderColor:'black',justifyContent:'center'}}>
                            <Text style={{textAlign:'center'}}> See Leaderboard </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',marginTop:0.04*sh}}>
                        <Text style={{fontWeight:'bold'}}> Credits </Text>
                    </View>
                    
                    <Text style={{textAlign:'center',marginTop:0.01*sh,color:'gray',fontSize:12}}>Available credits</Text>
                    <View style={{flexDirection:'row',marginTop:0.04*sh}}>
                        <Text style={{color:'gray'}}>History </Text>
                    </View>
                    <View style={{marginTop:0.02*sh}}>
                    <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',marginTop:0.01*sh}}>
                        <View style={{flexDirection:'row'}}>
                        <Entypo name="database" size={24} color="#daa520" style={{height:0.04*sh,width:0.04*sh,marginTop:0.01*sh,marginRight:0.01*sh}} />
                            <View style={{marginLeft:0.02*sh}}>
                                <Text> Akash</Text>
                                <View>
                                    <Text style={{color:'gray',fontSize:10}}> Tamil Nadu </Text>
                                </View>
                            </View>
                        </View>
                        <View>
                             <Text style={{color:'green'}}> +10 </Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',marginTop:0.01*sh}}>
                        <View style={{flexDirection:'row'}}>
                        <Entypo name="database" size={24} color="#daa520" style={{height:0.04*sh,width:0.04*sh,marginTop:0.01*sh,marginRight:0.01*sh}} />
                            <View style={{marginLeft:0.02*sh}}>
                                <Text> Akash</Text>
                                <View>
                                    <Text style={{color:'gray',fontSize:10}}> Tamil Nadu </Text>
                                </View>
                            </View>
                        </View>
                        <View>
                             <Text style={{color:'green'}}> +10 </Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{justifyContent:'space-between',flexDirection:'row',marginTop:0.01*sh}}>
                        <View style={{flexDirection:'row'}}>
                        <Entypo name="database" size={24} color="#daa520" style={{height:0.04*sh,width:0.04*sh,marginTop:0.01*sh,marginRight:0.01*sh}} />
                            <View style={{marginLeft:0.02*sh}}>
                                <Text> Akash</Text>
                                <View>
                                    <Text style={{color:'gray',fontSize:10}}> Tamil Nadu </Text>
                                </View>
                            </View>
                        </View>
                        <View>
                             <Text style={{color:'green'}}> +10 </Text>
                        </View>
                        </TouchableOpacity>
        
                    </View>
                    <View style={{marginTop:0.02*sh}}>
                        <TouchableOpacity style={{height:0.05*sh,width:0.90*sw,borderWidth:1,borderColor:'black',justifyContent:'center'}}>
                            <Text style={{textAlign:'center'}}> See All </Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </ScrollView>
        
        </View>
    )
}



const styles = StyleSheet.create({
    Touch:{
        height:0.06*sh,
        width:0.5*sw,
        backgroundColor:'#f0f8ff',
        marginTop:0.01*sh,
        justifyContent:'center'

    },
    txt:{
        marginLeft:0.05*sh,
        fontSize:14,
        fontWeight:'normal',
        
    },
    category:
    {
        marginLeft:0.01*sh,
        justifyContent:'center',
        height:0.06*sh,
        width:0.2*sh,
        borderWidth:1,
        borderColor:'black',
        borderRadius:0.04*sh
    },
    kit:
    {
        height:0.09*sh,
        width:0.45*sw,
        marginTop:0.01*sh,
        borderWidth:1,
        borderRadius:0.01*sh,
        borderColor:'gray',
        justifyContent:'center',
        padding:0.01*sh,
    }
})


export default User