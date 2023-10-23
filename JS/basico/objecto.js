const persona = {
    nombre: "Pablo",
    saludar: function () {
      console.log("Hola, mi nombre es " + this.nombre)
    }
  }
  
  persona.saludar();