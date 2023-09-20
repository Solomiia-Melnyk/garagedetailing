
//tips
document.getElementById("showTips").addEventListener("click", function() {
  let tipsBlock = document.getElementById("tipsBlock");
  if (tipsBlock.classList.contains("hidden")) {
    tipsBlock.classList.remove("hidden");
  } else {
    tipsBlock.classList.add("hidden");
  }
});




function calculatePolishingPrice() {
  const carTypeInputs = document.getElementsByName("carType");
  let carType;

  for (const input of carTypeInputs) {
    if (input.checked) {
      carType = input.value;
      break;
    }
  }

  const carYear = parseInt(document.getElementById("carYear").value);

  const polishingTypeInputs = document.getElementsByName("polishingType");
  let polishingType;

  for (const input of polishingTypeInputs) {
    if (input.checked) {
      polishingType = input.value;
      break;
    }
  }

  let basePrice;

  if (carType === "małe") {
    basePrice = 250;
  } else if (carType === "średnie") {
    basePrice = 320;
  } else if (carType === "duże") {
    basePrice = 400;
  } else {
    document.getElementById("result").textContent = "Pomyłka";
    return;
  }  

  let polishingPrice;

  if (carYear >= 1990 && carYear <= 2005) {
    polishingPrice = basePrice;
  } else if (carYear >= 2006 && carYear <= 2015) {
    polishingPrice = basePrice * 1.1;
  } else if (carYear >= 2016 && carYear <= 2023) {
    polishingPrice = basePrice * 1.15;
  } else {
    document.getElementById("result").textContent = "Błedny rok";
    return;
  }

  if (polishingType === "głębokie") {
    polishingPrice *= 1.15;
  }

  polishingPrice = Math.round(polishingPrice);
  document.getElementById("result").textContent = `Orientacyjny koszt polerowania: ${polishingPrice} zł`;
}