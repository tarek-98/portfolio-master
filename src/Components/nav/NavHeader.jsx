
const NavHeader = ({handleClick}) => {
  return (
    <div className="w-full h-[200px] flex flex-col items-center justify-end gap-4 p-4 bg-grayscale-950">
      <a href="#hero" onClick={handleClick} className="flex flex-col">
      <span
        style={{ fontFamily: "Vermin Vibes, sans-serif" }}
        className="text-3xl text-grayscale-50"
      >
        Tarek
      </span>
      </a>
      <span className="text-sm text-grayscale-300">Front-end Developer</span>
    </div>
  );
};

export default NavHeader;
