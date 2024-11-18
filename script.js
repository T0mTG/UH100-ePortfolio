//reuse navigation bar
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>            
             <header class="navBar"> 
        <div class="mainLogo"> TomFoolery </div>
        <div class="navUl">
            <a class="navItem" href="contact.html">Contact</a>
            <a class="navItem" href="plan.html">Academic-Plan</a>
            <a class="navItem" href="about.html">About</a>
            <a class="navItem" href="index.html">Home</a>
        </div>
    </header>     
        </nav>
      `;
    }
  }
customElements.define('main-header', Header);