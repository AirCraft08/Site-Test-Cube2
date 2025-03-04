
async function getArticles
() {
    const url = "http://127.0.0.1:8001/api/articles";
    let tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    await fetch(url)
    .then(res => res.json())
    .then(data => {
        data.articles.forEach(article => {
            let newRow = tableRef.insertRow(tableRef.rows.length);
            newRow.innerHTML = `<tr><td>${article.id}</td><td>${article.titre}</td><td>${article.description}</td><td><a href="show-article.html" class="btn btn-info"><i data-feather="eye"></i></a><a href="" class="btn btn-warning"><i data-feather="edit"></i></a><a href="" class="btn btn-danger"><i data-feather="trash-2"></i></a></td></tr>`;
        });
        feather.replace();
    })
}


getArticles();
