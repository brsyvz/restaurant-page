import siteLogo from "../img/siteLogo.png";

const load_HeaderFooter = (() => {
  const content = document.getElementById("content");

  function Logo() {
    const topContainer = document.createElement("div");
    topContainer.className = "logoSection";
    topContainer.innerHTML = `
  <p><i class="far fa-clock"></i><b> Open: </b>10:00 - 22:00</p>
  `;
    const logo = new Image();
    logo.src = siteLogo;
    topContainer.appendChild(logo);
    content.appendChild(topContainer);
  }

  function Header() {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    header.classList.add("header");
    header.appendChild(nav);
    nav.appendChild(ul);
    const linkText = ["Home", "Menu", "Contact"];
    const link_id = ["homePage", "menuPage", "contactPage"];
    for (let i = 0; i < 3; i++) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      ul.appendChild(li);
      li.appendChild(a);
      a.textContent = linkText[i];
      a.setAttribute("id", link_id[i]);
    }

    window.onscroll = () => {
      let header = document.querySelector(".header");
      let sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
        header.classList.add("stickyHeader");
      } else {
        header.classList.remove("stickyHeader");
      }
    };

    content.appendChild(header);
  }

  function Footer() {
    const footer = document.createElement("footer");
    const footerSection = document.createElement("div");
    footerSection.appendChild(footer);
    footer.innerHTML = `
  <ul>
    <li><i class="fas fa-phone-alt"></i> 222 222 2222</li>
    <li>
      <i class="fas fa-map-marker-alt"></i> Lorem ipsum dolor sit amet, 222
      city / country
    </li>
    <li><i class="fas fa-envelope"></i> seafood123@gmail.com</li>
    <li class="githubMark">
      Baris Yavuz
      <a href="https://github.com/brsyvz" target="_blank">
        <i class="fab fa-github"></i
      ></a>
    </li>
  </ul>`;

    content.appendChild(footer);
  }

  return function () {
    Logo();
    Header();
    Footer();
  };
})();

export { load_HeaderFooter };
