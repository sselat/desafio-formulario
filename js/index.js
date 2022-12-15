function checkInputs() {
    const formInputs = document.querySelectorAll('.inputData');
    const inputDiv = document.querySelectorAll('.inputDiv');

    console.log('ativou!')
    formInputs.forEach(toggleClasses);
    function toggleClasses (item, index) {
        console.log(index)
        if (item.value !== '') {
            item.classList.remove('emptyInput')
            inputDiv[index].classList.remove('emptyInput')
            item.classList.add('validInput')
        } else {
            item.classList.add('emptyInput')
            inputDiv[index].classList.add('emptyInput')
            item.classList.remove('validInput')
        }
    }
}