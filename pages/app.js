import {Sora} from '@next/font/google'
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'
import { SpeedInsights } from "@vercel/speed-insights/next"

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800']
})
export const metadata = {
  title:   "Abdulqudus Ajape | Software Engineer Portfolio",
  description:  "Discover the work of Abdulqudus Ajape, a skilled Software Engineer focused on delivering seamless user experiences and innovative solutions in web development.",
};
  

const Layout = ({children}) => {
  return(
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
    <TopLeftImg/>
    <Nav/>
    <Header />
    {children}
    <SpeedInsights />
  </div>
  );
};

export default Layout;
