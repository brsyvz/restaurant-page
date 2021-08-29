import background from "../img/siteBackground.jpg";
import { load_HeaderFooter } from "./header_footer";
import { navLinksListener } from "..";


const loadHome = (() => {
  const content = document.getElementById("content");
  function heroText() {
    const heroText = document.createElement("div");
    const h1 = document.createElement("h1");
    const resButton = document.createElement("button");
    h1.textContent = "best seafood in the city";
    heroText.className = "herotextSection";
    resButton.className = "resBtn";
    resButton.textContent = "Make Reservation";
    heroText.appendChild(h1);
    heroText.appendChild(resButton);
    content.appendChild(heroText);
  }

  function socialMediaPanel() {
    const social = document.createElement("div");
    social.className = "social-m-Panel";
    social.innerHTML = `
  <button class="twitter socialBtns">
    <i class="fa fa-twitter"></i>
  </button>
  <button class="facebook socialBtns">
    <i class="fa fa-facebook"></i>
  </button>
  <button class="instagram socialBtns">
    <i class="fa fa-instagram"></i>
  </button>`;
    content.appendChild(social);
  }

  function bgImage() {
    const bodyImage = document.createElement("img");
    bodyImage.className = "bgImage";
    bodyImage.src = background;
    content.appendChild(bodyImage);
  }

  function reservationForm() {
    const resForm = document.createElement("div");
    resForm.className = "resForm";
    resForm.innerHTML = ` <h2>BOOK YOUR TABLE NOW</h2>
    <div id="res" class="card-container">
      <div class="card-content">
        <form>
          <div class="form-row">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Phone" />
          </div>
          <div class="form-row">
            <input
              placeholder="Date"
              class="textbox-n"
              type="text"
              onfocus="(this.type='date')"
              onblur="(this.type='text')"
              id="date"
            />
            <select name="hours">
              <option value="hour-select">Hour</option>
              <option value="10">10: 00</option>
              <option value="10-30">10: 30</option>
              <option value="12-00">12: 00</option>
              <option value="14-00">14: 00</option>
              <option value="16-00">16: 00</option>
              <option value="18-00">18: 00</option>
              <option value="20-00">20: 00</option>
              <option value="22-00">22: 00</option>
            </select>
          </div>
          <div class="form-row">
            <input type="number" placeholder="No. of guests" min="1" />
            <select name="hours">
              <option value="hour-select">Table Location</option>
              <option value="10">Window side</option>
              <option value="10">Center</option>
            </select>
          </div>

          <div class="form-row">
            <button type="button">SEND</button>
          </div>
        </form>
      </div>
    </div>`;

    document.querySelector(".resBtn").addEventListener("click", () => {
      document
        .querySelector(".card-container")
        .scrollIntoView({ behavior: "smooth" });
    });
    content.appendChild(resForm);
  }

  return function () {
    content.innerHTML = "";
    load_HeaderFooter();
    heroText();
    socialMediaPanel();
    bgImage();
    reservationForm();
    navLinksListener();
  };
})();

export { loadHome };
