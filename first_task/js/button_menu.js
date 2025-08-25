const allButton = document.getElementById('all_button')
const activeButton = document.getElementById('active_button')
const inactivelButton = document.getElementById('inactive_button')

const threeButton = document.querySelector('.three_button')

threeButton.addEventListener('click',(event)=>{
    if (event.target.tagName ==='BUTTON'){
        const allButs = threeButton.querySelectorAll('button')
        allButs.forEach(button=>button.classList.remove('active_but'))
        event.target.classList.add('active_but')
    }
    
})

