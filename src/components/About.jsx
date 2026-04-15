import  logo from "../assets/Images/Logo.png";
function About(){
    return(
        <section id="About">
            <div className="about-section">
                <h1 className="section-title">About Us</h1>

                <div className="about-content">
                    

                      <img 
                        src={logo} 
                        alt="Logo" 
                        className="about-image"
                    />
                    {/* TEXT FIRST (Left side) */}
                    <p>
                        Shee Creation is a passionate crochet brand dedicated to creating beautiful, handmade crochet designs crafted with love and creativity. We specialize in unique, stylish, and high-quality crochet pieces that add warmth, elegance, and personality to every moment.

From custom-made designs to ready-to-wear crochet collections, our goal is to bring comfort, beauty, and originality to our customers. Every stitch is carefully made with attention to detail, ensuring that each piece reflects our commitment to quality and creativity.

At Shee Creation, we don’t just make crochet products — we create art you can wear and cherish.
                    </p>

                    {/* IMAGE SECOND (Right side) */}
                  

                </div>
            </div>
        </section>
    )
}

export default About;