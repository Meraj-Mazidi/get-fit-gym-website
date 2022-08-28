import "./reasons.css";
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"

const Reasons = () => { 
    return (
        <section className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt="customer Image" />
                <img src={image2} alt="customer Image" />
                <img src={image3} alt="customer Image" />
                <img src={image4} alt="customer Image" />
            </div>

            <div className="right-r">
                <span>Some reasons</span>
                <div>
                    <span className="stroke-text">Why</span>
                    <span> choose us?</span>
                </div>

                <div className="details-r">
                    <div>
                        <img src={tick} alt="clients Image" />
                        <span>OVER 148+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={tick} alt="clients Image" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt="clients Image" />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt="clients Image" />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span className="partners-text">OUR PARTNERS</span>

                <div className="partners">
                    <img src={nb} alt="partners Logos" />
                    <img src={adidas} alt="partners Logos" />
                    <img src={nike} alt="partners Logos" />
                </div>
            </div>
        </section>
    );
}

export default Reasons;
