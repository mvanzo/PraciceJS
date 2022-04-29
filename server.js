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
readLine(arr)