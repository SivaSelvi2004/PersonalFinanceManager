import React from "react";
import './footer.css';
const Footer = () => {
  return (
    <>
<footer class="footer-distributed">

			<div class="footer-left">

				<h3 id="fcompany">Finsso</h3>

				<p class="footer-links">
				A penny saved is a penny earned!!
				</p>

				<p class="footer-company-name">Finsso © 2023</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>123, ABC Street</span>Kuniamuthur,Coimbatore</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91 6382641698</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">abc@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>Contact</span>
                    
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fab fa-facebook"></i></a>
					<a href="#"><i class="fab fa-twitter"></i></a>
					<a href="#"><i class="fab fa-linkedin"></i></a>
					<a href="#"><i class="fab fa-github"></i></a>

				</div>

			</div>

		</footer></>
  );
      }
;

export default Footer;