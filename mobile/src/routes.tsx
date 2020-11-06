import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen} = createStackNavigator();

import OrphanagesMap from './pages/orphanagemap/OrphanagesMap';
import OrphanagesDetails from './pages/orphanagedetail/OrphanagesDetails';
import OrphanageData from './pages/orphanagedata/OrphanageData';
import SelectPosition from './pages/selectposition/SelectPosition';
import Header from './components/Header';


export default function Routes(){
    return (
        <NavigationContainer>
            {/* headerShow: false para não mostrar o border butoon na página */}
            <Navigator screenOptions={{ headerShown: false }}> 
                <Screen 
                    name="OrphanagesMap" 
                    component={OrphanagesMap} 
                />

                <Screen 
                    name="OrphanagesDetails" 
                    component={OrphanagesDetails} 
                    options={{
                        // Neste headerShow será true para 
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Orfanato"/>
                    }} 
                />

                <Screen 
                    name="OrphanageData" 
                    component={OrphanageData} 
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe os dados."/>
                    }} 
                />

                <Screen 
                    name="SelectPosition" 
                    component={SelectPosition} 
                    options={{
                        headerShown: true,
                        header: () => <Header title="Selecione um ponto no mapa."/>
                    }} 
                />
            </Navigator>
        </NavigationContainer>
    );
}