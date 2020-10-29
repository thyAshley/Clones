import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  imageBorder: {
    borderRadius: 45,
    borderTopColor: 'tomato',
    borderRightColor: 'tomato',
    borderBottomColor: 'darkorange',
    borderLeftColor: 'darkorange',
    borderWidth: 2,
    height: 90,
    width: 90,
    padding: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    borderRadius: 40,
    height: 80,
    width: 80,
  },
});

export default styles;
