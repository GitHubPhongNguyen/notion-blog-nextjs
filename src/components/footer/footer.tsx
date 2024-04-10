import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className="columns-3">
        <div>
          <div>+84 387170123</div>
          <div>him98dev@gmail.com</div>
        </div>
        <div>
          <div>Cau Giay, Ha Noi</div>
          <div>Vietnam.</div>
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default Footer;
