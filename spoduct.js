const products = [
  {
    id: 1,
    name: "Black Women Coat Dress",
    image: "asset/products/shoe1-1.jpg",
    price: 129,
    oldPrice: 189.98,
    rating: "★★★★★ (2,548)",
    sold: "2975 Sold · Free Shipping",
    link: "shop.html"
  },
  {
    id: 2,
    name: "Women Stylish Coat",
    image: "asset/products/electronic2.jpg",
    price: 129,
    oldPrice: 189.98,
    rating: "★★★★★ (2,548)",
    sold: "2975 Sold · Free Shipping",
    link: "shop1.html"
  },
  {
    id: 3,
    name: "Winter Fashion Dress",
    image: "asset/products/apparel1.jpg",
    price: 129,
    oldPrice: 189.98,
    rating: "★★★★★ (2,548)",
    sold: "2975 Sold · Free Shipping",
    link: "shop2.html"
  },
  {
    id: 4,
    name: "Home Decor Product",
    image: "asset/products/home4.jpg",
    price: 129,
    oldPrice: 189.98,
    rating: "★★★★★ (2,548)",
    sold: "2975 Sold · Free Shipping",
    link: "shop3.html"
  },
  {
    id: 5,
    name: "Fashion Accessories",
    image: "asset/menu/menu_bg1.jpg",
    price: 129,
    oldPrice: 189.98,
    rating: "★★★★★ (2,548)",
    sold: "2975 Sold · Free Shipping",
    link: "shop4.html"
  },
  {
    id: 6,
    name: "Modern Apparel Dress",
    image: "asset/products/apparel6.jpg",
    price: 129,
    oldPrice: 189.98,
    rating: "★★★★★ (2,548)",
    sold: "2975 Sold · Free Shipping",
    link: "shop5.html"
  },
 
];


const productList = document.getElementById("productList");

products.forEach(product => {
  productList.innerHTML += `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="card small-product p-2 h-100">
        <img src="${product.image}" class="img-fluid rounded" alt="${product.name}">
        <div class="mt-2">
          <h6>${product.name}</h6>
          <div class="text-warning small">${product.rating}</div>
          <h6 class="text-danger fw-bold">
            $${product.price}
            <span class="text-muted text-decoration-line-through">$${product.oldPrice}</span>
          </h6>
          <a href="${product.link}" class="btn btn-primary btn-sm">View Details</a>
          <small class="text-muted d-block">${product.sold}</small>
        </div>
      </div>
    </div>
  `;
});

