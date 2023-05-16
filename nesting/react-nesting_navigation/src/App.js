import "./styles.css";
import Header from "./Header";
import Nav from "./Navigation";
import NavigationLink from "./NavigationLink";
import Logo from "./Logo";
import Avatar from "./Avatar";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Nav>
          <NavigationLink href="#home">Home</NavigationLink>
          <NavigationLink href="#about">About</NavigationLink>
          <NavigationLink href="#impressum">Impressum</NavigationLink>
        </Nav>
        <Avatar />
      </Header>

      <main>content goes here…</main>
    </>
  );
}
