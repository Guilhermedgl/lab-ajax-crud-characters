class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(this.BASE_URL)
      .then((res) => {
        const charInfo = document.getElementById('char-container');
        charInfo.innerHTML = '';
        res.data.forEach((element) => {
          charInfo.innerHTML += `
        <div class="character-info">
        <div class="weapon">ID: ${element.id}</div>
        <div class="name">Name: ${element.name}</div>
        <div class="occupation">Occupation: ${element.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
        <div class="weapon">Weapon: ${element.weapon}</div>
      </div>
        `;
        });
      })
      .catch(error => console.log(error));
  }

  getOneRegister() {
    const id = document.getElementById('findOne').value;
    axios.get(`${this.BASE_URL}/${id}`)
      .then((res) => {
        const charInfo = document.getElementById('char-container');
        charInfo.innerHTML = '';
        charInfo.innerHTML += `
        <div class="character-info">
        <div class="weapon">ID: ${res.data.id}</div>
        <div class="name">Name: ${res.data.name}</div>
        <div class="occupation">Occupation: ${res.data.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${res.data.cartoon}</div>
        <div class="weapon">Weapon: ${res.data.weapon}</div>
      </div>
        `;
      })
      .catch(error => console.log(error));
  }

  createOneRegister() {
    const name = document.getElementById('new-name').value;
    const occupation = document.getElementById('new-occupation').value;
    const weapon = document.getElementById('new-weapon').value;
    const cartoon = document.getElementById('new-cartoon').value;
    const obj = {
      name,
      weapon,
      cartoon,
      occupation,
    };
    axios.post(this.BASE_URL, obj)
      .then(() => this.getFullList())
      .catch(error => console.log(error));
  }

  updateOneRegister() {
    const id = document.getElementById('edit-id').value;
    const name = document.getElementById('edit-name').value;
    const occupation = document.getElementById('edit-occupation').value;
    const weapon = document.getElementById('edit-weapon').value;
    const cartoon = document.getElementById('edit-cartoon').value;
    const obj = {
      name,
      weapon,
      cartoon,
      occupation,
    };
    axios.put(`${this.BASE_URL}/${id}`, obj)
      .then(() => this.getFullList())
      .catch(error => console.log(error));
  }

  deleteOneRegister() {
    const id = document.getElementById('deleteOne').value;
    axios.delete(`${this.BASE_URL}/${id}`)
      .then(() => this.getFullList())
      .catch(error => console.log(error));
  }
}
