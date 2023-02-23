const chevronDown = document.querySelector('.lien-nav-bar');
const chevronDowns = document.querySelector('#offcanvas');
const divOffcanvas = document.querySelector('.div-offcanvas');
const divOffcanva = document.querySelector('.div-offcanva');
var iClass = document.querySelector('#i-offcanvas');
var Iclass = document.querySelector('#i-offcanva');

// pour source et fonctionnalite

    



        
        


            chevronDown.addEventListener('click', function (e) {
                divOffcanvas.classList.add('active');
                iClass.setAttribute('class', 'bi-chevron-up')
                chevronDown.style.color = '#1a73e8ef';
                
            });
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    chevronDowns.addEventListener('click', function (a) {
        divOffcanva.classList.add('active');
        Iclass.setAttribute('class', 'bi-chevron-up');
        chevronDowns.style.color = '#1a73e8ef';
    });
   

// pour la barre de recherche

const btnSearch = document.querySelector('#search');
const divSearch = document.querySelector('.div-search');

btnSearch.addEventListener('click', function (b) {
    divSearch.classList.add('active');
});