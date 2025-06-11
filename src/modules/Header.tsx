import NavigationBar from "../components/NavigationBar";
import Button from "../components/Button";
import Screen from "../components/Screen";
import { Heading, SubHeading } from "../components/Typography";

const Header = () => {
  return (
    <section className="relative h-screen w-screen flex flex-col gap-y-20 items-center justify-center bg-linear-65 from-[#E95D28] to-[#BB3C2D] overflow-hidden">
      <NavigationBar />

      <div className="mt-[400px] w-[60%] flex flex-col gap-y-10">
        <Heading>
          From Hiring To Payroll To Team Oversight - All In One Spot!
        </Heading>

        <SubHeading styles="m-auto w-[60%]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </SubHeading>
      </div>

      <div className="w-[20%] flex justify-between">
        <Button content="Get started" styles="bg-[#FFFFFF] text-[#BB3C2D]" />

        <Button
          content="Learn more"
          styles="bg-[transparent] text-[#FFFFFF] border-[#FFFFFF]"
        />
      </div>

      <div className="relative bottom-[-20px]">
        <Screen />
      </div>
    </section>
  );
};

export default Header;
