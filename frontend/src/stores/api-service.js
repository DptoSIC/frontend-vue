import axios from 'axios'

const host = 'https://pruebaapi1-lonchezas.b4a.run/api'

export function llamadaApi(path, method, body) {
  let config = {
    method: method ?? 'get',
    maxBodyLength: Infinity,
    url: path,
    headers: {}
  }

  if (body) {
    config.data = body,
    config.headers['Content-Type'] = 'application/json'
  }

  return axios.request(config)
}

export function guardarPartido(partido) {
  return llamadaApi(`${host}/partidos`, 'post', partido)
}

export function getEntidades(nombre) {
  return llamadaApi(`${host}/${nombre}`)
}

export function getParticipantes() {
  return getEntidades('participantes?size=300')
}