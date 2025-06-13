import Button from "../components/Button";

const DemoForm = () => {
  return (
    <section className="relative h-screen w-screen items-center justify-center bg-[#FDF2EE]">
      <div className="relative bottom-20 m-auto h-full w-[45%] p-10 bg-[#FFFFFF] rounded-2xl">
        <form className="flex flex-col items-center justify-between gap-y-5 text-[#000000] font-medium">
          <div className="w-full flex justify-between gap-x-5">
            <input
              className="w-1/2 my-2 p-3 border border-gray-300 rounded"
              placeholder="First name"
            />
            <input
              className="w-1/2 my-2 p-3 border border-gray-300 rounded"
              placeholder="Last name"
            />
          </div>

          <div className="w-full">
            <input
              className="w-full my-2 p-3 border border-gray-300 rounded"
              placeholder="Business email"
            />
          </div>

          <div className="w-full">
            <input
              className="w-full my-2 p-3 border border-gray-300 rounded"
              placeholder="Phone"
            />
          </div>

          <div className="w-full flex justify-between gap-x-5">
            <input
              className="w-1/2 my-2 p-3 border border-gray-300 rounded"
              placeholder="Job Title"
            />
            <input
              className="w-1/2 my-2 p-3 border border-gray-300 rounded"
              placeholder="Organization name"
            />
          </div>

          <div className="w-full flex justify-between gap-x-5">
            <input
              className="w-1/2 my-2 px-3 py-5 border border-gray-300 rounded"
              type="date"
              placeholder="Available date"
            />
            <select
              title="preferred_medium"
              className="w-1/2 my-2 px-3 py-5 border border-gray-300 rounded"
            >
              <option value="" disabled selected>
                Preferred medium
              </option>
            </select>
          </div>

          <div className="w-full">
            <textarea
              className="w-full h-70 my-2 p-3 border border-gray-300 rounded"
              placeholder="Type a message"
            />
          </div>

          <Button
            content="Request Demo"
            styles="w-full text-[#FFFFFF] bg-linear-65 from-[#E95D28] to-[#BB3C2D]"
          />
        </form>
      </div>
    </section>
  );
};

export default DemoForm;
