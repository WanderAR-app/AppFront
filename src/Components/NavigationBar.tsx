import React from 'react';
import { View } from 'react-native';

import Button from './Button';
import styles from './NavigationBar.style';

const NavigationBar = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.spaceButton}>
        <Button icon={require('../../assets/scan.svg')} label="Scan QR" onPress={() => console.log('Scan button')} />
      </View>
      <View style={styles.spaceButton}>
        <Button icon={require('../../assets/home-actif.svg')} label="Home" onPress={() => navigation.navigate('Home')} />
      </View>
      <View style={styles.spaceButton}>
        <Button icon={require('../../assets/parametre.svg')} label="Setting" onPress={() => navigation.navigate('Setting')} />
      </View>
    </View>
  );
};

export default NavigationBar;

// import React, { useState } from 'react';
// import { View } from 'react-native';

// import Button from './Button';
// import styles from './NavigationBar.style';

// const NavigationBar = ({ navigation }: { navigation: any }) => {
//   // État local pour suivre le bouton actuellement actif
//   const [activeButton, setActiveButton] = useState('Home'); // Par défaut, le bouton "Home" est actif

//   // Fonction pour mettre à jour l'état actif et la navigation
//   const handleButtonPress = (buttonName: string) => {
//     setActiveButton(buttonName);
//     navigation.navigate(buttonName);
//   };

//   return (
//     <View style={styles.buttonContainer}>
//       <View style={styles.spaceButton}>
//         <Button
//           icon={require('../../assets/scan.svg')}
//           label="Scan QR"
//           onPress={() => handleButtonPress('Scan')}
//         />
//       </View>
//       <View style={styles.spaceButton}>
//         <Button
//           icon={require(activeButton === 'Home' ? '../../assets/home-actif.svg' : '../../assets/home.svg')}
//           label="Home"
//           onPress={() => handleButtonPress('Home')}
//         />
//       </View>
//       <View style={styles.spaceButton}>
//         <Button
//           icon={require(activeButton === 'Setting' ? '../../assets/parametre-actif.svg' : '../../assets/parametre.svg')}
//           label="Setting"
//           onPress={() => handleButtonPress('Setting')}
//         />
//       </View>
//     </View>
//   );
// };

// export default NavigationBar;

// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { View } from 'react-native';

// import Button from './Button';
// import styles from './NavigationBar.style';

// const Tab = createBottomTabNavigator();

// const NavigationBar = () => {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         showLabel: false, // Pour masquer les étiquettes de texte
//         style: styles.buttonContainer, // Style pour le conteneur des boutons
//       }}
//     >
//       <Tab.Screen
//         name="Scan"
//         component={ScanScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={styles.spaceButton}>
//               <Button
//                 icon={focused ? require('../../assets/scan.svg') : require('../../assets/scan.svg')}
//                 label="Scan QR"
//                 onPress={() => console.log('Scan button')}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={styles.spaceButton}>
//               <Button
//                 icon={focused ? require('../../assets/home-actif.svg') : require('../../assets/home.svg')}
//                 label="Home"
//                 onPress={() => console.log('Home button')}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Setting"
//         component={SettingScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={styles.spaceButton}>
//               <Button
//                 icon={focused ? require('../../assets/parametre-actif.svg') : require('../../assets/parametre.svg')}
//                 label="Setting"
//                 onPress={() => console.log('Setting button')}
//               />
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default NavigationBar;