function evento() {
    const valorEmDolar = document.querySelector("section input").value
    const display = document.querySelector(".display h1")
    
    valorEmReal = valorEmDolar * 5.50
    
    display.innerHTML = `R$ ${valorEmReal.toFixed(2)}`;
}
