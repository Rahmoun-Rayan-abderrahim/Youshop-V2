import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CardIcon from "./CardIcon";
import FavoritIcon from "./FavoritIcon";
import SingIn from "./SingIn";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black/40">
      <Container className={"flex items-center justify-between"}>
        <div className="w-auto md:w-1/3 flex items-center justify-start gap-2.5 md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />

        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CardIcon />
          <FavoritIcon />
          <SingIn />
        </div>
      </Container>
    </header>
  );
};

export default Header;
