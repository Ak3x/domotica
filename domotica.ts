abstract class RamaEstructura
{
    hijos : Estructura[] = null 
    addHijo(estructura : Estructura)
    {
        if(this.hijos == null)
        {
            this.hijos = []
        }
        this.hijos.push(estructura)
    }
}

interface  Estructura
{
    nombre: string 
     calcularGastoEnergetico()
}

class Torres extends RamaEstructura implements Estructura
{
    nombre: string;
    constructor(nombre : string)
    {
        super(); //cuando el constructor no esta en el padre se pone super();
        this.nombre = nombre
    }
    calcularGastoEnergetico() {
        let suma =  0;
        for(let i=0; i< this.hijos.length; i++)
        {
            suma +=this.hijos[i].calcularGastoEnergetico()
        }
        return suma
    }
}

class Torre extends RamaEstructura implements Estructura
{
    nombre: string;
    constructor(nombre : string)
    {
        super(); //cuando el constructor no esta en el padre se pone super();
        this.nombre = nombre
    }
    
    calcularGastoEnergetico() {
        let suma =  0;
        for(let i=0; i< this.hijos.length; i++)
        {
            suma +=this.hijos[i].calcularGastoEnergetico()
        }
        return suma
    }
}

class Piso extends RamaEstructura implements Estructura
{
    nombre: string;
    constructor(nombre : string)
    {
        super(); //cuando el constructor no esta en el padre se pone super();
        this.nombre = nombre
    }
    calcularGastoEnergetico() {
        let suma =  0;
        for(let i=0; i< this.hijos.length; i++)
        {
            suma +=this.hijos[i].calcularGastoEnergetico()
        }
        return suma
    }
}

class Salon  implements Estructura
{
    nombre: string;
    constructor(nombre : string)
    {
         
        this.nombre = nombre
    }   
    calcularGastoEnergetico() {
     return 100 
    }   
}

class Lobby implements Estructura
{
    nombre: string;   
    constructor(nombre : string)
    {
         
        this.nombre = nombre
    } 
    calcularGastoEnergetico() {
     return 300
    }    
}


let mainDomotica = () => {
    let torres = new Torres("Torres")
    let ta = new Torre("TorreA")
    let tb = new Torre("TorreB")
    let pa1 = new Piso("A1")
    let pa2 = new Piso("A2")
    let pa3 = new Piso("A3")
    let pb1 = new Piso("B1")
    let pb2 = new Piso("B2")
    let pb3 = new Piso("B3")

    let lobbyTA = new Lobby("Lobby TA")
    let lobbyTB = new Lobby("Lobby TB")
    let s1 = new Salon("Salon 1")
    let s2 = new Salon("Salon 2")
    let sa = new Salon("Salon A")
    let sb = new Salon("Salon B")
    let sc = new Salon("Salon C")

    let s1TB = new Salon("Salon 1")
    let sATb = new Salon("Salon A")
    let sbTb = new Salon("Salon B")

    torres.addHijo(ta)
    torres.addHijo(tb)
    ta.addHijo(pa1)
    ta.addHijo(pa2)
    ta.addHijo(pa3)

    pa1.addHijo(lobbyTA)
    pa2.addHijo(s1)
    pa2.addHijo(s2)
    pa3.addHijo(sa)
    pa3.addHijo(sb)
    pa3.addHijo(sc)

    tb.addHijo(pb1)
    tb.addHijo(pb2)
    tb.addHijo(pb3)

    pb1.addHijo(lobbyTB)
    pb2.addHijo(s1TB)
    pb2.addHijo(sATb)
    pb3.addHijo(sbTb)

    let total = torres.calcularGastoEnergetico()
    console.log(`El gasto total es : ${total}`)

}
mainDomotica()
