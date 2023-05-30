function connection(){
    const name=document.getElementById("name").value
  const email=document.getElementById("email").value
  const password=document.getElementById("phone").value
  
  console.log(name,email,password)
    fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name:name,
                              email:email,
                            password:password})
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
  }