import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import LogoTicker from '@/components/LogoTicker'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Tag from '@/components/Tag'
import { FlipWords } from '@/components/ui/flip-words'

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <div className="px-4 bg-custom-bg bg-left bg-cover bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <LogoTicker />
      <Intro />
      <div className="flex justify-center my-20">
        <Tag>Stay with us</Tag>
      </div>
      <section className="px-4 w-full mb-30 text-left text-white text-8xl justify-center">
        Build{' '}
        <FlipWords
          duration={2}
          words={[
            'Innovative',
            'Scalable',
            'Lightning-Fast',
            'SEO-Optimized',
            'Pixel-Perfect',
            'High-Performance',
            'User-Friendly',
            'Cutting-Edge',
            'Custom-Built',
            'Conversion-Driven',
            'Responsive',
            'Secure',
            'Next-Gen',
            'Future-Proof',
            'Engaging',
            'Efficient',
            'Modern',
            'Dynamic',
            'Intuitive',
            'Optimized',
          ]}
        />
        websites with{' '}
        <span className="uppercase font-extrabold text-lime-400">PIXORA</span>
      </section>
      <Services />
    </main>
  )
}
