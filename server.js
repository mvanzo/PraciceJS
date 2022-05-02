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
console.log(patternChecker(patterns[1][0], patterns[1][1]))