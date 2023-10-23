// Crea una clase para la conexión de la api
export class ApiConnect {
  private URL: string;

  constructor(URL: string) {
    this.URL = URL;
  }

  async getData(id: number): Promise<any> {
    const url: string = `${this.URL}/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
// Ejemplo de uso de la clase ApiConnect
