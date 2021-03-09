import React from "react";
import FooterNavItem from "../../components/footer/FooterNavItem";
import Routes from "../../routes/Routes";

type Route = {
  to: string;
  title: string;
};
const FooterRoutes: Route[] = [
  { title: "Om Os", to: Routes.OM_OS },
  { title: "Værd at Vide", to: Routes.VÆRD_AT_VIDE },
  { title: "Økonomi", to: Routes.ØKONOMI },
  { title: "Privatlivspolitik", to: Routes.PRIVATLIVSPOLITIK },
];

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="py-5 w-full">
          <div className="w-full">
            <div className="mx-auto container border-t border-gray-200">
              <div className="flex justify-center pb-7 pt-7 container w-full">
                {FooterRoutes.map((route, i) => (
                  <FooterNavItem key={i} to={route.to}>
                    {route.title}
                  </FooterNavItem>
                ))}
              </div>
              <div className="flex justify-center container">
                <div className="text-gray-400 font-light">
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
