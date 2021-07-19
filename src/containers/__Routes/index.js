import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../_PrivateRoute';
import HomePage from "../HomePage";
import BusinessPage from "../BusinessPage";
import EntertainmentPage from "../EntertainmentPage";
import FeaturePage from "../FeaturePage";
import SportsPage from "../SportsPage";
import TrendingPage from "../TrendingPage";
import AboutUsPage from "../AboutUsPage";
import ArchivePage from "../ArchivePage";
import ContactUsPage from "../ContactUsPage";
import NotFoundPage from "../NotFoundPage";
import PostOnePage from "../PostOnePage";
import PostTwoPage from "../PostTwoPage";
import PostThreePage from "../PostThreePage";
import VideoPostOnePage from "../VideoPostOnePage";
import VideoPostTwoPage from "../VideoPostTwoPage";
import VideoPostThreePage from "../VideoPostThreePage";
import AudioPostOnePage from "../AudioPostOnePage";
import AudioPostTwoPage from "../AudioPostTwoPage";
import AudioPostThreePage from "../AudioPostThreePage";
import PostOneLeftSidebarPage from "../PostOneLeftSidebarPage";

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
                path="/business"
                parentClass="theme-1"
                component={BusinessPage}/>
            <PrivateRoute
                exact
                path="/entertainment"
                parentClass="theme-1"
                component={EntertainmentPage}/>
            <PrivateRoute
                exact
                path="/features"
                parentClass="theme-1"
                component={FeaturePage}/>
            <PrivateRoute
                exact
                path="/trending"
                parentClass="theme-1"
                component={TrendingPage}/>
            <PrivateRoute
                exact
                path="/sports"
                parentClass="theme-1"
                component={SportsPage}/>
            <PrivateRoute
                exact
                path="/about"
                parentClass="theme-1"
                component={AboutUsPage}/>
            <PrivateRoute
                exact
                path="/archive"
                parentClass="theme-1"
                component={ArchivePage}/>
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
                path="/post1"
                parentClass="theme-1"
                component={PostOnePage}/>
            <PrivateRoute
                exact
                path="/post2"
                parentClass="theme-1"
                component={PostTwoPage}/>
            <PrivateRoute
                exact
                path="/post3"
                parentClass="theme-1"
                component={PostThreePage}/>
            <PrivateRoute
                exact
                path="/video_post1"
                parentClass="theme-1"
                component={VideoPostOnePage}/>
            <PrivateRoute
                exact
                path="/video_post2"
                parentClass="theme-1"
                component={VideoPostTwoPage}/>
            <PrivateRoute
                exact
                path="/video_post3"
                parentClass="theme-1"
                component={VideoPostThreePage}/>
            <PrivateRoute
                exact
                path="/audio_post1"
                parentClass="theme-1"
                component={AudioPostOnePage}/>
            <PrivateRoute
                exact
                path="/audio_post2"
                parentClass="theme-1"
                component={AudioPostTwoPage}/>
            <PrivateRoute
                exact
                path="/audio_post3"
                parentClass="theme-1"
                component={AudioPostThreePage}/>
            <PrivateRoute
                exact
                path="/left_post2"
                parentClass="theme-1"
                component={PostOneLeftSidebarPage}/>

            <Route exact component={NotFoundPage}/>
        </Switch>
    );
};

export default Routes