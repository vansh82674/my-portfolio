import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={25} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/vansh82674",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:vanshpachori51@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Twitter
          <BsTwitter size={25} />
        </>
      ),
      href: "https://twitter.com/VanshP249",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => {
          return (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-transparent hover:ml-[0] rounded-md duration-300 " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between w-full text-white "
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
