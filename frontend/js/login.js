function connection(){
    const name=document.getElementById("name").value
  const email=document.getElementById("email").value
  const phone=document.getElementById("phone").value

  console.log("hello")
  
  console.log(name,email,phone)
    fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name:name,
                              email:email,
                            phone:phone})
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
  }
  