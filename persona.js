var Persona = /** @class */ (function () {
    function Persona(nombre, edad, sexo, peso, altura) {
        if (nombre === void 0) { nombre = ''; }
        if (edad === void 0) { edad = 0; }
        if (sexo === void 0) { sexo = 'hombre'; }
        if (peso === void 0) { peso = 0; }
        if (altura === void 0) { altura = 0; }
        this.nombre = nombre;
        this.edad = edad;
        this.NSS = this.generaNSS();
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    //------------------------------------------- Métodos implementados
    Persona.prototype.calcularIMC = function () {
        var res = this.peso / (this.altura ^ 2);
        if (this.sexo === 'hombre') {
            if (res < 20) {
                return -1;
            }
            else {
                if (res >= 20 && res <= 25) {
                    return 0;
                }
                else {
                    return 1;
                }
            }
        }
        else {
            if (res < 19) {
                return -1;
            }
            else {
                if (res >= 19 && res <= 24) {
                    return 0;
                }
                else {
                    return 1;
                }
            }
        }
    };
    Persona.prototype.esMayorDeEdad = function () {
        if (this.edad >= 18) {
            return true;
        }
        else {
            return false;
        }
    };
    Persona.prototype.comprobarSexo = function () {
        return ((this.sexo === 'hombre') || (this.sexo == 'mujer')) ? true : false;
    };
    Persona.prototype.toString = function () {
        return this.nombre, this.edad.toString(), this.NSS.toString(), this.sexo, this.peso.toString(), this.altura.toString();
    };
    Persona.prototype.generaNSS = function () {
        var res = '';
        for (var i = 0; i < 8; i++) {
            var nn = Math.floor(Math.random() * 10);
            res = res + nn.toString();
        }
        return parseInt(res);
    };
    //------------------------------------------- Setters y getters
    Persona.prototype.getNombre = function () { return this.nombre; };
    Persona.prototype.setNombre = function (nombre) { this.nombre = nombre; };
    Persona.prototype.getEdad = function () { return this.edad; };
    Persona.prototype.setEdad = function (edad) { this.edad = edad; };
    Persona.prototype.getNSS = function () { return this.NSS; };
    Persona.prototype.getSexo = function () { return this.sexo; };
    Persona.prototype.setSexo = function (sexo) { this.sexo = sexo; };
    Persona.prototype.getPeso = function () { return this.peso; };
    Persona.prototype.setPeso = function (peso) { this.peso = peso; };
    Persona.prototype.getAltura = function () { return this.altura; };
    Persona.prototype.setAltura = function (altura) { this.altura = altura; };
    return Persona;
}());
//------------------------------------------- Corriendo prueba para la clase Persona
var nombre = 'Yagel Salazar';
var edad = 22;
var sexo = 'mujer';
var peso = 65;
var altura = 1.70;
var persona = new Persona(nombre, edad, sexo, peso, altura);
if (persona.calcularIMC() === -1) {
    console.log('Hey! Tiene falta de peso');
}
else {
    if (persona.calcularIMC() === 0) {
        console.log('Genial! Está en su peso ideal');
    }
    else {
        console.log('Oh no! Tiene sobrepeso');
    }
}
console.log(persona.esMayorDeEdad() ? 'Es mayor de edad' : 'Es menor de edad');
console.log('---------------------- Datos generales');
console.log(" NSS: " + persona.getNSS() + " \n nombre: " + persona.getNombre() + "\n edad: " + persona.getEdad() + " \n sexo: " + persona.getSexo() + " \n peso: " + persona.getPeso() + "\n altura: " + persona.getAltura());
