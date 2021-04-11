function main() {
  const inputEmail = document.querySelector("input[type='email']")
  const inputPassword = document.querySelector("input[type='password']")
  const submitButton = document.querySelector(".login_button")

  if(submitButton){
    submitButton.onclick = (event) => {
      event.preventDefault()
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          "email": inputEmail.value,
          "password": inputPassword.value
        })
      }).then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data)
      })
    }
  }
}

window.onload = main()