import { getData } from "./getData.js";

let btnMarvel = document.getElementById("btnCategory1");
let btnDC = document.getElementById("btnCategory2");
let listarCard = document.getElementById("listarCard");

btnMarvel.addEventListener("click", async( )=>{
    const array = await getData("http://localhost:3100/marvel")
   //showData(array, listarCard);
});

btnDC.addEventListener("click", async()=>{
    const array= await getData("http://localhost:3100/dc");
    //showData(array, listarCard);
});