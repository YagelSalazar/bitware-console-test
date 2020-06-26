class Persona implements IPersona{
    private nombre: string;
    private edad: number;
    private NSS: number;
    private sexo: string;
    private peso: number;
    private altura: number;

    constructor(nombre:string = '', edad:number = 0, sexo:string = 'hombre', peso:number = 0, altura:number = 0){
        this.nombre = nombre;
        this.edad = edad;
        this.NSS = this.generaNSS();
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    //------------------------------------------- Métodos implementados
    calcularIMC():number {
        const res = this.peso/(this.altura^2);

        if(this.sexo === 'hombre'){
            if(res < 20){
                return -1;
            }else{
                if(res >= 20 && res <= 25){
                    return 0;
                }else{
                    return 1;
                }
            }
        }else{
            if(res < 19){
                return -1;
            }else{
                if(res >= 19 && res <= 24){
                    return 0;
                }else{
                    return 1;
                }
            }
        }

    }

    esMayorDeEdad():boolean{
        if(this.edad >= 18){
            return true;
        }else{
            return false;
        }
    }

    comprobarSexo():boolean{
        return ((this.sexo === 'hombre') || (this.sexo == 'mujer')) ? true : false;
    }

    toString():string{
        return this.nombre, this.edad.toString(), this.NSS.toString(), this.sexo, this.peso.toString(), this.altura.toString();
    }

    generaNSS():number{
        let res = '';
        for (let i = 0; i < 8; i++) {
            let nn = Math.floor(Math.random() * 10);
            res = res + nn.toString();
        }
        return parseInt(res);
    }

    //------------------------------------------- Setters y getters
    getNombre():string{ return this.nombre; }

    setNombre(nombre:string){ this.nombre = nombre; }

    getEdad():number{ return this.edad; }

    setEdad(edad:number){ this.edad = edad; }

    getNSS():number{ return this.NSS; }
    
    getSexo():string{ return this.sexo; }
    
    setSexo(sexo:string){ this.sexo = sexo; }
    
    getPeso():number{ return this.peso; }

    setPeso(peso:number){ this.peso = peso; }
    
    getAltura():number{ return this.altura; }
    
    setAltura(altura:number){ this.altura = altura; }

}

interface IPersona{
    calcularIMC():number;
    esMayorDeEdad():boolean;
    comprobarSexo():boolean;
    toString():string;
    generaNSS():number;
}

//------------------------------------------- Corriendo prueba para la clase Persona
var nombre = 'Yagel Salazar';
var edad = 22;
var sexo = 'mujer';
var peso = 65;
var altura = 1.70;

const persona = new Persona(nombre, edad, sexo, peso, altura);

if(persona.calcularIMC() === -1){
    console.log('Hey! Tiene falta de peso')
}else{
    if(persona.calcularIMC() === 0){
        console.log('Genial! Está en su peso ideal')
    }else{
        console.log('Oh no! Tiene sobrepeso')
    }
}
console.log(persona.esMayorDeEdad() ? 'Es mayor de edad' : 'Es menor de edad')
console.log('---------------------- Datos generales')
console.log(` NSS: ${persona.getNSS()} \n nombre: ${persona.getNombre()}
 edad: ${persona.getEdad()} \n sexo: ${persona.getSexo()} \n peso: ${persona.getPeso()}
 altura: ${persona.getAltura()}`)