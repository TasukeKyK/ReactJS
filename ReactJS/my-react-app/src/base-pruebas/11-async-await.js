
export const getImagen = async() => {
// https://developers.giphy.com/dashboard/?create=true
    try {

        const apiKey = 'c6YvYdegr2bpOfAbWIn0J1O4e9yhitIc';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No se encontro la imagen'
    }
    
    
    
}

 getImagen();



