import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './ProposPage.style';
import NavigationBar from '../Components/NavigationBar';
import CircleReturnButton from '../Components/CircleReturnButton';

const ProposPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.return}>
        <CircleReturnButton navigation={navigation} />
      </View>
      <Text style={styles.titre}>
        Notes et à propos
      </Text>
      <View style={styles.carre}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.text}>
            WanderAR est une entreprise innovante spécialisée dans le développement d'une application de navigation en intérieur révolutionnaire. Notre application permet aux utilisateurs de se connecter facilement via le Bluetooth de leur téléphone à des balises spécialement conçues et déployées dans des infrastructures diverses. Grâce à cette technologie de pointe, nous offrons une expérience de géolocalisation précise et fiable en intérieur, guidant les utilisateurs de manière intuitive du point A au point B.{'\n'}{'\n'}
            {'\n'}Notre Concept Unique{'\n'}{'\n'}
            WanderAR se distingue des autres applications de navigation en exploitant une technologie sophistiquée de balises. Ces balises, placées stratégiquement dans les espaces intérieurs, interagissent avec l'application de l'utilisateur pour déterminer avec précision leur position en temps réel. Cette approche novatrice permet aux utilisateurs de se repérer facilement, que ce soit dans des centres commerciaux, des aéroports, des musées, des campus universitaires ou d'autres grandes infrastructures intérieures.{'\n'}
            {'\n'}Les Avantages pour les Utilisateurs{'\n'}{'\n'}
            En utilisant l'application WanderAR, les utilisateurs peuvent profiter de nombreux avantages pratiques. Ils peuvent naviguer sans effort dans des lieux inconnus, trouver rapidement des magasins, des points d'intérêt, des salles de réunion ou des sorties d'urgence, le tout avec une précision de localisation inégalée. De plus, notre application permet une navigation fluide et sans stress, améliorant ainsi l'expérience globale des utilisateurs lorsqu'ils se déplacent en intérieur.
            {'\n'}Technologie de Pointe{'\n'}{'\n'}
            Au cœur de WanderAR se trouvent des technologies de pointe, combinant le potentiel du Bluetooth et des balises pour assurer une géolocalisation intérieure fiable. Notre équipe d'experts en développement et en géolocalisation travaille sans relâche pour améliorer continuellement notre application et fournir des mises à jour régulières afin de répondre aux besoins changeants de nos utilisateurs.{'\n'}
            {'\n'}Notre Vision{'\n'}{'\n'}
            Notre vision à long terme est de devenir le leader mondial incontesté de la géolocalisation en intérieur. Nous aspirons à étendre notre portée géographique à travers le monde, en mettant en place notre infrastructure dans diverses infrastructures intérieures pour faciliter la vie des individus et des entreprises. En outre, nous cherchons continuellement à explorer de nouvelles possibilités d'application pour notre technologie au-delà de la navigation en intérieur.
          </Text>
        </ScrollView>
      </View>
      <View style={styles.square}>
        <NavigationBar navigation={navigation} />
      </View>
    </View>
  );
};

export default ProposPage;