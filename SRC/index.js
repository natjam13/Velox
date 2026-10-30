function handleStockFormSubmit(event) {
  event.preventDefault();

  let symbolInput = document.querySelector("#symbol-input");


  stockResult.innerHTML = `Searching for ${symbolInput.value}...`;

  console.log(symbolInput.value);
}

