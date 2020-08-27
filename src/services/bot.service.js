const axios = require('axios').default;


export class BotService {
    // bitcoin =363  ethereum = 364 dai = 3131

    sendMessage = async (message) => {
        const instance = axios.create();

        return await instance.post('http://35.174.150.61:5000/chat',{reply:message});

    }

}