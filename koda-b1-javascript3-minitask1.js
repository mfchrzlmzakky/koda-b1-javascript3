// Built-in Method
const nomor = [2, 4, 6, 8, 1, 3, 5, 7];
nomor.sort();
console.log(nomor);

// Proses Manual
const nomor2 = [2, 4, 6, 8, 1, 3, 5, 7];

for (let i = 0; i < nomor2.length; i++) {
  if (nomor2[i] > nomor2[i + 1]) {
    const nomor3 = nomor2[i];
    nomor2[i] = nomor2[i + 1];
    nomor2[i + 1] = nomor3;
  }
}
console.log(nomor2);
