import React from 'react';
import PropTypes from 'prop-types';
import './Message.scss';
import classNames from "classnames";
import IconReaded from "../IconReaded";
import Avatar from "../Avatar"
import waveSvg from '../../assets/img/wave.svg';
import playSvg from '../../assets/img/play.svg';
import pauseSvg from '../../assets/img/pause.svg';
import {useState,useRef,useEffect} from "react";
import  {convertCurrentTime}  from '../../utils/helpers';



const MessageAudio = ({ audioSrc }) => {
    const audioElem = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlay = () => {
        if (!isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    };

    useEffect(() => {
        audioElem.current.volume = '0.1';
        audioElem.current.addEventListener(
            'playing',
            () => {
                setIsPlaying(true);
            },
            false,
        );
        audioElem.current.addEventListener(
            'ended',
            () => {
                setIsPlaying(false);
                setProgress(0);
                setCurrentTime(0);
            },
            false,
        );
        audioElem.current.addEventListener(
            'pause',
            () => {
                setIsPlaying(false);
            },
            false,
        );
        audioElem.current.addEventListener('timeupdate', () => {
            const duration = (audioElem.current && audioElem.current.duration) || 0;
            setCurrentTime(audioElem.current.currentTime);
            setProgress(((audioElem.current.currentTime / duration) * 100)+(duration*0.5));
        });
    }, []);

    return (
        <div className="message_audio">
            <audio ref={audioElem} src={audioSrc} preload="auto" />
            <div className="message_audio-progress" style={{ width: progress + '%' }} />
            <div className="message_audio-info">
                <div className="message_audio-btn">
                    <button onClick={togglePlay}>
                        {isPlaying ? (
                            <img src={pauseSvg} alt="Pause svg" />
                        ) : (
                            <img src={playSvg} alt="Play svg" />
                        )}
                    </button>
                </div>
                <div className="message_audio-wave">
                    <img src={waveSvg} alt="Wave svg" />
                </div>
                <span className="message_audio-duration">{convertCurrentTime(currentTime)}</span>
            </div>
        </div>
    );
};

const Message =
    ({
         avatar,
         text,
         date,
         user ,
         isMe,
         isReaded,
         attachments,
         isTyping,
         audio
    }) => (
     <div className={classNames("message", {
         "message--isme": isMe,
         "message--is-typing" : isTyping,
         'message--is-audio': audio,
         "message--image" : attachments && attachments.length === 1
     })}>
         <div className="message_content">
             <IconReaded isMe={isMe} isReaded={isReaded}/>
             <div className="message_avatar">
                 <Avatar user={user}/>
             </div>
             <div className="message_info">
                 {( audio || text || isTyping) &&(
                     <div className="message_bubble">
                         { text && <p className="message_text">{text}</p>}
                         { isTyping &&  ( <div className="message_typing">
                             <span />
                             <span />
                             <span />
                         </div>
                         )}
                         {audio && <MessageAudio audioSrc={audio}/>}
                     </div>
                 )}
                     {attachments &&  (
                         <div className="message_attachments">
                             {attachments.map((item, index) =>(
                             <div key={index} className="message_attachments-item">
                                 <img src={item.url} alt={item.filename} />
                             </div>
                             ))}
                         </div>
                     )}
                 {date && (<span className="message_date">
                     {date}
                 </span>)}
             </div>
         </div>
    </div>
);

Message.defaultProps = {
    user:{}
}

Message.propTypes={
    avatar: PropTypes.string,
    text: PropTypes.string,
    user: PropTypes.object,
    date: PropTypes.object,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
    audio: PropTypes.string,

}
export default Message;