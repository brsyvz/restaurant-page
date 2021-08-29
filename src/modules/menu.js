import { load_HeaderFooter } from "./header_footer";
import { navLinksListener } from "..";

const loadMenu = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  load_HeaderFooter();
  let container = document.createElement("div");
  container.className = "container";
  container.innerHTML = `<div class="menu">
  <h1>MENU</h1>
  <h2 class="menu-group-heading">Specials</h2>
  <div class="menu-group">
    <div class="menu-item">
      <img class="menu-item-image" src="https://i.ibb.co/SmFJ7pF/f1.png" alt="" />
      <div class="menu-item-text">
        <h3 class="menu-item-heading">
          <span class="menu-item-name">Food name</span>
          <span class="menu-item-price">$15.00</span>
        </h3>
        <p class="menu-item-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem aliquam saepe nisi quis consequuntur commodi, libero
          odit officiis.
        </p>
      </div>
    </div>
    <div class="menu-item">
      <img class="menu-item-image" src="https://i.ibb.co/2PD6JxR/f2.png" alt="" />
      <div class="menu-item-text">
        <h3 class="menu-item-heading">
          <span class="menu-item-name">Food name</span>
          <span class="menu-item-price">$15.00</span>
        </h3>
        <p class="menu-item-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem aliquam saepe nisi quis consequuntur commodi, libero
          odit officiis.
        </p>
      </div>
    </div>
    <div class="menu-item">
      <img class="menu-item-image" src="https://i.ibb.co/kSHhHmW/f3.png" alt="" />
      <div class="menu-item-text">
        <h3 class="menu-item-heading">
          <span class="menu-item-name">Food name</span>
          <span class="menu-item-price">$15.00</span>
        </h3>
        <p class="menu-item-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem aliquam saepe nisi quis consequuntur commodi, libero
          odit officiis.
        </p>
      </div>
    </div>
    <div class="menu-item">
      <img class="menu-item-image" src="https://i.ibb.co/hMK8RD2/f4.png" alt="" />
      <div class="menu-item-text">
        <h3 class="menu-item-heading">
          <span class="menu-item-name">Food name</span>
          <span class="menu-item-price">$15.00</span>
        </h3>
        <p class="menu-item-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem aliquam saepe nisi quis consequuntur commodi, libero
          odit officiis.
        </p>
      </div>
    </div>
  </div>

  <h2 class="menu-group-heading">Salads</h2>
  <div class="menu-group">
    <div class="menu-item">
      <img class="menu-item-image" src="https://i.ibb.co/bWLZx0q/s2.png" alt="" />
      <div class="menu-item-text">
        <h3 class="menu-item-heading">
          <span class="menu-item-name">Salad name</span>
          <span class="menu-item-price">$15.00</span>
        </h3>
        <p class="menu-item-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem aliquam saepe nisi quis consequuntur commodi, libero
          odit officiis.
        </p>
      </div>
    </div>
    <div class="menu-item">
      <img class="menu-item-image" src="https://i.ibb.co/Q7VzK9T/s1.png" alt="" />
      <div class="menu-item-text">
        <h3 class="menu-item-heading">
          <span class="menu-item-name">Salad name</span>
          <span class="menu-item-price">$15.00</span>
        </h3>
        <p class="menu-item-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem aliquam saepe nisi quis consequuntur commodi, libero
          odit officiis.
        </p>
      </div>
    </div>
  </div>
  <h2 class="menu-group-heading">Drinks</h2>
  <div class="menu-group">
    <div class="menu-item">
      <img class="menu-item-image" src="https://i.ibb.co/LPdcK5Q/d11.png" alt="" />
      <div class="menu-item-text">
        <h3 class="menu-item-heading">
          <span class="menu-item-name">Drink name</span>
          <span class="menu-item-price">$15.00</span>
        </h3>
        <p class="menu-item-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem aliquam saepe nisi quis consequuntur commodi, libero
          odit officiis.
        </p>
      </div>
    </div>
    <div class="menu-item">
      <img class="menu-item-image" src="https://i.ibb.co/LPdcK5Q/d11.png" alt="" />
      <div class="menu-item-text">
        <h3 class="menu-item-heading">
          <span class="menu-item-name">Drink name</span>
          <span class="menu-item-price">$15.00</span>
        </h3>
        <p class="menu-item-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem aliquam saepe nisi quis consequuntur commodi, libero
          odit officiis.
        </p>
      </div>
    </div>
  </div>
</div>`;
  content.appendChild(container);
  navLinksListener();
};

export { loadMenu };
