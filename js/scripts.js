let inputs = document.querySelectorAll('.validate'),
formSubmit = document.getElementById('submit');

inputs.forEach(function(input) {
    input.addEventListener('blur', function(e) {
       input.classList.add('validated')
    });
});

formSubmit.addEventListener('click', function(e){
    inputs.forEach(function(input){
        input.classList.add('validated')
    })
})