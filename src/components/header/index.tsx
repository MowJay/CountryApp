import ThemeSwitcher from "../themeSwitcher";

const Header = () => {
  return (
    <header className="sticky top-0 shadow z-10 bg-lightBackground dark:bg-darkBackground">
      <div className="max-w-screen-xl flex justify-between px-6 py-4 mx-auto">
        <h1 className="text-xl font-bold">Where in the world?</h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
