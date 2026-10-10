const url = "https://jsonplaceholder.typicode.com/users";

// THEN-CATCH WITH BUILT-IN METHOD
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const hasilEmail = data.map((n) => n.email);
    const emailLowerCase = hasilEmail.map((n) => n.toLowerCase());
    emailLowerCase.forEach((n) => {
      console.log(n);
    });
  })
  .catch((err) => {
    console.error(`Error: ${err}`);
  });

// ASYNC-AWAIT WITH BUILT-IN METHOD
async function getEmail() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const hasilEmail = data.map((n) => n.email);
    const emailLowerCase = hasilEmail.map((n) => n.toLowerCase());
    emailLowerCase.forEach((n) => {
      console.log(n);
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
getEmail();

// THEN-CATCH WITHOUT BUILT-IN METHOD
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let lowerCaseEmails = [];
    for (let i = 0; i < data.length; i++) {
      let lowerCaseEmail = "";
      const emailData = data[i].email;
      for (let j = 0; j < emailData.length; j++) {
        let emailDataCode = emailData.charCodeAt(j);
        if (emailDataCode >= 65 && emailDataCode <= 90) {
          emailDataCode += 32;
          lowerCaseEmail += String.fromCharCode(emailDataCode);
        } else {
          lowerCaseEmail += emailData[j];
        }
      }
      lowerCaseEmails.push(lowerCaseEmail);
    }
    lowerCaseEmails.forEach((n) => {
      console.log(n);
    });
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });

// ASYNC-AWAIT WITHOUT BUILT-IN METHOD
async function getEmail() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    let lowerCaseEmails = [];
    for (let i = 0; i < data.length; i++) {
      let lowerCaseEmail = "";
      const emailData = data[i].email;
      for (let j = 0; j < emailData.length; j++) {
        let emailDataCode = emailData.charCodeAt(j);
        if (emailDataCode >= 65 && emailDataCode <= 90) {
          emailDataCode += 32;
          lowerCaseEmail += String.fromCharCode(emailDataCode);
        } else {
          lowerCaseEmail += emailData[j];
        }
      }
      lowerCaseEmails.push(lowerCaseEmail);
    }
    lowerCaseEmails.forEach((n) => {
      console.log(n);
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
getEmail();
