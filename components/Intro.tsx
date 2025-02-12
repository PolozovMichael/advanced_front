import Tag from './Tag'

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`

function Intro() {
  return (
    <section className="py-28 px-4">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Introducing PIXORA</Tag>
        </div>
        <div className="text-4xl text-center font-medium mt-10">
          <span className="text-white">
            Your creative process deserves better. At Pixora, we craft custom
            web experiences that set you apart. Our expertise in modern web
            development ensures your business gets a powerful, high-performance
            website tailored to your unique needs.
          </span>{' '}
          <span className="text-white/50">{text}</span>
          <span className="text-lime-400 block">
            That is why we built PIXORA
          </span>
        </div>
      </div>
    </section>
  )
}

export default Intro
