function showHide() {
    const title = document.getElementById('title');
    const showAll = document.getElementById('show-all')

    if (title.style.display !== 'block') { // если блок скрыт
        title.style.display = 'block'; // открываем его
        showAll.innerText = 'Show less'
    } else { // если открыт
        title.style.display = 'none'; // скрываем
        showAll.innerText = 'Show all'
    }
}