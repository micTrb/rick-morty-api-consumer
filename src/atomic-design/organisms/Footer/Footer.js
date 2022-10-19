import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {



    return (
        <div class="mt-48 w-full p-8 flex items-center justify-center bg-slate-700">
            <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
                <div class="flex flex-col">
                    <a target="_blank" href="https://www.michaeltarabella.com">
                        <p class="w-full text-center my-12 text-white">Copyright © 2022 Michael Tarabella</p>
                    </a>
                </div>
            </div>
        </div>
    )
}



export default Footer;