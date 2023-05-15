import React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import Button from './Button';

const RegisterPage = () => {

  const navigation = useNavigation();

  type fetchData = {
    Email: string;
    Password: string;
    Confirm: string;
  }

  const tryRegister = async (data: fetchData) => {
    console.log('tryRegister');
    try {
      const response = await fetch('http://localhost:3000/api/auth/Register', {
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

  const tryRegisterGoogle = () => {
    console.log('tryRegisterGoogle');
  }

  let data: FormData = new FormData();

  return (
      <View style={styles.container}>
          <View>
            <Text style={styles.title}>Welcome in</Text>
            <Image style={styles.logo} source={require('../assets/WanderAR.png')} />
          </View>
          <View>
            <Formik initialValues={{ email: '', password: '' }}
              onSubmit={values => tryRegister(data = values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  <Text style={styles.text}>Email</Text>
                  <TextInput style={styles.input} placeholder='email@exemple.com' onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email}/>
                  <Text style={styles.text}>Password</Text>
                  <TextInput style={styles.input} placeholder='Password' onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password}/>
                  <Text style={styles.text}>Confirm password</Text>
                  <TextInput style={styles.input} placeholder='Password' onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password}/>
                  <Button title='SIGN UP' onPress={handleSubmit} />
                </View>
              )}
            </Formik>
          </View>
          <View>
            <Button title='SIGN IN' onPress={() => navigation.navigate('Login')} />
          </View>
          <View style={styles.center}>
            <View style={styles.test}>
              <Button styleButton={styles.buttonSquare} styleText={styles.buttonSquareText} title='G' onPress={tryRegisterGoogle} />
            </View>
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
    flex: 1,
    margin: 10,
    borderRadius: 24,
    backgroundColor: "#ECF0F3",
    shadowColor: "#D1D9E6",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  buttonNo: {
    flex: 1,
    borderRadius: 24,
    backgroundColor: "#ECF0F3",
    shadowColor: "#D1D9E6",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  buttonYesText: {
    flex: 1,
  },
  buttonNoText: {
    flex: 1,
  },
  buttonSquare: {
    flex: 1,
    height: 50,
    width: 50,
    borderRadius: 16,
    backgroundColor: "#ECF0F3",
    shadowColor: "#D1D9E6",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  test: {
    flex: 1,
    height: "100%",
    width: "100%",
    borderRadius: 16,
    shadowColor: "#FFF",
    shadowOffset: { width: -4, height: -4 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  buttonSquareText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
  },
});

export default RegisterPage;