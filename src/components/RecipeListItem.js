import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

const RecipeListItem = props => {
    const { recipe, navigateToRecipeDetail, onLongPressItem } = props;
    // TO IMPROVE: Should be stored in the project
    const cookingImage = 'http://thatcookingschool.brandographylab.us/' +
        'wp-content/uploads/2017/06/chef.png';
    // TO IMPROVE: Should be stored in the project
    const ratingImage = 'https://is3-ssl.mzstatic.com/image/thumb/' +
        'Purple122/v4/79/c0/0a/79c00a1b-52ef-fec5-32f4-b007fdd38055/' +
        'source/256x256bb.jpg';
    return (
        <TouchableOpacity
            onPress={() => {
                navigateToRecipeDetail({ recipe })
            }}
            onLongPress={() => {
                onLongPressItem({ recipe })
            }} >
            <View style={styles.line}>
                <Image style={styles.thumbnail} source={{'uri': recipe.thumb}}/>
                <Text style={styles.lineText}>
                    { recipe.title }
                </Text>
                <Image style={styles.thumbnail} source={{'uri': ratingImage}}/>
                <Text style={styles.lineText}>
                    {recipe.ratings}
                </Text>
                <Image style={styles.thumbnail} source={{'uri': cookingImage}}/>
                <Text style={styles.lineText}>
                    {recipe.skill_level}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    'line': {
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'
    },
    'lineText': {
        fontSize: 15,
        paddingLeft: 15,
        flex: 2
    },
    'thumbnail': {
        aspectRatio: 1,
        marginLeft: 15,
        flex: 2,
        borderRadius: 50
    }
});

export default RecipeListItem;