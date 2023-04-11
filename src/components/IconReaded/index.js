import React from "react";
import PropTypes from "prop-types";
import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/send.svg";


const IconReaded = ({ isMe, isReaded }) =>
    (isMe &&
        (isReaded ? (
            <img className="message_icon-readed" src={readedSvg} alt="Readed icon" />
        ) : (
            <img
                className="message_icon-readed message_icon-readed--no"
                src={noReadedSvg}
                alt="No readed icon"
            />
        ))) ||
    null;

IconReaded.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool
};

export default IconReaded;