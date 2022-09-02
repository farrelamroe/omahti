import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {
  const [navbar, setNavbar] = useState(false);
  
  return (
    <>
      <div className="mx-10">
        <div id="judul" className="border-2 border-black font-playfair text-center mt-10 mobile:flex mobile:flex-row mobile:justify-between sm:items-center sm:flex sm:flex-row sm:justify-between xl:flex xl:flex-col">
          <p className="xl:text-5xl font-bold text-red-600 py-10 mobile:text-lg mobile:text-left sm:text-left sm:text-4xl sm:px-5 mobile:px-5 mobile:py-5 xl:text-center hover:cursor-pointer">OMAHTI PRESS</p>
          <div className="xl:hidden">
             <button onClick={() => setNavbar(!navbar)} className="items-center my-[20px] mr-4">
               <svg className=" w-6 h-6 text-gray-500 hover:text-green-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
             </button>
			    </div>
          <div className="xl:flex xl:flex-row mobile:hidden sm:hidden">
            <div className="border-t-2 text-center border-black px-10 flex flex-row gap-x-28 font-lato items-center">
              <a href="https://landing-page-ten-orcin.vercel.app/"><p className="hover:text-red-500 hover:cursor-pointer">ABOUT</p></a> {/*pergantian halaman web ke profil penulis */}
              <p className="hover:text-red-500 hover:cursor-pointer ">RESEARCH</p>
              <p className="hover:text-red-500 hover:cursor-pointer">EVENTS</p>
              <p className="hover:text-red-500 hover:cursor-pointer">ARTICLES</p>
              <p className="hover:text-red-500 hover:cursor-pointer">BOOKS</p>
              <p className="hover:text-red-500 hover:cursor-pointer">ENROLLMENT</p>
            </div>
            <div className='px-3 bg-gray-700 '>
              <div className='border-l-2 border-r-2 py-5'>
                <div className="border-t-2 border-b-2 py-2 px-2">
                  <p className=" font-lato text-white border-2 py-1 px-[51px] text-sm hover:cursor-pointer hover:bg-white hover:text-black">SIGN IN/SIGN UP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${navbar?"fixed":"hidden"}`} >
        <div className="flex flex-col bg-white mt-1 w-screen h-screen gap-10 pr-16 items-center xl:hidden">
          <p className='hover:bg-red-500'>ABOUT</p>
          <p className='hover:bg-red-500'>RESEARCH</p>
          <p className='hover:bg-red-500'>EVENTS</p>
          <p className='hover:bg-red-500'>ARTICLES</p>
          <p className='hover:bg-red-500'>BOOKS</p>
          <p className='hover:bg-red-500'>ENROLLMENT</p>
          <p className='hover:bg-red-500'>SIGN IN/SIGN UP</p>
        </div>
      </div>
        <p className='text-3xl mt-16 font-bold font-playfair items-center pb-4'>Trending on Press</p>
        <div className="flex mobile:flex-col sm:flex-col xl:flex-row xl:flex-wrap">
          <div className="flex flex-col border-2 text-left border-black px-10 py-10 mobile:mr-0 sm:mr-10 md:mr-3 mt-3 min-w-0 xl:max-w-sm">
            <div className="flex flex-row justify-between text-xs text-gray-500 font-lato">
              <p>EVENT</p>
              <p>3RD AUGUST 2022</p>
            </div>
            <div className="my-10">
              <img className="w-7/8 sm:w-1/2 xl:w-3/4 sm:mx-auto mb-10 hover:animate-spin hover:cursor-pointer" src={logo} alt="logo"></img>
              <p className='text-xl font-playfair font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue lacus</p>
            </div>
          </div>
          <div className="flex flex-col border-2 text-left border-black px-10 py-10 mobile:mr-0 sm:mr-10 md:mr-3 mt-3 min-w-0 xl:max-w-sm">
            <div className="flex flex-row justify-between text-xs text-gray-500 font-lato">
              <p>ARTICLE</p>
              <p>17TH AUGUST 2022</p>
            </div>
            <div className="my-10">
              <img className="w-7/8 sm:w-1/2 xl:w-3/4 sm:mx-auto mb-10 hover:animate-spin hover:cursor-pointer" src={logo} alt="logo"></img>
              <p className='text-xl font-playfair font-bold'>In vehicula rhoncus felis sed congue. Quisque eget</p>
            </div>
          </div>
          <div className="flex flex-col border-2 text-left border-black px-10 py-10 mobile:mr-0 sm:mr-10 md:mr-3 mt-3 min-w-0 xl:max-w-sm">
            <div className="flex flex-row justify-between text-xs text-gray-500 font-lato">
              <p>RESEARCH</p>
              <p>1ST JULY 2022</p>
            </div>
            <div className="my-10">
              <img className="w-7/8 sm:w-1/2 xl:w-3/4 sm:mx-auto mb-10 hover:animate-spin hover:cursor-pointer" src={logo} alt="logo"></img>
              <p className='text-xl font-playfair font-bold'>Sed sit amet velit eleifend, laoreet lacus eu, porta eros. Pellentesque auctor auctoe acuse solani mur ect</p>
            </div>
          </div>
          <div className="flex flex-col border-2 text-left border-black px-10 py-10 mobile:mr-0 sm:mr-10 md:mr-3 mt-3 min-w-0 xl:max-w-sm">
            <div className="flex flex-row justify-between text-xs text-gray-500 font-lato">
              <p>RESEARCH</p>
              <p>2ND JULY 2022</p>
            </div>
            <div className="my-10">
              <img className="w-7/8 sm:w-1/2 xl:w-3/4 sm:mx-auto mb-10 hover:animate-spin hover:cursor-pointer" src={logo} alt="logo"></img>
              <p className='text-xl font-playfair font-bold'>Donec sit amet ornare augue. Nam quis nunc lectus.</p>
            </div>
          </div>
          <div className="flex flex-col border-2 text-left border-black px-10 py-10 mobile:mr-0 sm:mr-10 md:mr-3 mt-3 min-w-0 xl:max-w-sm">
            <div className="flex flex-row justify-between text-xs text-gray-500 font-lato">
              <p>Technology</p>
              <p>1ST AUGUST 2022</p>
            </div>
            <div className="my-10">
              <img className="w-7/8 sm:w-1/2 xl:w-3/4 sm:mx-auto mb-10 hover:animate-spin hover:cursor-pointer" src={logo} alt="logo"></img>
              <p className='text-xl font-playfair font-bold'>Donec sit amet ornare augue. Na quis nunc lectus. Sed blandit tristique odio, sed aliquet</p>
            </div>
          </div>
        </div>
        <div className="border-t-2 mt-10 border-black"></div>
        <div className="flex xl:flex-row gap-2 mt-16 mobile:flex-col sm:flex-col sm:items-center mobile:items-center xl:items-start">
          <div className="xl:w-4/5">
            <p className='text-3xl font-bold font-playfair'>What's New?</p>
            <div className="flex lg:flex-row border-2 border-black mt-8 mobile:flex-col sm:flex-col">
              <div className="w-3/5 mobile:w-full sm:w-full">
                <div className="flex flex-row justify-between pt-2 pb-2 mobile:mx-2 sm:mx-2">
                  <div className="flex flex-row text-sm text-gray-500 font-lato mobile:text-xs sm:text-lg">
                    <img src={logo} alt="logo" className='w-1/12 mobile:hidden sm:block'></img>
                    <p className="self-center">John Doe - Aug 1</p>
                  </div>
                  <p className="ml-10 self-center text-gray-500 font-lato text-sm mobile:text-xs sm:text-lg">Research</p>
                </div>
                <img src={logo} alt="logo" className='sm:w-1/2 mx-auto lg:hidden hover:cursor-pointer hover:animate-spin'></img>
                <p className="px-2 font-bold text-2xl">Maecenas augue lacus, pretium quis tortor non, vulputate rhoncus ante?</p>
                <p className="px-2 py-2 font-lato">Pellentesque sodales tortor at tristique finibus. Proin eget eros nulla. Curabitur a condimentum augue. Proin viverra dolor quam</p>
              </div>
              <img src={logo} alt="logo" className='w-1/3 mobile:hidden sm:hidden lg:block hover:cursor-pointer hover:animate-spin'></img>
            </div>
            <div className="flex lg:flex-row border-2 border-black mt-3 mobile:flex-col sm:flex-col">
              <div className="w-3/5 mobile:w-full sm:w-full">
                <div className="flex flex-row justify-between pt-2 pb-2 mobile:mx-2 sm:mx-2">
                  <div className="flex flex-row text-sm text-gray-500 font-lato mobile:text-xs sm:text-lg">
                    <img src={logo} alt="logo" className='w-1/12 mobile:hidden sm:block'></img>
                    <p className="self-center">Will Mae- Jul 28</p>
                  </div>
                  <p className="ml-10 self-center text-gray-500 font-lato text-sm mobile:text-xs sm:text-lg">Achievement</p>
                </div>
                <img src={logo} alt="logo" className='sm:w-1/2 mx-auto lg:hidden hover:cursor-pointer hover:animate-spin'></img>
                <p className="px-2 font-bold text-2xl">In vehicula rhoncus felis sed congue.</p>
                <p className="px-2 py-2 font-lato">Pellentesque sodales tortor at tristique finibus. Proin eget eros nulla. Curabitur a condimentum augue. Proin viverra dolor quam</p>
              </div>
              <img src={logo} alt="logo" className='w-1/3 mobile:hidden sm:hidden lg:block hover:cursor-pointer hover:animate-spin'></img>
            </div>
            <div className="flex lg:flex-row border-2 border-black mt-3 mobile:flex-col sm:flex-col">
              <div className="w-3/5 mobile:w-full sm:w-full">
                <div className="flex flex-row justify-between pt-2 pb-2 mobile:mx-2 sm:mx-2">
                  <div className="flex flex-row text-sm text-gray-500 font-lato mobile:text-xs sm:text-lg">
                    <img src={logo} alt="logo" className='w-1/12 mobile:hidden sm:block'></img>
                    <p className="self-center">Rob Maine - Aug 7</p>
                  </div>
                  <p className="ml-10 self-center text-gray-500 font-lato text-sm mobile:text-xs sm:text-lg">Event</p>
                </div>
                <img src={logo} alt="logo" className='sm:w-1/2 mx-auto lg:hidden hover:cursor-pointer hover:animate-spin'></img>
                <p className="px-2 font-bold text-2xl">Maecenas augue lacus, pretium quis tortor non, vulputate rhoncus ante?</p>
                <p className="px-2 py-2 font-lato">Quisque id finibus velit. In hac habitasse platea dictumst. Curabitur tempus quam ut tellus pellentesque accumsan. Cras tincidunt augue a nisl aliquet, in luctus velit iaculis. Etiam ac ante diam. Suspendisse eleifend pretium tortor, ac ullamcorper enim rhoncus quis. Aliquam eget fringilla orci. Vivamus sit amet tincidunt ligula, a tempus nunc. Quisque eget purus blandit, tempor nisl id, lobortis diam. Donec ac leo risus. Sed vitae volutpat tortor.</p>
              </div>
              <img src={logo} alt="logo" className='w-1/3 mobile:hidden sm:hidden lg:block hover:cursor-pointer hover:animate-spin'></img>
            </div>
            <div className="flex lg:flex-row border-2 border-black mt-3 mobile:flex-col sm:flex-col">
              <div className="w-3/5 mobile:w-full sm:w-full">
                <div className="flex flex-row justify-between pt-2 pb-2 mobile:mx-2 sm:mx-2">
                  <div className="flex flex-row text-sm text-gray-500 font-lato mobile:text-xs sm:text-lg">
                    <img src={logo} alt="logo" className='w-1/12 mobile:hidden sm:block'></img>
                    <p className="self-center font-lato">Rob Maine - Aug 7</p>
                  </div>
                  <p className="ml-10 self-center text-gray-500 font-lato text-sm mobile:text-xs sm:text-lg">Technology</p>
                </div>
                <img src={logo} alt="logo" className='sm:w-1/2 mx-auto lg:hidden hover:cursor-pointer hover:animate-spin'></img>
                <p className="px-2 font-bold text-2xl">Maecenas augue lacus, pretium quis tortor non, vulputate rhoncus ante?</p>
                <p className="px-2 py-2 font-lato">Pellentesque sodales tortor at tristique finibus. Proin eget eros nulla. Curabitur a condimentum augue. Proin viverra dolor quam</p>
              </div>
              <img src={logo} alt="logo" className='w-1/3 mobile:hidden sm:hidden lg:block hover:cursor-pointer hover:animate-spin'></img>
            </div>
            <div className="flex lg:flex-row border-2 border-black mt-3 mobile:flex-col sm:flex-col">
              <div className="w-3/5 mobile:w-full sm:w-full">
                <div className="flex flex-row justify-between pt-2 pb-2 mobile:mx-2 sm:mx-2">
                  <div className="flex flex-row text-sm text-gray-500 font-lato mobile:text-xs sm:text-lg">
                    <img src={logo} alt="logo" className='w-1/12 mobile:hidden sm:block'></img>
                    <p className="self-center">Rob Maine - Aug 7</p>
                  </div>
                  <p className="ml-10 self-center text-gray-500 font-lato text-sm mobile:text-xs sm:text-lg">Research</p>
                </div>
                <img src={logo} alt="logo" className='sm:w-1/2 mx-auto lg:hidden hover:cursor-pointer hover:animate-spin'></img>
                <p className="px-2 font-bold text-2xl">Maecenas augue lacus, pretium quis tortor non, vulputate rhoncus ante?</p>
                <p className="px-2 py-2 font-lato">Pellentesque sodales tortor at tristique finibus. Proin eget eros nulla. Curabitur a condimentum augue. Proin viverra dolor quam</p>
              </div>
              <img src={logo} alt="logo" className='w-1/3 mobile:hidden sm:hidden lg:block hover:cursor-pointer hover:animate-spin'></img>
            </div>
          </div>
          <div className='xl:w-1/3 xl:ml-16 mobile:w-full mobile:ml-0 mobile:mt-4 sm:w-full sm:ml-0 sm:mt-4 md:mt-4 flex mobile:flex-col md:flex-row xl:flex-col xl:mt-0'>
            <div className="flex flex-col">
              <p className="text-3xl font-bold font-playfair">Discover Topics</p>
              <div className="flex flex-row flex-wrap gap-2 xl:mr-16 xl:mt-8 sm:mt-4 font-lato mobile:mr-0 mobile:mt-8 sm:mr-10 md:mr-32 lg:mr-76">
                <p className="border-black border-2 px-3 py-1 hover:cursor-pointer hover:bg-black hover:text-white">Politics</p>
                <p className="border-black border-2 px-3 py-1 hover:cursor-pointer hover:bg-black hover:text-white">Science</p>
                <p className="border-black border-2 px-3 py-1 hover:cursor-pointer hover:bg-black hover:text-white">Achievement</p>
                <p className="border-black border-2 px-3 py-1 hover:cursor-pointer hover:bg-black hover:text-white">Event</p>
                <p className="border-black border-2 px-3 py-1 hover:cursor-pointer hover:bg-black hover:text-white">Social</p>
                <p className="border-black border-2 px-3 py-1 hover:cursor-pointer hover:bg-black hover:text-white">Technology</p>
                <p className="border-black border-2 px-3 py-1 hover:cursor-pointer hover:bg-black hover:text-white">Academic</p>
                <p className="border-black border-2 px-3 py-1 hover:cursor-pointer hover:bg-black hover:text-white">Psychology</p>
                <p className="border-black border-2 px-3 py-1 hover:cursor-pointer hover:bg-black hover:text-white">News</p>
              </div>
              <p className="text-lg pt-4 pb-8 text-red-600 font-lato hover:cursor-pointer hover:text-black">See more &gt;</p>
            </div>
            <div className="flex flex-col">
              <p className="text-3xl font-bold">Writer of The Month</p>
              <div className="flex flex-col gap-y-4 mt-4">
                <div className="flex flex-row">
                  <img src={logo} alt="logo" className='sm:w-1/3 mobile:w-1/6 lg:w-1/6 animate-spin hover:cursor-pointer'></img>
                  <div className="flex flex-col">
                    <p className="font-bold hover:cursor-pointer">Andyan Yogawardhana</p>
                    <p className="text-xs font-lato">Computer Science Student</p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <img src={logo} alt="logo" className='sm:w-1/3 mobile:w-1/6 lg:w-1/6 animate-spin hover:cursor-pointer'></img>
                  <div className="flex flex-col">
                    <a href="https://www.linkedin.com/in/fidzal-adrian-68577b218/"><p className="font-bold">Fidzal Adrian</p></a>
                    <p className="text-xs font-lato">Network Specialist</p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <img src={logo} alt="logo" className='sm:w-1/3 mobile:w-1/6 lg:w-1/6 animate-spin hover:cursor-pointer'></img>
                  <div className="flex flex-col">
                    <a href="https://www.linkedin.com/in/jovincaclaudia/"><p className="font-bold">Jovinca Claudia Amarissa</p></a>
                    <p className="text-xs font-lato">Computer Science Student</p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <img src={logo} alt="logo" className='sm:w-1/3 mobile:w-1/6 lg:w-1/6 animate-spin hover:cursor-pointer'></img>
                  <div className="flex flex-col">
                    <a href="https://www.linkedin.com/in/ssisiliaf/"><p className="font-bold">Santa Sisilia Filia Dulcis</p></a>
                    <p className="text-xs font-lato">UI/UX Lecturer</p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <img src={logo} alt="logo" className='sm:w-1/3 mobile:w-1/6 lg:w-1/6 animate-spin hover:cursor-pointer'></img>
                  <div className="flex flex-col">
                    <a href="https://www.linkedin.com/in/izzelbas/"><p className="font-bold">Izzeldin Rayyan Bastian</p></a>
                    <p className="text-xs font-lato">Fullstack Developer</p>
                  </div>
                </div>
                <p className="text-lg text-red-600 font-lato hover:cursor-pointer hover:text-black">See more &gt;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black pt-10 mobile:py-10 sm:py-10 xl:pb-56 px-12 mt-10">
        <div className="flex lg:flex-row mobile:flex-col sm:flex-col ">
          <div className="w-1/3 flex flex-row mobile:flex-col mobile:w-full sm:w-full">
            <div className="flex flex-col gap-y-3">
              <p className="lg:text-2xl text-white font-bold mobile:text-4xl sm:text-4xl">Information</p>
              <div className="font-lato gap-y-3 flex flex-col text-white lg:text-sm mobile:text-xl sm:text-xl">
                <a href="#judul"><p className="hover:text-red-500 hover:cursor-pointer">About</p></a>
                <p className="hover:text-red-500 hover:cursor-pointer">Contact</p>
                <p className="hover:text-red-500 hover:cursor-pointer">Enrollment</p>
                <p className="hover:text-red-500 hover:cursor-pointer">Cookie Policy</p>
                <p className="hover:text-red-500 hover:cursor-pointer">Terms and Conditions</p>
                <p className="hover:text-red-500 hover:cursor-pointer">Privacy Policy</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-3 xl:ml-16 mobile:mx-0 mobile:mt-4 lg:mx-4 sm:ml-16">
              <p className="lg:text-2xl text-white font-bold mobile:text-4xl sm:text-4xl">Follow Us</p>
              <div className="font-lato gap-y-3 flex flex-col text-white lg:text-sm mobile:text-xl sm:text-xl">
                <p className="hover:text-red-500 hover:cursor-pointer">Facebook</p>
                <p className="hover:text-red-500 hover:cursor-pointer">Instagram</p>
                <p className="hover:text-red-500 hover:cursor-pointer">Twitter</p>
              </div>
            </div>
          </div>
          <div className="border-white border-l-2 mobile:hidden sm:hidden lg:block"></div>
          <div className="flex flex-col gap-y-3 ml-10 w-1/3 mobile:w-full mobile:ml-0 mobile:mt-4 mobile:text-xl sm:w-full sm:ml-0 sm:mt-4 sm:text-xl lg:text-sm lg:ml-4 lg:mt-0 xl:ml-10 xl:text-lg">
            <p className=" text-white">Subscribe to Gadjah Mada University’s digital newsletter for your daily digest of essential news, directly to your inbox.</p>
            <a href="https://www.youtube.com/user/UGMOfficial"><p className="border-red-500 border-2 px-8 py-2 text-red-500 text-center w-1/2 font-lato mobile:w-full sm:self-center lg:self-start hover:ring-white hover:cursor-pointer hover:ring-1 hover:bg-red-500 hover:text-black">SUBSCRIBE</p></a>
          </div>
          <div className="border-white border-l-2 ml-4 mobile:hidden sm:hidden lg:block"></div>
          <div className="flex flex-col mx-10 w-1/3 mobile:w-full mobile:ml-0 mobile:mt-4 mobile:text-xl sm:w-full sm:ml-0 sm:mt-4 sm:text-xl lg:text-sm lg:mx-4 lg:mt-0 lg:ml-10 xl:text-lg">
            <p className=" text-white">Gadjah Mada University ’s content platforms can help you reach an informed cultural and creative professionals.</p>
            <p className='text-white mt-4'>For more information, contact:</p>
            <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJvqJvfcPCkrzMWCKxdzLcNQTVvRHWXXZxJFVfgKhDKwngLLRsLTCxBScRhpwddbQtwSsWg"><p className='text-red-500 hover:cursor-pointer'>placeholder@mail.ugm.ac.id</p></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
