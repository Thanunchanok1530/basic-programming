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




//โจทย์ยาก
const products = [
    { price: 100 },
    { price: 200 },
    { price: 150 },
    { price: 300 },
    { price: 250 },
];

//ยาก
function updatePriceWithForLoop(
    products: {
        price: number;
    }[]
) {
//filter
    const m: {
        price: number;
    }[] = [];
    for(let i = 0; i < products.length; i++) {
        if (products[i].price > 150) {
            m.push(products[i])
        }
    }
}

//update price 10%
for(let i = 0; i < products.length; i++) {
    m[i].price = m[i].price * 1.1;
}

    return m;

}

function updatePrice
    (products: {
        price: number;
}[]) {
    return products
    .filter(function (elemnt, index) {
        return elemnt.price > 150;
    })
    .map(function(Element, index) {
        return {
            price: Element.price *1.1,
    
        };
    });
}

console.log(updatePriceWithForLoop(products))
console.log(updatePrice(products))





//โจทย์ง่าย (เปลี่ยนจาก number เป็น String)
const number = [1, 2, 3, 4, 5, 6, 7, 8] //['1', '2', '3', '4', '5']


//ยาก (กระบวนการวนลูปเหมือนกัน)
function covertToArrayString(array: number[]) {
    const result: string[] = [];

    for (let i = 0; i < Array.length; i++) {
        result.push(Array[i].toString())
    }

    return result
}

//ง่ายๆ
function covertToArrayStringWithMap(array: number[] {
    return array.map(function(Element, index) {
        return Element.toString
    })
}

console.log(covertToArrayString(number))
console.log(covertToArrayStringWithMap(number))





//โจทย์ปานกลาง (จะแยกชื่อกับนามสกุล Ex.{ firstName: 'John', lastName: 'Doe' },)

const names = ["John Doe", "Jane Smith", "Jack Brown"];

function cutNameWithMap(array: string[]) {
    return array.map(function(Element, index) {
        const cutName = Element.split(" ") //['John', 'Doe'] ('indexที่0', 'indexที่1')
        return {
            firstName: cutName[0],
            lastName: cutName[1]
        }
    })
}

console.log(cutNameWithMap(names))


//โจทย์ Ex. {"John Doe"}
const persons = {
    firstName: 'John', 
    lastName: 'Doe',
    age: 21,
    getFullName: function() {
        return this.firstName + ' ' + this.lastName
    }
}


//โจทย์ 
const inventory = {
    namees: 'Laptop Store',
    quantity: 0,
    isAvailable: function() {
        return this.quantity > 0
    }
}

console.log(inventory.isAvailable())




//โจทย์บัญชี (อาจออกข้อสอบ)
const account = {
    namess: 'ออมกับสิน',
    balance: 0,
    deposit: function(amount: number) {
        if (amount < 0) {
            console.log('กรุณาระบุจำนวนเงิน')
            return
        }
        this.balance = this.balance + amount
        console.log('ฝากเงินจำนวน' + amount + 'ยอดคงเหลือ' + this.balance)
    },
    withdraw: function(amount: number) {
    if (amount > this.balace) {
        console.log('เงินไม่พอ คุณมียอดเงินคงเหลือ' + this.balace)
        return
    }

    this.balace = this.balace - amount
    console.log('ถอนเงิน' + amount + 'ยอดคงเหลือ' + this.balace)
    }
}

account.deposit(699) //ฝาก699 (ฝากเงินจำนวน 699 ยอดคงเหลือ 699)
account.withdraw(500)  //ถอน500 (ถอนเงิน 500 ยอดคงเหลือ 199)







iloveyou -> il^ve#^* -> iloveyou

i#^love*^#you -> i#^l^ve*##^* -> iyoloveuyyou



const database = [
    {
            email: 'meow@utk.ac.th',
            password: 'meow@utk0033'
    }
]

function login(email: string, password: string){
    const user = database.filter(function (element, index) {
        return element.email === email
    }) 


if (user.length > 0) {
    if (user[0].password === password) {
        console.log('เข้าสู่ระบบแล้ว')
    } else {
        console.log('รหัสผ่านไม่ถูกต้อง')
    } 
    } else {
    console.log('ไม่มีผู้ใช้งานในระบบ')
    }
} 

login('meow@utk.ac.th', 'meow@utk0033')


//password แบบ Base64
const database = [
    {
            email: 'meow@utk.ac.th',
            password: 'bWVvd0B1dGswMDMz'
    }
]

function login(email: string, password: string){
    const user = database.filter(function (element, index) {
        return element.email === email
    }) 


if (user.length > 0) {
    if (user[0].password === password) {
        console.log('เข้าสู่ระบบแล้ว')
    } else {
        console.log('รหัสผ่านไม่ถูกต้อง')
    } 
    } else {
    console.log('ไม่มีผู้ใช้งานในระบบ')
    }
} 

login('meow@utk.ac.th', 'meow@utk0033')




//function login(email: string, password: string){
//  const user = database.filter(function (element, index) {
//      return element.email === email
//    }) 
//
//
//if (email.includes('@') && email.lastIndexOf('@') !== email.length - 1) {
//    if (user.length > 0){
//       if (atob(user[0].password) === password) {
//        alert('เข้าสู่ระบบแล้ว')
//        } else {
//        alert('รหัสผ่านไม่ถูกต้อง')
//        } 
//    } else {
//    alert('ไม่มีผู้ใช้งานในระบบ')
//    }
//} else {
//    alert('Mail ไม่ถูกต้อง')
//}
//}
//login('meow@utk.ac.th', 'meow@utk0033')




function login(email: string, password: string) {
    const user = database.filter(function (element, index) {
        return element.email === email
    })

    if (!(email.includes('@') && email.lastIndexOf('@') !== email.length - 1)) {
    alert('Mail ไม่ถูกต้อง')
    return
}

    if (user.length === 0) {
        alert('ไม่มีผู้ใช้งานในระบบ')
        return
    }

    if (!(atob(user[0].password) === password)) {
        alert('รหัสผ่านไม่ถูกต้อง')
        return
    }
}
    alert('เข้าสู่ระบบแล้ว')




//Ex.โจทย์ใช้ Loop , while Loop

availability: function () {
    const availableProducts = []
    for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].availability === 'Y') {
            availableProducts.push(this.data[i])
        }
    }
    return availableProducts
},
salePrice: function() {
    return this.data.filter(function(element, index) {
        return element.availability === 'Y'
    }).map(function(element, index) {
        return ({
            product_name: element.product_name,
            sku: element.sku,
            salePrice: Number(element.price) - element.discount
        })
    })
}

