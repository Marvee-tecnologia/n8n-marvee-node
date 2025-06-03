"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarveeApi = void 0;
class MarveeApi {
    constructor() {
        this.name = 'marveeApi';
        this.displayName = 'Marvee API';
        this.documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: { password: true },
                default: '',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                qs: {
                    api_key: '={{$credentials.apiKey}}',
                },
            },
        };
    }
}
exports.MarveeApi = MarveeApi;
//# sourceMappingURL=MarveeApi.credentials.js.map