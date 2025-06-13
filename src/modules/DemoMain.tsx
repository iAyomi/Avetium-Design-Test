import { Heading, SubHeading } from "../components/Typography";

const DemoMain = () => {
  return (
    <section className="relative h-fit w-screen flex flex-col gap-y-10 items-center justify-center bg-linear-65 from-[#E95D28] to-[#BB3C2D]">
      <div className="my-[150px] w-[60%] flex flex-col gap-y-10">
        <Heading>Request a demo</Heading>

        <SubHeading styles="m-auto w-[60%]">
          Fill the form below to request a demo
        </SubHeading>
      </div>
    </section>
  );
};

export default DemoMain;
