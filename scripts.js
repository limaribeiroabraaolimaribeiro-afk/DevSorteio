function generateNumber() {
    
    const min = Math.ceil(document.querySelector(".entre").value)
    const max = Math.floor(document.querySelector(".e").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)
}