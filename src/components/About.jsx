import product1 from '../assets/images/products/crotchet1.png'; 

function About(){
    return(
        <div>
            <h1>About Us</h1>
              <img src={product1} alt="Product 1" className='product-image    '/>
            <p>Welcome to Sheeh Creations , your one-stop shop for unique and stylish clothing. We are passionate about providing high-quality fashion pieces that allow you to express your individuality and confidence. Our collection features a wide range of trendy and timeless designs, carefully curated to suit every style and occasion. At Sheeh Collection, we believe that fashion is not just about what you wear, but how it makes you feel. We are committed to delivering exceptional customer service and ensuring that every shopping experience with us is enjoyable and memorable. Thank you for choosing Sheeh Collection as your go-to destination for fashion-forward clothing.</p>
        </div>
    )
}       
export default About;