import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Image,Button, Text, View,FlatList } from 'react-native';


let imgl='https://news.ufl.edu/media/newsufledu/images/2018/11/Food-Traceability.jpg'
let r;
import{dummyd} from '../models/Dummy'
import  {Data} from '../models/Data'


const CategoryScreens=(props)=> {
  function f(itemData){return (<View style={styles.gri}>
  
  

  <View style={styles.jn}>
   <View style={styles.t}>
      <Image source={{uri:itemData.item.image}} style={{width:300,height:300}}/>
      </View>
      <View style={styles.butto}>
      <Button title={itemData.item.TYPE}

        color='black'
       onPress={()=>props.navigation.navigate('CategoMeals',{categoryId:itemData.item.ID,categ:itemData.item.TYPE})}/></View>
    </View>
     </View>)}
    
  return (
    <View style={styles.container}>
      

    <FlatList numColumns={1} data={dummyd} renderItem={f}/>
    
    </View>
    
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#201f25',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gri:
  {
    justifyContent:'center',
    alignItems:'center',
    

  },
  butto:
  {
    
    marginRight:50,
    marginLeft:50,
    marginBottom:50,
    width:320



    
    
    

  },
  t:
  {
    borderWidth:10,
    borderTopColor:'black',
    borderLeftColor:'black',
    borderTopEndRadius:2,
    borderRightColor:'black',
    borderTopEndRadius:2,
    borderTopRightRadius:2
    
  
    
    

  },
  jn:
  {
    
    alignItems:'center',
    justifyContent:'center',
    

  }
});
export default CategoryScreens;
