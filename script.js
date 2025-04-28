// ドロップダウン内のカテゴリークリックで商品をフィルター
const dropdownItems = document.querySelectorAll(".dropdown-item");
const products = document.querySelectorAll(".shirt_all");

dropdownItems.forEach(item => {
  item.addEventListener("click", () => {
    const filter = item.getAttribute("data-filter");

    products.forEach(product => {
      const category = product.getAttribute("data-category");
      if (filter === category || filter === "すべて") {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});
