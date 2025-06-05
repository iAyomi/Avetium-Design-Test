const Benefit = () => {
  return (
    <section className="h-screen w-screen px-50 flex flex-col items-center justify-center bg-[#BB3C2D] text-[#ffffff]">
      <div className="flex flex-col items-center gap-y-4 mb-20">
        <h2 className="text-4xl font-bold">Avetium helps you to grow</h2>
        <p className="w-[60%] text-md font-medium">
          Clarity gives you the blocks & components you need to create a truly
          professional website, landing page or admin panel for your SaaS.
        </p>
      </div>

      <div className="flex justify-between gap-x-10 mb-10">
        <p className="underline">ONE CLICK ANALYTICS</p>
        <p>CREATE PRODUCTS</p>
        <p>SALES ALERT</p>
        <p>FILES STORAGES</p>
      </div>

      <div className="h-[40%] w-1/2 mb-10 border-5 bg-linear-65 from-[#000000] to-[#9B9B9B]"></div>

      <button
        type="button"
        className="py-3 px-8 border-2 border-[#ffffff] text-[#ffffff] rounded-full mb-20"
      >
        Get started today
      </button>
    </section>
  );
};

export default Benefit;
