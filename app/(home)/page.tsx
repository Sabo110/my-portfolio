import About from "../components/home/About";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import ProExp from "../components/home/ProExp";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Skills />
      <ProExp />
      <Footer />
    </>
  );
}
