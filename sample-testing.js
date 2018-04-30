const R = require('./ramda');
const log = console.log;

// adjust
// console.log(R.adjust(R.add(10), 1, [1, 2, 3]));//=> [1, 12, 3]
// console.log(R.adjust(R.add(10))(1)([1, 2, 3]));

var isClub = R.propEq('suit', '♣');
var isSpade = R.propEq('suit', '♠');
var isBlackCard = R.anyPass([isClub, isSpade]);

console.log(isBlackCard({ rank: '10', suit: '♣' })); //=> true
console.log(isBlackCard({ rank: 'Q', suit: '♠' })); //=> true
console.log(isBlackCard({ rank: 'Q', suit: '♦' })); //=> false

var t = R.always('Tee');
console.log(t()); //=> 'Tee'

var mergeThree = (a, b, c) => [].concat(a, b, c);
mergeThree(1, 2, 3); //=> [1, 2, 3]
log(R.flip(mergeThree)(1, 2, 3)); //=> [2, 1, 3]

var printXPlusFive = x => log(x + 5);
R.forEach(printXPlusFive)([1, 2, 3]); //=> [1, 2, 3]
// logs 6
// logs 7
// logs 8

var byGrade = R.groupBy(function(student) {
    var score = student.score;
    return score < 65 ? 'F' :
        score < 70 ? 'D' :
        score < 80 ? 'C' :
        score < 90 ? 'B' : 'A';
});
var students = [{ name: 'Abby', score: 84 },
    { name: 'Eddy', score: 58 },
    // ...
    { name: 'Jack', score: 69 }
];
log(byGrade(students));
// {
//   'A': [{name: 'Dianne', score: 99}],
//   'B': [{name: 'Abby', score: 84}]
//   // ...,
//   'F': [{name: 'Eddy', score: 58}]
// }

log(R.reduce(R.subtract, 0, [1, 2, 3, 4]));

var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
var namesByGrade = reduceToNamesBy(function(student) {
    var score = student.score;
    return score < 65 ? 'F' :
        score < 70 ? 'D' :
        score < 80 ? 'C' :
        score < 90 ? 'B' : 'A';
});
var students = [{ name: 'Lucy', score: 92 },
    { name: 'Drew', score: 85 },
    // ...
    { name: 'Bart', score: 62 }
];
log(namesByGrade(students));
// {
//   'A': ['Lucy'],
//   'B': ['Drew']
//   // ...,
//   'F': ['Bart']
// }

log(R.reduceRight(R.subtract, 0, [1, 2, 3, 4])) // => (1 - (2 - (3 - (4 - 0)))) = -2

var isOdd = (acc, x) => x % 2 === 1;
var xs = [1, 3, 5, 60, 777, 800];
log(R.reduceWhile(isOdd, R.add, 0, xs)); //=> 9
var ys = [2, 4, 6];
log(R.reduceWhile(isOdd)(R.add, 111, ys)); //=> 111

var isEven = n => n % 2 === 0;
log(R.filter(isEven, [1, 2, 3, 4])); //=> [2, 4]
log(R.filter(isEven, { a: 1, b: 2, c: 3, d: 4 })); //=> {b: 2, d: 4}

var isOdd = (n) => n % 2 === 1;
log(R.reject(isOdd, [1, 2, 3, 4])); //=> [2, 4]
log(R.reject(isOdd, { a: 1, b: 2, c: 3, d: 4 })); //=> {b: 2, d: 4}

log(R.remove(2, 3, [1, 2, 3, 4, 5, 6, 7, 8])); //=> [1,2,6,7,8]

log(R.times(R.identity, 5)); //=> [0, 1, 2, 3, 4]
R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']

var obj = {};
var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
log(repeatedObjs);
log(repeatedObjs[0] === repeatedObjs[1]); //=> true

log(R.reverse([1, 2, 3])); //=> [3, 2, 1]
log(R.reverse([1, 2])); //=> [2, 1]
log(R.reverse([1])); //=> [1]
log(R.reverse([])); //=> []

log(R.reverse('abc')); //=> 'cba'
log(R.reverse('ab')); //=> 'ba'
log(R.reverse('a')); //=> 'a'
log(R.reverse('')); //=> ''

var numbers = [1, 2, 3, 4];
var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
log(factorials);

log(R.slice(1, 3, ['a', 'b', 'c', 'd'])); //=> ['b', 'c']
log(R.slice(1, Infinity, ['a', 'b', 'c', 'd'])); //=> ['b', 'c', 'd']
log(R.slice(0, -1, ['a', 'b', 'c', 'd'])); //=> ['a', 'b', 'c']
log(R.slice(-3, -1, ['a', 'b', 'c', 'd'])); //=> ['b', 'c'] 'ram'

var diff = function(a, b) { return a - b; };
log(R.sort(diff, [4, 2, 7, 5])); //=> [2, 4, 5, 7]

var sortByFirstItem = R.sortBy(R.prop(0));
var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
var pairs = [
    [-1, 1],
    [-2, 2],
    [-3, 3]
];
log(sortByFirstItem(pairs)); //=> [[-3, 3], [-2, 2], [-1, 1]]
var alice = {
    name: 'ALICE',
    age: 101
};
var bob = {
    name: 'Bob',
    age: -10
};
var clara = {
    name: 'clara',
    age: 314.159
};
var people = [clara, bob, alice];
log(sortByNameCaseInsensitive(people)); //=> [alice, bob, clara]

var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
var yellGreeting = R.compose(R.toUpper, classyGreeting);
log(yellGreeting('James', 'Bond')); //=> "THE NAME'S BOND, JAMES BOND"