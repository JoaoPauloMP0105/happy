import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


interface HeaderProps {
    title: string;
    showCancel?: boolean; // propriedade para verificar se o botão X de voltar para a pagina não apareça
}

export default function Header ({ title, showCancel = true  }: HeaderProps){
    const navigation = useNavigation();
    // função para voltar para tela principal 
    function handleGoBackToAppHomepage() {
        navigation.navigate('OrphanagesMap');
    }

    return (
        <View style={styles.container}>
            {/* Usando o goBack para enviar o usuario para outra pagina */}
            <BorderlessButton onPress={navigation.goBack}> 
                <Feather name="arrow-left" size={24} color="#15b6d6" />

            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>
            {/* Metodo para verificar se o showCancel pode verificar */}
            { showCancel ? ( //se for true o botão aparece e ser false ele não ira aparecer
                <BorderlessButton onPress={handleGoBackToAppHomepage}>
                    <Feather name="x" size={24} color="#ff669d" />

                </BorderlessButton>
            ) : ( // colocando a view para ocupar o lado direito vazio
            <View /> )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1, 
        paddingTop: 44,

        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    title: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#8fa7b3',
        fontSize: 16,
    },
})