

console.log("bonjour");

let btnTitre2 = document.getElementById("btn-titre-2");
let btnTitre = document.getElementById('btn-titre');
let h1 = document.getElementById('titre');
let titre = h1.textContent;

btnTitre2.addEventListener("click", function() {
    h1.textContent = "TITRE 2";
});

function changerTitre() {
    h1.textContent = "TITRE 1";
}

function changerTitrebis() {
    h1.textContent = "Titre58";
}





async function getUsers() {
    const url = "http://127.0.0.1:8000/api/utilisateurs";
    let tableRef = document.getElementById('table-utilisateur');
    await fetch(url)
    .then(res => res.json())
    .then(data => {
        data["users"].forEach(user => {
            let newRow = tableRef.insertRow();
            newRow.innerHTML = `<tr><td>${user.id}</td><td>${user.prenom}</td><td>${user.name}</td><td>${user.email}</td><td><a href="" class="btn btn-info"><i data-feather="eye"></i></a><a href="" class="btn btn-warning"><i data-feather="edit"></i></a><a href="" class="btn btn-danger"><i data-feather="trash-2"></i></a></td></tr>`;
            console.log(`Nom : ${user.name} , Email : ${user.email}`)
        });
        feather.replace();
    })
}





getUsers();
