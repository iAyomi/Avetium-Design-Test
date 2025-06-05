import slider from "../assets/Slider.svg";
import check from "../assets/icons/Check.svg";

const Pricing = () => {
  return (
    <section className="h-screen w-screen px-50 flex flex-col items-center justify-center bg-[#F7E1DD]">
      <div className="flex flex-col items-center gap-y-4 mb-20">
        <h5 className="text-lg font-bold text-[#E95D28]">Pricing</h5>
        <h2 className="text-4xl font-bold">
          Choose the right plan for your business
        </h2>
      </div>

      <div className="p-10 flex flex-col gap-y-5 bg-[#FFFFFF] rounded-lg text-start mb-20">
        <p className="font-bold">
          How many team members do you need the Avetium solution for?
        </p>
        <div className="flex items-center gap-x-5">
          <img src={slider} alt="slider" />
          <div className="py-1 px-2 border-1 border-[#E95D28] rounded-lg font-bold bg-[#F7E1DD]">
            250
          </div>
          <p>Users</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1>$600/Month</h1>
            <p>$7,200 billed annually</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2">
              <img src={check} alt="check" />
              <span>Unlimited access</span>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={check} alt="check" />
              <span>Detailed reports</span>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={check} alt="check" />
              <span>Structured dashboards</span>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={check} alt="check" />
              <span>24/7 cuztomer support</span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="py-4 px-8 border-2 border-[#E95D28] text-[#BB3C2D] rounded-full mb-20"
      >
        Get Started
      </button>

      <p>
        We don’t bill you automatically until your confirmation. We don’t store
        or sell your data to anyone.{" "}
      </p>
    </section>
  );
};

export default Pricing;
