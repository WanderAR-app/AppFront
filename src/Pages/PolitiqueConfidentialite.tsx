import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './PolitiqueConfidentialite.style';
import NavigationBar from '../Components/NavigationBar';

const PolitiqueConfidentialite = () => {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Text style={styles.titre}>
          Politique de confidentialité
        </Text>
        <View style={styles.carre}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.text}>
              Chez WanderAR, nous accordons une grande importance à la protection de la vie privée de nos utilisateurs et nous nous engageons à protéger les informations personnelles qu'ils nous confient. Cette politique décrit les types d'informations que nous collectons, comment nous les utilisons et les mesures de sécurité que nous mettons en place pour les protéger.{'\n'}{'\n'}
              {'\n'}Collecte et utilisation des informations{'\n'}{'\n'}
              Nous collectons des informations personnelles lorsque nos utilisateurs créent un compte, notamment leur nom et leur adresse email. Nous collectons également des données de localisation lorsque l'application est utilisée pour fournir des expériences de réalité augmentée. Ces informations sont utilisées pour personnaliser l'expérience de l'utilisateur et pour améliorer les fonctionnalités de l'application. Nous ne partageons ni ne vendons aucune information personnelle à des tiers.{'\n'}
              {'\n'}Mesures de sécurité{'\n'}{'\n'}
              Nous prenons les mesures de sécurité appropriées pour protéger contre l'accès non autorisé, la modification, la divulgation ou la destruction des informations personnelles. Nous utilisons le chiffrement pour protéger les informations sensibles transmises en ligne et stockons toutes les informations personnelles sur des serveurs sécurisés.
              {'\n'}Modifications de cette politique{'\n'}{'\n'}
              Nous pouvons mettre à jour cette politique de temps à autre pour refléter les changements dans nos pratiques ou les lois en vigueur. Nous informerons les utilisateurs de tout changement par le biais de l'application ou par email.{'\n'}
              {'\n'}Contactez-nous{'\n'}{'\n'}
              Si vous avez des questions ou des préoccupations concernant cette politique ou la manière dont nous traitons vos informations personnelles, veuillez nous contacter à l'adresse support@wanderar.com.
            </Text>
          </ScrollView>
        </View>
        <View style={styles.square}>
          <NavigationBar navigation={navigation} />
        </View>
      </View>
  );
};

export default PolitiqueConfidentialite;