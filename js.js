const puno = document.querySelector('#dots_elements1');
//const punto2 = document.querySelectorAll("#dots_elements2");
//const punto3 = document.querySelectorAll("#dots_elements3");
//const punto4 = document.querySelectorAll("#dots_elements4");
const a = document.querySelector('#dots_elements1');
const x = document.querySelector('.contenido__hero--principal');
const y = document.querySelector('.contenido__hero--segundo');
ev();
function ev() {
    puno.addEventListener('click', mostrar1);
   /*  if(document.getElementsByClassName('contenido__hero--principal').style.display === 'none'){
        document.getElementsByClassName('contenido__hero--principal').style.display = 'flex';
    }else{
        document.getElementsByClassName('contenido__hero--principal').style.display = 'none'
    } */
}


function mostrar1(){
    console.log("hiciste click");
    if(x.style.display === "none"){
        /* 
        footer.classList.remove('dots_evento'); */
        x.style.display = 'flex';
        y.style.display = 'none';
        
    }else{
        /* footer.classList.remove('dots');
        footer.classList.add('dots_evento'); */
        x.style.display = 'none';
        y.style.display = 'flex';
    }
    if(puno.classList.contains('dots_evento')){
        puno.classList.remove('dots_evento');
    }else{
        puno.classList.add('dots_evento');
    }
}