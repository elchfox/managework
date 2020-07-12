
class Account {


  async Login(login) {
    
    const data = await fetch(`${global.apiUrl}/account/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(login)
    })

    const json = await data.json();
    return json
  }

  async SignUp(object) {
    
    const data = await fetch(`${global.apiUrl}/account/signUp`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(object)
    })

    const json = await data.json();
    return json
  }
}


export default new Account();