//Loop

//for Loop (นับจำนวนรอบ)
//let = ตัวแปร เก็บจำนวนรอบ

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

//While Loop

let i = 0;
while (i <= 10) {
    console.log('while', i)
    i++
}


//Array
//การเอา String , number , boolean มาอยู่ด้วยกัน เอามาเรียงต่อกัน

const cars = ['Toyota', 'BMW', 'Honda'] //3ตัว (Array ของ String)

const arr = ['Toyota',2 , true] //อาจจะเป็น String number boolean

cars.length //ความยาวหรือจำนวนสมาชิกกี่ตัว (3ตัว) [จำนวนสมาชิกลบ1=indexที่...]



//หากต้องการเปลี่ยนชื่อสมาชิก
cars[2] = 'Suzuki'

//หากต้องการให้เอาตัวสมาชิกตัวสุดท้าย ออก
cars.pop() //["Toyota", "BMW"]

//หากต้องการให้ใส่เข้าไปเพิ่ม (จะเอาเข้าหลังสุด)
cars.push("Benz")

//หากต้องการเอาตัวหน้าสุดออก
cars.shift() //["BMW", "Honda"]

//หากต้องการใส่เข้าไปข้างหน้าสุด
cars.unshift("BMX")

//หากต้องการให้มันเรียงแบบ A-Z
cars.sort()

//หากต้องการให้มันเรียงแบบ Z-A
cars.reverse()



//Loop Array
//แบบ for Loop
for (let  i = 0; i < cars.length; i++) {
    console.log(cars[i])
}


//while loop
let i = 0;
while (i < cars.length) {
    console.log("while", cars[i]);
    i++;
}



// Javascript Odject
const person = {
    firstName: 'Ink',
    lastName: 'Lee',
    age: 20,
    isMale: true,
    broter: {
        firstName: 'Papa',
        lastName: 'POP',
        age: 25,
        isMale: false
    },
};

//ดึงชื่อจากข้อมูลพีชายมา (แล้วจะเปลี่ยนชื่อจริงของพี่ชาย)
person.broter.firstName = 'Popo';





const friend = [
    {
        firstName: 'Ink',
    lastName: 'Lee',
    age: 20,
    isMale: true,
    broter: {
        firstName: 'Papa',
        lastName: 'POP',
        age: 25,
        isMale: false
    },
},
{
    firstName: 'Ink',
    lastName: 'Lee',
    age: 20,
    isMale: true,
    broter: {
        firstName: 'Papa',
        lastName: 'POP',
        age: 25,
        isMale: false
    },
},
    {
        firstName: 'Ink',
        lastName: 'Lee',
        age: 20,
        isMale: true,
        broter: {
            firstName: 'Papa',
            lastName: 'POP',
            age: 25,
            isMale: false
        },
    },
]

friend.length


const peoples = [
    { name: "So", age: 25},
    { name: "Paei", age: 20},
    { name: "Cahe", age: 15}
];

const peopleMore: {
    name: string;
    age: number;
}[] = [];


//แบบยาก

for (let i = 0; i < peoples.length; i++) {
    
    if(peoples[i].age > 18){
        people.push(peoples[i])
    }
}

console.log(peopleMore)



