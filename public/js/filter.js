const data = [
  {
    title: "BEEF CHEESE BURGER",
    src: "public/image/menu/beef_burger.jpg",
    price: "$11.50",
    category: "burgers",
  },
  {
    title: "GRAND ITALIANO PIZZA",
    src: "public/image/menu/double_cheese_pizza.jpg",
    price: "$21.30",
    category: "pizzas",
  },
  {
    title: "DOUBLE CHEESE PIZZA",
    src: "public/image/menu/pizza.jpg",
    price: "$15.30",
    category: "pizzas",
  },
  {
    title: "STEAK BURGER",
    src: "public/image/menu/beef_burger.jpg",
    price: "$11.50",
    category: "steaks",
  },
  {
    title: "PASTA",
    src: "public/image/menu/pasta.jpg",
    price: "$16.99",
    category: "pasts",
  },
  {
    title: "SEA SALAD",
    src: "public/image/menu/seafood.jpg",
    price: "$23.99",
    category: "salads",
  },
  {
    title: "DOUBLE MAC BURGER",
    src: "public/image/menu/burger.png",
    price: "$13.80",
    category: "burgers",
  },
  {
    title: "CHICKEN BURGER",
    src: "public/image/menu/chicken_burger.jpg",
    price: "$14.35",
    category: "burgers",
  },
  {
    title: "STEAK PIZZA",
    src: "public/image/menu/double_cheese_pizza.jpg",
    price: "$21.30",
    category: "steaks",
  },
  {
    title: "SEAFOOD",
    src: "public/image/menu/seafood.jpg",
    price: "$23.99",
    category: "deserts",
  },
  {
    title: "BURGER DESERT",
    src: "public/image/menu/burger.png",
    price: "$13.80",
    category: "deserts",
  },
  {
    title: "PASTA DESERT",
    src: "public/image/menu/pasta.jpg",
    price: "$16.99",
    category: "deserts",
  },
  {
    title: "LEMONADE",
    src: "public/image/menu/lemonade.jpg",
    price: "$5.00",
    category: "drinks",
  },
];

let topContent = document.getElementById("menu__list");
let items = document.getElementById("menu__gallery");
let categories = [];
for (let item of data) {
  categories.push(item.category);
}
categories = [...new Set(categories)];

let output = `<li><a onClick = "filterItems('all')" class="button button--focused" tabindex="0" >all</a></li>`;
for (let category of categories) {
  output += `<li><a onClick = "filterItems('${category}')" class="button" tabindex="0">${category}</a></li>`;
}
topContent.innerHTML = output;

let outputItems = ``;
for (let item of data) {
  outputItems += `
      <div class="menu__item">
          <img src="${item.src}" alt="product-1" />
          <h3>${item.title}</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing, elit.</p>
          <p class="price">${item.price}</p>
      </div>`;
}
items.innerHTML = outputItems;

function filterItems(categ) {
  let outputFilter = ``;
  for (let item of data) {
    if (item.category == categ) {
      outputFilter += `
              <div class="menu__item">
                  <img src="${item.src}" alt="product-1" />
                  <h3>${item.title}</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing, elit.</p>
                  <p class="price">${item.price}</p>
              </div>`;
    } else if (categ == "all") {
      outputFilter += `
              <div class="menu__item">
                  <img src="${item.src}" alt="product-1" />
                  <h3>${item.title}</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing, elit.</p>
                  <p class="price">${item.price}</p>
              </div>`;
    }
  }
  items.innerHTML = outputFilter;
}

const buttons = document.querySelectorAll("#menu__list .button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    buttons.forEach((btn) => btn.classList.remove("button--focused"));
    event.target.classList.add("button--focused");

    const category = event.target.getAttribute("onclick").match(/'(\w+)'/)[1];
    filterItems(category);
  });
});
