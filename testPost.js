function setStatusMessage(eltId,msg,reset=true) {
    if (reset) {
      document.getElementById(eltId).innerHTML=msg;
    }
    else {
      document.getElementById(eltId).insertAdjacentHTML("beforeend",msg)
    }
         
  }

async function register() {
    const registerForm = document.querySelector('#registerForm');
    const formData = new FormData(registerForm);
    const data = Object.fromEntries(formData);
    const jsonData = JSON.stringify(data, null, 2);
    console.log("form: "+jsonData);

    try {
        const response = await fetch('//localhost:3000', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: jsonData
        })
        const data = await response.json();
        setStatusMessage("message",`from server: ${data}`)
       

    } catch (error) {
        return { error: error.message || 'Unknown error' };
    }

   
 
}
