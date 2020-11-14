import React from 'react';
import '../../Scss/Styles.scss';
import Logo from './Logo';
import NavigationGlobal from './NavigationGlobal';
import NavigationRight from "./NavigationRight";

function Header(){
    return (
      <>
        <header class="header">
          <div class="header__layout">
            <Logo />
            <NavigationGlobal />
            <NavigationRight />
          </div>
        </header>
      </>
    );
}
export default Header;