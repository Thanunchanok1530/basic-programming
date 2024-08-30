const score: number[]= [10, 23, 26, 30, 33] 

let sum: number = 0

for (let i = 0; i < score.length; i++) {
    sum =sum + score[i]
}

let avg = sum / score.length
console.log("Total: ", sum)
console.log("avg ", sum)




const myStudents: string = "อิ้ง,พิมพ์,แอล,วิว,ภาริ"


const myStudentsArray: string[]= myStudents.split(',')
console.log(myStudents)
console.log(myStudentsArray[2])





const fullName: string = 'สุดแมว สุดจัด'

console.log(fullName.split(' ')[1])

console.log(fullName.slice(0, fullName.indexOf(' ')))





const animal: string = "แมว*เต่า*หมีขาว*ปลาวาฬ"

const animalArray: string[] = animal.split('*')

console.log(animal)
console.log(animalArray)


const animal: string = "แมว*เต่า*หมีขาว*นก"

const animalArray: string[] = animal.split('*')

console.log("ตั้งต้น: ", animalArray)

animalArray.pop()  //เอาตัวสุดท้ายออก

console.log("เอาตัวสุดท้ายออก: ", animalArray)

animalArray.push('หมา')  //ใส่ต่อท้าย

console.log("ใส่ต่อท้าย: ", animalArray)

animalArray.shift()  //เอาตัวหน้าออก

console.log("เอาตัวหน้าออก ", animalArray)

animalArray.unshift('คาปิบาร่า')  //ใส่ตัวหน้า

console.log("ใส่ตัวหน้า ", animalArray)





const nickName: string = "พิมพ์,แอล,วิว,ภาริ"

const nickNameArray: string[] = nickName.split(',')

nickNameArray.sort()  //เรียง ก-ฮ

console.log("เรียง ก-ฮ", nickNameArray)

nickNameArray.reverse()  //เรียง ฮ-ก

console.log("เรียง ฮ-ก", nickNameArray)