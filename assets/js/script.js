


let itemContainer= document.querySelector('#item-container');


let innerHTML='';
items.forEach(item=>{
    innerHTML+=`
    <div class="col-lg-2 col-md-4 mb-4">
        <div class="card rounded-0 border-0 shadow">
            <img src="${item.image}" class="card-img-top rounded-0" alt="tshirt">
            <div class="card-body">
                <h6 class="card-title fw-bold mb-0">${item.company}</h6>
                <p class="card-text fw-400">${item.title}</p>
                <div>
                    <span class="fw-bold">${item.dis_price}</span>
                    <del class="fs-14">${item.price}</del>&nbsp;
                    <span class="text-orange text-opacity-75 fs-14 fw-400">(${item.discount} Off)</span>
                </div>
                <div class="mt-2">
                    <button class="btn btn-success w-100" onclick="addToCart(${item.id})">Add to Cart</button>
                </div>
            </div>
        </div>
     </div>
    `
})
itemContainer.innerHTML=innerHTML;

