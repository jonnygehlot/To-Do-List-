let old = document.querySelector('.old')
    let addNew = document.querySelector('#addNew');
    let selectAll = document.querySelector('#selectAll')
    let move = document.querySelector('#move')
    let MarkasDone = document.querySelector('#MarkasDone')
    let emptyTrash = document.querySelector('#emptyTrash')
    let aside = document.querySelector('aside')
    let tac = document.querySelector('#tac')
    let form = document.querySelector('form')
    let listing = document.querySelector('ol')
    let oltag = document.querySelector('ol')
    let Li = document.querySelector('ol li')
    let cross = document.querySelector('ol li span');
    let addCross = document.querySelector('form span');
    let showData = () => {
        let olData = ''
        Data = JSON.parse(localStorage.getItem('Data'))
        Data.forEach((e, i) => {
            olData += `<li>${e} <i class="fa-solid fa-pen-to-square"></i> <span data-cross_id = ${i}>&times;</span></li>`
            oltag.innerHTML = olData
        })
    }

    aside.addEventListener('click', (e) => {
        if (e.target.innerText == 'New') {
            old.classList.toggle('new')
            let tacdata = JSON.parse(localStorage.getItem('tacData')) ?? '';
            tac.value = tacdata
            tac.addEventListener('keyup', (e) => {
                tacdata = tac.value;
                localStorage.setItem('tacData', JSON.stringify(tacdata))
            })
        }

        else if (e.target.innerText == 'Select') {
            console.log('true')
        }
        else if (e.target.innerText == 'Move to Trash') {
            console.log('true')
        }
        else if (e.target.innerText == 'Mark as Done') {
            console.log('true')
        }
        else {
            console.log(e.target)
        }
    })

    form.addEventListener('submit', (e) => {
        let oldData = JSON.parse(localStorage.getItem('Data')) ?? [];
        oldData.push(tac.value);
        localStorage.setItem('Data', JSON.stringify(oldData))
        tac.value = '';
        showData();

        e.preventDefault()
    })

    oltag.addEventListener('click', (e) => {
        if (e.target.tagName == 'LI') {
            e.target.classList.toggle('select');
        }
        else if (e.target.tagName == 'SPAN') {
            console.log()
            let delete_index = e.target.getAttribute('data-cross_id');
            let oldData = JSON.parse(localStorage.getItem('Data'));
            oldData.splice(delete_index, 1)
            localStorage.setItem('Data', JSON.stringify(oldData))
            showData();
        }
    })


    window.addEventListener('load', () => {
        showData();
    })

    addCross.addEventListener('click', () => {
        old.classList.remove('new')
    })