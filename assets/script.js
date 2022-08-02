class Car {
    constructor(number,model) {
      this.number = number;
      this.model = model
    }

    plus(num) {
      this.number = this.number + num;
      return this.number;
    }

    multiply(num) {
      this.number = this.number * num;
      return this.number;
    }

    divide(num) {
      this.number = this.number / num;
      return this.number;
    }

    minus(num) {
      this.number = this.number - num;
      return this.number;
    }

  }

  let result = new Car(50,"Lambarquni");
  result.plus(6);
  result.minus(30);
  result.multiply(3);
  let result2 = result.divide(2);
  console.log(result2);