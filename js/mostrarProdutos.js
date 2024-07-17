import { conexionApi } from "./conectaAPI.js";
import { acaoFormulario } from "./accionFormulario.js";

const lista = document.querySelector("[data-lista]");
const Formulario = document.querySelector("[data-form]");


function criarProduto(nombre, precio, imagen, id) {
    const produto = document.createElement("div");
    produto.classList.add("card");
    produto.innerHTML = `
        <figure>
            <img class="producto-img" src="${imagem}" alt="${imagem}" />
            <figcaption class="card-container--info">${nome}</figcaption>
        </figure>
        <div class="card-container--value">
            <p>$ ${preco}</p>
            <button class="delete-button" data-id="${id}">
                <img src="./assets/img/delete_icon.svg" alt="eliminar" />
            </button>
        </div>`;

    const deleteButton = produto.querySelector("[data-id]");
    deleteButton.addEventListener("click", () => {
        Swal.fire({
            title: 'Está seguro de apagar este producto?',
            text: "Não poderás reverter isto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sím, apagar!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await conexionApi.borrarProducto(id);
                producto.remove();
                Swal.fire(
                    '¡Apagado!',
                    'O produto foi excluido.',
                    'successo'
                );
            }
        });
    });

    lista.appendChild(produto);
    return produto;
}

const render = async () => {
    try {
        const listado = await conexionApi.listaDeProductos();
        lista.innerHTML = ''; // Limpar a lista antes de renderizar
        listado.forEach(producto => {
            lista.appendChild(crearProducto(
                produto.nome,
                produco.preco,
                produto.imagem,
                produto.id
            ));
        });
    } catch (error) {
        console.log(error);
    }
};

Formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const nome = document.querySelector("[data-nombre-producto]").value;
    const preco = document.querySelector("[data-precio-producto]").value;
    const imagem = document.querySelector("[data-imagen-producto]").value;

    try {
        await conexaoApi.novoProducto(nome, preco, imagem);
        render(); // Voltar a renderizar a lista de produtos
        Swal.fire(
            'Cadastrado!',
            'Seu producto foi cadastrado.',
            'successo'
        );
        Formulario.reset(); // se limpa o formulario despois de cadastrar o produto
    } catch (err) {
        console.log(err);
    }
});

render();
acaoFormulario();

export const mostrarProduto = { render };