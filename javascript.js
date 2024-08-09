document.addEventListener('DOMContentLoaded', function () {
    
    const accButtons = document.querySelectorAll('.botao-acordeao, .botao-acordeao1');
    
        accButtons.forEach(button => {

            button.addEventListener('click', function () {

                const content = this.nextElementSibling;
                    if (content.style.display === "block") {
                        content.style.display = "none";
                    } 
                    else {
                        content.style.display = "block";
                    }
            });
        });
});
