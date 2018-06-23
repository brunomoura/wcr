import React from 'react';
import { View } from 'react-native';

import RecipeDetailItem from '../components/RecipeDetailItem';

export default class RecipeDetail extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { recipe } = this.props.navigation.state.params;
        return (
            <View>
                <RecipeDetailItem recipe={recipe}/>
            </View>
        );
    }
}