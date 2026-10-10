const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const hasilEmail = [];
//     const emailLowerCase = [];
//     data.forEach((n) => {
//       hasilEmail.push(n.email);
//     });
//     hasilEmail.forEach((n) => {
//       emailLowerCase.push(n.toLowerCase());
//     });
//     emailLowerCase.forEach((n) => {
//       console.log(n);
//     });
//   })
//   .catch((err) => {
//     console.error(`Error: ${err}`);
//   });

async function getEmail() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const hasilEmail = [];
    const emailLowerCase = [];
    data.forEach((n) => {
      hasilEmail.push(n.email);
    });
    hasilEmail.forEach((n) => {
      emailLowerCase.push(n.toLowerCase());
    });
    emailLowerCase.forEach((n) => {
      console.log(n);
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
getEmail();
