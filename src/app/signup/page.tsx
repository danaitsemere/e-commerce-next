import TopBar from "../../shared-components/common/TopBar";
import Header from "../../shared-components/common/Header";
import Footer from "../../shared-components/common/Footer";
import Form from "./components/Form";

export default function SignupPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <div className="flex flex-row bg-white rounded-lg shadow-md w-full max-w-3xl p-8">
          <div className="w-1/2 hidden md:block flex items-center justify-center">
            <img src="/file.svg" alt="Signup" className="w-full h-auto" />
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