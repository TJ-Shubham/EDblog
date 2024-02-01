import { Link } from "react-router-dom"


function Footer() {
  return (
    <footer className="mt-8">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="-m-6 flex flex-wrap">
                <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                    <div className="flex h-full flex-col justify-between">
                        <div className="mb-4 inline-flex items-center">
                            <Link to="/" className="tracking-widest" >EDBlog</Link>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">
                                &copy; Copyright 2024. All Rights Reserved by DevUI.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                    <div className="h-full">
                        <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                            Company
                        </h3>
                        <ul>
                            <li className="mb-4">
                                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Features
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Pricing
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Affiliate Program
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Press Kit
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                    <div className="h-full">
                        <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                            Support
                        </h3>
                        <ul>
                            <li className="mb-4">
                                <Link to="/" className=" text-base font-medium text-gray-900 hover:text-gray-700">
                                    Account
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/" className=" text-base font-medium text-gray-900 hover:text-gray-700">
                                    Help
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/" className=" text-base font-medium text-gray-900 hover:text-gray-700">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className=" text-base font-medium text-gray-900 hover:text-gray-700">
                                    Customer Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                    <div className="h-full">
                        <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                            Legals
                        </h3>
                        <ul>
                            <li className="mb-4">
                                <Link to="/" className=" text-base font-medium text-gray-900 hover:text-gray-700">
                                    Terms &amp; Conditions
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/" className=" text-base font-medium text-gray-900 hover:text-gray-700">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className=" text-base font-medium text-gray-900 hover:text-gray-700">
                                    Licensing
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
    </footer>
  )
}

export default Footer