import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {

  const navigation = useNavigation();

  return (
      <View style={styles.container}>
          <View>
            <Text style={styles.place}>Welcome in</Text>
            <Text style={styles.place}>Un joli dessin</Text>
          </View>
          <View>
            <Text style={styles.place}>Email</Text>
            <TextInput placeholder='email@exemple.com' />
            <Text style={styles.place}>Password</Text>
            <TextInput placeholder='Password' />
          </View>
          <View>
            <Button title='SIGN IN' onPress={() => navigation.navigate('Home')} />
            <Button title='SIGN UP' onPress={() => navigation.navigate('Register')} />
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  place: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 50,
  }
});

export default LoginPage;