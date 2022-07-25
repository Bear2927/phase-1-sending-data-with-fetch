// Add your code here

function submitData(name, email) {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(resp => resp.json())
    .then(console.log)
    .catch(error => console.log(error.message))
}

submitData('Steve', 'steve@steve.com')
