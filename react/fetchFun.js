const products = document.getElementById("products");
const btn = document.getElementById("btn");
const fun = async () => {
    try {
        const data = await fetch("https://fakestoreapi.com/products");
        const res = await data.json();
        const table = document.createElement("table");
        res.map((d) => {
            const td = document.createElement("td");
            td.className = "prod";
            td.innerHTML = d.description;
            console.log("Hi");
            td.style.border = "2px solid red";
            console.log("Hi2");
            table.appendChild(td);
            products.appendChild(table);
        })

    } catch (error) {
        console.log(error);
    }
}
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    fun();
})