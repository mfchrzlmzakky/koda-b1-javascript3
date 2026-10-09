function absensi(nama, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nama === "John" || nama === "Ed" || nama == "Jane") {
        resolve(`${nama} telah hadir`);
      } else {
        reject(`${nama} siapa mpruy?`);
      }
    }, delay);
  });
}

absensi("John", 1500)
  .then((n) => {
    console.log(n);
    return absensi("Ed", 2000);
  })
  .then((n) => {
    console.log(n);
    return absensi("Jane", 500);
  })
  .then((n) => {
    console.log(n);
  })
  .catch((err) => {
    console.error("Error: ", err);
  });

async function kehadiran() {
  try {
    const absen1 = await absensi("John", 1500);
    console.log(absen1);
    const absen2 = await absensi("Ed", 2000);
    console.log(absen2);
    const absen3 = await absensi("Jane", 500);
    console.log(absen3);
  } catch (err) {
    console.error("Error: ", err);
  }
}
kehadiran();
