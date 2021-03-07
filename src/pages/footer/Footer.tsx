import React from "react";
import Routes from "../../routes/Routes";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <div className="justify-content-md-start justify-content-center d-flex">
              <div className="copyright">
                © {new Date().getFullYear()} SailMore.
              </div>
            </div>
            <div className="justify-content-center">
              <div className="container mx-auto">
                <div>
                  <a href={Routes.OM_OS}>Om Os</a>
                </div>
                <div>
                  <a href={Routes.PRIVATLIVSPOLITIK}>Privatlivspolitik</a>
                </div>
              </div>
            </div>
            <div className="justify-content-md-end justify-content-center d-flex">
              <a
                className="btn-icon-only rounded-circle ml-1"
                color="transparent"
                href="https://www.facebook.com/sailmore"
                id="tooltip837440414"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-facebook-square" />
                </span>
              </a>
              {/* <UncontrolledTooltip delay={0} target="tooltip837440414">
                Like os
              </UncontrolledTooltip> */}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
