import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import Button from '../Components/Button';
import styleReference from '../Components/Style';

const LoginPage = () => {

  const navigation = useNavigation();

  type fetchData = {
    Email: string;
    Password: string;
  }

  const tryConnect = async (data: fetchData) => {
    console.log('tryConnect');
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        navigation.navigate('Home');
      } else {
        errorMessage = "Invalid email or password !";
      }
    } catch (error) {
      console.log(error);
      errorMessage = "Error: cannot contact server";
    }
  }

  const tryConnectGoogle = () => {
    console.log('tryConnectGoogle');
  }

  let errorMessage: string;

  const error = () => {
    return (
      <Text style={styles.error} id="Error">{errorMessage}</Text>
    )
  }

  let data: FormData = new FormData();

  return (
      <ImageBackground source={require('../../assets/Vector 9.svg')} style={styles.bg1}>
          <ImageBackground source={require('../../assets/Vector 8.svg')} style={styles.bg2}>
              <ImageBackground source={require('../../assets/Vector 7.svg')} style={styles.bg3}>
                <View style={styles.container}>
                  <View>
                    <Text style={styles.title}>Welcome in</Text>
                    <Image style={styles.logo} source={require('../../assets/WanderAR.svg')} />
                  </View>
                  <View>
                    <Formik initialValues={{ email: '', password: '' }}
                      onSubmit={values => tryConnect(data = values)}
                    >
                      {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                          {error()}
                          <Text style={styles.text}>Email</Text>
                            <View style={styles.ShadowTop}>
                              <View style={styles.ShadowBottom}>
                                <TextInput style={styles.input} placeholder='email@exemple.com' onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} />
                              </View>
                            </View>
                          <Text style={styles.text}>Password</Text>
                          <View style={styles.ShadowTop}>
                            <View style={styles.ShadowBottom}>
                              <TextInput style={styles.input} placeholder='Password' onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password} />
                            </View>
                          </View>
                          <View style={styles.space}/>
                          <Button title='SIGN IN' titleStyle={styles.buttonYesText} containerStyle={styles.buttonYes} onPress={handleSubmit} />
                        </View>
                      )}
                    </Formik>
                  </View>
                  <View>
                    <Button title="SIGN UP" titleStyle={styles.buttonNoText} containerStyle={styles.buttonNo} onPress={() => navigation.navigate('Register')} />
                  </View>
                  <View style={styles.center}>
                    <Button icon={require('../../assets/google.png')} containerStyle={styles.square} iconStyle={styles.buttonSquare} label="" onPress={() => navigation.navigate('Home')} />
                  </View>
                </View>
              </ImageBackground>
          </ImageBackground>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: styleReference.FontSize12,
    color: styleReference.ColorRed,
    fontFamily: styleReference.FontFamily,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    alignSelf: 'center',
    height: 50,
  },
  title: {
    fontSize: styleReference.FontSize20,
    fontWeight: 'bold',
    fontFamily: styleReference.FontFamily,
    color: '#000',
    textAlign: 'center',
  },
  logo: {
    flex: 1,
    width: "120%",
    height: "120%",
    paddingVertical: "20%",
    marginBottom: "5%"
  },
  text: {
    flex: 1,
    fontSize: styleReference.FontSize14,
    color: styleReference.ColorGrey,
    fontFamily: styleReference.FontFamily,
    fontWeight: 'bold',
    marginTop: "5%",
  },
  input: {
    flex: 1,
    width: "100%",
    height: "100%",
    fontSize: styleReference.FontSize14,
    color: styleReference.ColorGrey,
    fontFamily: styleReference.FontFamily,
    fontStyle: 'italic',
  },
  buttonYes: {
    borderRadius: styleReference.BorderRadius16,
    marginHorizontal: styleReference.Margin64,
    marginVertical: styleReference.Margin12,
    backgroundColor: styleReference.ColorBackground,
    backgroundImage: 'linear-gradient(112.95deg, rgba(23, 88, 241, 1), rgba(54, 216, 224, 1))',
  },
  buttonNo: {
    borderRadius: styleReference.BorderRadius16,
    marginHorizontal: styleReference.Margin64,
    marginVertical: styleReference.Margin12,
  },
  buttonYesText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Century Gothic',
    color: styleReference.ColorBackground,
    textAlign: 'center',
  },
  buttonNoText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Century Gothic',
    color: styleReference.ColorGrey,
    textAlign: 'center',
  },
  buttonSquare: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  square: {
    borderRadius: styleReference.BorderRadius16,
    margin: styleReference.Margin8,
  },
  test: {
    flex: 1,
    height: "100%",
    width: "100%",
    borderRadius: 16,
  },
  buttonSquareText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
  },
  space: {
    height: 30,
  },
  ShadowTop: {
    shadowColor: styleReference.ColorShadow,
    shadowOffset: styleReference.ShadowDarkOffset,
    shadowRadius: styleReference.ShadowBlur,
    shadowOpacity: 1,
    marginVertical: styleReference.Margin8,
    borderRadius: styleReference.BorderRadius16,
  },
  ShadowBottom: {
    shadowColor: styleReference.ColorWhite,
    shadowOffset: styleReference.ShadowLightOffset,
    shadowRadius: styleReference.ShadowBlur,
    shadowOpacity: 1,
    padding: styleReference.Padding8,
    borderRadius: styleReference.BorderRadius16,
  },
  bg3: {
    resizeMode: 'cover',
    height: '100%',
  },
  bg2: {
    resizeMode: 'cover',
    height: '100%',
  },
  bg1: {
    resizeMode: 'cover',
    height: '100%',
  },
});

export default LoginPage;