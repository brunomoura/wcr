import { createStackNavigator } from 'react-navigation';

import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';

export default createStackNavigator({
    'Main': {
        screen: Recipes
    },
    'RecipeDetail': {
        screen: RecipeDetail,
        navigationOptions: ({ navigation }) => {
            const recipeTitle = navigation.state.params.recipe.title;
            return (
                {
                    title: recipeTitle,
                    headerTitleStyle: {
                        color: '#fff',
                        fontSize: 30,
                    },
                }
            );
        },

    }
}, {
    navigationOptions: {
        title: 'Recipes',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5',
        },
        headerTitleStyle: {
            color: 'white',
            fontSize: 30
        }
    }
})