// class Person
class Person {
  constructor(name, gender, power){
    this.name = name
    this.gender = gender
    this.power = power
  }
  DailyroutineofDay () {
    this.power -= this.power
  }
  run(hour) {
    this.power -= hour;
  }
  study(hour) {
    this.power -= hour;
  }
  sleep(hour) {
    this.power += hour;
  }
  eat(powerScore) {
    this.power += powerScore;
  }
}

// new Object ด้วย class Person
const Luknam = new Person('Luknam', 'Female', 1000)
console.log(Luknam)
// ลองเรียก action ที่ - พลัง, + พลัง
Luknam.DailyroutineofDay()

Luknam.run(50);
console.log("after run", Luknam.power)

Luknam.study(60)
console.log("after study", Luknam.power)

Luknam.sleep(300)
console.log("after sleep", Luknam.power)

Luknam.eat(700)
console.log("after eat", Luknam.power)

// console.log obejct สุดท้ายว่า พลังเหลือเท่าไหร่
console.log('dailyroutineofDay', Luknam)

class Employee extends Person {
  constructor(name, gender, power, job, salary) {
    super(name, gender, power);
    this.job = job;
    this.salary = salary;
    this.money = 25000;
    this.inventory = [];
  }

  printjob() {
    console.log(this.job)
  }

  WorkingTime(hour) {
    this.power -= hour;
  }

  shopping(name, price) {
    this.inventory.push(name)
    this.money -= price;
  }
}

const newFace = new Employee('Luknam', 'Female', 1000, 'BA', 25000)
console.log(newFace)
newFace.printjob()
newFace.WorkingTime(12)
newFace.shopping('Airpod', 2000)
newFace.shopping('book', 500)
console.log('new face', newFace)
