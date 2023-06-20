import { StyleSheet, Dimensions } from 'react-native';

import styleReference from '../Components/Style';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    marginTop: -600,
    width: 300,
    height: 100,
  },
  square: {
    backgroundImage: 'linear-gradient(112.95deg, rgba(255, 255, 255, 0.7) 10%, rgba(255, 255, 255, 0.1) 70%)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    width: windowWidth * 0.9,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titre: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: styleReference.FontFamily,
    fontWeight: '700',
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '400',
    marginTop: '2%',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'column',
    width: '80%',
    alignSelf: 'center',
    marginTop: 10,
  },
  acceptButton: {
    borderRadius: 16,
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 5,
    marginTop: 15,
    backgroundColor: 'rgba(125, 169, 241, 0.9)',
    shadowColor: '#D1D9E6',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
  acceptTexte: {
    color: '#ecf0f3',
    fontSize: 20,
    fontStyle: 'italic',
  },
  refuseButton: {
    borderRadius: 16,
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 5,
    marginTop: 15,
    backgroundColor: "#ECF0F3",
    shadowColor: '#D1D9E6',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
  refuseTexte: {
    color: '#638ef1',
    fontSize: 20,
    fontStyle: 'italic',
  },
});

export default styles;