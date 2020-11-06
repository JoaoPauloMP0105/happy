import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout,  PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import mapMarker from  '../../images/map-marker.png';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

// criando uma interface para saber quais dados ira buscar na api
interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function OrphanagesMap (){
  // começando o estado da lista limpa e armazenar um array de objeto da lista  
    const [orphanages, setOrphanages ] = useState<Orphanage[]>([]);

    const navigation = useNavigation();
   //  console.log(orphanages);
    // useEffect para consumir dados da api do backend
    useFocusEffect(() => {
      api.get('orphanages').then(response => {
        // buscando as informações para mostra em tela
        setOrphanages(response.data);
      });
    });
    // passando por parametro qual id do orphanato para a função carregar o 
    // orfanato que ira ser carregado.
    function handleNavigationToOrphanagesDetails (id: number){
      // passando o parametro ao chamar a função com o parametro id do orfanato 
      navigation.navigate('OrphanagesDetails', { id });
    }
    function handleNavigationToOrphanageSelectPosition (){
      navigation.navigate('SelectPosition');
    }

    return (
        <View style={styles.container}>
      {/* View para renderizar o mapa na tela do celular */}
        <MapView 
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -23.4447862,
            longitude: -46.4712599,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
        >
          {orphanages.map(orphanage => {
            return (

              <Marker
                key={orphanage.id}
                icon={mapMarker}
                calloutAnchor={{ // posicionando o texto do marker ao lado dele apos receber coordenadas do eixo X e Y
                  x: 2.7,
                  y: 0.8,
                }}
                coordinate={{
                  latitude: orphanage.latitude,
                  longitude: orphanage.longitude,
                }}
              >
                {/* Função onPress para enviar para pagina de detalhes  e criando uma arofunction  */}
                {/* Passando a função como parametro para buscar o id do orphanage do momento as ser escolhido */}
                <Callout tooltip onPress={() => handleNavigationToOrphanagesDetails(orphanage.id)}>
                  <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{orphanage.name}</Text>

                  </View>
                </Callout>
              </Marker>
            );
          })}
        </MapView>

        <View style={styles.footer}>
          {/* Contando quantos orfanatos tem na pesquisa */}
        <Text style={styles.footerText}>{orphanages.length} Casas de acolhimento encontradas </Text>

          <RectButton style={styles.createOrphanageButton} onPress={handleNavigationToOrphanageSelectPosition}>
            <Feather name="plus" size={20} color="#FFF" />
          </RectButton>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  
    },
    calloutContainer:{
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      justifyContent: 'center',
      
    },
   
    calloutText: {
      fontFamily: 'Nunito_600SemiBold',
      color: '#0089a5',
      fontSize: 14,
    },
  
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 4,
    },
  
    footerText: {
      fontFamily: 'Nunito_700Bold',
      color: '#8fa7b3',
  
    },
  
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center',
    }
  
  
  }); 