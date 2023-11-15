function getYear() {
    const year = document.getElementById('year');
    const data = new Date();
    const ano = data.getFullYear();

    year.innerText = ano;
}

getYear();