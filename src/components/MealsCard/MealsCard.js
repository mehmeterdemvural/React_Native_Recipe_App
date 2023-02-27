import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';

import {styles} from './MealsCard.styles';

function MealsCard({meal, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.mealContainer}>
        <ImageBackground
          style={styles.mealImageBackground}
          source={{uri: meal.strMealThumb}}
          resizeMode={'cover'}>
          <Text style={styles.mealText}>
            {meal.strMeal.length > 15
              ? meal.strMeal.substring(0, 15) + ' ...'
              : meal.strMeal}
          </Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MealsCard;
