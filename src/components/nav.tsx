import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-black bg-opacity-50 backdrop-blur px-4 py-3 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between">
        <div className="text-white">
          <Link href="/">
            <p className="font-bold text-lg cursor-pointer">Home</p>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/about">
            <p className="text-white hover:text-gray-400 cursor-pointer">About</p>
          </Link>
          <Link href="/contact">
            <p className="text-white hover:text-gray-400 cursor-pointer">Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
