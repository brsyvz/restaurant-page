import { load_HeaderFooter } from "./header_footer";
import { navLinksListener } from "..";

const loadContactPage = (() =>  {
const content = document.getElementById("content");
content.innerHTML = "";
load_HeaderFooter();
let formContainer = document.createElement("div");
formContainer.className = "formContainer";
formContainer.innerHTML = `
  <form action="/action_page.php">
    <label for="fname">Full name</label>
    <input type="text" id="fname" name="fullname" />
    <label for="phone">Phone</label>
    <input type="number" id="phone" name="phone" />
    <label for="phone">Email</label>
    <input type="email" id="email" name="email" />
    <label for="message">Message</label>
    <textarea id="message" name="message" style="height: 150px"></textarea>
    <input id="submit" value="Submit" />
  </form>
  <section class="info">
    <h4>Contact Info</h4>
    <p><i id="fa-Road" class="fas fa-road"></i>Lorem ipsum dolor sit amet, 222 city / country</p>
    <p><i id="fa-Phone"class="fas fa-phone-alt"></i>(222) 222-2222</p>
    <p><i id="fa-Envelope" class="fas fa-envelope"></i>seafood123@gmail.com</p>
  </section>`
content.appendChild(formContainer);
navLinksListener();  
});

export{loadContactPage}