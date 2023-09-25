// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Picker } from '@react-native-picker/picker';

// import RectangleSwitch from '../Components/RectangleSwitch';
// import styles from './VoixPage.style';
// import NavigationBar from '../Components/NavigationBar';
// import CircleReturnButton from '../Components/CircleReturnButton';

// const VoixPage: React.FC = () => {
//   const navigation = useNavigation();
//   const [avoidStairs, setAvoidStairs] = useState(false);
//   const [avoidEscalators, setAvoidEscalators] = useState(false);
//   const [avoidElevators, setAvoidElevators] = useState(false);
//   const [selectedValue, setSelectedValue] = useState('valeurParDefaut');

//   return (
//     <View style={styles.container}>
//       <View style={styles.return}>
//         <CircleReturnButton navigation={navigation} />
//       </View>
//       <Text style={styles.titre}>
//         Voix et sons
//       </Text>
//       <Text style={styles.text}>
//         Guidage vocal
//       </Text>
//       <RectangleSwitch title='Sons' value={avoidStairs} onValueChange={() => setAvoidStairs(!avoidStairs)} />
//       <View style={{...styles.ShadowTop}} >
//         <View style={{...styles.ShadowBottom}}>
//           <Text style={styles.title}>Volume</Text>
//         </View>
//       </View>
//       {/* <View style={styles.ShadowTop}>
//         <View style={styles.ShadowBottom}>
//           <Text style={styles.title}>Langue</Text>
//           <Picker selectedValue={selectedValue} style={styles.dropdown} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
//             <Picker.Item label="Français" value="Français" />
//             <Picker.Item label="Anglais" value="Anglais" />
//             <Picker.Item label="Hongrois" value="Hongrois" />
//           </Picker>
//         </View>
//       </View> */}

//       {/* Conteneur pour le Picker et le bouton */}
//       <View style={styles.pickerContainer}>
//         <View style={styles.ShadowTop}>
//           <View style={styles.ShadowBottom}>
//             <Text style={styles.title}>Volume</Text>
//           </View>
//         </View>
        
//         {/* Le Picker */}
//         <View style={styles.pickerWrapper}>
//           <Picker selectedValue={selectedValue} style={styles.dropdown} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
//             <Picker.Item label="Français" value="Français" />
//             <Picker.Item label="Anglais" value="Anglais" />
//             <Picker.Item label="Hongrois" value="Hongrois" />
//           </Picker>
//         </View>
//       </View>
//       <View style={styles.square}>
//         <NavigationBar navigation={navigation} />
//       </View>
//     </View>
//   );
// };

// export default VoixPage;

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

import RectangleSwitch from '../Components/RectangleSwitch';
import styles from './VoixPage.style';
import NavigationBar from '../Components/NavigationBar';
import CircleReturnButton from '../Components/CircleReturnButton';

const VoixPage: React.FC = () => {
  const navigation = useNavigation();
  const [avoidStairs, setAvoidStairs] = useState(false);
  const [avoidEscalators, setAvoidEscalators] = useState(false);
  const [avoidElevators, setAvoidElevators] = useState(false);
  const [selectedValue, setSelectedValue] = useState('valeurParDefaut');

  return (
    <View style={styles.container}>
      <View style={styles.return}>
        <CircleReturnButton navigation={navigation} />
      </View>
      <Text style={styles.titre}>
        Voix et sons
      </Text>
      <Text style={styles.text}>
        Guidage vocal
      </Text>
      <RectangleSwitch title='Sons' value={avoidStairs} onValueChange={() => setAvoidStairs(!avoidStairs)} />
      <View style={{...styles.ShadowTop}} >
        <View style={{...styles.ShadowBottom}}>
          <Text style={styles.title}>Volume</Text>
        </View>
      </View>
      

      <View style={{...styles.ShadowTop}} >
        <View style={{...styles.ShadowBottom}}>
          <View style={styles.pickerLeft}>
            <Text style={styles.title}>Langue</Text>
          </View>
        </View>

        <View style={styles.pickerRight}>
          <Picker selectedValue={selectedValue} style={styles.dropdown} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
            <Picker.Item label="Français" value="Français" />
            <Picker.Item label="Anglais" value="Anglais" />
            <Picker.Item label="Hongrois" value="Hongrois" />
          </Picker>
        </View>
      </View>


      {/* <View style={styles.pickerContainer}>
        <View style={styles.pickerLeft}>
          <Text style={styles.title}>Langue</Text>
        </View>
        
        <View style={styles.pickerRight}>
          <Picker selectedValue={selectedValue} style={styles.dropdown} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
            <Picker.Item label="Français" value="Français" />
            <Picker.Item label="Anglais" value="Anglais" />
            <Picker.Item label="Hongrois" value="Hongrois" />
          </Picker>
        </View>
      </View> */}
      <View style={styles.square}>
        <NavigationBar navigation={navigation} />
      </View>
    </View>
  );
};

export default VoixPage;