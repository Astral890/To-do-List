function incluirtarea(){
    const entrada=document.getElementById('tana');
    const toDo= document.getElementById('pendientes')
    const text=entrada.value;
    if(text!=""){
        // Tarea individual
        const li=document.createElement('li');
        li.className="listas";
        // Creacion parrafo
        const p=document.createElement('p');
        p.innerHTML=
        // Creacion boton
        const check=document.createElement('button')
        check.onclick=completar;
    }
    
}
function completar(event){
    const li=event.target.parentElement.parentElement.parentElement;
    const completadas=document.getElementById('completadas');
    completadas.appendChild(li);
}
function eliminar(event){
    const li=event.target.parentElement.parentElement.parentElement;
    li.remove();
}