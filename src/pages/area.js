export async function calculo(x=0, y=0, a=0, b=0) {
    
    // a = alto del panel
    // b = ancho del panel

    // x = ancho del techo
    // y = alto del techo

    let ancho_ocupado = Math.floor(x / b)
    let alto_ocupado = Math.floor(y / a)
    let paneles_colocados = ancho_ocupado * alto_ocupado
    // Paneles colocados en una sola posicion
    

    const area_ocupada = (a * b) * paneles_colocados
    // Area ocupada por los paneles colocados
    
    const area_techo = x * y
    const area_sobrante = area_techo - area_ocupada
    // Area sobrante en el techo

    // Calculamos nuevamente invirtiendo la figura en el techo sobrante
    if(a > b){
        // Alto > Ancho
        const alto_sobrante = Math.floor(area_sobrante / x) //Sobrante del techo

        ancho_ocupado = Math.floor(x / a) //Invertimos la figura
        alto_ocupado = Math.floor(alto_sobrante / b) //Invertimos la figura
    }else{
        const ancho_sobrante = Math.floor(area_sobrante / y) //Sobrante del techo

        ancho_ocupado = Math.floor(ancho_sobrante / a) //Invertimos la figura
        alto_ocupado = Math.floor(y / b) //Invertimos la figura
    }
    
    const paneles_rotados = ancho_ocupado * alto_ocupado
    paneles_colocados += paneles_rotados
    // Total de paneles colocados
    
    return {totales: paneles_colocados, rotados: paneles_rotados}
}