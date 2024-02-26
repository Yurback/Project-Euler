// 1+++++++++++++++++++++++++++++++++++++++++++++
// Multiples of 3 or 5
/* <p>If we list all the natural numbers below $10$ that are multiples of $3$ or $5$, we get $3, 5, 6$ and $9$. The sum of these multiples is $23$.</p>
<p>Find the sum of all the multiples of $3$ or $5$ below $1000$.</p> */

// function sum3_5mult (num) {
//     let result=0;
//     for (let i=0; i<num;i++) {
//         if(i%3 === 0 || i%5 === 0) result += i;
//     }
//     return result;
// };

// console.log(sum3_5mult(1000)); // V

// 2 +++++++++++++++++++++++++++++++++++++++++++++
// Even Fibonacci Numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 
//  and , the first terms will be: 1 2 3 5 8 13 21 34 55 89 ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// function fibon_even_lt_4M(num) {    // num = 4 000 000 
//     let sum = 0;
//     const arrfibonachi = [1,1];
//     for (let i = 2; arrfibonachi[i-1]+arrfibonachi[i-2] <= num; i++) {
//         arrfibonachi[i] = arrfibonachi[i-1]+arrfibonachi[i-2];
//         if (arrfibonachi[i]%2===0) sum += arrfibonachi[i];
//     }
//     console.log(arrfibonachi);
//     return sum;
// }

// console.log(fibon_even_lt_4M(4000000)); // V

// 3 +++++++++++++++++++++++++++++++++++++++++++++
// Largest Prime Factor
// The prime factors of 13195 are 5 7 13 29
// What is the largest prime factor of the number 600 851 475 143 ?


// function isPrime(num) {
//     const pivot = Math.sqrt(num);
//     for (let i=2; i<=pivot; i++) {
//         if (num%i ===0) return false;
//     }
//     return true;
// }
// function largPrimFactor(num) {
//     console.log(num);
//     const factors = [];
//     const largfactors = [];
//     let pivot = Math.sqrt(num);
//     console.log(pivot);
//     for (let i=2; i<=pivot; i++) {
//         if(num%i === 0) {
//             factors.push(i);
//             largfactors.push(num/i);
//         }
//     }
//     console.log(factors);
//     console.log(largfactors);
//     for(let i=0; i<largfactors.length; i++) {
//         console.log(isPrime(largfactors[i]));
//         if(isPrime(largfactors[i])) return true;
//     }
//     for(let i=factors.length-1; i>=0; i--) {
//         console.log(factors[i]);
//         console.log(isPrime(factors[i]));
//         if(isPrime(factors[i])) return factors[i];
//     }
// //     let pivot = Math.floor(num^(1/2));
// //     for (let i = pivot; i <)
// }

// console.log(largPrimFactor(600851475143)); // Answer is 6857 V

// 4 +++++++++++++++++++++++++++++++++++++++++++++
// Largest Palindrome Product
/* <p>A palindromic number reads the same both ways. The largest palindrome made from the product of two $2$-digit numbers is $9009 = 91 \times 99$.</p>
<p>Find the largest palindrome made from the product of two $3$-digit numbers.</p> */

// function findPalindrom() {
//     let palindrom = 0 ;  // x0000x

//     for (let x = 999; x>0; x--) {
//         for(let y = 999; y>0; y--) {
//             let product = x*y;
//             if (product>100000) {
//                 const a = Math.floor(product/100000);
//                 const b = Math.floor((product-a*100000)/10000);
//                 const c = Math.floor((product - a*100000 - b*10000)/1000);
//                 const d = Math.floor((product - a*100000 - b*10000 - c*1000)/100);
//                 const e = Math.floor((product - a*100000 - b*10000 - c*1000 - d*100)/10);
//                 const f = product - a*100000 - b*10000 - c*1000 - d*100 - e*10;
//                 // console.log(product);
//                 // console.log(a,b,c,d,e,f);
//                 if (a == f && b==e && c==d) {
//                     if (product > palindrom) {
//                         palindrom = product;
//                         console.log(palindrom);
//                     }
//                 }
//             }
//         }
//     }
//     return palindrom;   
// }

// console.log(findPalindrom());

// 5 +++++++++++++++++++++++++++++++++++++++++++++
// Smallest Multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?

// function smallMulti(num) {
//     let search = 1;

//         for(let i = 1; i<=num; i++) {
//             if(search%i !== 0) {
//                 search++;
//                 i=1; 
//             }
//         }
//     return search;
// }

// console.log(smallMulti(20));

// 6 +++++++++++++++++++++++++++++++++++++++++++++
// Sum Square Difference
/* <p>The sum of the squares of the first ten natural numbers is,</p>
$$1^2 + 2^2 + ... + 10^2 = 385.$$
<p>The square of the sum of the first ten natural numbers is,</p>
$$(1 + 2 + ... + 10)^2 = 55^2 = 3025.$$
<p>Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is $3025 - 385 = 2640$.</p>
<p>Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.</p> */

// function findDiff(num) {
//     let sum = (num / 2) * (num + 1);
//     console.log(sum)
//     let squaresum = sum ** 2;
//     console.log(squaresum)
//     let sumOfsquare = 0;
//     for (let i = 0; i <= num; i++) {
//         sumOfsquare += i ** 2;
//     }
//     console.log(sumOfsquare);
//     let result = squaresum - sumOfsquare;
//     console.log(result);
// }

// findDiff(100);

// 7 +++++++++++++++++++++++++++++++++++++++++++++
// 10001st Prime
// By listing the first six prime numbers: 2 3 5 7 11 and 13 we can see that the 6th prime is 13.
// What is the 10001st prime number?

// function isPrime(num) {
//     const pivot = Math.sqrt(num);
//     for (let i = 2; i <= pivot; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// function findPrime(pos) {
//     const arrPrime = [2];
//     let num = 3;
//     while (!arrPrime[pos-1]) {
//         if (isPrime(num)) {
//             arrPrime.push(num);
//             num++;
//         } else {
//             num++
//         }
//     }
//     console.log(arrPrime);
//     console.log(arrPrime[pos-1]);

// }

// findPrime(10001); //104743

// 8 +++++++++++++++++++++++++++++++++++++++++++++
// Largest Product in a Series

// let str = `73167176531330624919225119674426574742355349194934
// 96983520312774506326239578318016984801869478851843
// 85861560789112949495459501737958331952853208805511
// 12540698747158523863050715693290963295227443043557
// 66896648950445244523161731856403098711121722383113
// 62229893423380308135336276614282806444486645238749
// 30358907296290491560440772390713810515859307960866
// 70172427121883998797908792274921901699720888093776
// 65727333001053367881220235421809751254540594752243
// 52584907711670556013604839586446706324415722155397
// 53697817977846174064955149290862569321978468622482
// 83972241375657056057490261407972968652414535100474
// 82166370484403199890008895243450658541227588666881
// 16427171479924442928230863465674813919123162824586
// 17866458359124566529476545682848912883142607690042
// 24219022671055626321111109370544217506941658960408
// 07198403850962455444362981230987879927244284909188
// 84580156166097919133875499200524063689912560717606
// 05886116467109405077541002256983155200055935729725
// 71636269561882670428252483600823257530420752963450`.split('\n').join('');

// The four adjacent digits in the 1000 
// -digit number that have the greatest product are 9*9*8*9=5832

//  Find the thirteen adjacent digits in the 13
// -digit number that have the greatest product. What is the value of this product?

// function findadjecents(QuantatySib) {
//     let maxproduct = 0;
//     let arrnum = []
//     for(let i = 0; i<str.length; i++) {
//         const newstr = str.slice(i,QuantatySib+i);
//         let product = 1;
//         for (let j=0; j<newstr.length; j++) {
//             let n = parseInt(newstr[j]);
//             product = product * n;
//         }
//         if (product > maxproduct) {
//             maxproduct = product;
//             arrnum = [...newstr];
//             console.log(maxproduct);
//         }
//     }
//     return {
//         maxproduct: maxproduct,
//         members: arrnum
//         }
//  }
//  console.log(findadjecents(13));

// 9 +++++++++++++++++++++++++++++++++++++++++++++
// Special Pythagorean Triplet
/* <p>A Pythagorean triplet is a set of three natural numbers, $a \lt b \lt c$, for which,
$$a^2 + b^2 = c^2.$$</p>
<p>For example, $3^2 + 4^2 = 9 + 16 = 25 = 5^2$.</p>
<p>There exists exactly one Pythagorean triplet for which $a + b + c = 1000$.<br>Find the product $abc$.</p> */

// function check(a,b,c) {
//         if ((a**2 + b**2)==c**2 && (a+b+c)==1000) return true;
//         return false;
// }

// function PythTriplet() {
//         for(let a=0; a<1000; a++) {
//                 for (let b=a+1; b<1000; b++) {
//                         for(let c=b+1; c<1000; c++) {
//                                 // console.log([a,b,c]);
//                                 if(check(a,b,c)) {
//                                         return {
//                                         a: a,
//                                         b: b,
//                                         c: c
//                                         }
//                                 }
//                         }
//                 }
//         }
// }

// console.log(PythTriplet());

// 10 +++++++++++++++++++++++++++++++++++++++++++++
// Summation of Primes
// The sum of the primes below 10
//  is 2+3+5+7=17
// Find the sum of all the primes below two million.

// function isPrime(num) {
//     const pivot = Math.sqrt(num);
//     for (let i = 2; i <= pivot; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// function findPrime(total) {
//     const arrPrime = [2];
//     let num = 3;
//     let pos = 0;
//     while (arrPrime[pos]<2000000) {
//         if (isPrime(num)) {
//             arrPrime.push(num);
//             num++;
//             pos++;
//         } else {
//             num++
//         }
//     }
//     console.log(arrPrime);
//     console.log(arrPrime[pos]);
//     arrPrime.pop();
//     console.log(arrPrime.reduce((sum,element)=>sum+element));

// }

// findPrime();

// 11 +++++++++++++++++++++++++++++++++++++++++++++
// Largest Product in a Grid

/* <p>The product of these numbers is $26 \times 63 \times 78 \times 14 = 1788696$.</p>
<p>What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the $20 \times 20$ grid?</p> */

// let matrix = [
//         [08,02, 22, 97, 38, 15,00, 40,00, 75,04,05,07, 78, 52, 12, 50, 77, 91,08],
//         [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48,04, 56, 62,00],
//         [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30,03, 49, 13, 36, 65],
//         [52, 70, 95, 23,04, 60, 11, 42, 69, 24, 68, 56,01, 32, 56, 71, 37,02, 36, 91],
//         [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
//         [24, 47, 32, 60, 99,03, 45,02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
//         [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
//         [67, 26, 20, 68,02, 62, 12, 20, 95, 63, 94, 39, 63,08, 40, 91, 66, 49, 94, 21],
//         [24, 55, 58,05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
//         [21, 36, 23,09, 75,00, 76, 44, 20, 45, 35, 14,00, 61, 33, 97, 34, 31, 33, 95],
//         [78, 17, 53, 28, 22, 75, 31, 67, 15, 94,03, 80,04, 62, 16, 14,09, 53, 56, 92],
//         [16, 39,05, 42, 96, 35, 31, 47, 55, 58, 88, 24,00, 17, 54, 24, 36, 29, 85, 57],
//         [86, 56,00, 48, 35, 71, 89,07,05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
//         [19, 80, 81, 68,05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77,04, 89, 55, 40],
//         [04, 52,08, 83, 97, 35, 99, 16,07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
//         [88, 36, 68, 87, 57, 62, 20, 72,03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
//         [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18,08, 46, 29, 32, 40, 62, 76, 36],
//         [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74,04, 36, 16],
//         [20, 73, 35, 29, 78, 31, 90,01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57,05, 54],
//         [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52,01, 89, 19, 67, 48]
// ];

// function findProduct(matrix) {
//         let maxproduct = 0;
//         let obj = {};
//         // diagonal check 1
//         for (let i = 0; i < matrix.length - 3; i++) {
//                 for (let j = 0; j < matrix[i].length - 3; j++) {
//                         let product = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] * matrix[i + 3][j + 3];
//                         if (product > maxproduct) {
//                                 maxproduct = product;
//                                 obj = { 1: matrix[i][j], 2: matrix[i + 1][j + 1], 3: matrix[i + 2][j + 2], 4: matrix[i + 3][j + 3], direction: "d1" };
//                         }
//                 }
//         }
//         // diagonal check 2
//         for (let i = 0; i < matrix.length - 3; i++) {
//                 for (let j = 3; j < matrix[i].length; j++) {
//                         let product = matrix[i][j] * matrix[i + 1][j - 1] * matrix[i + 2][j - 2] * matrix[i + 3][j - 3];
//                         if (product > maxproduct) {
//                                 maxproduct = product;
//                                 obj = { 1: matrix[i][j], 2: matrix[i + 1][j - 1], 3: matrix[i + 2][j - 2], 4: matrix[i + 3][j - 3], direction: "d2" };
//                         }
//                 }
//         }
//         // gorisontal check
//         for (let i = 0; i < matrix.length; i++) {
//                 for (let j = 0; j < matrix[i].length - 3; j++) {
//                         let product = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
//                         if (product > maxproduct) {
//                                 maxproduct = product;
//                                 obj = { 1: matrix[i][j], 2: matrix[i][j + 1], 3: matrix[i][j + 2], 4: matrix[i][j + 3], direction: "gorisont" };
//                         }
//                 }
//         }
//         // vertical check
//         for (let i = 0; i < matrix.length-3; i++) {
//                 for (let j = 0; j < matrix[i].length; j++) {
//                         let product = matrix[i][j] * matrix[i+1][j] * matrix[i+2][j] * matrix[i+3][j];
//                         if (product > maxproduct) {
//                                 maxproduct = product;
//                                 obj = { 1: matrix[i][j], 2: matrix[i+1][j], 3: matrix[i+2][j], 4: matrix[i+3][j], direction: "vertical"};
//                         }
//                 }
//         }

//         console.log(maxproduct);
//         console.log(obj);
// };

// findProduct(matrix);

// 12 +++++++++++++++++++++++++++++++++++++++++++++
// Highly Divisible Triangular Number
/* <p>The sequence of triangle numbers is generated by adding the natural numbers. So the $7$<sup>th</sup> triangle number would be $1 + 2 + 3 + 4 + 5 + 6 + 7 = 28$. The first ten terms would be:
$$1, 3, 6, 10, 15, 21, 28, 36, 45, 55, \dots$$</p>
<p>Let us list the factors of the first seven triangle numbers:</p>
\begin{align}
\mathbf 1 &amp;\colon 1\\
\mathbf 3 &amp;\colon 1,3\\
\mathbf 6 &amp;\colon 1,2,3,6\\
\mathbf{10} &amp;\colon 1,2,5,10\\
\mathbf{15} &amp;\colon 1,3,5,15\\
\mathbf{21} &amp;\colon 1,3,7,21\\
\mathbf{28} &amp;\colon 1,2,4,7,14,28
\end{align}
<p>We can see that $28$ is the first triangle number to have over five divisors.</p>
<p>What is the value of the first triangle number to have over five hundred divisors?</p> */

// function sumseriesnum(n) {
//         return (n/2)*(n+1);
// }

// function factortoArray(n) {
//         let arr = [1];
//         for (let i =2; i<Math.sqrt(n); i++) {
//                 if(n%i===0) {
//                         arr.push(i);
//                         arr.push(n/i);
//                 }
//         }
//         arr.push(n);
//         return arr;
// }

// function findnumber(numDivisors) {
//         let testarr = [];
//      for(let i=2; testarr.length<numDivisors; i++) {
//         let triang = sumseriesnum(i);
//         testarr = factortoArray(triang);
//         if (testarr.length>numDivisors) return triang;
//         testarr=[];
//      }
// }

// console.log(sumseriesnum(12374));
// console.log(factortoArray(76564125));

// console.log(findnumber(500));