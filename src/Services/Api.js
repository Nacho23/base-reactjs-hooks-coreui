import apisauce from 'apisauce';
import history from '../Services/history';

const REDIRECT_CODES = [7, 8];
const REDIRECT_STATUSES = [429];

const create = (baseURL) => { // home
    const api = apisauce.create({
        baseURL,
        headers: {
            Accept: 'application/json',
        }
    });
    api.addAsyncRequestTransform(request => async () => {
        const accessToken = JSON.parse(localStorage.getItem('access_token'));
        if (accessToken) {
            request.headers['x-access-token'] = accessToken;
        }
    });

    api.addMonitor(response => {
        if (!response.ok) {
            for (let i in REDIRECT_STATUSES) {
                if (response.status === REDIRECT_STATUSES[i]) {
                    localStorage.clear();
                    history.push('/login');
                    break;
                }
                if (response.status === 403) {
                    for (let j in REDIRECT_CODES) {
                        if (response.data.code === REDIRECT_CODES[j]) {
                            localStorage.clear();
                            history.push('/login');
                            break;
                        }
                    }
                }
            }
        }
    });

    if (true) {
        api.addMonitor();
    }

    // TODO - Add error parser to transform into an specific error api
    /** Conection Login API */
    const login = (email, password) => {
        return api.post('/access-token', { email, password });
    };
    const logout = (token) => {
        return api.delete(`/access-token/${token}`);
    };
    const check = (token) => {
        return api.get(`/access-token/${token}`);
    };

    /** Calls other concept settlement */
    const postCharacterCollection = (data) => {
        return api.post(`/people`, data);
    }
    const getCharactersCollection = (query) => {
        return api.get(`/people`, query);
    }
    const getCharacterResource = (character_id, query) => {
        return api.get(`/people/${character_id}`, query);
    }
    const patchCharacterResource = (character_id, data) => {
        return api.patch(`/people/${character_id}`, data);
    }
    const deleteCharacterResource = (character_id) => {
        return api.delete(`/people/${character_id}`);
    }

    return {
        // Auth endpoint calls
        login,
        logout,
        check,
        // Additional concept calls
        postCharacterCollection,
        getCharacterResource,
        getCharactersCollection,
        patchCharacterResource,
        deleteCharacterResource,
    };
};

export default {
    create
}
