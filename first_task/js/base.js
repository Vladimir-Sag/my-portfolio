const my_base = [
    {
        "logo": "./assets/images/logo-devlens.svg",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-style-spy.svg",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-speed-boost.svg",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-json-wizard.svg",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-tab-master-pro.svg",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-viewport-buddy.svg",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-markup-notes.svg",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-grid-guides.svg",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-palette-picker.svg",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-link-checker.svg",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-dom-snapshot.svg",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-console-plus.svg",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true
    }
  ]

const container = document.querySelector('.my_grid')
const threeButton = document.querySelector('.three_button')

function renderCards(itemsToRender){
    container.innerHTML =''
    itemsToRender.forEach(item=>{
    const uniqueId = `toggle-switch-${item.name}`
    const isChecked = item.isActive?'checked':''
    const cardHTML = `
        <div class="my_card">
            <div class="top_card">
                <div class="img_card"><img src="${item.logo}" alt=""></div>
                <div class="title_card">${item.name}</div>
                <div class="desc_card">${item.description}</div>
            </div>
            <div class="button_card">
                <button class='remove'>Remove</button>
                <div class="toggle-container">
                    <input type="checkbox" id="${uniqueId}" class="toggle-checkbox" ${isChecked} tabindex="0">
                    <label for="${uniqueId}" class="toggle-label">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
        </div>`

    container.insertAdjacentHTML('beforeend',cardHTML)
    })
}
renderCards(my_base)

threeButton.addEventListener('click',(event)=>{
    if (event.target.tagName ==='BUTTON'){
        const allButs = threeButton.querySelectorAll('button')
        allButs.forEach(button=>button.classList.remove('active_but'))
        event.target.classList.add('active_but')

        const clickedButtonId = event.target.id
        let filtredCards = []
        if (clickedButtonId==='all_button'){
            filtredCards = my_base
        }else if (clickedButtonId ==='active_button'){
            filtredCards = my_base.filter(item=>item.isActive)
        }else if (clickedButtonId ==='inactive_button'){
            filtredCards = my_base.filter(item=>!item.isActive)
        }

        renderCards(filtredCards)
    }
    
})


// light-dark mode
const lightDarkButton = document.getElementById('night_light')
const body = document.querySelector('body')

lightDarkButton.addEventListener('click',()=>{
    body.classList.toggle('light')
})

// Remove button


container.addEventListener('click',(event)=>{
    const targetButton = event.target
    if(targetButton.classList.contains('remove')){
        targetButton.closest('.my_card').remove()
    }
})