import React, { useEffect, useState } from 'react';
import { View, Button, Modal } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const SignInPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Initialize Google Sign-In
        GoogleSignin.configure({
            // Replace with your own client ID
            webClientId: 'YOUR_WEB_CLIENT_ID',
            offlineAccess: true,
        });
    }, []);

    const handleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('User Info:', userInfo);
            // Handle successful sign-in here
        } catch (error) {
            if (error === statusCodes.SIGN_IN_CANCELLED) {
                // User cancelled the sign-in process
                console.log('Sign-in cancelled');
            } else if (error === statusCodes.IN_PROGRESS) {
                // Another sign-in process is in progress
                console.log('Sign-in in progress');
            } else {
                // Error occurred during sign-in
                console.log('Sign-in error:', error);
            }
        }
    };

    return (
        <View>
            <Button title="Sign In" onPress={() => setShowPopup(true)} />
            <Modal visible={showPopup} animationType="slide" transparent>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 20 }}>
                        <Button title="Close" onPress={() => setShowPopup(false)} />
                        <Button title="Sign in with Google" onPress={handleSignIn} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default SignInPopup;