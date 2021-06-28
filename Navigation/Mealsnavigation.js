import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import CategoryMealScreen from '../Screens/CategoryMealScreen'
import CategoryScreens from '../Screens/CategoryScreens'
import MealScreen from '../Screens/MealScreen'
const Mealsnavigation=createStackNavigator({
    Categories:CategoryScreens,
    CategoMeals:CategoryMealScreen,
    Mea:MealScreen
})
export default createAppContainer(Mealsnavigation)