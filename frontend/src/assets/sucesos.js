function participanteAleatorio(idLocal, idVisitante) {
  return Math.random() > .5 ? idLocal : idVisitante
}

export function sucesos(local, visitante) {
  return {
    "_embedded" : {
      "sucesos" : [ {
        "idParticipante" : participanteAleatorio(local, visitante),
        "timestamp" : 1588791731075,
        "_links" : {
          "self" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/sucesos/4"
          },
          "suceso" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/sucesos/4"
          },
          "partido" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/sucesos/4/partido"
          }
        }
      } ],
      "goles" : [ {
        "idParticipante" : participanteAleatorio(local, visitante),
        "timestamp" : 1588791731231,
        "_links" : {
          "self" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/goles/5"
          },
          "gol" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/goles/5"
          },
          "partido" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/goles/5/partido"
          }
        }
      }, {
        "idParticipante" : participanteAleatorio(local, visitante),
        "timestamp" : 1588791731231,
        "_links" : {
          "self" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/goles/5"
          },
          "gol" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/goles/5"
          },
          "partido" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/goles/5/partido"
          }
        }
      }, {
        "idParticipante" : participanteAleatorio(local, visitante),
        "timestamp" : 1588791731231,
        "_links" : {
          "self" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/goles/5"
          },
          "gol" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/goles/5"
          },
          "partido" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/goles/5/partido"
          }
        }
      } ],
      "tarjetas" : [ {
        "idParticipante" : participanteAleatorio(local, visitante),
        "tipoTarjeta" : "AMARILLA",
        "timestamp" : 1588791731375,
        "_links" : {
          "self" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/tarjetas/6"
          },
          "tarjetas" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/tarjetas/6"
          },
          "partido" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/tarjetas/6/partido"
          }
        }
      }, {
        "idParticipante" : participanteAleatorio(local, visitante),
        "tipoTarjeta" : "AMARILLA",
        "timestamp" : 1645787912081,
        "_links" : {
          "self" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/tarjetas/74"
          },
          "tarjetas" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/tarjetas/74"
          },
          "partido" : {
            "href" : "http://pruebaapi-lonchezas.b4a.run/api/tarjetas/74/partido"
          }
        }
      } ]
    },
    "_links" : {
      "self" : {
        "href" : "http://pruebaapi-lonchezas.b4a.run/api/partidos/2/sucesos"
      }
    }
  }
}