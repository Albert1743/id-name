const form = document.forms.namedItem('nameid')

form.onsubmit = (event) => {
    event.preventDefault()

    let id = Math.floor(1000000 + Math.random() * 90000000);
    let user = {
        id: id.toString().slice(1),
        name: new FormData(form).get('name'),
        year: new Date().getFullYear() - new FormData(form).get('age')
    }

    console.log(user);
}
