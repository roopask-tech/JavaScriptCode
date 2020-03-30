let headings = ["Name", "Email", "Age",, "Edit/Delete"]
var count = 0;
const contacts = [
    { name: "Krish", email: "krish.w@gmail.com", age: "22" },
    { name: "Ramesh", email: "ramesh.k@gmail.com", age: "22" },
    { name: "Manoja", email: "manoja.n@gmail.com", age: "22" },
    { name: "Kavya", email: "kavya.w@gmail.com", age: "22" },
    { name: "Ananya", email: "ananya.a@gmail.com", age: "22" }
];


document.querySelector("#submit").removeAttribute('disabled');  //// starting submit button is enabel
document.querySelector("#submit2").setAttribute('disabled',true);


const editContact = (email) => {
    count = 0;
    contacts.forEach(c => {
        count += 1;

       if (c.email == email) {
            console.log(count);
            document.querySelector("#email").setAttribute('disabled',true);
            document.querySelector("#submit").setAttribute('disabled',true);   ///////after edit button clicked submit button enabled
            document.querySelector("#submit2").removeAttribute('disabled');
            contactform.name.value = c.name;
            contactform.email.value = c.email;
            contactform.age.value = c.age;
        }
    });
}
submit2.addEventListener("click", (event) => {
    alert("Are you ok to Update...")
    event.preventDefault();
    let name = contactform.name.value;                            // passing the value of name in the form to the variable
    let age = contactform.age.value;                             //passing the value of age in the form to the  variable  age
    let email = contactform.email.value;
    const contact = { name, age, email };
    count--;
    contacts.splice(count, 1, contact);
    count = 0;
    console.log(contacts)
    showtable();
});

const deleteContact = (email) => {
    alert `Are you sure to delete email:`
    count = 0;
    event.preventDefault();
    contacts.forEach(c => {
        count += 1;

        if (c.email == email) {
            i = count - 1;
            console.log(i);
            contacts.splice(i, 1);
            console.log(contacts)
            count = 0;
        }
    });
    showtable();
}

const showtable = () => {
    let table = "<table class='table table-striped'>";
    table += "<tr>";
    headings.forEach(h => {
        table += `<th>${h}</th>`
    })
    table += "</tr>";
    contacts.forEach(c => {
        table += "</tr>";
        table += `<td>${c.name}</td><td>${c.email}</td><td>${c.age}</td>
           <td>
           <i class='fa fa-edit ml-2' onclick="editContact('${c.email}')">
           <i class='fa fa-trash ml-2' onclick="deleteContact('${c.email}')"></td>`;
        table += "</tr>";

    })
    table += "</table>";
    content.innerHTML = table;
};


submit.addEventListener("click", (event) => {
    event.preventDefault();
    let name = contactform.name.value;                            // passing the value of name in the form to the variable
    let age = contactform.age.value;                             //passing the value of age in the form to the  variable  age
    let email = contactform.email.value;
    const contact = { name, age, email };                          // we should alwways pass the value into the array as the block
    console.log(contact);
    contacts.push(contact);
    contactform.reset();
    showtable();
})


showtable();