import { getSaludo, getSaludoCondicional } from '../../base-pruebas/02-template-string'

describe('Pruebas en 02-template-string', () => { 
    test('getSaludo debe retornar "Hola maria"', () => { 
        //1. inicialización
        const name = 'Maria';
        // ATC
        const message = getSaludo(name);
        // Observar comportamiento
        expect(message).toBe(`Hola ${name}`);
    });

    test('getSaludo debe de retornar "Hola Maria" si es un string', () => {
        const name = 'Maria';
        const message = getSaludoCondicional(name);
        expect(message).toBe(`Hola ${name}`);
    });

    test('get saludo debe de retornar "Hola!" si no es un string', () => {
        const name = true;
        const message = getSaludoCondicional(name);
        expect(message).toBe("Hola!")
     })


});