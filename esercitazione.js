const nameInput = document.getElementById('petName')
const surnameInput = document.getElementById('ownerName')
const phoneInput = document.getElementById('species')
const emailInput = document.getElementById('breed')

const saveButton = document.querySelector('form button') 


const pets = [] 


class Contact {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
}

const fillRowWithCards = function () {

  const row = document.getElementById('pets')

  row.innerHTML = ''

  pets.forEach((contact) => {
    const newCol = document.createElement('div')
    newCol.classList.add('col')

    
    newCol.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${contact.petName} ${contact.ownerName}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${contact.species}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">${contact.breed}</h6>
            </div>
        </div>
        `

    row.appendChild(newCol)
  })


  nameInput.value = ''
  surnameInput.value = ''
  phoneInput.value = ''
  emailInput.value = ''
}

const formReference = document.getElementsByTagName('form')[0]
formReference.addEventListener('submit', function (e) {
  e.preventDefault() 
  const contact = new Contact(
    nameInput.value,
    surnameInput.value,
    phoneInput.value,
    emailInput.value
  )

  console.log('pet', contact)

  pets.push(contact)

  fillRowWithCards()
})