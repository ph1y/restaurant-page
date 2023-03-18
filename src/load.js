import "./style.css";
import Banner from "./banner.jpg";

export default function loadPage() {
  const content = document.querySelector("#content");
  content.replaceChildren();

  const header = document.createElement("div");
  header.className = "header";

  const banner = document.createElement("div");
  banner.className = "banner";
  header.appendChild(banner);

  const bannerImg = new Image();
  bannerImg.className = "banner-img";
  bannerImg.src = Banner;
  banner.appendChild(bannerImg);

  const bannerTitle = document.createElement("div");
  bannerTitle.className = "banner-title";
  bannerTitle.textContent = "Restaurant";
  banner.appendChild(bannerTitle);

  const nav = document.createElement("nav");
  nav.className = "nav";
  header.appendChild(nav);

  const tab1 = document.createElement("div");
  tab1.classList.add("tab-1", "tab");
  tab1.textContent = "Home";

  const tab2 = document.createElement("div");
  tab2.classList.add("tab-2", "tab");
  tab2.textContent = "Menu";

  const tab3 = document.createElement("div");
  tab3.classList.add("tab-3", "tab");
  tab3.textContent = "Contact";

  nav.appendChild(tab1);
  nav.appendChild(tab2);
  nav.appendChild(tab3);

  const main = document.createElement("div");
  main.className = "main";

  const headline = document.createElement("div");
  headline.className = "headline";
  headline.textContent = "Enjoy delicious meals in a cozy mediterranean atmosphere.";

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = `Welcome to our Mediterranean restaurant, where we serve up delicious, authentic dishes inspired by the rich culinary traditions of the Mediterranean. Our cozy, inviting atmosphere and friendly staff make us the perfect destination for a relaxing meal with family and friends.
  
Our menu features a wide range of dishes, from classic meze and fresh salads to succulent grilled meats and seafood specialties. Every dish is made with the freshest ingredients and cooked to perfection, ensuring a satisfying and flavorful meal every time.
  
Whether you're a meat lover or a vegetarian, our menu has something for everyone. Our popular mixed grill features juicy chicken, tender lamb, and flavorful beef, while our falafel platter is a delicious vegetarian option.
  
To accompany your meal, we offer a selection of wines from the Mediterranean region, as well as a variety of cocktails and non-alcoholic beverages.
  
At our Mediterranean restaurant, we're committed to providing our customers with a memorable dining experience that is both delicious and affordable. We look forward to welcoming you to our restaurant and sharing the flavors of the Mediterranean with you.
  `;

  main.appendChild(headline);
  main.appendChild(description);

  content.appendChild(header);
  content.appendChild(main);
}
