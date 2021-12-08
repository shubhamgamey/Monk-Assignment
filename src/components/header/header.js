/** @jsx jsx */
import { jsx, Container, Flex, Heading,Text } from "theme-ui";
import { Link } from "components/link";
import { Link as ScrollLink } from "react-scroll";
import Logo from "components/logo";
import { DrawerProvider } from "contexts/drawer/drawer.provider";
import MobileDrawer from "./mobileDrawer";
import menuItems from "./header.data";
import logoDark from "assets/logo.svg";
import { Button } from "@theme-ui/components";

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo image={logoDark} />
          <Heading as="h3" sx={styles.logoText}>
              Lasles<strong>VPN</strong>
            </Heading>
          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <ScrollLink
                activeClass="active"  
                sx={styles.nav.navLink}
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
          </Flex>
          <Link
            path="/"
            ml={2}
            label="Sign In"
            sx={styles.headerBtn2}
           
          />
          <Link
            path="/"
            ml={2}
            label="Sign Up"
            sx={styles.headerBtn}
           
          />
            <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "-0.16px",
    borderRadius: "20px",
    color: "black",
    backgroundColor:"transparent",
    border:"1px solid #F53855",
    padding: "6.5px 24px",
    display: ["none", null, null, null, "inline-block"],
    ml: ["0", null, null, "auto", "0"],
    mr: ["0", null, null, "20px", "0"],
    "&:hover": {
      color: "#fff",
    },
  },

  headerBtn2: {
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "-0.16px",
    borderRadius: "20px",
    color: "black",
    backgroundColor:"transparent",
    padding: "6.5px 24px",
    display: ["none", null, null, null, "inline-block"],
    ml: ["0", null, null, "auto", "0"],
    mr: ["0", null, null, "20px", "0"],
    "&:hover": {
      color: "#fff",
    },
  },
  header: {
    color: "text_white",
    fontWeight: "normal",
    py: "25px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",

    "&.sticky": {
      backgroundColor: "background",
      color: "text",
      py: "15px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    width: [null, null, null, null, null, null, "1390px"],
    "@media screen and (max-width: 960px)": {
      justifyContent: "space-between",
    },
  },
  nav: {
    mx: "auto",
    "@media screen and (max-width: 960px)": {
      display: "none",
    },
    navLink: {
      fontSize: "16px",
      color: "#02073E",
      fontWeight: "400",
      cursor: "pointer",
      lineHeight: "1.2",
      mr: "48px",
      transition: "500ms",
      ":last-child": {
        mr: "0",
      },
      "&:hover, &.active": {
        color: "primary",
      },
    },
  },
  logoText:{
    ml:"15px"
  }
};
