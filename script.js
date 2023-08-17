/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    constructor(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }
    function() {
        switch (this.op) {
          case 'add':
            return this.a + this.b;
          case 'sub':
            return this.a - this.b;
          case 'mul':
            return this.a * this.b;
          case 'div':
            return this.a / this.b;
          default:
            return 'Error! No operation selected.';
        }
    }
}

