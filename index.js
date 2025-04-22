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
            console.log(data.colors[0].hex.value)
            document.querySelector('.c1').style.backgroundColor = data.colors[0].hex.value
            document.querySelector('.s1').textContent = data.colors[0].hex.value

            document.querySelector('.c2').style.backgroundColor = data.colors[1].hex.value
            document.querySelector('.s2').textContent = data.colors[1].hex.value

            document.querySelector('.c3').style.backgroundColor = data.colors[2].hex.value
            document.querySelector('.s3').textContent = data.colors[2].hex.value

            document.querySelector('.c4').style.backgroundColor = data.colors[3].hex.value
            document.querySelector('.s4').textContent = data.colors[3].hex.value

            document.querySelector('.c5').style.backgroundColor = data.colors[4].hex.value
            document.querySelector('.s5').textContent = data.colors[4].hex.value

        
        })
})


// https://www.thecolorapi.com/id?hex=${colorName}