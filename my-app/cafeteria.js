const readline = require('node:readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let productos = [
    {
        id: 1,
        nombre: "Cafe del dia",
        precio: 30,
        categoria: "Bebida",
        disponible: true
    },
    {
        id: 2,
        nombre: "Capuchino",
        precio: 50,
        categoria: "Bebida",
        disponible: true
    },
    {
        id: 3,
        nombre: "Pan dulce",
        precio: 10,
        categoria: "Postre",
        disponible: true
    }
];


let ingredientes = {
    cafe: 5,
    agua: 10,
    leche: 5,
    azucar: 5
};


function esperar(ms) {

    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });

}

function mostrarIngredientes() {

    console.log("\n--- INGREDIENTES DISPONIBLES ---");

    console.log(`Cafe: ${ingredientes.cafe}`);
    console.log(`Agua: ${ingredientes.agua}`);
    console.log(`Leche: ${ingredientes.leche}`);
    console.log(`Azucar: ${ingredientes.azucar}`);
}

async function prepararCafe() {

    try {

        console.log("\n--- PREPARANDO CAFE ---");

        if (ingredientes.cafe <= 0) {
            throw new Error("No hay cafe.");
        }
        if (ingredientes.agua <= 0) {
            throw new Error("No hay agua.");
        }
        console.log("Ingredientes disponibles.");
        console.log("Moliendo cafe...");
        await esperar(2000);
        console.log("Agregando agua...");
        await esperar(2000);
        console.log("Preparando cafe...");
        await esperar(2000);
        ingredientes.cafe--;
        ingredientes.agua--;
        console.log("\nCafe listo.");
        console.log("Se utilizo:");
        console.log("- 1 unidad de cafe");
        console.log("- 1 unidad de agua");
    } catch (error) {
        console.log("\nERROR EN COCINA:");
        console.log(error.message);

    }
}
async function prepararCapuchino() {
    try {
        console.log("\n--- PREPARANDO CAPUCHINO ---");
        if (ingredientes.cafe <= 0) {
            throw new Error("No hay cafe.");
        }
        if (ingredientes.agua <= 0) {
            throw new Error("No hay agua.");
        }
        if (ingredientes.leche <= 0) {
            throw new Error("No hay leche.");
        }
        console.log("Ingredientes disponibles.");
        console.log("Moliendo cafe...");
        await esperar(2000);
        console.log("Agregando agua...");
        await esperar(2000);
        console.log("Agregando leche...");
        await esperar(2000);
        console.log("Preparando capuchino...");
        await esperar(2000);
        ingredientes.cafe--;
        ingredientes.agua--;
        ingredientes.leche--;
        console.log("\nCapuchino listo.");
        console.log("Se utilizo:");
        console.log("- 1 unidad de cafe");
        console.log("- 1 unidad de agua");
        console.log("- 1 unidad de leche");
    } catch (error) {
        console.log("\nERROR EN COCINA:");
        console.log(error.message);
    }
}
async function prepararCafeConAzucar() {
    try {
        console.log("\n--- PREPARANDO CAFE CON AZUCAR ---");
        if (ingredientes.cafe <= 0) {
            throw new Error("No hay cafe.");
        }
        if (ingredientes.agua <= 0) {
            throw new Error("No hay agua.");
        }
        if (ingredientes.azucar <= 0) {
            throw new Error("No hay azucar.");
        }
        console.log("Ingredientes disponibles.");
        console.log("Moliendo cafe...");
        await esperar(2000);
        console.log("Agregando agua...");
        await esperar(2000);
        console.log("Agregando azucar...");
        await esperar(2000);
        console.log("Preparando cafe...");
        await esperar(2000);
        ingredientes.cafe--;
        ingredientes.agua--;
        ingredientes.azucar--;
        console.log("\nCafe con azucar listo.");
        console.log("Se utilizo:");
        console.log("- 1 unidad de cafe");
        console.log("- 1 unidad de agua");
        console.log("- 1 unidad de azucar");

    } catch (error) {
        console.log("\nERROR EN COCINA:");
        console.log(error.message);
    }

}

async function agregarIngredientes() {
    console.log("\n--- AGREGAR INGREDIENTES ---");
    console.log("1. Cafe");
    console.log("2. Agua");
    console.log("3. Leche");
    console.log("4. Azucar");
    const opcion = await rl.question(
        "Seleccione un ingrediente: "
    );
    const cantidadTexto = await rl.question(
        "Cantidad a agregar: "
    );
    const cantidad = Number(cantidadTexto);
    if (isNaN(cantidad) || cantidad <= 0) {
        console.log(
            "La cantidad debe ser mayor que 0."
        );
        return;
    }


    if (opcion === "1") {
        ingredientes.cafe += cantidad;
        console.log(
            `Se agregaron ${cantidad} unidades de cafe.`
        );
    } else if (opcion === "2") {
        ingredientes.agua += cantidad;
        console.log(
            `Se agregaron ${cantidad} unidades de agua.`
        );
    } else if (opcion === "3") {
        ingredientes.leche += cantidad;
        console.log(
            `Se agregaron ${cantidad} unidades de leche.`
        );
    } else if (opcion === "4") {
        ingredientes.azucar += cantidad;
        console.log(
            `Se agregaron ${cantidad} unidades de azucar.`
        );
    } else {
        console.log("Opcion no valida.");
    }

}

async function simularError() {
    try {
        console.log("\n--- SIMULACION DE ERROR ---");
        console.log("La cocina esta preparando un pedido...");
        await esperar(2000);
        let numero = Math.random();
        if (numero < 0.33) {
            throw new Error(
                "La maquina de cafe tuvo un problema."
            );
        } else if (numero < 0.66) {
            throw new Error(
                "El cafe se quemo."
            );
        } else {
            throw new Error(
                "El pedido se preparo incorrectamente."
            );
        }
    } catch (error) {
        console.log("\nERROR EN COCINA:");
        console.log(error.message);
    }

}

async function agregarProducto() {

    let id = Number(
        await rl.question(
            "Ingrese el ID del producto: "
        )
    );
    if (isNaN(id) || id <= 0) {

        console.log("ID no valido.");

        return;
    }

    let existe = productos.find(
        producto => producto.id === id
    );

    if (existe) {
        console.log(
            "Ese ID ya esta siendo utilizado."
        );
        return;
    }

    let nombre = await rl.question(
        "Ingrese el nombre del producto: "
    );
    if (nombre.trim() === "") {
        console.log(
            "El nombre no puede estar vacio."
        );
        return;
    }

    let precio = Number(
        await rl.question(
            "Ingrese el precio del producto: "
        )
    );

    if (isNaN(precio) || precio <= 0) {
        console.log(
            "El precio debe ser mayor que 0."
        );
        return;
    }


    let categoria = await rl.question(
        "Ingrese la categoria (Bebida/Postre): "
    );
    if (
        categoria !== "Bebida" &&
        categoria !== "Postre"
    ) {
        console.log(
            "La categoria debe ser Bebida o Postre."
        );
        return;
    }

    let producto = {

        id: id,
        nombre: nombre,
        precio: precio,
        categoria: categoria,
        disponible: true
    };
    productos.push(producto);
    console.log(
        "Producto agregado correctamente."
    );
}

function listarProductos() {
    console.log("\n---- PRODUCTOS ----");
    if (productos.length === 0) {
        console.log(
            "No hay productos."
        );
        return;
    }


    for (let i = 0; i < productos.length; i++) {

        console.log(

            "ID: " + productos[i].id +

            " | Nombre: " +
            productos[i].nombre +

            " | Precio: $" +
            productos[i].precio +

            " | Categoria: " +
            productos[i].categoria +

            " | Disponible: " +

            (
                productos[i].disponible
                    ? "Si"
                    : "No"
            )

        );

    }

}

async function buscarProducto() {

    let id = Number(
        await rl.question(
            "Ingrese el ID del producto que desea buscar: "
        )
    );


    let productoEncontrado = productos.find(

        producto =>
            producto.id === id

    );


    if (productoEncontrado) {

        console.log(
            "\nProducto encontrado:"
        );

        console.log(
            "ID: " +
            productoEncontrado.id
        );

        console.log(
            "Nombre: " +
            productoEncontrado.nombre
        );

        console.log(
            "Precio: $" +
            productoEncontrado.precio
        );

        console.log(
            "Categoria: " +
            productoEncontrado.categoria
        );

        console.log(
            "Disponible: " +
            (
                productoEncontrado.disponible
                    ? "Si"
                    : "No"
            )
        );


    } else {

        console.log(
            "No se encontro el producto."
        );

    }

}

function productosBaratos() {

    let baratos = productos.filter(

        producto =>
            producto.precio < 50

    );


    console.log(
        "\n---- PRODUCTOS BARATOS ----"
    );


    if (baratos.length === 0) {

        console.log(
            "No hay productos baratos."
        );

        return;
    }


    for (let i = 0; i < baratos.length; i++) {

        console.log(

            baratos[i].nombre +
            " - $" +
            baratos[i].precio

        );

    }

}

function productosCaros() {

    let caros = productos.filter(

        producto =>
            producto.precio >= 50

    );


    console.log(
        "\n---- PRODUCTOS CAROS ----"
    );


    if (caros.length === 0) {

        console.log(
            "No hay productos caros."
        );

        return;
    }


    for (let i = 0; i < caros.length; i++) {

        console.log(

            caros[i].nombre +
            " - $" +
            caros[i].precio

        );

    }

}

function mostrarBebidas() {

    let bebidas = productos.filter(

        producto =>
            producto.categoria === "Bebida"

    );


    console.log(
        "\n---- BEBIDAS ----"
    );


    for (let i = 0; i < bebidas.length; i++) {

        console.log(

            bebidas[i].nombre +
            " - $" +
            bebidas[i].precio

        );

    }

}


function mostrarPostres() {

    let postres = productos.filter(

        producto =>
            producto.categoria === "Postre"

    );


    console.log(
        "\n---- POSTRES ----"
    );


    for (let i = 0; i < postres.length; i++) {

        console.log(

            postres[i].nombre +
            " - $" +
            postres[i].precio

        );

    }

}


async function editarProducto() {

    let id = Number(
        await rl.question(
            "Ingrese el ID del producto que desea editar: "
        )
    );


    let producto = productos.find(

        producto =>
            producto.id === id

    );


    if (!producto) {

        console.log(
            "No se encontro el producto."
        );

        return;
    }


    let nuevoNombre = await rl.question(
        "Ingrese el nuevo nombre: "
    );


    if (nuevoNombre.trim() === "") {

        console.log(
            "El nombre no puede estar vacio."
        );

        return;
    }


    let nuevoPrecio = Number(
        await rl.question(
            "Ingrese el nuevo precio: "
        )
    );


    if (
        isNaN(nuevoPrecio) ||
        nuevoPrecio <= 0
    ) {

        console.log(
            "El precio debe ser mayor que 0."
        );

        return;
    }


    let nuevaCategoria = await rl.question(
        "Ingrese la nueva categoria (Bebida/Postre): "
    );


    if (
        nuevaCategoria !== "Bebida" &&
        nuevaCategoria !== "Postre"
    ) {

        console.log(
            "Categoria no valida."
        );

        return;
    }


    let dispoTexto = await rl.question(
        "Disponible? (si/no): "
    );


    producto.nombre = nuevoNombre;

    producto.precio = nuevoPrecio;

    producto.categoria = nuevaCategoria;

    producto.disponible =
        dispoTexto.toLowerCase() === "si";


    console.log(
        "Producto actualizado."
    );

}


async function eliminarProducto() {

    let id = Number(
        await rl.question(
            "Ingrese el ID del producto que desea eliminar: "
        )
    );


    let producto = productos.find(

        producto =>
            producto.id === id

    );


    if (!producto) {

        console.log(
            "No se encontro el producto."
        );

        return;
    }


    productos = productos.filter(

        producto =>
            producto.id !== id

    );


    console.log(
        "Producto eliminado."
    );

}


async function menuCocina() {

    let opcion;


    do {

        console.log(

            "\n========== COCINA ==========\n" +

            "1. Agregar producto\n" +

            "2. Listar productos\n" +

            "3. Buscar producto\n" +

            "4. Productos baratos\n" +

            "5. Productos caros\n" +

            "6. Mostrar bebidas\n" +

            "7. Mostrar postres\n" +

            "8. Editar producto\n" +

            "9. Eliminar producto\n" +

            "10. Preparar cafe\n" +

            "11. Preparar capuchino\n" +

            "12. Preparar cafe con azucar\n" +

            "13. Revisar ingredientes\n" +

            "14. Agregar ingredientes\n" +

            "15. Simular error de cocina\n" +

            "0. Salir"

        );


        opcion = Number(
            await rl.question(
                "Seleccione una opcion: "
            )
        );


        switch (opcion) {


            case 1:

                await agregarProducto();

                break;


            case 2:

                listarProductos();

                break;


            case 3:

                await buscarProducto();

                break;


            case 4:

                productosBaratos();

                break;


            case 5:

                productosCaros();

                break;


            case 6:

                mostrarBebidas();

                break;


            case 7:

                mostrarPostres();

                break;


            case 8:

                await editarProducto();

                break;


            case 9:

                await eliminarProducto();

                break;


            case 10:

                await prepararCafe();

                break;


            case 11:

                await prepararCapuchino();

                break;


            case 12:

                await prepararCafeConAzucar();

                break;


            case 13:

                mostrarIngredientes();

                break;


            case 14:

                await agregarIngredientes();

                break;


            case 15:

                await simularError();

                break;


            case 0:

                console.log(
                    "Saliendo de Cocina..."
                );

                break;


            default:

                console.log(
                    "Opcion no valida."
                );

        }


    } while (opcion !== 0);


}

async function iniciar() {

    console.log(
        "\n================================"
    );

    console.log(
        "       SISTEMA DE COCINA"
    );
    console.log(
        "================================"
    );
    await menuCocina();
    rl.close();
}
iniciar();