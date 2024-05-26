const nostros =document.querySelector("#nosotros");
const organizacion =document.querySelector("#organizacion");
const contacto =document.querySelector("#contacto")

/*Menu nosotros */

nosotros.addEventListener("click", (s) =>{ 
    s.preventDefault();
    const sectionS =document.querySelector(".nosotros");
    sectionS.scrollIntoView({behavior: "smooth"});
})

/*Menu  */

organizacion.addEventListener("click", (p) =>{
    p.preventDefault();
    const sectionP =document.querySelector(".organizacion");
    sectionP.scrollIntoView({behavior: "smooth"});
})

/*Menu COntacto */

contacto.addEventListener("click", (c) =>{
    c.preventDefault();
    const sectionC =document.querySelector(".contacto");
    sectionC.scrollIntoView({behavior: "smooth"});
})