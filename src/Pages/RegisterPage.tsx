import { View, Text, TextInput, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import Button from '../Components/Button';
import styles from './LoginPage.style';

const LoginPage = () => {

  const navigation = useNavigation();

  type fetchData = {
    Email: string;
    Password: string;
  }

  let data: FormData = new FormData();

  let errorMessage: string;

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

  const error = () => {
    return (
      <Text style={styles.error} id="Error">{errorMessage}</Text>
    )
  }

  return (
    <ImageBackground source={require('../../assets/Vector 9.svg')} style={styles.bg1}>
      <ImageBackground source={require('../../assets/Vector 8.svg')} style={styles.bg2}>
        <ImageBackground source={require('../../assets/Vector 7.svg')} style={styles.bg3}>
          <View style={{...styles.containerMain, top: 20}}>
            <View style={styles.containerTop}>
              <Text style={styles.title}>Welcome in</Text>
              <Image style={styles.logo} source={require('../../assets/WanderAR.svg')} />
            </View>
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
                  <Text style={styles.text}>Confirm password</Text>
                  <View style={styles.ShadowTop}>
                    <View style={styles.ShadowBottom}>
                      <TextInput style={styles.input} placeholder='Password' onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password} />
                    </View>
                  </View>
                  <View style={styles.space} />
                  <Button title='SIGN UP' titleStyle={styles.buttonYesText} containerStyle={styles.buttonYes} onPress={handleSubmit} />
                </View>
              )}
            </Formik>
            <View>
              <Button title="SIGN IN" titleStyle={styles.buttonNoText} containerStyle={styles.buttonNo} onPress={() => navigation.navigate('Login')} />
            </View>
            <View style={styles.center}>
              <Button icon={require('../../assets/google.png')} containerStyle={styles.square} iconStyle={styles.buttonSquare} label="" onPress={() => navigation.navigate('Cgu')} />
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </ImageBackground>
  );
};

export default LoginPage;