import joinourteam from "../../assets/image/joinourteam.jpg";

const JoinTeam = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[400px] md:h-[500px]"
      style={{ backgroundImage: `url(${joinourteam})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute bottom-8 right-36 bg-teal-900/60 p-6 md:p-10 rounded-md max-w-md">
        <h2 className="text-2xl text-white md:text-3xl font-bold mb-4">
          Be a part of our growing brand.
        </h2>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded shadow">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JoinTeam;
