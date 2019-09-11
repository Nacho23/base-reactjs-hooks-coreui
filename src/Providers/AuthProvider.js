import React from 'react';
import ApiResponseError from '../Services/ApiResponseError';
import API from '../Services/Api';

const api = API.create(process.env.REACT_APP_API_URL);

const useAuth = {
    login: async (action) => {
        try {
            const response = await api.login(action.email, action.password)

            if (!response.ok) {
                throw new ApiResponseError(response);
            }

            return {
                response: response,
                loggedIn: true,
            };
        } catch (e) {
            return {
                response: e,
                loggedIn: false,
            };
        }
    },
    logout: (data) => {
        /*console.log('DATA', data);
        let params = {params: 'event'};
        return { params };*/
        //Codigo para crear evento y retornar el/los state que correspondan
    },
    check: (eventUuid) => {
        //Codigo para obtener evento y retornar el/los state que correspondan
    },
}

export default useAuth;
