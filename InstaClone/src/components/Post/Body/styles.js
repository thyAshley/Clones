import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').width,
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
  },
});

export default styles;
