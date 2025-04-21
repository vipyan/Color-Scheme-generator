const form = document.getElementById('color-picker-form')
const display = document.getElementById('display')
const inputColor = document.getElementById('color')
const harmony = document.getElementById('harmony')




form.addEventListener('submit',function(e){
    e.preventDefault()
    const colorName = inputColor.value.slice(1)
    const harmonyValue = harmony.value
     
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorName}&mode=${harmonyValue}&count=5`)
    .then(res => res.json())
        .then(data => {
        console.log(data.colors);
        console.log(data.colors[0].name.value)
        
        })
})


// https://www.thecolorapi.com/id?hex=${colorName}