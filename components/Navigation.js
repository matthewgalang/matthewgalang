import Link from 'next/link'

function Navigation() {
 return (
     <div className="w-full">
        <div className="mx-auto px-8 xl:px-16 flex justify-between md:flex-row flex-col space-y-8 md:space-y-0 items-center py-4">
            <Link href="/"><a className="font-bold text-3xl">Matthew Galang</a></Link>
            <div className="flex items-center space-x-8">
                <Link href="/about"><a className="font-medium hover:text-blue-700">About</a></Link>
                <Link href="/projects"><a className="font-medium hover:text-blue-700">Projects</a></Link>
                <Link href="/contact"><a className="font-medium hover:text-blue-700">Contact</a></Link>
            </div>
        </div>
     </div>
 )
}

export default Navigation