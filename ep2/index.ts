

function add (a: number, b:number) {
    return a + b
}

console.log (add(6,9))

function minus (c: number, a:number) {
    return c - a
}


console.log (minus(8,4)) 

function multiply (c: number, b:number, k:number , p:number) {
    return c * b * k * p
}

console.log (multiply(512,424,254,323))



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