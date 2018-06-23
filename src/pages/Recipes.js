import React from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

import RecipeList from '../components/RecipeList';
import recipesJson from '../../recipes.json';

export default class Recipes extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            recipes: [],
            loading: false,
            error: false,
            refresh: false
        };
    }

    componentDidMount(){
        this.setState({ loading: true });
        setTimeout(() =>{
            this.setState({
                'recipes': recipesJson,
                'loading': false
            });
        }, 1500);

    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.loading
                        ? <ActivityIndicator size="large" color="#6ca2f7"/>
                        : this.state.error
                        ? <Text style={styles.error}>Ops! algo deu errado :(</Text>
                        : <RecipeList
                            recipes={this.state.recipes}
                            refresh={this.state.refresh}
                            onPressItem={(params) =>{
                                this.props.navigation.navigate('RecipeDetail', params);
                            }}
                            onLongPressItem={({ recipe }) =>{
                                const recipes = this.state.recipes;
                                const recipe_index = recipes
                                    .findIndex(x => x.key === recipe.key);
                                recipes[recipe_index].ratings += 1;
                                this.setState({
                                    refresh: !this.state.refresh
                                })

                            }}/>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    'container': {
        flex: 1,
        justifyContent: 'center'
    },
    'error': {
        color: 'red',
        alignSelf: 'center',
        fontSize: 18
    }
});