import React from 'react';
import { View, StyleSheet } from 'react-native';

import RecipeDetailItem from './RecipeDetailItem';

const RecipeDetail= props => {
    const { recipe } = props;

    return (
        <View style={styles.container}>
            <RecipeDetailItem recipe={recipe}/>
        </View>
    );
};

const styles = StyleSheet.create({
    'container': {
        'backgroundColor': '#BDF5FF'
    }
});

export default RecipeDetail;