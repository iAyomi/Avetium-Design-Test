import { Heading, SubHeading, Paragraph } from "../components/Typography";
import Button from "../components/Button";

const Integrations = () => {
  return (
    <section className="h-fit w-screen px-50 py-30 flex flex-col gap-y-20 items-center justify-center bg-[#FDF2EE]">
      <div className="w-[60%] flex flex-col items-center gap-y-4">
        <SubHeading styles="text-[#E95D28] font-bold">Integrations</SubHeading>
        <Heading styles="text-4xl text-[#000000]">
          Get more value from your tools
        </Heading>
        <Paragraph styles="text-md font-medium text-[#4F4E53]">
          Connect your tools, connect your teams. With over 200 apps already
          available in our directory, your team’s favourite tools are just a
          click away.
        </Paragraph>
      </div>

      <div className="w-[80%] h-screen flex flex-col gap-y-5">
        <div className="relative h-fit px-20 py-10 flex items-start justify-between gap-x-10 bg-[#BB3C2D17] rounded-2xl">
          <div className="relative w-[45%] top-5">
            <Paragraph styles="font-medium text-[#171717] text-start">
              Connect your tools, connect your teams. With over 200 apps already
              available in our directory, your team’s favourite tools are just a
              click away.
            </Paragraph>
          </div>

          <div className="h-[260px] w-[346px] border-6 border-[#535965] bg-linear-65 from-[#000000] to-[#9B9B9B] rounded-2xl"></div>
        </div>

        <div className="relative h-[30%] flex items-center justify-between gap-x-5">
          <div className="relative w-[48%] h-full px-10 py-5 flex flex-col items-center gap-y-5 bg-[#BB3C2D17] rounded-2xl overflow-hidden">
            <div>
              <Paragraph styles="font-medium text-[#171717] text-center">
                Connect your tools, connect your teams.
              </Paragraph>
            </div>

            <div className="">
              <div className="h-[260px] w-[346px] border-6 border-[#535965] bg-linear-65 from-[#000000] to-[#9B9B9B] rounded-2xl"></div>
            </div>
          </div>

          <div className="relative w-[48%] h-full px-10 py-5 flex items-start justify-between gap-x-5 bg-[#BB3C2D17] rounded-2xl overflow-hidden">
            <div className="w-[40%]">
              <Paragraph styles="font-medium text-[#171717] text-start">
                Connect your tools, connect your teams.
              </Paragraph>
            </div>

            <div className="absolute w-[50%] top-[-80px] right-[-10px]">
              <div className="h-[260px] w-[346px] border-6 border-[#535965] bg-linear-65 from-[#000000] to-[#9B9B9B] rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="h-fit px-10 py-5 flex items-center justify-between gap-x-10 bg-[#BB3C2D17] rounded-2xl overflow-hidden">
          <div className="w-[45%]">
            <div className="h-[260px] w-[346px] border-6 border-[#535965] bg-linear-65 from-[#000000] to-[#9B9B9B] rounded-2xl"></div>
          </div>

          <div className="w-[45%]">
            <Paragraph styles="font-medium text-[#171717] text-start">
              Connect your tools, connect your teams. With over 200 apps already
              available in our directory, your team’s favourite tools are just a
              click away.
            </Paragraph>
          </div>
        </div>
      </div>

      <Button
        content="Get started today"
        styles="border-[#E95D28] text-[#BB3C2D]"
      />
    </section>
  );
};

export default Integrations;
