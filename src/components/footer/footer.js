
import React from 'react';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';

 const FooterComponent = () =>{
    return (
      <div> 
        <Footer
          columns={[
            {

              title: 'Oceancy',
              items: [
                {
                  description: 'Enjoy your prefered water activities worldwide and meet likeminder people',
                   url: 'https://pro.ant.design/',
                //   openExternal: true,
                    //    <ul className="social-icon">
				    //         <li>
				    //             <a className="facebook" href="https://www.facebook.com/codingeek.net/" target="_blank"><i className="fa fa-facebook  " /></a>
				    //           </li>
				    //          <li>
				    //             <a className="twitter" href="https://twitter.com/codingeeknet" target="_blank"><i className="fa fa-twitter  " /></a>
				    //            </li>
				    //            <li>
				    //              <a className="pinterest" href="https://www.instagram.com/codingeeknet/" target="_blank"><i className="fa fa-instagram" /></a>
				    //            </li>
				    //         </ul>
                },
                {
                  title: 'Ant Design Mobile',
                  url: 'https://mobile.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Kitchen',
                  url: 'https://kitchen.alipay.com/',
                  description: 'Sketch 工具集',
                },
              ],
            },
            {
              title: 'Contact us',
              items: [
                {
                  title: 'Ant Design Pro',
                  url: 'https://pro.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Ant Design Mobile',
                  url: 'https://mobile.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Kitchen',
                  url: 'https://kitchen.alipay.com/',
                  description: 'Sketch 工具集',
                },
              ],
            },
            {
              title: 'Quick Link',
              items: [
                {
                  title: 'Ant Design Pro',
                  url: 'https://pro.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Ant Design Mobile',
                  url: 'https://mobile.ant.design/',
                  openExternal: true,
                },
                {
                  title: 'Kitchen',
                  url: 'https://kitchen.alipay.com/',
                  description: 'Sketch 工具集',
                },
              ],
            },
            {
              icon: (
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                  alt="more products"
                />
              ),
              title: 'Instagram Gallery',
              items: [
                {
                  icon: (
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
                      alt="yuque"
                    />
                  ),
                  title: '语雀',
                  url: 'https://yuque.com',
                  description: '知识创作与分享工具',
                  openExternal: true,
                },
                {
                  icon: (
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                      alt="yuque"
                    />
                  ),
                  title: '云凤蝶',
                  url: 'https://yunfengdie.com',
                  description: '中台建站平台',
                  openExternal: true,
                },
              ],
            },
          ]}
          bottom=' © Oceancy 2020. All rights reserved. Made by Cristina Matamoro.'
        />
      </div>
    );
  }

  export default FooterComponent;

  

//   <footer className="footer-area" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/2.png)'}}>
// 				  <div className="container">
// 				    <div className="row">
// 				      <div className="col-lg-4 col-md-6">
// 				        <div className="footer-widget widget">
// 				          <div className="about_us_widget">
// 				            <Link to="/" className="footer-logo"> 
// 				              <img src={publicUrl+"assets/img/logo.png"} alt="footer logo" />
// 				            </Link>
// 				            <p>We believe brand interaction is key in commu- nication. Real innovations and a positive customer experience are the heart of successful communication.</p>
// 				            <ul className="social-icon">
// 				              <li>
// 				                <a className="facebook" href="https://www.facebook.com/codingeek.net/" target="_blank"><i className="fa fa-facebook  " /></a>
// 				              </li>
// 				              <li>
// 				                <a className="twitter" href="https://twitter.com/codingeeknet" target="_blank"><i className="fa fa-twitter  " /></a>
// 				              </li>
// 				              <li>
// 				                <a className="pinterest" href="https://www.instagram.com/codingeeknet/" target="_blank"><i className="fa fa-instagram" /></a>
// 				              </li>
// 				            </ul>
// 				          </div>
// 				        </div>
// 				      </div>
// 				      <div className="col-lg-3 col-md-6">
// 				        <div className="footer-widget widget ">
// 				          <div className="widget-contact">
// 				            <h4 className="widget-title">Contact us</h4>
// 				            <p>
// 				              <i className="fa fa-map-marker" /> 
// 				              <span>Manama Tower, Badda Link Road, Badda Dhaka, Bangladesh</span>
// 				            </p>
// 				            <p className="location"> 
// 				              <i className="fa fa-envelope-o" />
// 				              <span>travelpoint@gmail.com</span>
// 				            </p>
// 				            <p className="telephone">
// 				              <i className="fa fa-phone base-color" /> 
// 				              <span>
// 				                +088 012121240
// 				              </span>
// 				            </p>
// 				          </div>
// 				        </div>
// 				      </div>
// 				      <div className="col-lg-2 col-md-6">
// 				        <div className="footer-widget widget">
// 				          <h4 className="widget-title">Quick Link</h4>
// 				          <ul className="widget_nav_menu  viaje-go-top">
// 				            <li><Link to="/home-v2">Home</Link></li>
// 				            <li><Link to="/about">About Us</Link></li>
// 				            <li><Link to="/destination-list">Destination</Link></li>
// 				            <li><Link to="/tour-details">Tours</Link></li>
// 				            <li><Link to="/blog">Blog</Link></li>
// 				            <li><Link to="/contact">Contact</Link></li>
// 				          </ul>
// 				        </div>
// 				      </div>
// 				      <div className="col-lg-3 col-md-6">
// 				        <div className="footer-widget widget">
// 				          <h4 className="widget-title">Instagram Gallery</h4>
// 				          <ul className="widget-instagram-feed">
// 				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/1.png"} alt="img" /></a></li>
// 				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/2.png"} alt="img" /></a></li>
// 				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/3.png"} alt="img" /></a></li>
// 				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/4.png"} alt="img" /></a></li>
// 				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/5.png"} alt="img" /></a></li>
// 				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/6.png"} alt="img" /></a></li>
// 				          </ul>
// 				        </div>
// 				      </div>
// 				    </div>
// 				  </div>
// 				  <div className="copyright-inner">
// 				    <div className="copyright-text">
// 				      © Viaje 2019 All rights reserved. Powered with by <a href="https://codingeek.net/" target="_blank"><i className="fa fa-heart" /><span>Codingeek.</span></a>
// 				    </div>
// 				  </div>
// 				</footer>