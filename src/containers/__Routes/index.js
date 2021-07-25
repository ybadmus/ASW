import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../_PrivateRoute';
import HomePage from "../HomePage";
import EntertainmentPage from "../EntertainmentPage";
import AboutUsPage from "../AboutUsPage";
import ContactUsPage from "../ContactUsPage";
import NotFoundPage from "../NotFoundPage";
import PostOnePage from "../PostOnePage";
import VideoPostOnePage from "../VideoPostOnePage";
import AudioPostOnePage from "../AudioPostOnePage";

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute
                exact
                path="/"
                parentClass="theme-1"
                component={HomePage}/>
            <PrivateRoute
                exact
                path="/category/:id"
                parentClass="theme-1"
                component={EntertainmentPage}
                children={<EntertainmentPage />} />
            <PrivateRoute
                exact
                path="/about"
                parentClass="theme-1"
                component={AboutUsPage}/>
            <PrivateRoute
                exact
                path="/contact"
                parentClass="theme-1"
                component={ContactUsPage}/>
            <PrivateRoute
                exact
                path="/404"
                parentClass="theme-1"
                component={NotFoundPage}/>
            <PrivateRoute
                exact
                path="/post/:id"
                parentClass="theme-1"
                component={PostOnePage}/>
            <PrivateRoute
                exact
                path="/video_post/:id"
                parentClass="theme-1"
                component={VideoPostOnePage}/>
            <PrivateRoute
                exact
                path="/audio_post/:id"
                parentClass="theme-1"
                component={AudioPostOnePage}/>

            <Route exact component={NotFoundPage}/>
        </Switch>
    );
};

export default Routes