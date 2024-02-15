function toggleMode(){ /*toggleMode é o nome da minha função la no onclick do html para criar um botão que altera o fundo*/
    const html = document.documentElement;
    html.classList.toggle('light') /* modo simplificado de mudar o fundo*/ 
   
    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir imagem
    if(html.classList.contains('light')){
        //se tiver light mode, adicionar a imagem light
       img.setAttribute('src', './Avatar-light.png') //adicionar/modificar um atributo e coloca um novo valor
    }
    
    else{
       //se tiver sem light mode, manter a imagem nornaml 
       img.setAttribute('src','./Avatar.png')
    } 
    
    /*mudança de fundo utilizando IF e Else
*/

}

