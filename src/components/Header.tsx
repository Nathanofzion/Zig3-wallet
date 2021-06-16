import React, { useState } from "react";
import { TextButton } from "@stellar/design-system";
// import { ProjectLogo } from "components/Logo/index";
import { Modal } from "components/Modal";
// import { Darklogo } from "components/darklogo";
import { SignOutModal } from "components/SignOutModal";
import { useRedux } from "hooks/useRedux";
import { Navbar } from "components/Nav";

let checkedlogs: boolean;
let checkedtheme: boolean;

// Logs change Function
export const handleToggle2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkedlogs = e.target.checked;
    const log = document.getElementById("logs");
    const log1 = document.getElementById("logs1");
    const title = document.getElementById("log-title");
    const wraplog = document.getElementById("wrap-log");
    const logo = document.getElementById("plogo");
    if (checkedlogs) {
      if (logo != null) {
        logo.style.marginRight = "38%";
      }
      if (log != null && title != null) {
        log.style.width = "100%";
        setTimeout(() => {
          title.style.display = "flex";
        }, 200);
      }
      if (log1 != null && wraplog != null) {
        log1.style.width = "100%";
        // log1.style.marginRight = "13%"
        setTimeout(() => {
          wraplog.style.display = "flex";
        }, 300);
      }
    } else if (checkedlogs === false) {
      if (logo != null) {
        logo.style.marginRight = "70%";
      }
      if (log != null && title != null) {
        title.style.display = "none";
        log.style.width = "0";
      }
      if (log1 != null && wraplog != null) {
        log1.style.width = "0";
        setTimeout(() => {
          wraplog.style.display = "none";
        }, 200);
      }
    }
  };


export const Header = () => {
  const balances = document.getElementById("bal");
  if (checkedtheme) {
    if (balances != null) {
      balances.style.color = "#fff";
    }
  }

  const [modalVisible, setModalVisible] = useState(false);

  const { account } = useRedux("account");

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // Theme change function
  const handleToggle1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkedtheme = e.target.checked;
    const theme = document.getElementById("thm");
    const kbtn1 = document.getElementById("key-btn1");
    const kbtn2 = document.getElementById("key-btn2");
    const toggle1 = document.getElementById("toggle-1");
    const toggle2 = document.getElementById("toggle-2");
    const content = document.getElementById("key-pair");
    const log = document.getElementById("logs");
    const log1 = document.getElementById("logs1");
    const nav = document.getElementById("mySidenav");
    const dlogo = document.getElementById("dark-logo");
    const app = document.getElementById("app-wrapper");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");
    const wlogo = document.getElementById("white-logo");
    const stext = document.getElementById("sign-out-text");
    const navitems = document.getElementById("all-items")
    const item1 = document.getElementById("item1")
    const item2 = document.getElementById("item2")
    const item3 = document.getElementById("item3")
    const item4 = document.getElementById("item4")
    const item5 = document.getElementById("item5")

    if (checkedtheme) {
      if (theme != null && app != null) {
        theme.classList.add("dark");
        app.classList.add("dark");
      }
      if (item1 != null && item2 != null && item3 != null && item4 != null && item5 != null){
        item1.style.color = "#fff"
        item2.style.color = "#fff"
        item3.style.color = "#fff"
        item4.style.color = "#fff"
        item5.style.color = "#fff"
      }
      if (navitems != null){
        navitems.style.color = "#fff"
      }
      if (nav != null){
        nav.style.backgroundColor =  "#3d4449"
      }
      if (stext != null) {
        stext.style.color = "#111";
      }
      if (wlogo != null) {
        wlogo.style.display = "none";
      }
      if (dlogo != null) {
        dlogo.style.display = "flex";
      }
      if (content != null) {
        content.style.color = "#fff";
      }
      if (log != null) {
        log.style.background = "#111";
        log.style.opacity = "0.9";
      }
      if (log1 != null) {
        log1.style.background = "#111";
        log1.style.opacity = "0.9";
      }
      if (balances != null) {
        balances.style.color = "#fff";
      }

      if (kbtn1 != null && kbtn2 != null) {
        kbtn1.style.color = "#fff";
        kbtn2.style.color = "#fff";
      }
      if (toggle1 != null && toggle2 != null) {
        toggle1.style.color = "#fff";
        toggle2.style.color = "#fff";
      }
      if (menu != null && contact != null) {
        menu.style.color = "#fff";
        contact.style.color = "#fff";
      }
    } else if (checkedtheme === false) {
      if (theme != null && app != null) {
        theme.classList.remove("dark");
        app.classList.remove("dark");
      }
      if (nav != null){
        nav.style.backgroundColor =  "#f5f6f7"
      }
      if (item1 != null && item2 != null && item3 != null && item4 != null && item5 != null){
        item1.style.color = "#111"
        item2.style.color = "#111"
        item3.style.color = "#111"
        item4.style.color = "#111"
        item5.style.color = "#111"
      }
      if (navitems != null){
        navitems.style.color = "#111"
      }
      if (wlogo != null) {
        wlogo.style.display = "flex";
      }
      if (dlogo != null) {
        dlogo.style.display = "none";
      }
      if (content != null) {
        content.style.color = "#111";
      }
      if (log != null) {
        log.style.background = "#f2f2f2";
      }
      if (log1 != null) {
        log1.style.background = "#f2f2f2";
      }
      if (balances != null) {
        balances.style.color = "#111";
      }
      if (kbtn1 != null && kbtn2 != null) {
        kbtn1.style.color = "#111";
        kbtn2.style.color = "#111";
      }
      if (toggle1 != null && toggle2 != null) {
        toggle1.style.color = "#111";
        toggle2.style.color = "#111";
      }
      if (menu != null && contact != null) {
        menu.style.color = "#111";
        contact.style.color = "#111";
      }
    }
  };


  // Navbar functions
  const openNav = () => {
    const nav = document.getElementById("mySidenav");
    const bod = document.getElementById("Main");
    const log = document.getElementById("logs");
    const log1 = document.getElementById("logs1");
    const navbtn1 = document.getElementById("openNav");
    const navbtn2 = document.getElementById("openNav2");
    const title = document.getElementById("log-title");
    const logbtn = document.getElementById("log-btn");
    const logo = document.getElementById("plogo");

    if (nav != null && bod != null) {
      nav.style.marginLeft = "0";
      bod.style.marginLeft = "27%";
    }
    if (logo != null) {
      logo.style.marginRight = "58%";
    }
    if (logbtn != null) {
      logbtn.style.pointerEvents = "none";
    }
    if (title != null) {
      title.style.display = "none";
    }
    if (log != null) {
      log.style.width = "0";
    }
    if (log1 != null) {
      log1.style.width = "0";
    }
    if (navbtn1 != null && navbtn2 != null) {
      navbtn1.style.display = "none";
      navbtn2.style.display = "flex";
    }
  };

  const closeNav = () => {
    const nav = document.getElementById("mySidenav");
    const bod = document.getElementById("Main");
    const log = document.getElementById("logs");
    const log1 = document.getElementById("logs1");
    const navbtn1 = document.getElementById("openNav");
    const navbtn2 = document.getElementById("openNav2");
    const title = document.getElementById("log-title");
    const logbtn = document.getElementById("log-btn");
    const logo = document.getElementById("plogo");
    if (nav != null && bod != null) {
      nav.style.marginLeft = "-30%";
      bod.style.marginLeft = "0";
    }
    if (logo != null) {
      logo.style.marginRight = "70%";
    }
    if (logbtn != null) {
      logbtn.style.pointerEvents = "visible";
    }
    if (checkedlogs === true) {
      if (log != null) {
        log.style.width = "100%";
      }
      if (log1 != null) {
        log1.style.width = "100%";
      }
      if (logo != null) {
        logo.style.marginRight = "39%";
      }
    }
    if (title != null) {
      setTimeout(() => {
        title.style.display = "flex";
      }, 200);
    }
    if (navbtn1 != null && navbtn2 != null) {
      navbtn1.style.display = "flex";
      navbtn2.style.display = "none";
    }
  };

  return (
    <div className="Header">
      <div className="Inset">
      < Navbar />
        <div id="openNav2" onClick={closeNav} className="ham">
          &#9776;
        </div>
        <div id="openNav" onClick={openNav} className="ham">
          &#9776;
        </div>
        <span id="plogo">
          <span id="white-logo">
            <img className = "logo-img" src = "android-chrome-192x192.png"></img>
          </span>
          <div id="dark-logo">
            <img className = "logo-img" src = "android-chrome-192x192.png"></img>
          </div>
        </span>
        <label id = "theme-btn" className="pure-material-switch">
          <input onChange={handleToggle1} type="checkbox" />
          <span id="toggle-1">
            <b>Day/Night</b>
          </span>
        </label>
        {account.isAuthenticated && (
          <TextButton id = "sign-out" onClick={() => setModalVisible(true)}>
            Sign out
          </TextButton>
        )}
      </div>
      <Modal visible={modalVisible} onClose={handleCloseModal}>
        <SignOutModal onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};
