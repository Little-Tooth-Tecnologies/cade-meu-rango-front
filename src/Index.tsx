import React, { useContext } from 'react'
import { IndexUtils } from './utils/index';

import HatLoadingComponent from "./pages/components/HatLoadingComponent";
import BannerComponent from './pages/components/BannerComponent';
import NavegationComponent from './pages/components/NavegationComponent';
import FooterComponent from './pages/components/FooterComponent';
import AuthBanner from './pages/components/AuthBanner';
import { AuthModeContext } from './utils/context/AuthModeContext';

function Index() {

  const { isLoading } = IndexUtils();

  const { isAuth } = useContext(AuthModeContext) || {};

  return (
    <>
      {isLoading ? (
        <section className='loading-logo-align animate__animated animate__fadeIn'>
          <HatLoadingComponent />
        </section>
      ) : (
        <section>
          <article className='p-3'>
            <nav>
              <BannerComponent />
              {isAuth && <AuthBanner />}
              <NavegationComponent />
            </nav>
          </article>
          <FooterComponent />
        </section>
      )}
    </>
  )
}

export default Index
