import { useRef } from "react";
import "./join.css";
import emailjs from "@emailjs/browser"

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dl9v70i', 'template_35rx9nb', form.current, '7kiaKU2XWoOsmpVMa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">WITH US ?</span>
                </div>
            </div>
            <div className="right-j">
                <form className="email-container" ref={form} onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder="Enter your Email address" />
                    <button className="btn btn-j">Join Now</button>
                </form>
            </div>
        </section>
    );
}

export default Join;
