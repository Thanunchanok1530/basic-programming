//สวัสดีวัน... (if else)
function sayHi(dayOfWeek: number) {
    if (dayOfWeek === 1) {
        console.log('สวัสดีวันอาทิตย์')
    } else if (dayOfWeek === 2) {
        console.log('สวัสดีวันจันทร์')
    } else if (dayOfWeek === 3) {
        console.log('สวัสดีวันอังคาร')
    } else if (dayOfWeek === 4) {
        console.log('สวัสดีวันพุธ')
    } else if (dayOfWeek === 5) {
        console.log('สวัสดีวันพฤหัสบดี')
    } else if (dayOfWeek === 6) {
        console.log('สวัสดีวันศุกร์')
    } else if (dayOfWeek === 7) {
        console.log('สวัสดีวันเสาร์')
    }
}
sayHi(5)



//สวัสดีวัน... (Switch)
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
sayHi((1))


//Size (Switch)
function shirt(size: string) {
    switch (size) {
        case 's' :
        console.log('ผอม')
        break
        case 'm' :
        console.log('ผอม')
        break
        case 'l' :
        console.log('ท้วม')
        break
        case 'xl' :
        console.log('อ้วน')
        break
        case '2xl' :
        console.log('อ้วน')
        break
    }
}
shirt ('m')





function fixedDecimal(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}
console.log(fixedDecimal(40.67676, 10))





function fix(a: number) {
    return a.toLocaleString()
}
console.log(fix(100000))




const str: string = "Thanunchanok"

console.log(str.toLowerCase())




const str: string = "Thanunchanok"

console.log(str.toUpperCase())



function checkSrtingLength(x: string) {
    console.log (x.length)
}
checkSrtingLength('Thanunchanok')




function getCharByIndex(msg: string, index: number) {
    return msg.charAt(index)
}
console.log(getCharByIndex('หิวข้าววว', 3))




const str: string = 'แมวทอด'

console.log(str.includes('แมว'))





function RuBy(str: string, search: string) {
    if (str.includes(search)) {
        console.log(str.indexOf(search))
    } else {
        console.log('ไม่พบคำค้นหา')
    }
}
RuBy('อยากกลับบ้าน', 'บ้าน')