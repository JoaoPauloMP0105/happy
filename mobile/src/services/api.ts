import axios from 'axios';

const api = axios.create({
    // ATENÇAO ao rodar em desenvolvimento sempre verificar o ip da máquina sem a porta
    //por que ao entrar ou conectar em outra rede pode ser alterado.
    // com o emulador do android usar comando adb reverse tcp:3333 tcp:3333,
    // que ai poderá usar http://localhost:3333
    // Agora se for usar o emulador do IOS só colocar http://localhost:3333 ja será o suficiente
    baseURL: 'http://192.168.0.15:3333',
});

export default api;