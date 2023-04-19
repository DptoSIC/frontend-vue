import axios from 'axios'

const host = 'https://pruebaapi1-lonchezas.b4a.run/api'

export function llamadaApi(path, method, body) {
  return llamadaApiConConfiguracion(configuracionPorDefecto(path, method, body))
}

function llamadaApiConConfiguracion(config) {
  return axios.request(config)
}

function configuracionPorDefecto(path, method, body) {
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

  return config
}

export function guardarPartido(partido) {
  return llamadaApi(`${host}/partidos`, 'post', partido)
}

export function actualizarPartido(partido) {
  return llamadaApi(partido._links.self.href.replace('http', 'https'), 'put', partido)
}

export function borrarEntidad(entidad) {
  return llamadaApi(entidad._links.self.href.replace('http', 'https'), 'delete')
}

export function getEntidades(nombre) {
  return llamadaApi(`${host}/${nombre}`)
}

export function getParticipantes() {
  return getEntidades('participantes?size=300')
}