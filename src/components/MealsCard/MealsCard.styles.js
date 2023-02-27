import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  mealContainer: {flex: 1, margin: 5, borderRadius: 10},
  mealImageBackground: {
    flex: 1,
    height: Dimensions.get('window').height / 5,
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  mealText: {
    textAlign: 'justify',
    fontSize: 20,
    color: '#AA5656',
    backgroundColor: '#B7B78A',
    opacity: 0.8,
  },
});

export {styles};
