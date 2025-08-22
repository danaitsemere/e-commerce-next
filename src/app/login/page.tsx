import TopBar from "../../shared-components/common/TopBar";
import Header from "../../shared-components/common/Header";
import Footer from "../../shared-components/common/Footer";
import LoginForm from "./components/Form";

const LoginPage = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <TopBar />
    <Header />
    <div className="flex-grow flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white mx-auto">
        <div className="hidden md:flex flex-1 items-center justify-center p-8">
          <img
            src="/images/dl.beatsnoop.png"
            alt="Shopping cart and phone"
            className="max-w-full max-h-[500px] object-contain"
          />
        </div>
        <div className="flex-1 flex items-center justify-center p-8">
          <LoginForm />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default LoginPage;