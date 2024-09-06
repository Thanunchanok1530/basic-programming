const aboutMe = {
    firstName: 'ink',
    lastName: 'Super',
    age: 19,
    mail: 'hbhuuio@mail.com',
    phone: '072-566-4524',
    idCard: '45465615',
    fun: {
        firstName: 'taeyong',
        lastName: 'lee',
        age :21,
        animal: {
            animalType: 'cat',
            color: 'black',
         }
    },
    friend: {
        firstName: 'แอล',
        lastName: 'เบญจลักษณ์',
        AKA: 'แอลลี่',
    }
}

console.log(aboutMe.fun.firstName)
console.log(aboutMe.friend.AKA)




const myFriends = [{
    firstName: 'lisa',
    lastName: 'blackpink',
    AKA: 'cat',
    age: 19,
}, {
    firstName: 'taeyong',
    lastName: 'Nct',
    AKA: 'woww',
    age: 20,
}, {
    firstName: 'ten',
    lastName: 'wayv',
    AKA: 'OH',
    age: 20,
}, {
    firstName: 'gojo',
    lastName: 'jj',
    AKA: 'vvv',
    age: 19,
}]



const myFriendsAKA = myFriends.map(function(element, index) {
    return ({
        fn: element.firstName,
        chaya: element.AKA
    })
})

console.log(myFriendsAKA)


const myFriendsMoreThan = myFriends.filter(function(element, index) {
    return element.age > 19 && element.lastName === 'jj'
})

console.log(myFriendsMoreThan) 