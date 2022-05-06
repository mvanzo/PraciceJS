// PLUS-MINUS RATIO problem - hackerrank
function readLine(arr) {
    console.log(arr)
    let hash = {
        pos: 0,
        neg: 0,
        zero: 0
    }

    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] > 0) {
            hash.pos += 1
        } else if (arr[i] < 0) {
            hash.neg += 1
        } else {
            hash.zero += 1
        }
    }

    console.log('positive ratio', (hash.pos/arr.length).toFixed(4))
    console.log('negative ratio', (hash.neg/arr.length).toFixed(4))
    console.log('zero ratio', (hash.zero/arr.length).toFixed(4))

}

const arr = [1, 1, 0, -1, -1]
// readLine(arr)

function timeConversion(s){
    if (s.substring(8) == 'AM' && s.substring(0, 2) == '12') {
        let convert = (parseInt(s.substring(0, 2)) - 12).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        return convert + s.substring(2, s.length -2)
    } else if (s.substring(0,2) == '12' && s.substring(8) == 'PM') {
        return s.substring(0, s.length-2)
    }else if (s.substring(8) == 'PM') {
        let convert = (parseInt(s.substring(0, 2)) + 12).toString()
        return convert + s.substring(2, s.length-2)
    } else if (s.substring(8) == 'AM') {
        return s.substring(0, s.length-2)
    } else {
        return 'malformed data'
    }
}

const time = "12:45:54PM"
// console.log(timeConversion(time))

let patterns = [
    ['aba', 'red blue red', true],
    ['abb', 'red blue red', false],
]

function patternChecker(patternA, patternB) {
    // console.log('Pattern A', patternA)
    // console.log('Pattern B', patternB)
    patternB = patternB.split(' ')

    const patternObj = {}

    for (let i = 0; i < patternA.length; i++) {
        
        if (patternObj[patternA[i]] && patternObj[patternA[i]] !== patternB[i]) {
            return false
        }

        patternObj[patternA[i]] = patternB[i]
    }
    console.log(patternObj)

    return true
}

// console.log(patternChecker(patterns[0][0], patterns[0][1]))
// console.log(patternChecker(patterns[1][0], patterns[1][1]))


// REST PARAMETERS
function add(...nums) {
    let total = 0
    // console.log(nums)
    for (let i=0; i<nums.length; i++) {
        total+=nums[i]
    }
    return total
}
const result = add(5, 10, 20)
// console.log(result)


// PROBLEM -- REMOVE STRING SPACES
function noSpace(x) {
    let spacelessString = x.split('').filter((letter)=> {
        if (letter !== ' ') {
            return true
        }
    })
    return spacelessString.join('')
}

function noSpace(x) {
    return x.split(' ').join('')
}

// console.log(noSpace('this is the string'))



// PROBLEM - find word with highest value
function high(str) {
    str = str.split(' ')
    highWord = {}
    let wordsObj = {}
    let score = 0

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphObj = {}
    for (let i=0; i<alphabet.length; i++) {
        alphObj[alphabet[i]] = i+1
    }

    // console.log(str)
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i])
        for (let j = 0; j < str[i].length; j++) {
            // console.log(str[i][j])
            score += alphObj[str[i][j]]
            // console.log(highWord)
        }
        wordsObj[str[i]] = score
        score = 0
    }
    console.log(wordsObj)
    const values = Object.values(wordsObj)
    const maxValue = Math.max(...values)
    // console.log(maxValue)
    return Object.keys(wordsObj).find(key=> wordsObj[key] === maxValue)
}

// console.log(high('take me to semnyak'))
// console.log(high('man i need a taxi up to ubud'))

// console.log(high('what time are we climbing up the volcano'))


// List of non-negative integers and strings and returns a new list with the strings filtered out.

// function filter_list(l) {
//     let filteredArr = l.filter((el)=> {
//         if (typeof el == 'number') {
//             return true
//         }
//     })
//     return filteredArr
// }

function filter_list(l) {
    return l.filter(el=>typeof el == 'number')
}
 
console.log(filter_list([1,2,'a','b'])) //== [1,2])
// console.log(filter_list([1,'a','b',0,15]) == [1,0,15])
// console.log(filter_list([1,2,'aasf','1','123',123]) == [1,2,123])