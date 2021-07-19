import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import TopBar from "../../components/TopBar";
import LogoArea from "../../components/LogoArea";
import MainMenu from "../../components/MainMenu";
import FooterArea from "../../components/FooterArea";

const PrivateRoute = (props) => {
    const {component: Component, ...rest} = props;
    return (
        <div className={props.parentClass}>
          <Fragment>
              <TopBar className="white_bg"/>
              <div className="border_black"/>
              <MainMenu/>
              <LogoArea className="white_bg"/>
          </Fragment>

          <Route {...rest} render={props => (
                  <Component {...props} />
              )} />

          <FooterArea className="primay_bg"/>
        </div>
    )
};
export default PrivateRoute;
