import React, { useState } from "react";
import styles from "@/styles/NavBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

const NavBar = (props: Props) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const router = useRouter();
  const isActive = router.pathname === "/";

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>Logo</div>
      <ul
        className={
          hamburgerOpen ? styles.navbarMenuSmallScreen : styles.navbarMenu
        }
      >
        <li>
          <Link
            href="/"
            className={isActive ? "active" : ""}
            onClick={() => setHamburgerOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className={isActive ? "active" : ""}
            onClick={() => setHamburgerOpen(false)}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={isActive ? "active" : ""}
            onClick={() => setHamburgerOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
      {hamburgerOpen ? (
        <div
          //className={styles.hamburger}
          onClick={() => {
            setHamburgerOpen(false);
          }}
        >
          <GrClose />
        </div>
      ) : (
        <div
          className={styles.hamburger}
          onClick={() => {
            setHamburgerOpen(true);
          }}
        >
          <GiHamburgerMenu />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
