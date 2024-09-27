// u -> *
// y -> #
// o -> ^

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