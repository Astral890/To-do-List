const li=document.getElementById('completadas');
li.addEventListener('click',eliminar());
function incluirtarea(){
    const toDo= document.getElementById('pendientes');
    let text=document.getElementById('tana').value;
    if(text!=""){
        // Tarea individual
        const li=document.createElement('li');
        li.id="listas";
        //Un div
        const divint=document.createElement('div')
        divint.id="divlis"
        // Creacion parrafo
        const snap=document.createElement('snap');
        snap.innerHTML=text;
        // Creacion boton
        const check=document.createElement('button')
        check.id='complete';
        check.innerHTML='Completada';
        check.onclick=completar;
        // check.onclick=completar();
        //Agrupamiento
        divint.appendChild(snap);
        divint.appendChild(check);
        li.appendChild(divint)
        console.log(li);
        toDo.appendChild(li);
    }
}
function completar(event){
    const lic=event.target.parentElement.parentElement;
    console.log(lic);
    const completadas=document.getElementById('completadas');
    completadas.appendChild(lic);
}
function eliminar(){
    li.remove();
}