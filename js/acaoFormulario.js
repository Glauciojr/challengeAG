export function acaoFormulario() {
    const botaoLimpar = document.querySelector("[data-limpiar]");
    const Formulario = document.querySelector("[data-form]");

    botaoLimpar.addEventListener("click", (evento) => {
        evento.preventDefault();
        Swal.fire({
            title: 'Está seguro de limpar os campos?',
            text: "Não poderá reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sím, limpe!'
        }).then((result) => {
            if (result.isConfirmed) {
                Formulario.reset();
                Swal.fire(
                    'Limpo!',
                    'Seu formulário foi limpo.',
                    'successo'
                );
            }
        });
    });
}