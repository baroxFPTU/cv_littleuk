function  toggleSomething({toggles,targetsChange,classChanges}) {
    toggles.forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
            checkShowMenu();
        targetsChange.style.display = 'block';
        setTimeout(()=> {
            let condition1 = targetsChange.classList.contains(classChanges[index]);
            let condition2 = targetsChange.classList.contains(classChanges[0])

            if (condition1 || condition2) {
                setTimeout(() => {targetsChange.style.display = 'none'},300)
            }
            
            targetsChange.classList.toggle(classChanges[index] || classChanges[0]);
        },0);
    })});
}

function changeSomethingOnScroll({elements, offsets, classChanges}) {
elements.forEach((elm,index) => {
    if (this.scrollY >= offsets[index]) {
        elm.classList.add(classChanges[index]);
        return;
    }

    elm.classList.remove(classChanges[index]);
})

}


function checkShowMenu() {
    const navbarBtn = document.querySelector('.btn-navbar');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    if (!navbarMenu.classList.contains('show-menu')) {

        navbarBtn.innerHTML = '<i class="ri-close-line"></i>';
        return;
    }

    navbarBtn.innerHTML = '<i class="ri-apps-2-line"></i>';
}

export { toggleSomething, changeSomethingOnScroll, checkShowMenu};
