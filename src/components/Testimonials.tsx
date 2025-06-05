import testimonialImage from "../assets/Testimonial.svg";
import martino from "../assets/logos/martino.svg";
import squareStone from "../assets/logos/squarestone.svg";
import waverio from "../assets/logos/waverio.svg";
import waverio2 from "../assets/logos/waverio2.svg";
import vertex from "../assets/logos/vertex.svg";

const Testimonials = () => {
  return (
    <section className="h-screen w-screen px-50 flex flex-col items-center justify-center bg-[#FBF1EF]">
      <div className="flex flex-col items-center gap-y-4 mb-20">
        <h5 className="text-lg font-bold text-[#E95D28]">Testimonials</h5>
        <h2 className="text-4xl font-bold">Trusted by 2,500+ businesses</h2>
      </div>

      <div className="flex justify-between gap-x-10">
        <div className="w-[45%]">
          <img src={testimonialImage} alt="testimonial-img" />
        </div>

        <div className="w-[55%] flex gap-x-5">
          <div className="p-10 flex flex-col justify-between bg-[#FFFFFF87] rounded-2xl text-start">
            <p className="text-2xl font-bold">
              "We love Landingfolio! Our designers were using it for their
              projects, so clients already knew what Landingfolio was and how to
              use it."
            </p>
            <p>
              <strong>Jenny Wilson</strong> Co-Founder
            </p>
            <img src={waverio2} className="w-20" alt="waverio2-logo" />
          </div>

          <div className="flex flex-col justify-between">
            <div className="h-[20%] w-2 bg-[#BB3C2D] rounded"></div>
            <div className="h-[20%] w-2 bg-[#F7E1DD] rounded"></div>
            <div className="h-[20%] w-2 bg-[#F7E1DD] rounded"></div>
            <div className="h-[20%] w-2 bg-[#F7E1DD] rounded"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-x-10 mt-20">
        <img src={vertex} alt="vertex-logo" />
        <img src={squareStone} alt="squareStone-logo" />
        <img src={martino} alt="martino-logo" />
        <img src={waverio} alt="waverio-logo" />
      </div>
    </section>
  );
};

export default Testimonials;
