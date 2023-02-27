import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 85,
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#F1DBBF',
    borderBottomRightRadius: 45,
    borderTopRightRadius: 45,
    flex: 1,
  },
  imageContainer: {marginLeft: 10},
  categoryTextContainer: {margin: 5, flex: 1,},
  categoryImage: {height: 90, width: 90, resizeMode: 'contain'},
  categoryText: {
    flex: 1,
    fontSize: 20,
    color: '#AA5656',
    textAlign: 'left',
    textAlignVertical: 'center',
    paddingLeft: 50
  },
});

export {styles};
