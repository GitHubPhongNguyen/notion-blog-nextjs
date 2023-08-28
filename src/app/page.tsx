import Image from 'next/image';
import Link from 'next/link';

import { FaInstagram, FaGithub } from 'react-icons/fa';

export const metadata = {
  title: 'Trang chủ | Him98',
};

export default function HomePage() {
  return (
    <div className="mt-15 mx-auto grid max-w-3xl grid-cols-1 gap-9 md:mt-40 md:grid-cols-2">
      <div>
        <h1 className="text-5xl font-bold leading-normal drop-shadow-md">
          Front-End React Developer 👋
        </h1>
        <p className="mt-6 text-xl text-gray-500 dark:text-gray-400">
          Hi. I&apos;m Him98. A Front-End React Developer in Viet Nam 📍
        </p>
        <ul className="mt-6 flex gap-5">
          <li>
            <Link href="https://www.instagram.com/him98dev">
              <FaInstagram
                size={28}
                className="drop-shadow-md duration-150 ease-in-out hover:text-orange-400"
              />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/GitHubPhongNguyen">
              <FaGithub
                size={28}
                className="drop-shadow-md duration-150 ease-in-out hover:text-orange-400"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/him98.png"
          alt="cover"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}
