import axios from 'axios'

export function llamadaApi(path) {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: path,
    headers: {}
  }

  return axios.request(config)
}

export function getEntidades(nombre) {
  return llamadaApi(`https://pruebaapi1-lonchezas.b4a.run/api/${nombre}`)
}

export function getParticipantes() {
  return getEntidades('participantes?size=300')
}