const charactersAPI = new APIHandler("http://localhost:8000/characters")
let charsDiv = document.getElementById("char")
let inputChar = document.getElementById("input-one");
let inputDelete = document.getElementById("input-delete");
let formCreate = document.getElementsByClassName("form-create");
let updateForm = document.getElementsByClassName("update-form");

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
      .then(res => {
        charsDiv.innerHTML = "";
        res.data.forEach(char => {
          let charDiv = document.createElement('div');
          charDiv.innerHTML = `
      <div class="character-info">
          <div class="name">${char.name}</div>
          <div class="occupation">${char.occupation}</div>
          <div class="cartoon">Is a Cartoon?</div>
          <div class="weapon">${char.weapon}</div>
      </div>
  `;
          charsDiv.appendChild(charDiv);
        });
      })
      .catch(err => err)
  }

  document.getElementById('fetch-one').onclick = function () {
    console.log(inputChar.value)
    charactersAPI.getOneRegister(inputChar.value)
      .then(res => {
        charsDiv.innerHTML = "";
        let charDiv = document.createElement('div');
        charDiv.innerHTML = `
          <div class="character-info">
              <div class="name">${res.data.name}</div>
              <div class="occupation">${res.data.occupation}</div>
              <div class="cartoon">Is a Cartoon?</div>
              <div class="weapon">${res.data.weapon}</div>
          </div>`
        charsDiv.appendChild(charDiv);
      })
      .catch(err => err)
  }


  document.getElementById('delete-one').onclick = function () {
    console.log(inputDelete.value)
    charactersAPI.deleteOneRegister(inputDelete.value)
      .then(res => {
        charsDiv.innerHTML = "";
        let charDiv = document.createElement('div');
        charDiv.innerHTML = `
            <div class="character-info">
               <p>Delete succeeded</p>
            </div>`
        charsDiv.appendChild(charDiv);
      })
      .catch(err => err)
  }

  document.getElementById('edit-character-form').onsubmit = function () {
    let objForm = Array.from(updateForm).reduce((acc, val) => {
      acc[val.name] = val.value
      return acc
    }, {})
    console.log(objForm)
    charactersAPI.updateOneRegister(objForm)
      .then(res => {
        let charDiv = document.createElement('div');
        charDiv.innerHTML = `
    <div class="character-info">
        <div class="name">${res.data.name}</div>
        <div class="occupation">${res.data.occupation}</div>
        <div class="cartoon">Is a Cartoon?</div>
        <div class="weapon">${res.data.weapon}</div>
    </div>
`;
        charsDiv.appendChild(charDiv);
      })
      .catch(err => err)
  }

  document.getElementById('new-character-form').onsubmit = function () {
    console.log(formCreate)
    let objForm = Array.from(formCreate).reduce((acc, val) => {
      acc[val.name] = val.value
      return acc
    }, {})
    console.log(objForm)
    charactersAPI.createOneRegister(objForm)
      .then(res => {
        let charDiv = document.createElement('div');
        charDiv.innerHTML = `
    <div class="character-info">
        <div class="name">${res.data.name}</div>
        <div class="occupation">${res.data.occupation}</div>
        <div class="cartoon">Is a Cartoon?</div>
        <div class="weapon">${res.data.weapon}</div>
    </div>
`;
        charsDiv.appendChild(charDiv);
      })
      .catch(err => err)
  }
})