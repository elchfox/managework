
class Account {

  async SignUp(object) {
    console.log(`${global.apiUrl}/account/signUp`);
    
    const data = await fetch(`${global.apiUrl}/account/signUp`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object)
    }) 
    const json = await data.json();
    console.log(json)
    return json
  }
}

export default new Account();