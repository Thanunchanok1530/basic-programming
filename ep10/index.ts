console.log("1")
console.log("2")
console.log("3")
setTimeout(() => {
    console.log("4")
})
console.log("5")


// meow.com  -> No
// ink@ -> No
// kaito@utk.ac.th -> yes
// meowmeow@gmail.com -> yes

const database = [
    {
        email: 'user@gmail.com',
        password: 'lovepari16'
    }
]


function register(email: string, password: string){
    if (email.includes('@') && email.lastIndexOf('@') !== email.length - 1) {
        if (password.length > 8 && password.length < 16) {
            const userObect = {
                email: email,
                password: password
            }
            database.push(userObect)
            alert('สมัครสมาชิกแล้ว ยินดีต้อนรับ คุณ' + email)

        } else {
        alert('รหัสผ่านต้องมากกว่า8 และไม่เกิน 16')
    }

    } else {
        console.log('Email ไม่ถูกต้อง')
    }
}

register('ink33@gmail.com', 'iinnkk555')


// meow.com  -> No
// ink@ -> No
// kaito@utk.ac.th -> yes
// meowmeow@gmail.com -> yes


const database = [
    {
        email: 'user@gmail.com',
        password: 'lovepari16'
    }, 
    {
        email: 'ink33@gmail.com',
        password: 'iinnkk555'
    }
]


const database = [
    {
        email: 'user@gmail.com',
        password: 'lovepari16'
    }, 
    {
        email: 'ink33@gmail.com',
        password: 'iinnkk555'
    }
]
function login(email: string, password: string) {
    const user = database.filter(function(element, index) {
        return element.email === email
    })
    if (user.length > 0) {
        if (user[0].password === password) {
            alert('เข้าสู่ระบบสำเร็จยินดีต้อนรับ')
        } else {
            alert('รหัสผ่านไม่ถูกต้อง โปรดตรวจสอบ')
        }
    } else {
        alert('ไม่พบผู้ใช้งานในระบบ')
    }
}

login('ink33@gmail.com', 'iinnkk555')


function decryptPassword(password: string) {
    return password.replaceAll('+', 'u').replaceAll('*', '6').replaceAll('^', '0')
}

function login(email: string, password: string) {
    const user = database.filter(function(element, index) {
        return element.email === email
    })
    if (user.length > 0) {
        const realPassword = decryptPassword(user[0].password)

        if (realPassword[0].password) {
            alert('เข้าสู่ระบบสำเร็จยินดีต้อนรับ')
        } else {
            alert('รหัสผ่านไม่ถูกต้อง โปรดตรวจสอบ')
        }
    } else {
        alert('ไม่พบผู้ใช้งานในระบบ')
    }
}

login('ink33@gmail.com', 'iinnkk555')