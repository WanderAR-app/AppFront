import { StyleSheet, Dimensions } from 'react-native';

import styleReference from '../Components/Style';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 462,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  square: {
    position: 'absolute',
    bottom: -10,
    left: 0,
    right: 0,
    backgroundColor: '#ECF0F3',
    borderTopRightRadius: 50,
    overflow: 'hidden',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    top: 10,
  },
  scrollContainer: {
    flexDirection: 'column',
    marginHorizontal: 5,
    marginVertical: 2,
  },
  scroll: {
    height: 165,
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  titre: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: styleReference.FontFamily,
  },
  icon: {
    marginLeft: 5,
  },
});

export default styles;