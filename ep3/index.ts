function grade(homework: number, midterm: number, final: number)
    let score: number = homework + midterm + final

    if (score < 50) {
        return 'เกรด F'
    } else if (score < 60) {
        return 'เกรด D'
    } else if (score < 70) {
        return 'เกรด C'
    } else if (score < 80) {
        return 'เกรด B'
    } else {
        return 'เกรด A'
    }




console.log(grade(100, 100,100))

function helloWorld() {
    console.log("สวัสดี");
} 

้helloWorld() 

function HelloName(name: string) {
    console.log(name)
}

helloName('Max') 
function getPi() {
    return 3.14
}

console.log(getPi()) 


function st(fname: string, sname: string) {
    if (fname === 'mix' && sname === 'zane') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

st('mix', 'zane')



function st(fname: string, sname: string, tname: string) {

    if (fname=== 'mix' && sname === 'zane' || tname ==='forth') {
        console.log('พร้อมเรียน')
    } else {
        console.log('ยังไม่พร้อม')
    }
}

 st('mix' , 'zane' , 'forth') 



 function ot(sex: string, high: number, weight: number) {

    if (sex=== 'man' && (high > 170 || weight >50 && weight <=110)) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่เข้าเกณฑ์')
    }
 }

 ot('man',175,80)


 function ct(age: number, salay: number, total: number) {

    if (age>16 && salay<70000 && total<500000){
        console.log('รับ 10000 บาท')
    } else {
        console.log('อด')
    }
 }

 ct(20,25000,60000)


 