import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-2 content-center absolute bottom-0 m-auto w-[100%] text-center " >
      <p>
        © {new Date().getFullYear()} <Link href="#">Naraz Shopping</Link>
      </p>
    </footer>
  );
};

export default Footer;
