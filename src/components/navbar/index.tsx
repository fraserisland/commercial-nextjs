import Link from 'next/link';

const NavBar = () => {
  return (
    <>
      <h2>nav</h2>
      <Link href="/about">about</Link>
      <Link href="/">home</Link>
    </>
  );
};

export default NavBar;
