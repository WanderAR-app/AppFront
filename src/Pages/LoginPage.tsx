import React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
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
      <View style={styles.container}>
          <View>
            <Text style={styles.title}>Welcome in</Text>
            <Image style={styles.logo} source={require('../../assets/WanderAR.png')} />
          </View>
          <View>
            <Formik initialValues={{ email: '', password: '' }}
              onSubmit={values => tryConnect(data = values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  <Text style={styles.text}>Email</Text>
                  <TextInput style={styles.input} placeholder='email@exemple.com' onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email}/>
                  <Text style={styles.text}>Password</Text>
                  <TextInput style={styles.input} placeholder='Password' onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password}/>
                  <Button title='SIGN IN' titleStyle={styles.buttonYesText} containerStyle={styles.buttonYes} onPress={handleSubmit} />
                </View>
              )}
            </Formik>
          </View>
          <View>
            <Button title="SIGN UP" titleStyle={styles.buttonNoText} containerStyle={styles.buttonNo} onPress={() => navigation.navigate('Register')} />
          </View>
          <View style={styles.center}>
            <Button icon={require('../../assets/google.png')} iconStyle={styles.buttonSquare} label="" onPress={() => navigation.navigate('Home')} />
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: "37%",
    flex: 1,
  },
  center: {
    alignSelf: 'center',
    verticalAlign: 'center',
    height: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Century Gothic',
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
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 17,
    color: "#393b4099",
    marginTop: "5%",
  },
  input: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 24,
    backgroundColor: "#ECF0F3",
    shadowColor: "#D1D9E6",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 5,
    marginBottom: "5%",
  },
  buttonYes: {
    borderRadius: styleReference.BorderRadius16,
    marginHorizontal: styleReference.Margin64,
    marginVertical: styleReference.Margin12,
    backgroundColor: styleReference.ColorBackground,
    backgroundImage: 'linear-gradient(112.95deg, rgba(23, 88, 241, 1) 10%, rgba(54, 216, 224, 1) 70%)',
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
    width: 30,
    height: 30,
    resizeMode: 'contain',
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
});

export default LoginPage;