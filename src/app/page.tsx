import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Works } from "@/components/sections/works";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { WorksModalProvider } from "@/components/sections/works-modal-context";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <WorksModalProvider>
        <Works />
      </WorksModalProvider>
      <BlogPreview />
      <Contact />
      <Footer />
    </>
  );
}