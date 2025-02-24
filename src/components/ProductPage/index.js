import React from "react";
import Slider from 'react-slick';
import Footer from '../Footer'
import Navbar from '../Navbar';
import './index.css'

const ProductPageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        arrows: false
    }

    return (
        <div className="product-slider-container">
            <Slider {...settings}>
                <div className="product-page-slider-image-container">
                    <img src="/images/product1.jpg" alt="Solar Air Heating System featuring patented solar panels on an industrial rooftop, converting inert surfaces into efficient energy hubs." className="product-image-slider" />
                </div>
                <div>
                    <img src="/images/product2.jpg" alt="Industrial Solar Water Heater seamlessly integrated with existing infrastructure, providing a steady supply of hot water." className="product-image-slider" />
                </div>
                <div>
                    <img src="/images/product3.jpg" alt="Solar PV System showcasing photovoltaic panels designed for businesses, emphasizing cost savings and reduced carbon footprint." className="product-image-slider" />
                </div>
            </Slider>
        </div>
    );
}
 
const ProductPage = () => (
    <>
    <Navbar />
    <div className="product-page" id="product">
        <ProductPageSlider />
        <div className="product-page-main-container">
            <h1 className="product-page-main-heading">Our Solar Energy Solutions</h1>
            <h1 className="product-page-sub-heading" id="productAir">Solar Air Heating System</h1>
            <div className="product-page-product-container">
                <ul className="product-content-container">
                    <li className="product-description" data-aos="fade-right">Our patented Solar panels seamlessly blend into industry rooftops, converting inert surfaces into efficient energy hubs</li>
                    <li className="product-description" data-aos="fade-right" data-aos-delay="350">Elevating fresh air from 25°C to 100°C, our system integrates with existing drying processes seamlessly, ensuring precise temperatures for optimal performance</li>
                    <li className="product-description" data-aos="fade-right" data-aos-delay="650">Noteworthy for its ability to maintain operations during overcast days, our hybrid technology ensures uninterrupted performance, regardless of weather conditions</li>
                </ul>
                <div className="product-page-image-container product-page-image1"></div>
            </div>
            <h1 className="product-page-sub-heading" id="productWater">Solar Water Heating System</h1>
            <div className="product-page-product-container">
                <ul className="product-content-container">
                    <li className="product-description" data-aos="fade-right">Our Industrial Solar Water Heater effortlessly integrates with existing infrastructure, providing a steady supply of hot water at precise temperatures</li>
                    <li className="product-description" data-aos="fade-right">By eliminating the need for conventional boilers and offering an ROI under 2.5 years, our system significantly reduces energy expenses while ensuring environmentally friendly operations</li>
                    <li className="product-description" data-aos="fade-right">Successfully implemented across diverse industries, our Solar Water Heaters provides a reliable and cost-effective solution for businesses reliant on copious hot water</li>
                </ul>
                <div className="product-page-image-container product-page-image3"></div>
            </div>
            <h1 className="product-page-sub-heading" id="productPV">Solar PV System</h1>
            <div className="product-page-product-container">
                <ul className="product-content-container">
                    <li className="product-description" data-aos="fade-right">We provide top-quality solar photovoltaic systems for businesses, ensuring reliable performance and significant cost savings</li>
                    <li className="product-description" data-aos="fade-right">By harnessing solar energy, businesses can significantly reduce their carbon footprint and contribute to a cleaner, more sustainable future</li>
                    <li className="product-description" data-aos="fade-right">With solar photovoltaic costs plummeting since 2010, our systems offer rapid ROI and long-term savings on energy expenses, rivaling traditional fossil fuel sources</li>
                </ul>
                <div className="product-page-image-container product-page-image2"></div>
            </div>
            <div className="why-choose-us-container">
                <h1 className="product-page-main-heading" style={{marginBottom: '50px'}}>Why Choose Us?</h1>
                <p className="why-choose-us-para" data-aos="zoom-in">With years of experience and expertise in solar energy solutions, we deliver innovative and reliable systems tailored to meet the unique needs of businesses across various industries</p>
                <p className="why-choose-us-para" data-aos="zoom-in">Our commitment to sustainability is ingrained in every aspect of our operations, ensuring that our solutions not only meet the needs of today but also contribute to a greener and more sustainable tomorrow</p>
                <p className="why-choose-us-para" data-aos="zoom-in">Our solar energy systems offer rapid ROI and long-term cost savings, making them a cost-effective alternative to traditional energy sources</p>
                <p className="why-choose-us-para" data-aos="zoom-in">Expert solar panel installers in Tamil Nadu offering competitive prices and reliable solar energy solutions with cheap and affordable solar installations.</p>
            </div>
        </div>
        <Footer />
    </div>
    </>
)


export default ProductPage