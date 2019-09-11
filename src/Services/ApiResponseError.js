export default class ApiResponseError extends Error{
    constructor(response){
        super();
        this.response = response;
        this.message = this.getMessage(response);
        //this.stack = (new Error(this.message)).stack;
        this.name = this.constructor.name;
    }
    getMessage = (response) => {
        let message = 'Error desconocido';
        switch(response.status){
            case 400:
                switch(response.data.code){
                    case 4: message = 'Error, uno o más parámetros son inválidos.'; break;
                }
            break;
            case 401:
                switch(response.data.code){
                    case 5: message = 'Error de Autenticación'; break;
                }
            break;
            case 403:
                switch(response.data.code){
                    case 6: message = 'Error, no tiene autorización.'; break;
                    case 8: message = 'Error, token expirado.'; break;
                }
            break;
            case 404:
                switch(response.data.code){
                    case 3: message = 'Error, registro no encontrado.'; break;
                }
            break;
            case 409:
                switch(response.data.code){
                    case 11: message = 'Error, el registro ya fue eliminado.'; break;
                }
            break;
        }
        return message;
    }
    getFields = () => {
        let fields = {};
        if (this.response.data && this.response.data.details){
            fields = this.response.data.details;
        }
        return fields;
    }
}

