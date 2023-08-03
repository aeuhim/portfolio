import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectSection from "@/components/ProjectSection"
import SocialSection from "@/components/SocialSection"

export default function Home() {
  return (
    <main className="bg-gray-100">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SocialSection />
    </main>
  )
}
