// declaramos variables 
const formulario= document.getElementById('formulario');
const nombre=document.getElementById('nombre');
const apellido=document.getElementById('apellido');
const datos=document.querySelector('#datos');
const mensajeError=document.querySelector('#mensaje');
const pregunta1=document.getElementById('pregunta1');
const pregunta2=document.getElementById('pregunta2');
const pregunta3=document.getElementById('pregunta3');
const pregunta4=document.getElementById('pregunta4');
const pregunta5=document.getElementById('pregunta5');
const pregunta6=document.getElementById('pregunta6');
const pregunta7=document.getElementById('pregunta7');
const pregunta8=document.getElementById('pregunta8');
const pregunta9=document.getElementById('pregunta9');
const pregunta10=document.getElementById('pregunta10');
const bt1=document.querySelector('#bt1');
const bt2=document.querySelector('#bt2');
const bt3=document.querySelector('#bt3');
const bt4=document.querySelector('#bt4');
const bt5=document.querySelector('#bt5');
const bt6=document.querySelector('#bt6');
const bt7=document.querySelector('#bt7');
const bt8=document.querySelector('#bt8');
const bt9=document.querySelector('#bt9');
const bt10=document.querySelector('#bt10');
const tarminar=document.querySelector('terminar');
const panel=document.querySelector('#panel');
const indicador_preguntas=document.getElementById('indicador-preguntas');
const resultado1=document.getElementById('resultado1');
const resultado2=document.getElementById('resultado2');
const resultado3=document.getElementById('resultado3');
const resultado4=document.getElementById('resultado4');
const resultado5=document.getElementById('resultado5');
const resultado6=document.getElementById('resultado6');
const resultado7=document.getElementById('resultado7');
const resultado8=document.getElementById('resultado8');
const resultado9=document.getElementById('resultado9');
const resultado10=document.getElementById('resultado10');
const ant=document.getElementById('anterior');
const sig =document.getElementById('sig');
const sig_ultimo =document.getElementById('sig-ultimo');
// ocultamos las cosas al iniciar la app
pregunta1.style.display='none';
pregunta2.style.display='none';
pregunta3.style.display='none';
pregunta4.style.display='none';
pregunta5.style.display='none';
pregunta6.style.display='none';
pregunta7.style.display='none';
pregunta8.style.display='none';
pregunta9.style.display='none';
pregunta10.style.display='none';
sig_ultimo.style.pointerEvents = 'none';
sig_ultimo.style.color = '#bbb';
panel.style.display='none';
indicador_preguntas.style.display='none';
terminar.style.display='none';



// Valido el formulario 

function validar(){
    if(nombre.value==='' || apellido.value===''){
        mensajeError.innerHTML= ` <div class="mensajeError"> 
        LLene todo los Campos
        </div>`;
        setTimeout(()=>{
            mensajeError.style.display='none';
           },2000);
    }else{

        //agregamos los  datos a una barra de navegacion 
        datos.textContent= nombre.value+" "+apellido.value; 
        formulario.style.display='none';
        pregunta1.style.display='block'
        ant.style.pointerEvents = 'none';
        ant.style.color = '#bbb';
        panel.style.display='block';
        indicador_preguntas.style.display='block';
        indicador_preguntas.textContent='Pregunta 1 de 10';
    }
}



// eventos 

formulario.addEventListener('submit',(e)=>{
   // e.defaultPrevented();
    validar();
    mensajeError.style.display='block';
});

// eventos del panel 
bt1.addEventListener('click',()=>{
    pregunta1.style.display='block';
    pregunta2.style.display='none';
    pregunta3.style.display='none';
    pregunta4.style.display='none';
    pregunta5.style.display='none';
    pregunta6.style.display='none';
    pregunta7.style.display='none';
    pregunta8.style.display='none';
    pregunta9.style.display='none';
    pregunta10.style.display='none';
    indicador_preguntas.textContent='Pregunta 1 de 10';
    terminar.style.display='none';
});


bt2.addEventListener('click',()=>{
    pregunta1.style.display='none';
    pregunta2.style.display='block';
    pregunta3.style.display='none';
    pregunta4.style.display='none';
    pregunta5.style.display='none';
    pregunta6.style.display='none';
    pregunta7.style.display='none';
    pregunta8.style.display='none';
    pregunta9.style.display='none';
    pregunta10.style.display='none';
    indicador_preguntas.textContent='Pregunta 2 de 10';
    terminar.style.display='none';
  });
    
  bt3.addEventListener('click',()=>{
    pregunta1.style.display='none';
    pregunta2.style.display='none';
    pregunta3.style.display='block';
    pregunta4.style.display='none';
    pregunta5.style.display='none';
    pregunta6.style.display='none';
    pregunta7.style.display='none';
    pregunta8.style.display='none';
    pregunta9.style.display='none';
    pregunta10.style.display='none';
    indicador_preguntas.textContent='Pregunta 3 de 10';
    terminar.style.display='none';
  });

  bt4.addEventListener('click',()=>{
    pregunta1.style.display='none';
    pregunta2.style.display='none';
    pregunta3.style.display='none';
    pregunta4.style.display='block';
    pregunta5.style.display='none';
    pregunta6.style.display='none';
    pregunta7.style.display='none';
    pregunta8.style.display='none';
    pregunta9.style.display='none';
    pregunta10.style.display='none';
    indicador_preguntas.textContent='Pregunta 4 de 10';
    terminar.style.display='none';
  });
  
  bt5.addEventListener('click',()=>{
    pregunta1.style.display='none';
    pregunta2.style.display='none';
    pregunta3.style.display='none';
    pregunta4.style.display='none';
    pregunta5.style.display='block';
    pregunta6.style.display='none';
    pregunta7.style.display='none';
    pregunta8.style.display='none';
    pregunta9.style.display='none';
    pregunta10.style.display='none';
    indicador_preguntas.textContent='Pregunta 5 de 10';
    terminar.style.display='none';
  });

  bt6.addEventListener('click',()=>{
    pregunta1.style.display='none';
    pregunta2.style.display='none';
    pregunta3.style.display='none';
    pregunta4.style.display='none';
    pregunta5.style.display='none';
    pregunta6.style.display='block';
    pregunta7.style.display='none';
    pregunta8.style.display='none';
    pregunta9.style.display='none';
    pregunta10.style.display='none';
    indicador_preguntas.textContent='Pregunta 6 de 10';
    terminar.style.display='none';
  });

  bt7.addEventListener('click',()=>{
    pregunta1.style.display='none';
    pregunta2.style.display='none';
    pregunta3.style.display='none';
    pregunta4.style.display='none';
    pregunta5.style.display='none';
    pregunta6.style.display='none';
    pregunta7.style.display='block';
    pregunta8.style.display='none';
    pregunta9.style.display='none';
    pregunta10.style.display='none';
    indicador_preguntas.textContent='Pregunta 7 de 10';
    terminar.style.display='none';
  });

  bt8.addEventListener('click',()=>{
    pregunta1.style.display='none';
    pregunta2.style.display='none';
    pregunta3.style.display='none';
    pregunta4.style.display='none';
    pregunta5.style.display='none';
    pregunta6.style.display='none';
    pregunta7.style.display='none';
    pregunta8.style.display='block';
    pregunta9.style.display='none';
    pregunta10.style.display='none';
    indicador_preguntas.textContent='Pregunta 8 de 10';
    terminar.style.display='none';
  });

  bt9.addEventListener('click',()=>{
    pregunta1.style.display='none';
    pregunta2.style.display='none';
    pregunta3.style.display='none';
    pregunta4.style.display='none';
    pregunta5.style.display='none';
    pregunta6.style.display='none';
    pregunta7.style.display='none';
    pregunta8.style.display='none';
    pregunta9.style.display='block';
    pregunta10.style.display='none';
    indicador_preguntas.textContent='Pregunta 9 de 10';
    terminar.style.display='none';
  });

  bt10.addEventListener('click',()=>{
    pregunta1.style.display='none';
    pregunta2.style.display='none';
    pregunta3.style.display='none';
    pregunta4.style.display='none';
    pregunta5.style.display='none';
    pregunta6.style.display='none';
    pregunta7.style.display='none';
    pregunta8.style.display='none';
    pregunta9.style.display='none';
    pregunta10.style.display='block';
    indicador_preguntas.textContent='Pregunta 10 de 10';
    terminar.style.display='block';
  });
  terminar.addEventListener('click',(e)=>{
       e.preventDefault();
    terminar_test();

  })
  //funcion que me muestra cada pregunta y me oculta la anterior

function sesion1(){
    pregunta1.style.display='none';
    pregunta2.style.display='block';
    indicador_preguntas.textContent='Pregunta 2 de 10';
    terminar.style.display='none';

}


function anterior1(){
    pregunta1.style.display='block';
    pregunta2.style.display='none';
    indicador_preguntas.textContent='Pregunta 1 de 10';
    terminar.style.display='none';
}

function sesion2(){
    pregunta2.style.display='none';
    pregunta3.style.display='block';
    indicador_preguntas.textContent='Pregunta 3 de 10';
    terminar.style.display='none';
}


function anterior2(){
    pregunta2.style.display='block';
    pregunta3.style.display='none';
    indicador_preguntas.textContent='Pregunta 2 de 10';
    terminar.style.display='none';
}

function sesion3(){
    pregunta3.style.display='none';
    pregunta4.style.display='block';
    indicador_preguntas.textContent='Pregunta 4 de 10';
    terminar.style.display='none';
}


function anterior3(){
    pregunta3.style.display='block';
    pregunta4.style.display='none';
    indicador_preguntas.textContent='Pregunta 3 de 10';
    terminar.style.display='none';
}

function sesion4(){
    pregunta4.style.display='none';
    pregunta5.style.display='block';
    indicador_preguntas.textContent='Pregunta 5 de 10';
    terminar.style.display='none';
}


function anterior4(){
    pregunta4.style.display='block';
    pregunta5.style.display='none';
    indicador_preguntas.textContent='Pregunta 4 de 10';
    terminar.style.display='none';
}
function sesion5(){
    pregunta5.style.display='none';
    pregunta6.style.display='block';
    indicador_preguntas.textContent='Pregunta 6 de 10';
    terminar.style.display='none';
}


function anterior5(){
    pregunta5.style.display='block';
    pregunta6.style.display='none';
    indicador_preguntas.textContent='Pregunta 5 de 10';
    terminar.style.display='none';
}

function sesion6(){
    pregunta6.style.display='none';
    pregunta7.style.display='block';
    indicador_preguntas.textContent='Pregunta 7 de 10';
    terminar.style.display='none';
}


function anterior6(){
    pregunta6.style.display='block';
    pregunta7.style.display='none';
    indicador_preguntas.textContent='Pregunta 6 de 10';
    terminar.style.display='none';
}
function sesion7(){
    pregunta7.style.display='none';
    pregunta8.style.display='block';
    indicador_preguntas.textContent='Pregunta 8 de 10';
    terminar.style.display='none';
}


function anterior7(){
    pregunta7.style.display='block';
    pregunta8.style.display='none';
    indicador_preguntas.textContent='Pregunta 7 de 10';
    terminar.style.display='none';
}


function sesion8(){
    pregunta8.style.display='none';
    pregunta9.style.display='block';
    indicador_preguntas.textContent='Pregunta 9 de 10';
    terminar.style.display='none';
}


function anterior8(){
    pregunta8.style.display='block';
    pregunta9.style.display='none';
    indicador_preguntas.textContent='Pregunta 8 de 10';
    terminar.style.display='none';
}

function sesion9(){
    pregunta9.style.display='none';
    pregunta10.style.display='block';
    indicador_preguntas.textContent='Pregunta 10 de 10';
    terminar.style.display='none';
    terminar.style.display='block';
}


function anterior9(){
    pregunta9.style.display='block';
    pregunta10.style.display='none';
    indicador_preguntas.textContent='Pregunta 9 de 10';
    terminar.style.display='none';
}


function terminar_test(){
    var n1, n2, n3, n4, n5, n6, n7, n8, n9, n10;

    let p1= document.getElementsByName('p1');
   for(x=0; x< p1.length; x++){
       if(p1[x].checked){
        if(p1[x].value==1){
           resultado1.innerHTML = "Respuesta  es Correcta"; 
           resultado1.style.backgroundColor = '#00ff00';
           n1=0.5;
     
       }else {
    
        resultado1.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: Para Guardar parafos"; 
        resultado1.style.backgroundColor = '#F9041A';
    
        n1=0;
    }
       }else{
        n1=0;
       }
      
    }
     // resultado para la pregunta dos 
    let p2= document.getElementsByName('p2');
    for(x=0; x< p2.length; x++){
        if(p2[x].checked){
         if(p2[x].value==2){
            resultado2.innerHTML = "Respuesta  es Correcta"; 
            resultado2.style.backgroundColor = '#00ff00';
            n2=0.5;
      
        }else  {
     
         resultado2.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: Fechas"; 
         resultado2.style.backgroundColor = '#F9041A';
     
         n2=0;
     }
        }else{
            n2=0;
           }
       
     }

     let p3= document.getElementsByName('p3');
     for(x=0; x< p3.length; x++){
         if(p3[x].checked){
          if(p3[x].value==2){
             resultado3.innerHTML = "Respuesta  es Correcta"; 
             resultado3.style.backgroundColor = '#00ff00';
             n3=0.5;
       
         }else  {
      
          resultado3.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: Texto"; 
          resultado3.style.backgroundColor = '#F9041A';
      
          n3=0;
      }
         }else{
            n3=0;
           }
        
      }

      let p4= document.getElementsByName('p4');
      for(x=0; x< p4.length; x++){
          if(p4[x].checked){
           if(p4[x].value==3){
              resultado4.innerHTML = "Respuesta  es Correcta"; 
              resultado4.style.backgroundColor = '#00ff00';
              n4=0.5;
        
          }else  {
       
           resultado4.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: number"; 
           resultado4.style.backgroundColor = '#F9041A';
       
           n4=0;
       }
    }else{
        n4=0;
       }
         
       }

       let p5= document.getElementsByName('p5');
       for(x=0; x< p5.length; x++){
           if(p5[x].checked){
            if(p5[x].value==1){
               resultado5.innerHTML = "Respuesta  es Correcta"; 
               resultado5.style.backgroundColor = '#00ff00';
               n5=0.5;
         
           }else  {
        
            resultado5.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: color"; 
            resultado5.style.backgroundColor = '#F9041A';
        
            n5=0;
        }
           }else{
            n5=0;
           }
          
        }

        let p6= document.getElementsByName('p6');
        for(x=0; x< p6.length; x++){
            if(p6[x].checked){
             if(p6[x].value==3){
                resultado6.innerHTML = "Respuesta  es Correcta"; 
                resultado6.style.backgroundColor = '#00ff00';
                n6=0.5;
          
            }else  {
         
             resultado6.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: background-color"; 
             resultado6.style.backgroundColor = '#F9041A';
         
             n6=0;
         }
            }else{
                n6=0;
               }
           
         }
         let p7= document.getElementsByName('p7');
         for(x=0; x< p7.length; x++){
             if(p7[x].checked){
              if(p7[x].value==3){
                 resultado7.innerHTML = "Respuesta  es Correcta"; 
                 resultado7.style.backgroundColor = '#00ff00';
                 n7=0.5;
           
             }else  {
          
              resultado7.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: un id"; 
              resultado7.style.backgroundColor = '#F9041A';
          
              n7=0;
          }
             }else{
                n7=0;
               }
            
          }

          let p8= document.getElementsByName('p8');
          for(x=0; x< p8.length; x++){
              if(p8[x].checked){
               if(p8[x].value==3){
                  resultado8.innerHTML = "Respuesta  es Correcta"; 
                  resultado8.style.backgroundColor = '#00ff00';
                  n8=0.5;
            
              }else  {
           
               resultado8.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: un id"; 
               resultado8.style.backgroundColor = '#F9041A';
           
               n8=0;
           }
              }else{
                n8=0;
               }
             
           }


           let p9= document.getElementsByName('p9');
           for(x=0; x< p9.length; x++){
               if(p9[x].checked){
                if(p9[x].value==1){
                   resultado9.innerHTML = "Respuesta  es Correcta"; 
                   resultado9.style.backgroundColor = '#00ff00';
                   n9=0.5;
             
               }else  {
            
                resultado9.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: un for"; 
                resultado9.style.backgroundColor = '#F9041A';
            
                n9=0;
            }
               }else{
                n9=0;
               }
              
            }

            let p10= document.getElementsByName('p10');
            for(x=0; x< p10.length; x++){
                if(p10[x].checked){
                 if(p10[x].value==3){
                    resultado10.innerHTML = "Respuesta  es Correcta"; 
                    resultado10.style.backgroundColor = '#00ff00';
                    n10=0.5;
              
                }else  {
             
                 resultado10.innerHTML = "Respuesta es Incorrecta"+"<br> la Respuesta es: let variable"; 
                 resultado10.style.backgroundColor = '#F9041A';
             
                 n10=0;
             }
                }else{
                    n10=0;
                   }
               
             }
     pregunta1.style.display='block';
     pregunta2.style.display='block';
     pregunta3.style.display='block';
     pregunta4.style.display='block';
     pregunta5.style.display='block';
     pregunta6.style.display='block';
     pregunta7.style.display='block';
     pregunta8.style.display='block';
     pregunta9.style.display='block';
     pregunta10.style.display='block';
     sig.style.display='none';
     ant.style.display='none';
     document.querySelector('#pregunta2 #sig').style.display='none';
     document.querySelector('#pregunta2 #anterior').style.display='none';
     document.querySelector('#pregunta3 #sig').style.display='none';
     document.querySelector('#pregunta3 #anterior').style.display='none';
     document.querySelector('#pregunta4 #sig').style.display='none';
     document.querySelector('#pregunta4 #anterior').style.display='none';
     document.querySelector('#pregunta5 #sig').style.display='none';
     document.querySelector('#pregunta5 #anterior').style.display='none';
     document.querySelector('#pregunta6 #sig').style.display='none';
     document.querySelector('#pregunta6 #anterior').style.display='none';
     document.querySelector('#pregunta7 #sig').style.display='none';
     document.querySelector('#pregunta7 #anterior').style.display='none';
     document.querySelector('#pregunta8 #sig').style.display='none';
     document.querySelector('#pregunta8 #anterior').style.display='none';
     document.querySelector('#pregunta9 #sig').style.display='none';
     document.querySelector('#pregunta9 #anterior').style.display='none';
     document.querySelector('#pregunta10 #sig-ultimo').style.display='none';
     document.querySelector('#pregunta10 #anterior').style.display='none';
     let definitiva=2.5+parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4)+parseFloat(n5)+parseFloat(n6)+parseFloat(n7)+parseFloat(n8)+parseFloat(n9)+parseFloat(n10);
     
     if(definitiva>=3){
        document.querySelector('#nota').innerHTML='Su nota es: '+definitiva+ ' Aprobo el test';
        document.querySelector('#nota').style.backgroundColor = '#00ff00';
     }else{
        document.querySelector('#nota').innerHTML='Su nota es: '+definitiva+ ' Reprobo el test';
        document.querySelector('#nota').style.backgroundColor = '#F9041A';
     }
    
     panel.style.display='none';
    }