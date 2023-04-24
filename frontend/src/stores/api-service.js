import axios from 'axios'

const host = 'https://pruebaapi1-lonchezas.b4a.run/api'

export function cambiarHttpPorHttps(enlace) {
  return enlace.replace('http', 'https')
}

function initRespuestaPartido(respuesta) {
  const partido = respuesta.data
  if (!partido.sucesos) {
    partido.sucesos = []
  }

  return respuesta
}

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

export async function guardarPartido(partido) {
  return llamadaApi(`${host}/partidos`, 'post', partido).then(r => initRespuestaPartido(r))
}

// Ver patch usando json para Spring: https://www.baeldung.com/spring-rest-json-patch
export async function actualizarPartido(partido) {
  const parche = []
  const camposActualizables = [ 'timestamp' ]
  for (const campo in partido) {
    if (camposActualizables.includes(campo)) {
      parche.push({
        op: 'replace',
        path: `/${campo}`,
        value: partido[campo]
      })
    }
  }

  const config = configuracionPorDefecto(cambiarHttpPorHttps(partido._links.self.href), 'patch', parche)

  config.headers['Content-Type'] = 'application/json-patch+json'

  return llamadaApiConConfiguracion(config).then(r => initRespuestaPartido(r))

  // return llamadaApi(cambiarHttpPorHttps(partido._links.self.href), 'put', partido)
}

export function borrarEntidad(entidad) {
  return llamadaApi(cambiarHttpPorHttps(entidad._links.self.href), 'delete')
}

export function getEntidades(nombre) {
  return llamadaApi(`${host}/${nombre}`)
}

export function getParticipantes() {
  return getEntidades('participantes?size=300')
}