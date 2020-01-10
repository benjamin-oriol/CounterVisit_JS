const counter = document.getElementById("counter");

const updateCounter = async () => {
  //Je récupère mes datas
  //Await = je ne peux pas afficher le console.log tant que cette ligne est pas terminée
  const data = await fetch(
    "https://api.countapi.xyz/hit/ben-VistCounter/visits"
  );
  const count = await data.json();
  console.log(count.value);
  //Je change sa valeur
  counter.innerHTML = count.value;
  //Je change son style
  counter.style.filter = "blur(0)";
};

updateCounter();
