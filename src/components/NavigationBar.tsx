import { Paragraph } from "./Typography";
import Button from "./Button";
import Hero from "../assets/logos/avetium.svg";

const NavigationBar = () => {
  return (
    <header className="z-10 absolute top-0 left-0 w-full flex items-center justify-between px-20 py-5 bg-transparent">
      <div className="relative h-12">
        <img src={Hero} alt="hero_img" className="h-10" />
        <Paragraph styles="absolute text-xs right-0 bottom-0">
          By avetium
        </Paragraph>
      </div>

      <nav>
        <ul className="flex items-center gap-x-5 list-none">
          <li className="cursor-pointer">
            <Paragraph>Home</Paragraph>
          </li>
          <li className="cursor-pointer">
            <Paragraph>About</Paragraph>
          </li>
          <li className="cursor-pointer">
            <Paragraph>FAQ</Paragraph>
          </li>
          <li className="cursor-pointer">
            <Paragraph>Contact</Paragraph>
          </li>
          <li className="cursor-pointer">
            <Paragraph>Pricing</Paragraph>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-5">
        <Button
          content="Register"
          styles="bg-[transparent] text-[#FFFFFF] border-[#FFFFFF]"
        />
        <Button content="Login" styles="bg-[#F7CE46] border-transparent" />
      </div>
    </header>
  );
};

export default NavigationBar;
