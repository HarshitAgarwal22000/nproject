import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text, View } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';
import {dummyd} from '../models/Dummy'


let rs;
const CategoryMealScreen=(props)=> {
  const r=dummyd
  let s=props.navigation.getParam('categoryId')
  rs=props.navigation.getParam('categ')

  return (
    
    <View style={styles.container}>
  
     <View style={styles.tn}><Button title={rs} onPress={()=>props.navigation.navigate('Mea')} /></View>
     <Text>{rs}</Text>
    </View>
  );
}
CategoryMealScreen.navigationOptions
{
  headerTitle:"pokpokm"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tn:
  {
    width:40
  }
});
export default CategoryMealScreen;
