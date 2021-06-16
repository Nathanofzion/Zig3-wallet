import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

import { store } from "config/store";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Logs } from "components/Logs";
import { PageContent } from "components/PageContent";
import { PrivateRoute } from "components/PrivateRoute";
import { SettingsHandler } from "components/SettingsHandler";
import { WarningBanner } from "components/WarningBanner";
import { TextLink, TextLinkVariant } from "@stellar/design-system";

import { Account } from "pages/Account";
import { Landing } from "pages/Landing";
import { NotFound } from "pages/NotFound";
import "./App.scss";

if (process.env.REACT_APP_SENTRY_KEY) {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_KEY,
    release: `demo-wallet@${process.env.npm_package_version}`,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

export const App = () => (
  <Provider store={store}>
    <Router>
      <SettingsHandler>
        <WarningBanner />

        <div id="app-wrapper" className="Wrapper">
          <div id="Main" className="SplitContainer Main">
            <div id="thm" className="ContentWrapper">
              <Header />
              <div className="blue-hr"></div>
              <div className="purple-hr"></div>
              <div className="IntroText Inset">
                <div className="dashboard">
                <p>
                Welcome to the new and improved V 2.0 WEB3 Zig3 wallet! The Zioncoin gen 3 wallet means;
                You can now Connect to banks from all over the world, with Sep 24 Anchors: &nbsp; 
                </p>
                </div>
                <div className="login-options">
                <PageContent>
                <Switch>
                  <Route exact path="/">
                    <Landing />
                  </Route>

                  <PrivateRoute exact path="/account">
                    <Account />
                  </PrivateRoute>

                  <Route component={NotFound} />
                </Switch>
              </PageContent>        
                </div>
              </div>
              
              <div className="InstantSwap Inset">
                <h1>Instant Swap </h1>
                If you want to, buy Zioncoins or any other coin like USDC, GBZ, XOW, XOV, XOG. what ever coin it its. You can now use instant swap
                quicky buy or sell that asset with out having to visit the trading desk.
                
              </div>
              <div className="MakeAnOffer Inset">
              <h1>Make An Offer</h1>
                It so easy to get Zioncoins at theprize you want if your realistic.
                Simple make an offer and if the market believes its agood offer it will be accpet; and you'll have Zioncoiuns at the prices you want.
              </div>
              <div className="defi Inset">
                <h1>DeFi</h1>
                This is where you'll find out about Stake and Cocktails
              </div>
              <div className="nft Inset">
              <h1>Nft's</h1>
                This is where you'll find out about both IPFS and Cloudflare 
                stoage if thats how it works.
              </div>


              <div className="Announcement">
                <div className="Inset">
                  <p>
                  
                    Welcome to the new and improved V 2.0 WEB3 Zig3 wallet! The Zioncoin gen 3 wallet means;
                    You can now Connect to banks from all over the world, with Sep 24 Anchors: &nbsp;
                    <TextLink

                      variant={TextLinkVariant.primary}
                      href="https://zig3.uk"
                      rel="noreferrer"
                      target="_blank"
                    >
                      https://zig3.uk
                    </TextLink>
                  </p>
                </div>
              </div>
              <Footer />
            </div>
          </div>

          <Logs />
        </div>
      </SettingsHandler>
    </Router>
  </Provider>
);
