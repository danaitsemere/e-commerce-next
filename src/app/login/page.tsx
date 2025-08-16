import Image from "next/image";
import TopBar from "../../shared-components/common/TopBar";
import Header from "../../shared-components/common/Header";
import Footer from "../../shared-components/common/Footer";
import Form from "./components/Form";

export default function LoginPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <div className="flex flex-row bg-white rounded-lg shadow-md w-full max-w-3xl p-8">
          <div className="w-1/2 hidden md:flex items-center justify-center">
            <Image src="/file.svg" alt="Login" width={300} height={300} className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <Form />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
