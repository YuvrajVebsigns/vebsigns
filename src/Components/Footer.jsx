// import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
// import { Field, Input, Label, Button } from '@headlessui/react'
// import clsx from 'clsx'

// const Footer = () => {
//     return (
//         <footer className="relative bg-gradient-to-br from-[#0B0223] via-[#150544] to-[#0B0223] text-gray-300 px-6 md:px-16 py-12">
//             {/* Newsletter Section */}
//             <div className="grid md:grid-cols-2 gap-8 relative z-10">
//                 <div>
//                     <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter:</h3>
//                     <Field>
//                         <Label className="text-sm/6 font-medium text-white">Email ID</Label>

//                         {/* Flex container for input + button */}
//                         <div className="mt-3 flex w-[300px] items-center gap-2">
//                             <Input
//                                 className={clsx(
//                                     'flex-1 rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
//                                     'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
//                                 )}
//                             />
//                             <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700">
//                                 Submit
//                             </Button>
//                         </div>
//                     </Field>

//                     <p className="text-xs text-gray-400 mt-3 w-96">
//                         By subscribing you agree to with our Privacy Policy and provide
//                         consent to receive updates from our company.
//                     </p>
//                 </div>

//                 {/* Links Section */}
//                 <div className="grid grid-cols-3 gap-8 text-sm">
//                     <div>
//                         <h4 className="font-semibold mb-3">Expertise</h4>
//                         <ul className="space-y-2">
//                             <li><a href="#" className="hover:text-white">Artificial Intelligence</a></li>
//                             <li><a href="#" className="hover:text-white">Generative AI / GPT</a></li>
//                             <li><a href="#" className="hover:text-white">Big Data and Cloud</a></li>
//                             <li><a href="#" className="hover:text-white">Software Development</a></li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h4 className="font-semibold mb-3">Solutions</h4>
//                         <ul className="space-y-2">
//                             <li><a href="#" className="hover:text-white">Virtual Assistant Tool</a></li>
//                             <li><a href="#" className="hover:text-white">Image Recognition</a></li>
//                             <li><a href="#" className="hover:text-white">Text Analysis</a></li>
//                             <li><a href="#" className="hover:text-white">Data Capture & OCR</a></li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h4 className="font-semibold mb-3">About</h4>
//                         <ul className="space-y-2">
//                             <li><a href="#" className="hover:text-white">Company</a></li>
//                             <li><a href="#" className="hover:text-white">Customer Success</a></li>
//                             <li><a href="#" className="hover:text-white">Resources</a></li>
//                             <li><a href="#" className="hover:text-white">Talk an Expert</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             {/* Divider */}
//             <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 relative z-10">
//                 <p>Copyright © 2024.</p>

//                 {/* Social Icons */}
//                 <div className="flex space-x-4 mt-4 md:mt-0">
//                     <a href="#" className="hover:text-white"><FaFacebookF /></a>
//                     <a href="#" className="hover:text-white"><FaXTwitter /></a>
//                     <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";

import { Field, Input, Label, Button } from "@headlessui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  console.log("Footer component rendered");
  return (
    <footer className="relative bg-gradient-to-br from-[#0B0223] via-[#150544] to-[#0B0223] text-gray-300 px-6 md:px-16 py-12">
      {/* Newsletter Section */}
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        <div className="flex flex-col items-start space-y-5">
          {/* Logo */}
          <img
            src="/assets/Header/vebsigns.png"
            alt="Vebsigns Logo"
            className="w-36 sm:w-48"
          />

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs sm:max-w-sm">
            Empower your business with innovative technology. Streamline
            operations, enhance connectivity, and unlock growth with tailored IT
            and IoT services.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 text-gray-400 mt-2">
            <a
              href="https://www.facebook.com/VebsignsTechnologies/"
              aria-label="Facebook"
              className="hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-lg sm:text-xl" />
            </a>
            <a
              href="https://x.com/vebsigns"
              aria-label="Twitter"
              className="hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-lg sm:text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/vebsigns/"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-lg sm:text-xl" />
            </a>
            <a
              href="https://www.instagram.com/vebsigns/"
              aria-label="Instagram"
              className="hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-lg sm:text-xl" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC1vWQgIJIrHZcrjKL-eTsiQ"
              aria-label="YouTube"
              className="hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-lg sm:text-xl" />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-3 text-base">IT Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  UI/UX
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Mobile Application Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  AI
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-base">IoT Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 
                 after:h-[1px] after:w-0 after:bg-yellow-400 
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  IoT Product Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 
                 after:h-[1px] after:w-0 after:bg-yellow-400 
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Bulk Manufacturing & Device Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 
                 after:h-[1px] after:w-0 after:bg-yellow-400 
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Implementation & System Integration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 
                 after:h-[1px] after:w-0 after:bg-yellow-400 
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Strategic & Advisory Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 
                 after:h-[1px] after:w-0 after:bg-yellow-400 
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Predictive Maintenance & Analytics
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-base">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="relative hover:text-white transition duration-300
                 after:content-[''] after:absolute after:left-0 after:bottom-0
                 after:h-[1px] after:w-0 after:bg-yellow-400
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/hire-developers"
                  className="relative hover:text-white transition duration-300
                 after:content-[''] after:absolute after:left-0 after:bottom-0
                 after:h-[1px] after:w-0 after:bg-yellow-400
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Hire Developers
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="relative hover:text-white transition duration-300
                 after:content-[''] after:absolute after:left-0 after:bottom-0
                 after:h-[1px] after:w-0 after:bg-yellow-400
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="relative hover:text-white transition duration-300
                 after:content-[''] after:absolute after:left-0 after:bottom-0
                 after:h-[1px] after:w-0 after:bg-yellow-400
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Locations */}
        <div class="flex flex-col space-y-8 md:ml-12 ml-0">
          <div class="flex items-center space-x-3">
            <img
              src="/assets/HomePage/india.svg"
              alt="India Flag"
              class="w-16 h-16 object-contain"
            />
            <div class="flex flex-col gap-3">
              <h4 class="text-base font-semibold">India</h4>
              <p class="text-sm font-medium text-white">911,221 Gera Imperium Rise, Hinjewadi Phase - 2, Pune, Maharashtra 411057</p>
              <p class="text-sm font-medium text-white">Unit No 405-411, 4th Floor, Bizness Square Junction, opposite Hitex Road, Jubilee Enclave, HITEC City, Madhapur, Hyderabad, Telangana 500081</p>
            </div>
          </div>

          <div class="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 79 91" fill="none">
                <path d="M66.7685 33.269C66.6166 33.2686 66.4651 33.284 66.3164 33.3149C66.0447 32.8474 65.6462 32.4665 65.167 32.2162C64.6877 31.9659 64.1474 31.8565 63.6085 31.9006C63.0697 31.9448 62.5544 32.1407 62.1222 32.4656C61.6901 32.7906 61.3589 33.2313 61.167 33.7368C60.8773 33.6857 60.5799 33.6981 60.2954 33.7732C60.011 33.8483 59.7462 33.9843 59.5195 34.1717C59.2927 34.3592 59.1093 34.5936 58.982 34.8589C58.8548 35.1241 58.7866 35.4138 58.7822 35.708C58.7829 36.2401 58.9948 36.7503 59.3712 37.1264C59.7476 37.5026 60.2579 37.714 60.79 37.7143H66.7685C67.3572 37.7131 67.9213 37.4784 68.3371 37.0617C68.7529 36.645 68.9865 36.0804 68.9865 35.4917C68.9865 34.903 68.7529 34.3384 68.3371 33.9217C67.9213 33.505 67.3572 33.2702 66.7685 33.269ZM66.7685 37.0053H60.79C60.5985 37.0058 60.4092 36.9638 60.2358 36.8825C60.0624 36.8012 59.9091 36.6825 59.787 36.5349C59.6649 36.3874 59.5769 36.2146 59.5295 36.0291C59.482 35.8435 59.4762 35.6498 59.5125 35.4617C59.5487 35.2736 59.6262 35.0959 59.7393 34.9413C59.8523 34.7867 59.9982 34.659 60.1664 34.5675C60.3347 34.4759 60.5211 34.4227 60.7123 34.4117C60.9035 34.4007 61.0948 34.4322 61.2724 34.5039L61.6543 34.6552L61.748 34.2558C61.8519 33.8175 62.0907 33.4229 62.4308 33.1275C62.7708 32.8321 63.1949 32.6509 63.6434 32.6092C64.0919 32.5676 64.5422 32.6677 64.9308 32.8955C65.3194 33.1232 65.6267 33.4672 65.8095 33.8788L65.9453 34.1825L66.2568 34.0673C66.4207 34.0075 66.594 33.9772 66.7685 33.9779C67.17 33.9779 67.555 34.1374 67.8388 34.4213C68.1227 34.7051 68.2822 35.0902 68.2822 35.4916C68.2822 35.8931 68.1227 36.2781 67.8388 36.5619C67.555 36.8458 67.17 37.0053 66.7685 37.0053Z" fill="#1B4BF0"></path><path d="M42.3686 14.9347L42.1083 11.103H43.5351V10.394H42.0601L41.3535 -0.00830078H40.6465L39.9398 10.394H38.4648V11.103H39.8916L39.6314 14.9329C30.8886 15.2353 22.5221 18.5638 15.9609 24.3499C9.39967 30.136 5.05093 38.0206 3.65749 46.6569C2.74082 46.674 1.86406 47.035 1.20115 47.6683C0.53825 48.3017 0.137645 49.1611 0.0788229 50.076C0.0200003 50.9909 0.307258 51.8946 0.883602 52.6076C1.45995 53.3206 2.28326 53.7909 3.1902 53.9252C3.50099 63.8516 7.70261 73.2578 14.8881 80.1134C22.0737 86.9689 31.6668 90.7241 41.5969 90.5682C51.5269 90.4124 60.9975 86.3581 67.9644 79.2805C74.9313 72.2028 78.8357 62.6695 78.8349 52.7382C78.8896 42.9251 75.1068 33.4793 68.2939 26.4165C61.4809 19.3537 52.1773 15.2333 42.3686 14.9347ZM41 5.24609L41.3497 10.394H40.6502L41 5.24609ZM41.3979 11.103L41.9564 19.3228H40.0436L40.602 11.103H41.3979ZM47.5636 74.7213C48.0754 74.5166 48.6443 74.5051 49.164 74.689L49.4746 74.8013L49.6094 74.4995C49.8786 73.8942 50.3309 73.3886 50.9026 73.0539C51.4743 72.7192 52.1366 72.5722 52.7962 72.6337C53.4558 72.6953 54.0795 72.9621 54.5794 73.3968C55.0794 73.8315 55.4304 74.412 55.583 75.0566L55.6787 75.4585L56.0615 75.3032C56.2931 75.2087 56.5409 75.1603 56.791 75.1606C57.3124 75.1606 57.8124 75.3677 58.181 75.7364C58.5497 76.1051 58.7568 76.6051 58.7568 77.1265C58.7568 77.6478 58.5497 78.1478 58.181 78.5165C57.8124 78.8852 57.3124 79.0923 56.791 79.0923H48.3935C48.3187 79.0923 48.2481 79.0774 48.175 79.0703C47.9557 77.6233 47.7513 76.1699 47.5636 74.7213ZM48.7939 86.7075C48.9463 87.4567 49.1058 88.1934 49.2694 88.9238C47.3152 89.371 45.3279 89.6585 43.3271 89.7834V46.6255H44.6308C44.7197 49.5459 45.4541 70.2852 48.7939 86.7075ZM42.6181 83.8555H39.3818V81.6646H42.6181V83.8555ZM42.6181 80.9556H39.3818V78.7646H42.6181V80.9556ZM42.6181 78.0557H39.3818V75.8652H42.6181V78.0557ZM42.6181 75.1563H39.3818V72.9653H42.6181V75.1563ZM42.6181 72.2564H39.3818V70.0654H42.6181V72.2564ZM42.6181 69.3565H39.3818V67.1655H42.6181V69.3565ZM42.6181 66.4566H39.3818V64.2661H42.6181V66.4566ZM42.6181 63.5572H39.3818V61.3662H42.6181V63.5572ZM42.6181 60.6572H39.3818V58.4663H42.6181V60.6572ZM42.6181 57.7574H39.3818V55.5664H42.6181V57.7574ZM42.6181 54.8574H39.3818V52.667H42.6181V54.8574ZM42.6181 51.958H39.3818V49.7671H42.6181V51.958ZM42.6181 49.0581H39.3818V46.6255H42.6181V49.0581ZM38.6728 89.7814C36.6723 89.654 34.6857 89.362 32.7331 88.9084C32.8924 88.1949 33.0495 87.4777 33.1992 86.7456C36.5459 70.3169 37.2802 49.5478 37.3691 46.6255H38.6728L38.6728 89.7814ZM39.3818 84.5644H42.6182V86.7553H39.3818L39.3818 84.5644ZM45.3213 45.9165H35.3515C35.029 45.9165 34.7196 45.7884 34.4915 45.5602C34.2634 45.3321 34.1352 45.0228 34.1352 44.7002C34.1352 44.3776 34.2634 44.0682 34.4915 43.8401C34.7196 43.612 35.029 43.4839 35.3515 43.4839H46.7402C47.0628 43.4839 47.3722 43.612 47.6003 43.8401C47.8284 44.0682 47.9565 44.3776 47.9565 44.7002C47.9565 45.0228 47.8284 45.3321 47.6003 45.5602C47.3722 45.7884 47.0628 45.9165 46.7402 45.9165H45.3213ZM32.2656 38.8486V37.6089H49.7344V38.8486L32.2656 38.8486ZM41.373 42.7749V39.5576H45.0035L43.9864 42.7749H41.373ZM38.0506 42.7749L37.0335 39.5576H40.664V42.7749H38.0506ZM49.7343 36.8999H32.2656V35.563H49.7344L49.7343 36.8999ZM36.2901 39.5576L37.3072 42.7749H35.3515C35.1666 42.7776 34.983 42.8073 34.8066 42.863L32.3906 39.5576H36.2901ZM46.7402 42.7749H44.7298L45.7469 39.5576H49.5667L47.2093 42.8394C47.0562 42.7985 46.8987 42.7768 46.7402 42.7749ZM32.4062 34.854L34.746 31.6367H47.2529L49.5511 34.854H32.4062ZM45.6084 30.9277H36.3916V29.6265C36.392 29.3208 36.5137 29.0277 36.7299 28.8116C36.9461 28.5955 37.2392 28.4739 37.5449 28.4736H44.4551C44.7608 28.4739 45.0539 28.5955 45.2701 28.8116C45.4863 29.0277 45.6079 29.3208 45.6084 29.6265V30.9277ZM39.47 27.7646L39.6381 25.2905H42.3618L42.53 27.7646H39.47ZM39.6863 24.5815L39.9954 20.0317H42.0045L42.3136 24.5815H39.6863ZM0.780246 50.3149C0.780821 49.8402 0.895544 49.3726 1.11474 48.9515C1.33393 48.5304 1.65117 48.1682 2.0397 47.8954C2.42823 47.6227 2.87665 47.4473 3.34715 47.3842C3.81766 47.3211 4.29645 47.372 4.74314 47.5327L5.05271 47.6445L5.18745 47.3438C5.53501 46.5622 6.11896 45.9094 6.85707 45.4772C7.59517 45.045 8.45025 44.8553 9.30189 44.9346C10.1535 45.014 10.9588 45.3585 11.6044 45.9196C12.2499 46.4807 12.7032 47.2302 12.9004 48.0625L12.9951 48.4644L13.3779 48.3096C13.6813 48.1867 14.0056 48.1237 14.333 48.124C15.0156 48.124 15.6702 48.3952 16.1529 48.8778C16.6355 49.3605 16.9067 50.0151 16.9067 50.6977C16.9067 51.3803 16.6355 52.035 16.1529 52.5176C15.6702 53.0003 15.0156 53.2715 14.333 53.2715H3.73631C2.95252 53.2705 2.20111 52.9587 1.64693 52.4044C1.09276 51.8502 0.781066 51.0987 0.780246 50.3149ZM3.90263 53.9805H14.333C14.7646 53.9812 15.192 53.8969 15.591 53.7322C15.9899 53.5676 16.3525 53.3259 16.6579 53.021C16.9633 52.7161 17.2057 52.354 17.371 51.9553C17.5363 51.5567 17.6214 51.1293 17.6214 50.6978C17.6214 50.2662 17.5363 49.8388 17.371 49.4402C17.2057 49.0415 16.9633 48.6794 16.6579 48.3745C16.3525 48.0696 15.9899 47.8279 15.591 47.6633C15.192 47.4986 14.7646 47.4143 14.333 47.415C14.0471 47.4149 13.7624 47.4525 13.4863 47.5269C13.1955 46.6291 12.6463 45.837 11.9076 45.2498C11.1688 44.6626 10.2732 44.3063 9.33299 44.2256C8.39274 44.1449 7.44957 44.3433 6.62151 44.7959C5.79346 45.2486 5.11732 45.9354 4.67771 46.7705C4.57596 46.7435 4.47178 46.7278 4.36808 46.7098C5.74569 38.2609 10.0064 30.5497 16.4261 24.8866C22.8457 19.2236 31.0283 15.9582 39.5831 15.6453L39.3333 19.3228H38.4648V20.0318H39.2851L38.976 24.5816H38.4648V25.2906H38.9278L38.7598 27.7647H37.5449C37.0512 27.7651 36.5779 27.9614 36.2287 28.3105C35.8796 28.6595 35.6832 29.1328 35.6826 29.6265V30.9278H34.3691L31.5511 34.854H31.5566V39.5577H31.5354L34.1718 43.19C33.8544 43.4349 33.6217 43.7731 33.5066 44.1572C33.3914 44.5412 33.3995 44.9516 33.5297 45.3308C33.6599 45.71 33.9057 46.0388 34.2325 46.271C34.5592 46.5033 34.9506 46.6273 35.3515 46.6255H36.6594C36.5695 49.5731 35.8353 70.2499 32.5039 86.604C32.356 87.3298 32.1998 88.0416 32.042 88.7495C24.2304 86.7618 17.2704 82.3027 12.1995 76.0371C7.12859 69.7715 4.21835 62.0348 3.90263 53.9805ZM39.3818 89.8227V87.4643H42.6181V89.8227C42.0811 89.8459 41.5426 89.8638 41 89.8638C40.4576 89.8638 39.919 89.8464 39.3818 89.8227ZM49.9603 88.764C49.7983 88.0399 49.6396 87.3093 49.4892 86.5664C49.0421 84.3678 48.6418 82.0912 48.2837 79.7903C48.3208 79.7916 48.3562 79.8012 48.3935 79.8012H56.791C57.5004 79.8012 58.1807 79.5194 58.6824 79.0178C59.184 78.5162 59.4658 77.8358 59.4658 77.1264C59.4658 76.417 59.184 75.7367 58.6824 75.2351C58.1807 74.7334 57.5004 74.4516 56.791 74.4516C56.5808 74.4515 56.3713 74.4764 56.167 74.5259C55.9225 73.8153 55.4767 73.1911 54.8839 72.7293C54.2911 72.2675 53.5769 71.988 52.8281 71.9248C52.0793 71.8617 51.3283 72.0175 50.6665 72.3735C50.0047 72.7294 49.4606 73.2701 49.1006 73.9297C48.562 73.8004 47.9979 73.8245 47.4724 73.9994C45.8428 61.0969 45.4083 48.8433 45.3406 46.6254H46.7402C47.1478 46.6267 47.5452 46.4983 47.875 46.2587C48.2048 46.0192 48.4498 45.681 48.5747 45.2929C48.6995 44.9049 48.6976 44.4873 48.5694 44.1004C48.4411 43.7135 48.1931 43.3774 47.8612 43.1408L50.4218 39.5576H50.4433V34.854H50.4062L47.6298 30.9277H46.3173V29.6265C46.3167 29.1328 46.1203 28.6595 45.7712 28.3104C45.4221 27.9614 44.9487 27.7651 44.455 27.7646H43.2402L43.0721 25.2905H43.5351V24.5815H43.024L42.7149 20.0317H43.5351V19.3227H42.6667L42.417 15.6471C51.3528 15.987 59.8655 19.5411 66.3901 25.6561C72.9147 31.7711 77.0125 40.0359 77.9302 48.9309C78.8478 57.8259 76.5237 66.7532 71.385 74.0714C66.2463 81.3897 58.6385 86.607 49.9603 88.764Z" fill="#1B4BF0">
                </path>
            </svg>
            <div class="flex flex-col">
              <h4 class="text-base font-semibold">Canada</h4>
              <p class="text-sm font-medium text-white">209 - Fort York, Toronto - M5V 3K9</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 relative z-10">
        <p>Copyright © 2020 - 2025 Vebsigns. All Rights Reserved.</p>

        {/* Social Icons */}
        {/* <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white"><FaFacebookF /></a>
                    <a href="#" className="hover:text-white"><FaXTwitter /></a>
                    <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
                </div> */}
      </div>
    </footer>
  );
};

export default Footer;
