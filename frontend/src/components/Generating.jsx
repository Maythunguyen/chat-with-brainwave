import { loading } from "../assets";

const Generating = ({ className }) => {
  //className is a prop that is passed to the Generating component, render all the className that is passed to the Generating component.
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt={loading} />
      AI is generating
    </div>
  );
};

export default Generating;
