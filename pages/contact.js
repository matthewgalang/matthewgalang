import Navigation from '../components/Navigation'

export default function Contact() {
    return (
        <>
            <Navigation />
            <div className="mx-auto py-10 max-w-xl">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col w-full mx-auto">
                        <h1 className="text-3xl uppercase font-bold mb-4 text-center">Contact me</h1>
                        <p className="mb-12 text-center">I am looking for opportunities to grow and collaborate within technology.</p>
                    </div>
                </div>

                <div className="w-96 flex flex-col space-y-2 mx-auto">
                    <div className="flex justify-between">
                        <div>Email:</div>
                        <a className="text-blue-800 font-medium hover:text-blue-700" href="mailto:galang.matthew@gmail.com">galang.matthew@gmail.com</a>
                    </div>
                    <div className="flex justify-between">
                        <div>LinkedIn:</div>
                        <a className="text-blue-800 font-medium hover:text-blue-700" href="https://www.linkedin.com/in/matthew-galang/" target="_blank" rel="noreferrer">matthew-galang</a>
                    </div>
                    <div className="flex justify-between"> 
                        <div>Twitter:</div>
                        <a className="text-blue-800 font-medium hover:text-blue-700" href="https://twitter.com/matthewagalang" target="_blank" rel="noreferrer">@MatthewAGalang</a>
                    </div>
                </div>
            </div>

        </>
    )
}
