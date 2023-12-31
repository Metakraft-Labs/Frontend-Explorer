import React from 'react';
import '../../Style/contact.css';
import { Button } from 'react-bootstrap';
import Socials from '../../Componets/Socials';
import Title from "../../shared/Title";

function Contact() {
    return (
        <>
            <Title title={"Contact Us"} />
            <div className="contact">
                <div className="contactHeading" style={{ borderBottom: "1px solid #393556" }}>
                    <div className="contactHeadingFirst" style={{ padding: "0 15vw", fontSize: "7vw", fontWeight: "1000", borderRight: "1px solid #393556" }}>
                        <div className='contactFirstFirst'>We’d love to</div>
                        <div className='contactFirstSecond'>help</div>
                    </div>
                    <div className="contactHeadingSecond" style={{ paddingTop: "5vw", paddingLeft: "3vw", color: "#E6E6EB", fontSize: "1.4vw" }}>
                        Get in touch
                    </div>
                </div>
                <div style={{ width: "36.9vw", padding: "6vw 0", borderRight: "0.138vw solid #393556" }}></div>
                <div className="contactBody" >
                    <div style={{ padding: "6vw 4vw", border: "1px solid #393556" }}>
                        <div><svg width="3.9vw" height="3.9vw" viewBox="0 0 53 55" style={{ fill: "#7ECAE2" }} xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.077 38.1319C43.6833 35.3311 40.2392 33.6346 36.8872 36.4311L34.8856 38.1213C33.4211 39.3483 30.6983 45.081 20.1708 33.3956C9.64554 21.725 15.909 19.9079 17.3756 18.6915L19.3882 16.9992C22.7227 14.1963 21.4643 10.6679 19.0593 7.03576L17.608 4.83576C15.1921 1.2121 12.5613 -1.16771 9.21804 1.63095L7.41158 3.15403C5.93396 4.19268 1.80365 7.56883 0.801767 13.9827C-0.404002 21.6784 3.39965 30.4911 12.1141 40.1606C20.8175 49.8342 29.339 54.6933 37.4111 54.6086C44.1196 54.5388 48.171 51.0654 49.4381 49.8025L51.2512 48.2773C54.5857 45.4808 52.5139 42.6334 49.118 39.8263L47.077 38.1319Z" fill="#7ECAE2" />
                        </svg></div>
                        <h3 style={{ color: "#FFFFFF", fontSize: "2.5vw", paddingTop: "1.4vw", paddingBottom: "1.1vw" }}>Contact Us</h3>
                        <div style={{ color: "#CECCD6", paddingBottom: "1.3vw", fontSize: "1.1vw" }}>Schedule a meeting with our team and ask anything about us.</div>
                        <Button onClick={() => window.open("https://calendly.com/metakraft/call-with-metakraft", "_blank")} style={{ width: "100%", backgroundColor: "#1E262E", border: "1px solid #FFFFFF", fontSize: "1.1vw" }}>Schedule a Meeting</Button>
                    </div>
                    <div style={{ padding: "6vw 4vw", border: "1px solid #393556" }}>
                        <div><svg width="3.9vw" height="3.9vw" viewBox="0 0 49 36" style={{ fill: "#7ECAE2" }} xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1363 0.661896C5.30556 0.661896 1.5246 1.77555 0.857224 6.01138C0.643473 7.36771 1.1137 8.7024 2.19432 9.66657C2.73107 10.1454 3.29871 10.7152 4.04921 11.2916C5.93259 12.7411 8.33372 14.3704 10.5805 15.8285C16.7626 19.8369 21.6432 22.3285 24.5336 22.3285C27.424 22.3285 32.3046 19.8369 38.4868 15.8285C40.7359 14.3704 43.137 12.7389 45.018 11.2916C45.7685 10.7152 46.3362 10.1476 46.8729 9.66657C47.9535 8.7024 48.4238 7.36771 48.21 6.01138C47.5426 1.77555 43.7617 0.661896 38.9309 0.661896H10.1363ZM0.783585 13.9999V26.6619C0.783585 31.448 5.03722 35.3285 10.2836 35.3285H38.7836C44.03 35.3285 48.2837 31.448 48.2837 26.6619V13.9999C46.3362 15.6877 44.1606 17.4297 41.085 19.4166C34.3495 23.7672 28.3004 26.6619 24.5336 26.6619C20.7669 26.6619 14.7177 23.7672 7.98223 19.4166C4.90423 17.4297 2.73109 15.6877 0.783585 13.9999Z" fill="#7ECAE2" />
                        </svg>
                        </div>
                        <h3 style={{ color: "#FFFFFF", fontSize: "2.5vw", paddingTop: "1.4vw", paddingBottom: "1.1vw" }}>Drop us an email</h3>
                        <div style={{ color: "#CECCD6", paddingBottom: "1.3vw", fontSize: "1.1vw" }}>Don’t have time to schedule a meeting? Drop us an email</div>
                        <Button onClick={() => window.open("mailto:team@metakraft.live", "_blank")} style={{ width: "100%", backgroundColor: "#1E262E", border: "1px solid #FFFFFF", fontSize: "1.1vw" }}>Send an Email</Button>
                    </div>
                    <div style={{ padding: "6vw 4vw", border: "1px solid #393556" }}>
                        <div><svg width="3.9vw" height="3.9vw" viewBox="0 0 41 36" style={{ fill: "#7ECAE2" }} xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.27687 12.502C0.94897 13.0935 0.124749 14.1465 0.112295 15.6372C0.10372 16.6794 0.766442 18.0791 2.09434 18.6511C2.6413 18.8872 10.321 19.9836 10.321 19.9836C10.321 19.9836 12.3537 26.802 13.0863 29.1984C13.2984 29.8917 13.4193 30.2319 13.8848 30.6847C14.6745 31.4517 16.0095 31.2113 16.5869 30.5959C18.1145 28.9709 20.529 26.4641 20.529 26.4641L21.5451 27.3416C21.5451 27.3416 26.0574 31.1614 28.5239 32.9597C29.9762 34.0192 30.9841 35.1242 32.6187 35.1307C33.4513 35.1351 34.7867 34.6952 35.6696 33.6227C36.2529 32.9142 36.6271 31.781 36.7719 30.7649C37.101 28.4574 40.962 3.50605 40.9456 2.63288C40.9195 1.23971 39.8152 0.455363 38.8972 0.46403C38.3207 0.47053 37.8456 0.648221 36.7884 0.990555C28.6107 3.64039 2.81852 12.2615 2.27687 12.502ZM32.779 6.96404C32.779 6.96404 22.003 16.9177 17.697 21.4981C16.3174 22.9649 16.22 25.4825 16.22 25.4825L13.9942 17.9252L32.779 6.96404Z" fill="#7ECAE2" />
                        </svg></div>
                        <h3 style={{ color: "#FFFFFF", fontSize: "2.5vw", paddingTop: "1.4vw", paddingBottom: "1.1vw" }}>Tell on Telegram</h3>
                        <div style={{ color: "#CECCD6", paddingBottom: "1.3vw", fontSize: "1.1vw" }}>Join our telegram to receive real-time updates on Metakraft</div>
                        <Button onClick={() => window.open("https://t.me/metakraftdiscussions", "_blank")} style={{ width: "100%", backgroundColor: "#1E262E", border: "1px solid #FFFFFF", fontSize: "1.1vw" }}>Connect an Telegram</Button>
                    </div>
                </div>
                <div style={{ width: "64vw", padding: "6vw 0", borderRight: "0.138vw solid #393556" }}></div>
                <Socials />
            </div>
        </>
    )
}

export default Contact
