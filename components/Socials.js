import Link from "next/link";

import { RiFacebookLine, RiGithubLine, RiInstagramLine, RiTwitterLine, RiTwitterXLine } from 'react-icons/ri'

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={''} className="hover:text-accent transition-all duration-300 " >
      <RiInstagramLine/>
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300 " >
      <RiTwitterXLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300 " >
      <RiFacebookLine/>
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300 " >
      <RiGithubLine/>
    </Link>
  </div>;
};

export default Socials;
