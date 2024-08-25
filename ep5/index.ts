const x: number = 5

let y: string = 'Hi'

var z: boolean = true


y = 'Hello'

z = false

var z: boolean = false




function getName(name: string) {
    return name
}  // input output


function getNameOut() {
    return ''
} // output


function getNameIn(name: string) {
    console.log(name)
} // input


function getNameNone() {
    console.log('Ink')
} // void



if (true && true) {

} else {

}

if (false || false) {

} else {

}


function sayHi(dayOfWeek: number) {
    switch (dayOfWeek) {
    case 1:
    console.log('สวัสดีวันอาทิตย์')
    break
    case 2:
    console.log('สวัสดีวันจันทร์')
    break
    case 3:
    console.log('สวัสดีวันอังคาร')
    break
    case 4:
    console.log('สวัสดีวันพุธ')
    break
    case 5:
    console.log('สวัสดีวันพฤหัสบดี')
    break
    case 6:
    console.log('สวัสดีวันศุกร์')
    break
    case 7:
    console.log('สวัสดีวันเสาร์')
    default:
        console.log('ไม่ทราบวัน')
    break
    }
}
sayHi(1)




const x: number = 50.50

console.log(x.toString())


const y: number = 50.50

console.log(y.toFixed(10))


const a: number = 500000

console.log(a.toLocaleString())


const b: number = 500000

console.log(number(b.toFixed()))




const str: string = "แมวทอดกรอบๆ"

str.length         //

str.charAt(2)      //

str.indexOf("ม")   //

str.slice(3, 7)    //

str.split("  ")    //

str.replace("กรอบ", "ฉ่ำ")   //

str.trim()         //

str.trimEnd()      //

str.trimStart()     // 



