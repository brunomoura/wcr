import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import RecipeListItem from './RecipeListItem';

const RecipeList = props => {
    const { recipes, onPressItem, onLongPressItem } = props;
    recipes.sort(function (a, b) {
        if (a.ratings < b.ratings) {
            return 1;
        }
        if (a.ratings > b.ratings) {
            return -1;
        }
        return 0;
    });

    return (
        <FlatList
            style={styles.container}
            data={recipes}
            extraData={props.refresh}
            renderItem={({ item }) => (
                <RecipeListItem
                    recipe={item}
                    navigateToRecipeDetail={onPressItem}
                    onLongPressItem={onLongPressItem}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    'container': {
        'backgroundColor': '#BDF5FF'
    }
});

export default RecipeList;