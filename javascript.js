document.addEventListener('DOMContentLoaded', function () {
    
    const cascata = document.querySelectorAll('.botao-acordeao, .botao-acordeao1');
    
        cascata.forEach(button => {

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
