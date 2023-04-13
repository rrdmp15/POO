let data;
let form = document.querySelector("#form")
let datos = [];
class Lapiz{
    #marca
    constructor({
        color = "#fff700",
        dimension = 19,
        marca = "Mongol",
        borrador = "Tiene",
        material = "Madera",
    }){
        this.color = color;
        this.dimension = dimension;
        this.marca = marca;
        this.borrador = borrador;
        this.material = material;
    }

    setColor(valor){
        this._color = valor;
    }
    setDimension(valor){
        this._dimension = valor;
    }
    setMarca(valor){
        this._marca = valor;
    }
    setBorrador(valor){
        this._borrador = valor;
    }
    setMaterial(valor){
        this._material = valor;
    }

    getColor(){
        return this.color; 
    }
    getDimension(){
        return this.dimension;
    }
    getMarca(){
        return this.marca;
    }
    getBorrador(){
        return this.borrador;
    }
    getMaterial(){
        return this.material;
    }

    obtener(){
        let plantilla = "";
        plantilla += `
        <tr>
            <td>${this._color}</td>
            <td>${this._dimension}</td>
            <td>${this._marca}</td>
            <td>${this._borrador}</td>
            <td>${this._material}</td>
        </tr>
        `;
        document.querySelector("#tbody").insertAdjacentHTML("beforeend", plantilla);
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    data = Object.fromEntries(new FormData(e.target))
    let lapiz = new Lapiz({});
    lapiz._color = data.color;
    lapiz._dimension = data.dimension;
    lapiz._marca = data.marca;
    lapiz._borrador = data.borrador;
    lapiz._material = data.material;
    lapiz.obtener();
    form.reset();
})

let obj = undefined;
let color = document.querySelector(`[name="color"]`);
let dimension = document.querySelector(`[name="dimension"]`);
let marca = document.querySelector(`[name="marca"]`);
let borrador = document.querySelector(`[name="borrador"]`);
let material = document.querySelector(`[name="material"]`);

addEventListener("DOMContentLoaded", (e)=>{
    obj = new Lapiz({})
    color.value = obj.color;
    dimension.value = obj.dimension;
    marca.value = obj.marca;
    document.querySelector(`input[name="marca"][value=${marca.value}]`).checked = true;

    borrador.value = obj.borrador;
    document.querySelector(`input[name="borrador"][value=${borrador.value}]`).checked = true;

    material.value = obj.material;
    document.querySelector(`input[name="material"][value=${material.value}]`).checked = true;
})

//``