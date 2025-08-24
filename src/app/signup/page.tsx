import Image from "next/image";
import TopBar from "../../shared-components/common/TopBar";
import Header from "../../shared-components/common/Header";
import Footer from "../../shared-components/common/Footer";
import Form from "./components/Form";

const SignupPage = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <TopBar />
    <Header />
    <div className="flex-grow flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white mx-auto">
        <div className="hidden md:flex flex-1 items-center justify-center p-8">
          <Image
            src="/images/dl.beatsnoop.png"
            alt="Shopping cart and phone"
            width={500}  
            height={500}    
            className="max-w-full max-h-[500px] object-contain"
          />
        </div>
        <div className="flex-1 flex items-center justify-center p-8">
          <Form />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default SignupPage;
