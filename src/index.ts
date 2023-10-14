interface User {
     birthYear: number
}

function calculateUsersAge (user: User) {
     return new Date().getFullYear() - user.birthYear
}

calculateUsersAge({
     birthYear: 1994
})

//oi
