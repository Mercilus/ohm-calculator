
/**
 * Specifies the web server that is hosting the application. Possible values are the following:
 * 
 * LOCAL - Routes all calls through the IIS endpoint.
 * AZURE - Routes all calls through the Azure endpoint.
 * 
 * Note: This setting only takes effect when running locally. When deployed to the server, the
 *       Azure endpoint will always be used.
 */
const WEB_SERVER = 'AZURE';

/**
 * API endpoints used by the application.
 * 
 * Note: If you want to run locally against an endpoint you define, update <LOCAL_API_ENDPOINT> with
 *       your the desired endpoint and set WEB_SERVER to 'LOCAL'.
 */
const AZURE_API_ENDPOINT = 'https://ohmcalculatorapi.azurewebsites.net/api';
const LOCAL_API_ENDPOINT = 'http://localhost:15794/api/';

export const configuration = {

    api_endpoint: window.location.hostname !== 'localhost' ? AZURE_API_ENDPOINT : WEB_SERVER === 'AZURE' ? AZURE_API_ENDPOINT : LOCAL_API_ENDPOINT
}