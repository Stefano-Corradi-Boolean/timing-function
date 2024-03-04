

// setTimout esegue l'istruzione una sola volta a disstanta di tempo che viene indicato in millisecondi

const dopoTreSecondi = () => {
  console.log('tre secondi');
}

setTimeout(()=>{
  console.log('due secondi');
}, 2000)


setTimeout(function(){
  console.log('è passato un secondo');
},1000)

setTimeout(dopoTreSecondi, 3000);


console.log('Vengo prima io');

//
let counter = 0;
// ogni secondo icremento il contatore
const contatoreAutomatico = setInterval(()=>{
  counter++;
  console.log(counter);
},1000)

setTimeout(()=>{
  // interrompo il contatore dopo 5 secondi
  console.log('STOP');
  clearInterval(contatoreAutomatico);
},5000)

let counter2 = 0;
// ogni secondo icremento il contatore
const contatoreAutomatico2 = setInterval(()=>{
  counter2++;
  console.log(counter2);
  if(counter2 === 5){
    console.log('STOP');
    clearInterval(contatoreAutomatico2)
  }
},1000)