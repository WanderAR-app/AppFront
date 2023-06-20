import { StyleSheet } from 'react-native';
import styleReference from '../Components/Style';

const styles = StyleSheet.create({
    bg3: {
        resizeMode: 'cover',
        height: '100%',
    },
    bg2: {
        resizeMode: 'cover',
        height: '100%',
    },
    bg1: {
        resizeMode: 'cover',
        height: '100%',
        backgroundColor: styleReference.ColorBackground,
    },
    containerMain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTop: {
        width: "50%"
    },
    title: {
        fontSize: styleReference.FontSize20,
        fontWeight: 'bold',
        fontFamily: styleReference.FontFamily,
        color: styleReference.ColorBlack,
        textAlign: 'center',
    },
    logo: {
        flex: 1,
        width: "100%",
        height: "100%",
        paddingVertical: "20%",
    },
    error: {
        fontSize: styleReference.FontSize12,
        color: styleReference.ColorRed,
        fontFamily: styleReference.FontFamily,
    },
    text: {
        flex: 1,
        fontSize: styleReference.FontSize14,
        color: styleReference.ColorGrey,
        fontFamily: styleReference.FontFamily,
        fontWeight: 'bold',
        marginTop: "5%",
    },
    input: {
        flex: 1,
        width: "100%",
        height: "100%",
        fontSize: styleReference.FontSize14,
        color: styleReference.ColorGrey,
        fontFamily: styleReference.FontFamily,
        fontStyle: 'italic',
    },
    ShadowTop: {
        shadowColor: styleReference.ColorShadow,
        shadowOffset: styleReference.ShadowDarkOffset,
        shadowRadius: styleReference.ShadowBlur,
        shadowOpacity: 1,
        marginVertical: styleReference.Margin8,
        borderRadius: styleReference.BorderRadius16,
    },
    ShadowBottom: {
        shadowColor: styleReference.ColorWhite,
        shadowOffset: styleReference.ShadowLightOffset,
        shadowRadius: styleReference.ShadowBlur,
        shadowOpacity: 1,
        padding: styleReference.Padding8,
        borderRadius: styleReference.BorderRadius16,
    },
    space: {
        paddingTop: 30,
    },
    buttonYes: {
        borderRadius: styleReference.BorderRadius16,
        marginHorizontal: styleReference.Margin64,
        marginVertical: styleReference.Margin12,
        backgroundColor: styleReference.ColorBackground,
        backgroundImage: 'linear-gradient(112.95deg, rgba(23, 88, 241, 1), rgba(54, 216, 224, 1))',
    },
    buttonNo: {
        borderRadius: styleReference.BorderRadius16,
        marginHorizontal: styleReference.Margin64,
        marginVertical: styleReference.Margin12,
    },
    buttonYesText: {
        fontSize: styleReference.FontSize20,
        fontFamily: styleReference.FontFamily,
        color: styleReference.ColorBackground,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonNoText: {
        fontSize: styleReference.FontSize20,
        fontFamily: styleReference.FontFamily,
        color: styleReference.ColorGrey,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    center: {
        height: 50,
    },
    buttonSquare: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
    square: {
        borderRadius: styleReference.BorderRadius16,
        margin: styleReference.Margin8,
    },
});

export default styles;