import { Calculadora } from '../../src/modelo/Calculado';


describe("Pruebas de la clase Calculadora",()=>{
    
    it(`Cuando sumo 10 y 5 
    entonces el resultado es 15`,()=>{

        //Arrange-disponer escenario
        const calculadora:Calculadora=new Calculadora();

        //Actuar
        const suma=calculadora.sumar(10,5);

        //Assert-afirmaciones
        expect(suma).toBe(15);
    })
})