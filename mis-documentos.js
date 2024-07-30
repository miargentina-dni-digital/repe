const docsContentOpen = document.getElementById('docsContentOpen');

const button = document.getElementById('btn');
    let isActive = false;

    button.addEventListener('click', function () {
        if (isActive) {
            desactivarFuncion();
        } else {
            activarFuncion();
        }
        isActive = !isActive;
    });

    function activarFuncion() {
        docsContentOpen.style.setProperty('display', 'flex', 'important');
    }

    function desactivarFuncion() {
        docsContentOpen.style.setProperty('display', 'none', 'important');
    }




const docsContentOpen2 = document.getElementById('docsContentOpen2');

const button2 = document.getElementById('btn2');
    let isActive2 = false;

    button2.addEventListener('click', function () {
        if (isActive2) {
            desactivarFuncion2();
        } else {
            activarFuncion2();
        }
        isActive2 = !isActive2;
    });

    function activarFuncion2() {
        docsContentOpen2.style.setProperty('display', 'flex', 'important');
    }

    function desactivarFuncion2() {
        docsContentOpen2.style.setProperty('display', 'none', 'important');
    }