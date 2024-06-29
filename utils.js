function incluirtarea(){
    const toDo= document.getElementById('pendientes');
    let text=document.getElementById('tana').value;
    if(text!=""){
        // Tarea individual
        const li=document.createElement('li');
        li.id="listas";
        li.className="list-group-item"
        //Un div
        const divint=document.createElement('div')
        divint.id="divlis"
        // Creacion parrafo
        const snap=document.createElement('snap');
        snap.innerHTML=text;
        snap.className="snapFont"
        // Creacion boton
        const check=document.createElement('button')
        check.id='complete';
        check.className="btn btn-outline-dark";
        check.innerHTML='Completar';
        check.onclick=completar;
        //Agrupamiento
        divint.appendChild(snap);
        divint.appendChild(check);
        li.appendChild(divint);
        toDo.appendChild(li);
    }
}
function completar(event){
    const lic=event.target.parentElement.parentElement;
    const completadas=document.getElementById('completadas');
    completadas.appendChild(lic);
}
function deleteTask(){
    const del=document.getElementById('completadas');
    del.innerHTML='';
}