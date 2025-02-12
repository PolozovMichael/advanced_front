import Image from 'next/image'

const logos = [
  { name: 'Quantum', image: '/images/quantum.svg' },
  { name: 'Acme Corp', image: '/images/acme-corp.svg' },
  { name: 'Echo Valley', image: '/images/echo-valley.svg' },
  { name: 'Pulse', image: '/images/pulse.svg' },
  { name: 'Outside', image: '/images/outside.svg' },
  { name: 'Apex', image: '/images/apex.svg' },
  { name: 'Celestial', image: '/images/celestial.svg' },
  { name: 'Twice', image: '/images/twice.svg' },
]

function LogoTicker() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <h3 className="text-center text-white/50 text-xl">
          Already chosen by these market leaders
        </h3>
        <div className="overflow-hidden mt-12 [mask-image: linear-gradient(to_right, transparent, black_10%, black_90%, transparent)]">
          <div className="flex gap-24 pr-24">
            {logos.map((logo, index) => (
              <Image
                src={logo.image}
                alt="company-logo"
                key={index}
                width={250}
                height={250}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoTicker
