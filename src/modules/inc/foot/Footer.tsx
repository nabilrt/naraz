import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-2 content-center absolute bottom-0 m-auto w-[100%] text-center border-solid border-2 bg-purple-400" >
      <p>
        © {new Date().getFullYear()} <Link href="#">Naraz Shopping</Link>
      </p>
    </footer>
  );
};

export default Footer;
