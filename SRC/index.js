function handleStockFormSubmit(event) {
    event.preventDefault();
    let symbolInput = document.querySelector("#symbol-input");
    let stockResult = document.querySelector("#stock-result");

    stockResult.innerHTML = `Searching for ${symbolInput.value}...`;
    
    console.log(symbolInput.value);
    

}




let stockform = document.querySelector("#stockform");
stockform.addEventListener("submit", handleStockFormSubmit);