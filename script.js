const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () =>{
          //remove
          removeActiveClasses()

         //add
        panel.classList.add('active')

    })  
   
}
)

function removeActiveClasses() {
    panels.forEach((panel)=> {
        panel.classList.remove('active')
    })
}


