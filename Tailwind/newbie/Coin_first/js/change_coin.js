const coinImage = document.getElementById('coin_image')
const coinText = document.getElementById('coin_text')
const randomButton = document.getElementById('random_button')
const allImages = document.querySelectorAll('main img')

randomButton.addEventListener('click',()=>{
    const randomNumber = Math.random()
    allImages.forEach(image =>image.style.opacity=0)
    coinText.style.opacity = 0;
    setTimeout(()=>{
        if (randomNumber<0.5){
            coinImage.src = "./resources/heads.svg"
            coinText.textContent = 'Heads'
        }else{
            coinImage.src = "./resources/tails.svg"
            coinText.textContent = 'Tails'
        }
        allImages.forEach(image =>image.style.opacity=1)
        coinText.style.opacity = 1;
    },300)
    
    
})