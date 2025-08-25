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
import { Field, Input, Label, Button } from '@headlessui/react'
import clsx from 'clsx'

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-br from-[#0B0223] via-[#150544] to-[#0B0223] text-gray-300 px-6 md:px-16 py-12">
            {/* Newsletter Section */}
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div>
                    <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter:</h3>
                    <Field>
                        <Label className="text-sm/6 font-medium text-white">Email ID</Label>

                        {/* Flex container for input + button */}
                        <div className="mt-3 flex flex-col sm:flex-row w-full sm:w-[300px] gap-2">
                            <Input
                                className={clsx(
                                    'flex-1 rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
                                    'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
                                )}
                                placeholder="Enter your email"
                            />
                            <Button className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 w-full sm:w-auto">
                                Submit
                            </Button>
                        </div>
                    </Field>

                    <p className="text-xs text-gray-400 mt-3 w-full sm:w-96">
                        By subscribing you agree to with our Privacy Policy and provide
                        consent to receive updates from our company.
                    </p>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
                    <div>
                        <h4 className="font-semibold mb-3">Expertise</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Artificial Intelligence</a></li>
                            <li><a href="#" className="hover:text-white">Generative AI / GPT</a></li>
                            <li><a href="#" className="hover:text-white">Big Data and Cloud</a></li>
                            <li><a href="#" className="hover:text-white">Software Development</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3">Solutions</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Virtual Assistant Tool</a></li>
                            <li><a href="#" className="hover:text-white">Image Recognition</a></li>
                            <li><a href="#" className="hover:text-white">Text Analysis</a></li>
                            <li><a href="#" className="hover:text-white">Data Capture & OCR</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3">About</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Company</a></li>
                            <li><a href="#" className="hover:text-white">Customer Success</a></li>
                            <li><a href="#" className="hover:text-white">Resources</a></li>
                            <li><a href="#" className="hover:text-white">Talk an Expert</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 relative z-10">
                <p>Copyright © 2024.</p>

                {/* Social Icons */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white"><FaFacebookF /></a>
                    <a href="#" className="hover:text-white"><FaXTwitter /></a>
                    <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
