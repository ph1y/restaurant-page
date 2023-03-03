import "./style.css";
import Banner from "./banner.jpg";

export default function loadPage() {
  const contentDiv = document.querySelector("#content");

  const banner = new Image();
  banner.className = "banner";
  banner.src = Banner;

  const headerText = document.createElement("div");
  headerText.className = "header-text";
  headerText.textContent = "Restaurant";

  const headlineText = document.createElement("div");
  headlineText.className = "headline-text";
  headlineText.textContent = "Enjoy delicious meals in a cozy mediterranean atmosphere.";

  const descriptionText = document.createElement("p");
  descriptionText.className = "description-text";
  descriptionText.textContent = `Welcome to our Mediterranean restaurant, where we serve up delicious, authentic dishes inspired by the rich culinary traditions of the Mediterranean. Our cozy, inviting atmosphere and friendly staff make us the perfect destination for a relaxing meal with family and friends.

  Our menu features a wide range of dishes, from classic meze and fresh salads to succulent grilled meats and seafood specialties. Every dish is made with the freshest ingredients and cooked to perfection, ensuring a satisfying and flavorful meal every time.
  
  Whether you're a meat lover or a vegetarian, our menu has something for everyone. Our popular mixed grill features juicy chicken, tender lamb, and flavorful beef, while our falafel platter is a delicious vegetarian option.
  
  To accompany your meal, we offer a selection of wines from the Mediterranean region, as well as a variety of cocktails and non-alcoholic beverages.
  
  At our Mediterranean restaurant, we're committed to providing our customers with a memorable dining experience that is both delicious and affordable. We look forward to welcoming you to our restaurant and sharing the flavors of the Mediterranean with you.
  `;

  contentDiv.appendChild(banner);
  contentDiv.appendChild(headerText);
  contentDiv.appendChild(headlineText);
  contentDiv.appendChild(descriptionText);
}
