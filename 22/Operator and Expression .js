//Ex.1
//P.1
const Intersection = (array1, array2) => {
const intersectArray = [];
array1.map(
 (look) => {
     for (f = 0; f < array2.length; i++) {
         if (look === array2[f]) {
             return intersectArray.push(look)
         }
     }
 }   
)
return intersectArray
}
console.log('Intersect Array =', Intersection(['nun', 'ink', 'oat'], ['nun', 'tim']))

//P.2
const getWordLength = (wordArray) => {
    const wordLengthArray = [];
    wordArray.map(
        (kool) => {
            return wordLengthArray.push(kool.length)
        }
    )
    return wordLengthArray
}
console.log('Word Length Array =', getWordLength (['nan', 'inkna', 'oakkrub']))

//Ex.2
const numberRange = (number) => {
    const baseRange = 0;
    const firstRange = 25;
    const secondRange = 100;
    if ((number >= baseRange) && (number <= firstRange)) {
        console.log(`${number} is between ${baseRange} and ${firstRange}`)
    } else if  ((number > firstRange) && (number <= secondRange)) {
        console.log(`${number} is between ${firstRange} and ${secondRange}`)
    } else if (number > secondRange) {
        console.log(`${number} is greater that ${secondRange}`)
    } else {
        console.log(`${number} is less that ${baseRange}`)
    }
}
    
numberRange(25)
numberRange(75)
numberRange(125)
numberRange(-25)

//Challenge
const chopString = (str, numOfchar) => {
    let newStr = str.repleaceAll(' ', '');
    let strArray = newStr.split('');
    let newStrArray = strArray.map (
        (yoyo, i) => {
            if (i === strArray.length-1) {
                return yoyo
            } else if ((((i+1)%numOfchar) === 0) || (numOfchar === 1)){
                return yoyo + '-'
            } else {
                return yoyo
            }
        }
    )
    newStrArray = newStrArray.join('').split('-');
    return newStrArray
}
console.log(chopString('Just say Lalisa love me, Lalisa love me hey', 1))
console.log(chopString('Just say Lalisa love me, Lalisa love me hey', 2))
console.log(chopString('Just say Lalisa love me, Lalisa love me hey', 3))