import React from 'react';
import ApiResponseError from '../Services/ApiResponseError';
import API from '../Services/Api';

const api = API.create(process.env.REACT_APP_API_URL);

const useCharacter = {
    useFetchCharacters: async (action) => {
        try {
            const response = await api.getCharactersCollection({})

            if (!response.ok) {
                throw new ApiResponseError(response);
            }
            return {
                response: response.data.results,
                loggedIn: true,
            };
        } catch (e) {
            return {
                response: e,
                loggedIn: false,
            };
        }
    },
    useCreateCharacter: (data) => {
        console.log('DATA', data);
        let params = {params: 'character'};
        return { params };
        //Codigo para crear charactero y retornar el/los state que correspondan
    },
    useFetchCharacter: async (action) => {
        try {
            const response = await api.getCharacterResource(action.characterId)

            console.log('RESPONSE', response.data);

            if (!response.ok) {
                throw new ApiResponseError(response);
            }
            return {
                response: response.data,
                loggedIn: true,
            };
        } catch (e) {
            return {
                response: e,
                loggedIn: false,
            };
        }
    },
    useUpdateCharacter: async (action) => {
        try {
            const response = await api.patchCharacterResource(action.characterUuid, action.data)

            if (!response.ok) {
                throw new ApiResponseError(response);
            }
            console.log('RESPONSE', response.data.results);
            return {
                response: response.data.results,
                loggedIn: true,
            };
        } catch (e) {
            return {
                response: e,
                loggedIn: false,
            };
        }
    },
    useDeleteCharacter: (characterUuid) => {
        //Codigo para eliminar charactero y retornar el/los state que correspondan
    }
}

export default useCharacter;
