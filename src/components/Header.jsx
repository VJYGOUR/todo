function Header() {
  return (
    <div>
      <div className="dark:bg-mobDark  bg-cover bg-center dark:py-24 w-full  md:dark:bg-deskDark md:dark:py-[12rem]"></div>
      <div className="dark:hidden bg-mobLight  bg-cover bg-center py-24 w-full  md:dark:hidden md:bg-deskLight md:py-[12rem]"></div>
    </div>
  );
}

export default Header;
