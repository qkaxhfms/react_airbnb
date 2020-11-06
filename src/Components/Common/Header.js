import React from 'react';

function Header(){
    return (
      <>
        <header id="header" class="header">

          <div class="header__layout">

            <h1 id="logo header__logo">
              <a href="javascript:void(0)">LOGO</a>
            </h1>

            <div class="navigation navigation__global">
              <ul class="navigation__list">
                <li>
                  <a href="javascript:void(0)">숙소</a>
                </li>
                <li>
                  <a href="javascript:void(0)">체험</a>
                </li>
                <li>
                  <a href="javascript:void(0)">온라인체험</a>
                </li>
              </ul>
            </div>

            <div class="navigation navigation__right">
              <ul class="navigation__list">
                <li>
                  <a href="javascript:void(0)">호스트되기</a>
                </li>
                <li>
                  <a href="javascript:void(0)">국가선택</a>
                  <ul>
                    <li>
                      <a href="javasciprt:void(0)">한국어(KR)</a>
                    </li>
                    <li>
                      <a href="javasciprt:void(0)">KRW</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">호스트되기</a>
                  <ul>
                    <li>
                      <a href="javscript:void(0)">회원 가입</a>
                    </li>
                    <li>
                      <a href="javscript:void(0)">로그인</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="javscript:void(0)">숙소 호스트되기</a>
                    </li>
                    <li>
                      <a href="javscript:void(0)">체험 호스팅하기</a>
                    </li>
                    <li>
                      <a href="javscript:void(0)">도움말</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

          </div>
          
        </header>
      </>
    );
}
export default Header;