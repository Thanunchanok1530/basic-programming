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
    }

}

console.log (bmi(50, 1.65))

