import profile from "../assets/profile.png";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center ">
        <h2 className="text-4xl font-bold font-family uppercase">
          Knowledge cofe
        </h2>
        <img src={profile} alt="" />
      </div>
      <hr className="mt-8 text-gray-300" />
    </div>
  );
};

export default Header;
