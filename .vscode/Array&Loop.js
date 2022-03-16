//Ex.1 การใช้บริการธนาคาร
//P.1 สร้างรายชื่อการเข้าคิวบริการธนาคาร
const servicesQueue = ['Sofia', 'David', 'Juan'];
console.log(servicesQueue)

//P.2 เพิ่มลูกค้าใหม่จากคิวใน P.1
servicesQueue.splice(3, 0, 'Sara', 'Augustin')
console.log(servicesQueue)

//เมื่อคิวที่ 1 โดนเรียกไป จึงตัดคิวออก
servicesQueue.splice(0, 1)
console.log(servicesQueue)

//P.3 การแทรกชื่อในคิวระหว่างที่เดวิดได้จองไว้
servicesQueue.splice(1, 0, 'Ranata')
console.log(servicesQueue)
 
//เพิ่มลูกค้าใหม่ให้อยู่คิวสุดท้ายหรือท้ายแถว
servicesQueue.push('Elena')
console.log(servicesQueue)

//Ex.2
for (let p = 0 ; p < 5 ; p++ ) {
    let star = '';
    for (let w = 5-p ; w >= 1  ; w-- ) {
      star += "*"
    }
      console.log(star)
  }

//Ex.3 พิมพ์ค่าของตัวแปร xValue ซ้ำๆ โดยลดลง 0.5 ในแต่ละครั้ง
let u = 5;
while (u >= 0) {
    console.log(u)
    u -= 0.5;
}

//พิมพ์หาเลขคี่ทั้งหมดระหว่าง 1 - 100
let number = 1;
while (number <= 100) {
    if (number&2 !== 0) {
        console.log(number)
        number++;
    }
    number++;
}

//ขียนฟังก์ชันด้วย a while เพื่อพิมพ์ 1 ถึง n ในวงเล็บเหลี่ยม ตัวอย่างเช่น ถ้า n = 6 พิมพ์ [1] [2] [3] [4] [5] [6]
const printNBrackets = (n) => {
    let t = 1;
    let light = '';
    while (t <= n){
        light += `[${t}] `
        t++;
    }
    console.log(light)
}
printNBrackets (6)

//หาผลลัพธ์จาก sumPositive ให้ n=5 และ n=19
const sumPositive = (n) => {
    let r = 1
    let sum = 0;
    while (r <= n) {
        sum += r;
        r++;
    }
    return sum;
}
console.log(sumPositive(5))
console.log(sumPositive(19))

//Challenge
function isPalindrome (str) {
    let mid = Math.floor(str.length/2);
    for (let i = 0; i < mid; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('luknam'))