for (let i = 1; i <= 13; i++) {
    console.log('ฉันอายุ ' + i + ' ปี')
}

let a: number = 1
while (a <= 13) {
    console.log('ฉันอายุ ' + a + ' ปี')
    a++
}

let i: number = 1
do {
    console.log('ฉันอายุ ' + i + ' ปี')
    i++
} while (i <= 13)





const caars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']

for (let i = 0; i < caars.length; i++) {
    if (caars[i] === 'Yamaha'){
        console.log('รถซื้อแกง จะแรงได้ไง')
    }
}

let i: number =  0

while (i < caars.length) {
    if (caars[1] === 'Yamaha') {
        console.log('รถซื้อแกง จะแรงได้ไง')
    }
    i++
}




const friend: string[] = ['พิมพ์', 'แอล', 'วิว', 'ภาริ', 'โจเซฟ']

for (let i = 0; i < friend.length; i++) {
    if (friend[i] === 'พิมพ์'){
        console.log('ไปกินหมูกระทะกัน')
    }
}





const num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < num.length; i++) {
    if (num[i] === 3|| num[i] ===5|| num[i] === 7){
        num[i] = 0
    }
}

console.log(num)