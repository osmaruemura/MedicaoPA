import axios from "axios"

class UsuarioService{

    async cadastrar(data){
        return axios({
            url: "http://192.168.31.202:3000/usuario/cadastrar",
            method: "POST",
            timeout: 5000,
            data: data,
            headres: {
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const usuarioService = new UsuarioService()
export default usuarioService
