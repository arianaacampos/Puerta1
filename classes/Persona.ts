export class Persona {
    private nacimiento: number ;
    private nombre: string ;


    constructor(anioNacimiento: number, nombre: string ){
        this.nacimiento = anioNacimiento ;
        this.nombre = nombre ;
        
    };
    
    public cualEsTuNombre(): string{
        return "Mi nombre es "+ this.nombre.split(" ");
    };

    public cualEsTuEdad(): string {
        let edad: number = 2022 - this.nacimiento; 
        return "Mi edad es " + edad + " años" ;

    };

    public cualEsTuGeneracion(){
        if (this.nacimiento < 1975) {
            return "Soy un Baby Boomer";

        }
        if (this.nacimiento >= 1975 && this.nacimiento < 1999) {
            return "Soy un Millenial" ;
        }
        if (this.nacimiento >= 1999 && this.nacimiento < 2010) {
            return "Soy un Centenial" ;

        }
        if (this.nacimiento >= 2010 ){
            return "Soy un Alfa" ;
        }
    };
};

