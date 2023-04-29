class Perro{
     constructor(color, raza, edad, collar){
          this._color = color;
          this._raza = raza;
          this._edad = edad;
          this._collar = collar;
     }

     ladrar() {
          console.log("guau guau");
     }

     comer(){
          console.log("grr grr", this.raza_);
     }
}

class Collar{
     constructor(nombre, color){
          this._nombre = nombre;
          this._color = color;
     }


     imprimeCollar(){
          console.log("Mi nombre es ${this._nombre] y mi collar es de color ${this._color]")
     }
}

let collar = new Collar("Canelo", "rojo");
let golden = new Perro("amarillo", "Golden Retriever", 3, collar);
golden.ladrar();
goldern._collar.imprimeCollar();
