class lapiz{
    #marca
    constructor({
        color = "#fff700",
        dimension = 19,
        marca = "Mongol",
        borrador = true,
        material = "Madera"
    }){
        this.color = color;
        this.dimension = dimension;
        this.marca = marca;
        this.borrador = borrador;
        this.material = material;
    }
    getColor(){
        return this.color;
    }
}
let obj = undefined;
let color = document.querySelector(`[name="color"]`)
addEventListener("DOMContentLoaded", (e)=>{
    obj = new lapiz({})
    color.value = obj.color;
})

//``