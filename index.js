const emailReceiver = 'rhomairama.dev@gmail.com'

function submitForm(event) {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let number = document.getElementById('number').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value

    if(name == '') {
        alert('Belum mengisi nama')
    }

    if(email == '') {
        alert('Belum mengisi email')
    }

    if(number == '') {
        alert('Belum mengisi nomor hp')
    }

    if(subject == '') {
        alert('Pilih subject pilihan mu')
    }

    if(message == '') {
        alert('Cepat isi pesan')
    }

    console.log(name)
    console.log(email)
    console.log(number)
    console.log(subject)
    console.log(message)

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${message}`
    a.click()

    let dataObject = { name, email, number, subject, message }
    console.log(dataObject)
} 