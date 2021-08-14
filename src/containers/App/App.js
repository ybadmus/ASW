import React, {Fragment} from "react";
import {toast, ToastContainer} from "react-toastify";
import {connect} from "react-redux";
import Routes from "../__Routes";
import ScrollTopButton from "../../components/ScrollTopButton";

const App = (props) => {
    const {error, success} = props;
    if (error) toast.error(error);
    if (success) toast.success(success);
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    return (
        <Fragment>
            {props.loading && <h1>loading...</h1>}
            <Routes/>
            <ToastContainer position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <ScrollTopButton/>
        </Fragment>
    );
};

const MapStateToProps = state => {
    return {
        error: state.meta.error,
        success: state.meta.success,
    }
};

export default connect(MapStateToProps)(App);
