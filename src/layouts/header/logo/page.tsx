import Link from "next/link";

const Logo: React.FC<ILogoProps> = ({ logo }) => {
   

  return (
    <>
      {logo === "dark" ? (
        <div className="brand-logo">
          <Link href={``}>
            <img src="/assets/images/icon/footer-logo.png" alt="" className="img-fluid " />
          </Link>
        </div>
      ) : (
        <div className="brand-logo">
          <Link href={``}>
            <img src={"/assets/images/icon/footer-logo.png"} alt="logo-clasic" className="img-fluid ed" />
          </Link>
        </div>
      )}
    </>
  );
};

export default Logo;