import React from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';


const RecipeDetailItemLine = ({ label = "", content = "-" }) => {
    return (
        <View style={styles.line}>
            <Text style={[
                styles.cell,
                styles.label,
                label.length > 8 ? styles.longLabel : null
            ]}>{ label }</Text>
            <Text style={[styles.cell, styles.content]}>{ content }</Text>
        </View>
    )
};

const RecipeDetailItem = props => {
    const { recipe } = props;
    const nutrition_info = recipe.nutrition_info.join(', ');
    const ingredients = recipe.ingredients.join(', ');
    let date = new Date(null);
    date.setSeconds(recipe.prep_time);
    const prep_time = date.toISOString().substr(11, 8).toString('H:mm:ss');
    date.setSeconds(recipe.cooking_time);
    const cooking_time = date.toISOString().substr(11, 8).toString('H:mm:ss');

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.large} source={{'uri': recipe.large}}/>
            <View style={styles.detailContainer}>
                <RecipeDetailItemLine label="Ratings:" content={recipe.ratings} />
                <RecipeDetailItemLine label="Description:" content={recipe.description} />
                <RecipeDetailItemLine label="Author:" content={recipe.author} />
                <RecipeDetailItemLine label="Prep Time:" content={prep_time} />
                <RecipeDetailItemLine label="Cooking time:" content={cooking_time} />
                <RecipeDetailItemLine label="Nutrition:" content={nutrition_info} />
                <RecipeDetailItemLine label="Ingredients:" content={ingredients} />
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    'container': {
        padding: 15
    },
    'large': {
        aspectRatio: 1
    },
    'detailContainer': {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        marginBottom: 20,
        elevation: 1
    },
    'line': {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5'
    },
    'cell': {
        fontSize: 18,
        paddingLeft: 5,
    },
    'label': {
        fontWeight: 'bold',
        flex: 1
    },
    'content': {
        flex: 3
    },
    'longLabel': {
        fontSize: 12,
    }
});

export default RecipeDetailItem;