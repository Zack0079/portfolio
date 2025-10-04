export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="container mx-auto flex flex-row gap-4 justify-between">
        <span className="">&copy; {new Date().getFullYear()} Cheung Yuet Tse (Zack Tse). All rights reserved.</span >
        <span className="">Built with Next.js, FontAwesome, and Tailwind CSS</span>
      </div>

    </footer>
  );
}