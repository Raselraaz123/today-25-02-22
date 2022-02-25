const loadData = () => {
    console.log('hello')
    const input = document.getElementById('input-value')
    const error = document.getElementById('error')
    const inputValue = input.value
    console.log(inputValue)
    if (isNaN(inputValue)) {
        //  alert('pls enter a number')
        error.innerText =`pls enter a number`
    }
}