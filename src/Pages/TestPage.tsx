import { View, Text } from 'react-native';
import GlassMorphismeBox from '../NewComponents/GlassMorphismeBox';

const TestPage = () => {
    return (
        <View>
            <Text>TestPage</Text>
            <View style={{height: 50, weight: 50, backgroundColor: 'red'}} >
                <GlassMorphismeBox style={{height: 50, weight: 50}}>
                    <Text>TestPage</Text>
                </GlassMorphismeBox>
            </View>
        </View>
    );
}

export default TestPage;