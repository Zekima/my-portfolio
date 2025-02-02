import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {

    return (
        <div className="bg-secondary w-full px-4">
            <div className="max-w-[1280px] m-auto flex py-4 justify-between leading-none">
                <p className="dark:text-gray-400">© 2025 - Christian Ledaal</p>
                <div>
                    <Link href="https://www.linkedin.com/in/christian-alexander-ledaal-650816155/">
                        <FaLinkedin className="dark:text-gray-400 dark:hover:text-white cursor-pointer"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}