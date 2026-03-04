import product1 from '../assets/images/products/crotchet1.png'; 

function About(){
    return(
        <section id="About">
            <div className="about-section">
                <h1>About Us</h1>

                <div className="about-content">
                    

                      <img 
                        src={product1} 
                        alt="Product 1" 
                        className="about-image"
                    />
                    {/* TEXT FIRST (Left side) */}
                    <p>
                        Welcome to Sheeh Creations, your one-stop shop for unique and stylish clothing...
                    </p>

                    {/* IMAGE SECOND (Right side) */}
                  

                </div>
            </div>
        </section>
    )
}

export default About;