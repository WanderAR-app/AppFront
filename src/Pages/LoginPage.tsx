import React from 'react';
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
      }
    } catch (error) {
      console.log(error);
    }
  }

  const tryConnectGoogle = () => {
    console.log('tryConnectGoogle');
  }

  let data: FormData = new FormData();

  return (
    <View style={styles.bgV1}>
      <ImageBackground source={require('../../assets/bg1.png')} style={styles.bg1}>
        <View style={styles.bgV2}>
          <ImageBackground source={require('../../assets/bg2.png')} style={styles.bg2}>
            <View style={styles.bgV3}>
              <ImageBackground source={require('../../assets/bg3.png')} style={styles.bg3}>
                <View style={styles.container}>
                  <View>
                    <Text style={styles.title}>Welcome in</Text>
                    <Image style={styles.logo} source={require('../../assets/WanderAR.png')} />
                  </View>
                  <Text style={styles.error}>Invalid email or password</Text>
                  <View>
                    <Formik initialValues={{ email: '', password: '' }}
                      onSubmit={values => tryConnect(data = values)}
                    >
                      {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
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
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: styleReference.FontSize12,
    color: styleReference.ColorRed,
    fontFamily: styleReference.FontFamily,
  },
  container: {
    alignSelf: 'center',
    marginTop: "37%",
    flex: 1,
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
    height: "94%",
    width: "100%",
    resizeMode: 'cover',
    paddingTop: 50,
  },
  bg2: {
    top: -10,
    height: "98%",
    width: "100%",
    resizeMode: 'cover',
  },
  bg1: {
    height: "100%",
    width: "100%",
    resizeMode: 'cover',
  },
  bgV3: {
    flex: 1,
    height: "100%",
  },
  bgV2: {
    flex: 1,
    height: "10%",
  },
  bgV1: {
    flex: 1,
    height: "100%",
  },
});

export default LoginPage;