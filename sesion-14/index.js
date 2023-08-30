

const Vec = function(x, y) {
    this.x = x;
    this.y = y;
    this.plus = function(vector){
        return new Vec(this.x + vector.x, this.y + vector.y);
    }
    this.minus = function(vector){
        return new Vec(this.x - vector.x, this.y - vector.y);
    }
    this.length = function(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }
  
  const vec1 = new Vec(1, 2);
  const vec2 = new Vec(2, 3);
  
  console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
  console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
  console.log(vec1.length()); // 2.23606797749979

///////////////Reto 2 /////////////

  const Group = function() {
    //Parámetro con array vacío
    this.numeros = [];
    
    this.add = function(valor) {
        if (!this.has(valor)) {
          this.numeros.push(valor);
        }
    }

    this.has = function(valor) {
        return this.numeros.includes(valor);
      }

    this.from = function(datos) {
        const group = new Group();
        for(let i = 0; i < datos.length; i++) {
          group.add(datos[i]);
        }
        return group;
    }

  }
  



const group = new Group();
group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { numeros: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false

group.add(10);
console.log(group.has(10)); // true