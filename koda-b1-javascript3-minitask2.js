// BUILT-IN METHOD
// 1. .concat()
const array1 = ["Rizal", "Afif", "Bando"];
const array2 = ["Zakky", "Rifai", "Alvin", "Chandra"];
const arrayGabung = array1.concat(array2);
console.log(arrayGabung);

// 2. every()
const array3 = [1, 2, 3, 4, 5, 6, 7];
const check1 = (n) => n < 8;
console.log(array3.every(check1));

// 3. filter()
const hasil1 = arrayGabung.filter((aG) => aG.length > 6);
console.log(hasil1);

// 4. find()
const temukan = array3.find((n) => n > 6);
console.log(temukan);

// 5. findIndex()
const angkaLebih = (n) => n > 2;
console.log(array3.findIndex(angkaLebih));

// 6. findLast()
console.log(array3.findLast(angkaLebih));

// 7. findLastIndex()
console.log(array3.findLastIndex(angkaLebih));

// 8. forEach()
arrayGabung.forEach((n) => console.log(n));

// 9. includes()
console.log(array3.includes(3));

// 10. indexOF()
console.log(arrayGabung.indexOf("Zakky"));

// 11. join()
console.log(arrayGabung.join("-"));

// 12. lastIndexOf()
console.log(arrayGabung.lastIndexOf("Zakky"));

// 13. pop()
console.log(array3.pop());
console.log(array3);

// 14. push()
console.log(arrayGabung.push("Anggi"));
console.log(arrayGabung);

// 15. reverse()
console.log(array3.reverse());

// 16. shift()
console.log(array3.shift());
console.log(array3);

// 17. unshift()
console.log(array3.unshift(9));
console.log(array3);

// 18. some()
console.log(array3.some(check1));

// 19. splice()
console.log(array3.splice(0, 1, 6));
console.log(array3);

// 20. toString()
console.log(array3.toString());

// BUILT-IN FUNCTION
// 1. isFinite()
function cekFinite(n) {
  if (isFinite(1000 / n)) {
    return "Nomor tidak infinity";
  }
  return "Nomor infinity";
}
console.log(cekFinite(0));
console.log(cekFinite(1));

// 2. isNaN()
function cekNan(n) {
  if (isNaN(n)) {
    return "Nan";
  }
  return "Bukan Nan";
}
console.log(cekNan("100"));
console.log(cekNan("Nan"));

// 3. parseFloat()
console.log(parseFloat("30.6"));

// 4. parseFloat()
console.log(parseInt("30.6"));

// 5. alert()
alert("Capek bos");
