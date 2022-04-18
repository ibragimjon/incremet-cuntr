const countrs = document.querySelectorAll('.counter')

countrs.forEach((countr) =>{
    countr.textContent = '0'


   function  uptadeCountr() {
        const target = +countr.getAttribute('data-target') 
        const c = +countr.textContent

        const increment = target / 200

        if(c < target ){
            countr.textContent = `${Math.ceil(c + increment)}`
            setTimeout(uptadeCountr, 1 )
        } else {
            countr.textContent = target
        }
    }

    uptadeCountr()
})