import Heading from "../Sections/Heading Pages/Heading";
import Specials from "../Sections/Heading Pages/Specials";
import Testimonials from "../Sections/Heading Pages/Testimonials";
import About from "../Sections/Heading Pages/About";
export default function Homepage() {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}
