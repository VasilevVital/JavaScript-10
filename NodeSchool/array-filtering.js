/**
 * Created by joshua on 10/26/15.
 */
var numbers = [1,2,3,4,5,6,7,8,9,10];
var filtered = numbers.filter(evenNumbers);

function evenNumbers (number) {
    return number % 2 == 0;
}
console.log(filtered);