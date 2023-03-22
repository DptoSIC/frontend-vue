export function dateToString(fecha) {
    return fecha.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
                 + ' a las ' + fecha.toLocaleTimeString('es-ES', { hour: "2-digit", minute: "2-digit" })
}