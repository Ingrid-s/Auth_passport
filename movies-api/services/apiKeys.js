const MOngoLib = require('../lib/mongo');

class ApiKeysService {
    constructor(){
        this.collection = 'api-keys';
        this.mongoDB = new MOngoLib();
    }

    async getApiKey({ token }) {
        const [ apiKey ] = await this.mongoDB.getAll(this.collection, { token });
        return apiKey
    }
}

module.exports = ApiKeysService;