// คำนวณ BMI
function hy(a: number, b: number){
    return (a/(b*b))
}
  
  console.log (hy(50,1.65))

 
// เกณฑ์ BMI
function bmi(high: number, weight: number){
    let score: number = (weight / (high*high))

    if (score < 18.50) {
        return 'น้ำหนักน้อย/ผอม'
    } else if (score >= 18.50-22.90) {
        return 'น้ำหนักปกติ'
    } else if (score >= 23-24.90) {
        return 'น้ำหนักท้วม โรคอ้วนระดับ 1'
    } else if (score >= 25-29.90) {
        return 'น้ำหนักอ้วน โรคอ้วนระดับ 2'
    } else if (score > 30) {
        return 'น้ำหนักอ้วนมาก โรคอ้วนระดับ 3'
    } else {
        return '-'
    }

}

console.log (bmi(50, 1.65))


// ภาวะเสี่ยงต่อโรค
function disease(high: number, weight: number){
    let score: number = (weight / (high*high))

    if (score < 18.50) {
        return 'เสี่ยงโรคมากกว่าคนปกติ'
    } else if (score >= 18.50-22.90) {
        return 'เสี่ยงโรคเท่าคนปกติ'
    } else if (score >= 23-24.90) {
        return 'อันตรายระดับ 1'
    } else if (score >= 25-29.90) {
        return 'อันตรายระดับ 2'
    } else if (score > 30) {
        return 'อันตรายระดับ 3'
    } else {
        return '-'
    }

}

console.log (disease(50, 1.65))

