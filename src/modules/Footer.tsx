import Button from "../components/Button";
import Screen from "../components/Screen";
import instagram from "../assets/socials/instagram.svg";
import whatsapp from "../assets/socials/whatsapp.svg";
import facebook from "../assets/socials/facebook.svg";
import linkedin from "../assets/socials/linkedin.svg";
import avetiumLogo from "../assets/logos/avetium.svg";
import ALeftLeg from "../assets/logos/avetiumALogo.svg";

const Footer = () => {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="relative px-50 py-20 h-1/2 w-full flex items-center justify-between bg-linear-65 from-[#E95D28] to-[#BB3C2D] overflow-hidden">
        <div className="w-[40%] flex flex-col gap-y-10 text-start text-[#FFFFFF]">
          <h2 className="text-4xl font-bold">Try it for free</h2>
          <p className="text-lg font-medium">
            Avetium gives you the assets & components you need to create a truly
            professional website,.
          </p>
          <div className="flex justify-between">
            <Button
              content="Get started today"
              styles="bg-[#FFFFFF] text-[#BB3C2D]"
            />

            <Button
              content="Explore all features"
              styles="bg-[transparent] text-[#FFFFFF] border-[#FFFFFF]"
            />
          </div>
        </div>

        <div className="absolute top-20 right-[-50px]">
          <Screen />
        </div>
      </div>

      <div className="relative px-50 py-20 h-1/2 w-full flex flex-col gap-y-10 bg-[#171717]">
        <div className="absolute right-0 top-0">
          <img src={ALeftLeg} alt="avetium_left_leg" />
        </div>

        <div className="flex justify-between z-10">
          <div className="w-1/6 flex flex-col gap-y-5">
            <img src={avetiumLogo} alt="avetium_logo" />
            <p className="text-[#535965]">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
            </p>
          </div>

          <div className="w-4/6 flex justify-between items-center">
            <div className="flex flex-col gap-y-5 text-start">
              <p className="text-md font-bold text-[#535965]">Platform</p>
              <ul className="text-[#FFFFFF] list-none space-y-4">
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Features</li>
                <li className="cursor-pointer">Pricing & Plans</li>
                <li className="cursor-pointer">Contact</li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-5 text-start">
              <p className="text-md font-bold text-[#535965]">Resources</p>
              <ul className="text-[#FFFFFF] list-none space-y-4">
                <li className="cursor-pointer">Account</li>
                <li className="cursor-pointer">Tools</li>
                <li className="cursor-pointer">Newsletter</li>
                <li className="cursor-pointer">FAQ</li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-5 text-start">
              <p className="text-md font-bold text-[#535965]">Products</p>
              <ul className="text-[#FFFFFF] list-none space-y-4">
                <li className="cursor-pointer">Request a Demo</li>
                <li className="cursor-pointer">Create account</li>
                <li className="cursor-pointer">Share feedback</li>
                <li className="cursor-pointer">Helpdesk</li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-5 text-start">
              <p className="text-md font-bold text-[#535965]">Legals</p>
              <ul className="text-[#FFFFFF] list-none space-y-4">
                <li className="cursor-pointer">Guides</li>
                <li className="cursor-pointer">Terms & Conditions</li>
                <li className="cursor-pointer">Privacy Policy</li>
                <li className="cursor-pointer">Licensing</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-[#535965]" />

        <div className="flex justify-between items-center text-[#4F4E53] z-10">
          <div className="flex items-center gap-x-2">
            <p>A product of</p>
            <img src={avetiumLogo} className="h-5" alt="avetium_logo" />
          </div>

          <p className="text-sm">© 2024, All Rights Reserved</p>

          <div className="flex items-center gap-x-3">
            <img src={instagram} className="cursor-pointer" alt="instagram" />
            <img src={whatsapp} className="cursor-pointer" alt="whatsapp" />
            <img src={facebook} className="cursor-pointer" alt="facebook" />
            <img src={linkedin} className="cursor-pointer" alt="linkedin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
