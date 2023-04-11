import React from 'react';
import {ChatInput , Status} from "../../components";
import {Dialogs,Messages} from "../../containers";
import { Button } from 'antd';
import {TeamOutlined, FormOutlined, EllipsisOutlined, SmileOutlined} from '@ant-design/icons'



import "./Home.scss"





const Home = () => {
    return (
        <section className="home">
            <div className="chat">
                <div className="chat_sidebar">

                    <div className="chat_sidebar-header">
                        <div>
                            <TeamOutlined />
                            <span>Список диалогов</span>
                        </div>
                        <Button type="link" shape="circle" icon={<FormOutlined />}/>
                    </div>



                    <div className="chat_sidebar-dialogs">
                        <Dialogs
                            userId={0}/>
                    </div>

                </div>

                <div className="chat_dialog">
                    <div className="chat_dialog-header">
                        <div className="chat_dialog-header-center">
                            <b className="chat_dialog-header-username">Mattew Won</b>
                            <div className="chat_dialog-header-status">
                                <Status online={true}/>
                            </div>
                        </div>
                        <Button type="link" shape="circle" icon={<EllipsisOutlined/>}/>
                    </div>
                    <div className="chat_dialog-messages">
                        <Messages  />
                    </div>
                    <div className="chat_dialog-input"/>
                        <ChatInput />
                    </div>
            </div>
            {/*<Dialogs
               userId={0}
               items={[
                   {
                       _id: Math.random(),
                       text:"dasdadasdasfasfadgaadgsssssssssss",
                       isReaded:false,
                       created_at: new Date(),
                       user:{
                           _id: 'c81e728d9d4c2f636f067f89cc14862c',
                           fullname:'Максим Иванович',
                           avatar: null,
                           isOnline:false,
                       }
                   },
                   {
                       _id: Math.random(),
                       text:"Салам всем нашим",
                       isReaded:false,
                       created_at: new Date(),
                       user:{
                           _id: 'y5e728d9d4c2f636f032f89cc14862c',
                           fullname:'Кирилл Линберг',
                           avatar: null,
                           isOnline:false,
                       }
                   },
                   {
                       _id: Math.random(),
                       text:"bab5aвффввфвфвц6b1c54",
                       isReaded:false,
                       created_at: new Date(),
                       user:{
                           _id: 'bab5a177611b396bd0a930cafb6b1c54',
                           fullname:'Алексей Викторович',
                           avatar: "https://sun9-64.userapi.com/s/v1/if1/N65kZYf7xjo-RSh6rOP066kSqF7grhQGlxxSO_Zr4ClC768wkJatXvfqUNm54NHuEW6nwnQA.jpg?size=50x50&quality=96&crop=192,0,768,768&ava=1",
                           isOnline:false,
                       }
                   }
                   ]}
           />

            <Message avatar ="https://sun9-64.userapi.com/s/v1/if1/N65kZYf7xjo-RSh6rOP066kSqF7grhQGlxxSO_Zr4ClC768wkJatXvfqUNm54NHuEW6nwnQA.jpg?size=50x50&quality=96&crop=192,0,768,768&ava=1"
                     date="Thu March 02.03.2023 14:45:37"
                     audio
                     text="asdasdasfasf"

            />
            <Message avatar ="https://sun9-64.userapi.com/s/v1/if1/N65kZYf7xjo-RSh6rOP066kSqF7grhQGlxxSO_Zr4ClC768wkJatXvfqUNm54NHuEW6nwnQA.jpg?size=50x50&quality=96&crop=192,0,768,768&ava=1"
                     date="Thu March 02.03.2023 14:45:37"
                     audio ="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"

            />*/}
        </section>
    );
};

export default Home;