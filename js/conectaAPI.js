export async function listaDeProdutos() {
    const conexao = await fetch("https://my-json-server.typicode.com/leofrenardo/dbjson/productos");
    const conexaoConvertida = await conexion.json(); // Esperar a conversão a JSON
    return conexaoConvertida;
}


const novoProducto = async (nome, preco, imagem) => {
    try {
        const res = await fetch("https://my-json-server.typicode.com/glauciosouza/dbjson/productos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome, preço, imagem }),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

const borrarProducto = async (id) => {
    try {
        const res = await fetch(`https://my-json-server.typicode.com/glauciosouza/dbjson/productos/${id}`, {
            method: "DELETE",
        });
        return res.ok;
    } catch (err) {
        console.log(err);
    }
};

export const conexionApi = {
    listaDeProdutos,
    novoProducto,
    borrarProducto,
};