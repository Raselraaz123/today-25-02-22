
const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data))
}
const displayDog = (dogList) => {
    const main = document.getElementById('main')
    const frist10Data = dogList.slice(0, 10)
   
    for (const dog of frist10Data) {
        const div = document.createElement('div')
        div.className='col-lg-4'
        console.log(dog)
        div.innerHTML = `
      <h2>${dog.name}</h2>
      <p>${dog.id}</p>
      <p>${dog.life_span}</P>
      <img width="250px" height="150px" src="${dog.image.url}">

        
        `
        main.appendChild(div)
    }
    
}