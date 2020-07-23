
class Customer {


  async add(obj) {
    
    const data = await fetch(`${global.apiUrl}/customer/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': global.accessToken

      },
      body: JSON.stringify(obj)
    })

    const json = await data.json();
    return json;
  }

  async CustomerId(id) {
    const data = await fetch(`${global.apiUrl}/customer/Customer/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'authorization': global.accessToken

      },
    });

    const json = await data.json();
    console.log(json);
    return json;
  }

  async myCustomers() {
    console.log(global.userId);
    const data = await fetch(`${global.apiUrl}/customer/myCustomers?userId=${global.userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'authorization': global.accessToken
      }
    });
    console.log(data);

    const json = await data.json();
    return json;
  }

  async Search(name) {
    const data = await fetch(`${global.apiUrl}/customer/Search?search=${name}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'authorization': global.accessToken

      }
    });

    const json = await data.json();
    return json;
  }
  
}


export default new Customer();