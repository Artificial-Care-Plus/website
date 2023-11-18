import Image from 'next/image'

export default async function Tip() {
    const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)]
    const images = ['1.jpg', '2.jpg', '3.jpg']
    return (
        <div className="w-1/3 border-4 border-purple-700">
            <Image
                alt="Imagem de uma pessoa se exercitando"
                src={'/static/fitness/' + pickRandom(images)}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUl5SsBwABYgDK45ai7gAAAABJRU5ErkJggg=="
                width={400}
                height={300}
                className="rounded-lg"
            />
            <h1>Dica</h1>
        </div>
    )
}
