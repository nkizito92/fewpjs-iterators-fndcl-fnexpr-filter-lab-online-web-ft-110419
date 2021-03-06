// Code your solution here


const findMatching = (person, driver) => {
    let theDriver = person.filter(ind => {
        if (driver === ind.toLowerCase()) {
            return ind
        } else if (driver.toLowerCase() === ind.toLowerCase()) {
            return ind
        }
    })
    return theDriver
}

function fuzzyMatch(person, letter) {
    let thePerson = person.filter(ind => { if (ind.startsWith(letter)) return ind })
    return thePerson
}
let obj = [
    {
        ind: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        ind: 'Bobby',
        hometown: 'Tampa Bay'
    }
]

let matchName = (person, driver) => {
    return person.filter(individual => individual.name === driver)
}

matchName(obj, 'Bobby')
findMatching(["Bob", "Bob", "Sa"])