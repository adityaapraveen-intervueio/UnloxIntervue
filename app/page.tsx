import { Header } from "@/components/header"
import { ScrollingBanner } from "@/components/scrolling-banner"
import { HeroSection } from "@/components/hero-section"
import { PricingSection } from "@/components/pricing-section"
import { LogoBanner } from "@/components/logo-banner"
import { SuccessStories } from "@/components/success-stories"
import { TargetCompany } from "@/components/target-company"
import { CustomInterviewCTA } from "@/components/custom-interview-cta"
import { FooterBanner } from "@/components/footer-banner"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ScrollingBanner />
      <HeroSection />
      <PricingSection />
      <LogoBanner />
      <SuccessStories />
      <TargetCompany />
      <CustomInterviewCTA />
      <FooterBanner />
    </main>
  )
}
