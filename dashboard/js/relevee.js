async function getRelevee() {
    const url = "http://127.0.0.1:8000/api/relevees";
    let tableRef = document.getElementById('table-relevees');
    await fetch(url)
        .then(res => res.json())
        .then(data => {
            data["relevees"].forEach(temp => {
                let newRow = tableRef.insertRow();
                newRow.innerHTML = `<tr><td>${temp.id}</td><td>${temp.temperature}</td><a href="" class="btn btn-info"><i data-feather="eye"></i></a><a href="" class="btn btn-warning"><i data-feather="edit"></i></a><a href="" class="btn btn-danger"><i data-feather="trash-2"></i></a></td></tr>`;
            });
            feather.replace();
        })
}

getRelevee();