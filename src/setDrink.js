const setDrink = (section)=>{
section.addEventListener('click',function(e){
 // e.preventDefault()
 const id = e.target.parentElement.dataset.id;
 localStorage.setItem('drinkid',id)
})
}

export default setDrink