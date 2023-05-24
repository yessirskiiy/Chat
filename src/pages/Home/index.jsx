import React,{useEffect} from 'react';
import {Sidebar,Messages,ChatInput,Status} from "../../containers";
import "./Home.scss"
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {dialogsActions} from "../../redux/actions";

const Home = props => {
    const { setCurrentDialogId, user } = props;
    useEffect(() => {
        const { pathname } = props.location;
        const dialogId = pathname.split('/').pop();
        setCurrentDialogId(dialogId);
    }, [props.location.pathname]);

    return (
        <section className="home">
            <div className="chat">
                <Sidebar/>
                <div className="chat_dialog">
                    <div className="chat_dialog-header">
                        <Status    />
                    </div>
                        <Messages  />
                    <div className="chat_dialog-input"/>
                        <ChatInput />
                    </div>
            </div>
        </section>
    );
};

export default withRouter(
    connect(
        ({ user }) => ({ user: user.data }),
        dialogsActions,
    )(Home),
);
