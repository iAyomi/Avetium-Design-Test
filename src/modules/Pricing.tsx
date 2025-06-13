import Button from "../components/Button";
import slider from "../assets/Slider.svg";
import rounded_check from "../assets/icons/rounded_check.svg";

const Pricing = () => {
  return (
    <section className="h-screen w-screen px-50 flex flex-col gap-y-20 items-center justify-center bg-[#F7E1DD]">
      <div className="flex flex-col items-center gap-y-4">
        <h5 className="text-lg font-bold text-[#E95D28]">Pricing</h5>
        <h2 className="text-4xl font-bold">
          Choose the right plan for your business
        </h2>
      </div>

      <div className="p-10 flex flex-col gap-y-5 bg-[#FFFFFF] rounded-lg text-start">
        <p className="font-bold">
          How many team members do you need the Avetium solution for?
        </p>

        <div className="flex items-center gap-x-5">
          <img src={slider} alt="slider" />

          <div className="py-1 px-2 border-1 border-[#E95D28] rounded-lg font-bold bg-[#F7E1DD]">
            250
          </div>

          <p className="text-[#535965]">Users</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-6">
            <h1 className="flex items-center text-2xl font-semibold">
              <span className="block text-7xl">$600</span>/Month
            </h1>
            <p className="text-[#535965] font-semibold">
              <strong>$7,200</strong> billed annually
            </p>
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2">
              <img src={rounded_check} alt="rounded_check" />
              <span className="font-medium">Unlimited access</span>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={rounded_check} alt="rounded_check" />
              <span className="font-medium">Detailed reports</span>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={rounded_check} alt="rounded_check" />
              <span className="font-medium">Structured dashboards</span>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={rounded_check} alt="rounded_check" />
              <span className="font-medium">24/7 cuztomer support</span>
            </div>
          </div>
        </div>
      </div>

      <Button content="Get Started" styles="border-[#E95D28] text-[#BB3C2D]" />

      <div className="font-medium text-[#4F4E53]">
        <p>We don’t bill you automatically until your confirmation.</p>
        <p>We don’t store or sell your data to anyone. </p>
      </div>
    </section>
  );
};

export default Pricing;
