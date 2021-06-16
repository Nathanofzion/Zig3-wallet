export const Navbar = () => {
  return (
<div id="mySidenav" className="sidenav">
          <div id="all-items">
            <span id="menu" className="menu">
              Menu
            </span>
            <div className="menu-hr"></div>
            <div className="menu-hr-purple"></div>
            <div id="nav-items">
            <a id = "item1" className="item-nav" href="/">
              CREATE NEW WALLET
            </a>
            <hr></hr>
            <a id = "item2" className="item-nav" href="/">
              LOGIN
            </a>
            <hr></hr>
            <a id = "item3" className="item-nav" href="/">
              GET $50 XLM FREE HERE
            </a>
            <hr></hr>
            <a id = "item4" className="item-nav" href="/">
              PRIVACY POLICY
            </a>
            <hr></hr>
            <a id = "item5" className="item-nav" href="/">
              TERMS
            </a>
            <hr></hr>
            </div>
            <div id="menu-end-hr"></div>
            <br></br>
            <span id="contact" className="contact">
              Get in touch
            </span>
            <div className="contact-hr"></div>
            <div className="contact-hr-purple"></div>
            <br></br>
            <br></br>
            <div className="contact-footer1">
              {" "}
              Have an issues? or you want to list your asset on Zig3? contact
              us.
            </div>
            <br></br>
            <div className="contact-footer1">info@zig3.io</div>
            <br></br>
            <div className="contact-footer1">
              © Zig3 founded and devaloped by Zig3. Contact.
            </div>
          </div>
        </div>

  )};