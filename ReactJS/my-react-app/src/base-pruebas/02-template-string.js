


export function getSaludo( nombre ) {
    return 'Hola ' + nombre;
}

export function getSaludoCondicional( nombre ) {
    if(typeof nombre === 'string'){
          return 'Hola ' + nombre;
    }else{
        return 'Hola!';
    }
}
