import Bubble from "../components/atom/Bubble";
import Button from "../components/atom/Button";
import MVadly from "../components/molecule/MVadly";
import ImageMV from "../assets/mvdcartoon.png";

const SectionOne = () => {
  return (
    <div className="w-full sm:h-screen bg-gray-100 sm:flex">
      <div className="bg-blue-500 w-full">
        <div className="flex justify-center items-center sm:h-screen">
          <div className="relative">
            <div className="flex flex-col justify-center sm:w-[500px] px-8 py-5 sm:py-0 sm:px-2">
              <Bubble>it's me</Bubble>
              <MVadly />

              <div className="relative mt-16 sm:mt-20">
                <div className="w-full bg-slate-300 h-1"></div>
                <div className="text-md sm:text-2xl font-semibold text-slate-300 z-[1] text-center">
                  Software Developer | Backend Developer
                </div>
                <div className="w-full bg-slate-300 h-1 mt-1"></div>
              </div>
              <p className="text-slate-300 font-thin sm:text-xl wrap-break-word mt-5 sm:mt-5 z-[1]">
                I am a software developer with a passion for creating innovative
                solutions. I specialize in backend development and have
                experience with various technologies and frameworks.
              </p>
            </div>
            <div className="absolute top-[4px] right-[20px] sm:top-[-78px] sm:right-[-10px] w-[130px] sm:w-[200px]">
              <img src={ImageMV} alt="mvadly" className="" />
            </div>
            <div className="px-8 pb-2 sm:py-0 sm:px-2">
              <Button onclick={() => alert("its button")} color="orange">
                <strong>let's talk</strong>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-500 w-full">
        {/* <div className="flex justify-center items-center sm:h-screen">
          <img src={ImageMV} alt="mvadly" className="sm:w-1/2" />
        </div> */}
      </div>
    </div>
  );
};

export default SectionOne;
