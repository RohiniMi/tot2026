const products = document.getElementById("products");
const btn = document.getElementById("btn");
const loader = document.getElementById("loader");

const showData = (res, table) => {
    res.map((d) => {
        const div = document.createElement("div");
        div.className = "prod";
        div.innerHTML = d.description;
        div.style.border = "2px solid red";
        products.appendChild(div);
    })
}
const getData = async () => {
    try {
        loader.innerHTML = `<>loading...</>`
        const data = await fetch("https://fakestoreapi.com/products");
        const res = await data.json();
        const table = document.createElement("table");
        showData(res, table);
        btn.innerHTML = "click me to hide data";
    } catch (error) {
        console.log(error);
    } finally {
        loader.innerHTML = ``;
    }
}
btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (btn.innerHTML === "click me to get data")
        getData();
    else {
        products.innerHTML = "";
        btn.innerHTML = "click me to get data";
    }
})