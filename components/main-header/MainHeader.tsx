import Link from "next/link";

export default function MainHeader() {
    const handleDownloadExistingPDF = () => {

      };
    return (
       <>
       <div className="flex flex-row items-center justify-center min-h-[calc(100vh-8rem)] bg-cover bg-center bg-no-repeat bg-[url('../public/covid-virus-3d-modeling.jpg')] relative opacity-[0.9]">
       <div className="absolute blur-none text-[48px] w-[60%] text-[#ddd6cb] text-center opacity-[1]">
       Unlocking the potential of AI in drug discovery
      </div>
       </div>
      <header className="absolute top-0 left-0 flex justify-between items-center px-[2rem] py-[1rem] md:p-[2rem 10%] w-full bg-[#2C638488] shadow-[0_2px_4px_0_rgba(0,0,0,0.2)]">
        <Link href={"/"} className="flex justify-center items-center gap-8 no-underline font-extrabold text-white tracking-[0.35rem] uppercase font-['Montserrat',sans-serif]">
        AIBioDiscovery
        </Link>
        
        <a href='/assets/AIBioDiscovery.pdf' target="_blank" rel="noopener noreferrer" className="border-2 border-green-700 text-white px-4 py-2 rounded-3xl">Download PDF</a>
      </header>
       </>
    );
  }