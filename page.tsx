import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturedProducts from "@/components/featured-products"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <WhatsAppButton />
      <Footer />
    </main>
  )
}
