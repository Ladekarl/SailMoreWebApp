import React from "react";
import FooterNavItem from "../../components/Footer/FooterNavItem";
import Routes from "../../routes/Routes";

type Route = {
  to: string,
  title: string
}
const FooterRoutes: Route[] = [
  { title: "Om Os", to: Routes.OM_OS },
  { title: "Privatlivspolitik", to: Routes.PRIVATLIVSPOLITIK }
];

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="bg-white mt-5">
          <div className="w-full">
            <div className="mx-auto container border-t border-gray-200">
              <div className="flex justify-center pb-7 pt-7 container w-full">
                {FooterRoutes.map(route => <FooterNavItem to={route.to}>{route.title}</FooterNavItem>)}
              </div>
              <div className="flex justify-center container">
                <div className="copyright text-gray-400 font-normal">
                  © {new Date().getFullYear()} SailMore. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
