"use client"
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/assets/images/Logo-svg.svg'
import { navBarItems } from '@/constants'
import { firstLetterToUpperCase, classNames } from '@/utils'
import { SignInOut } from '.'
import SessionProviderWrapper from './SessionProviderWrapper'
import { signIn, signOut } from 'next-auth/react'
import { log } from 'console'




export default function NavBar() {
  async function keyCloakSessionLogOut() {
    try {
      console.log("-----------");
      
      const resp = await fetch('/api/auth/logout', { method: "GET" })
      console.log(resp);
      
    } catch (err) {
      console.log("----error-------");
      console.log(err)
    }
  }

  const getIntialState = () => {
    const intialState: navtemsInterface = []
    navBarItems.map(item => intialState.push({ title: item.title, active: false }))
    return intialState
  }
  interface navtIem {
    title: string; active: boolean
  }
  interface navtemsInterface extends Array<navtIem> { }
  const [navState, setNavState] = useState<navtemsInterface>(getIntialState())

  const handelClickSignInOut = (param: String) => {
    console.log(param);
    if (param == 'login') {
      signIn('keycloak')
    } else if (param == 'logout') {
      keyCloakSessionLogOut().then(()=>signOut({callbackUrl:"/"})).catch(erro=>{
      console.log(erro);
        
      })
    }
    // signIn("keycloak")
  }
  const handelClick = (title: string) => {
    const newStateArrayFalse = navState.map(item => {
      return {
        ...item,
        active: false
      }
    })
    const newStateArray = newStateArrayFalse.map(item => {
      if (item.title.toLowerCase() !== title.toLowerCase()) {
        return item
      } else {
        return {
          ...item,
          active: true
        }
      }
    })
    setNavState(newStateArray)
  }
  const isActive = (title: string): boolean => {
    let activeElement = navState.filter(item => item.title === title)[0];
    return activeElement ? activeElement.active : false;
  }
  return (
    <SessionProviderWrapper>
      <Disclosure as="nav" className="shadow ">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <Link
                    href='/'
                    className='flex flex-shrink-0 items-center'
                  >
                    <div className='mt-3 py-1'>
                      <svg width="120" height="53" viewBox="0 0 120 53" xmlns="http://www.w3.org/2000/svg">
                        <rect width="120" height="53" fill="#EEFFF9" fillOpacity="0" />
                        <path fill="#0C462E" d="M2.74219 31.6484L2.8125 33.9922C2.8125 34.3984 2.70312 34.7109 2.48438 34.9297C2.26562 35.1484 2 35.2578 1.6875 35.2578C1.39062 35.2578 1.14062 35.1562 0.9375 34.9531C0.734375 34.75 0.632812 34.5312 0.632812 34.2969C0.632812 34.0469 0.648438 33.8203 0.679688 33.6172C0.726562 33.3984 0.765625 33.1562 0.796875 32.8906C0.875 32.4375 0.914062 31.3047 0.914062 29.4922V0.335938L26.3906 20.5391V6.57031C26.3906 5.50781 26.3594 4.75 26.2969 4.29688C26.2188 3.5625 26.1797 3.04688 26.1797 2.75C26.1797 1.96875 26.5156 1.57812 27.1875 1.57812C27.4531 1.57812 27.7031 1.67188 27.9375 1.85938C28.1875 2.04688 28.3125 2.32031 28.3125 2.67969V3.5L28.2188 6.89844V36.2891L2.74219 16.2969V31.6484ZM57.1875 32.9844C57.9844 32.9844 58.3828 33.2969 58.3828 33.9219C58.3828 34.2031 58.2109 34.4531 57.8672 34.6719C57.5234 34.8906 56.9297 35 56.0859 35H36.2344V1.83594C42.3906 1.83594 48.5469 1.83594 54.7031 1.83594L56.625 1.76562C57.7969 1.76562 58.3828 2.10938 58.3828 2.79688C58.3828 3.0625 58.2812 3.3125 58.0781 3.54688C57.8906 3.76562 57.6719 3.875 57.4219 3.875C57.0156 3.875 56.5859 3.82812 56.1328 3.73438C55.4609 3.59375 54.5391 3.52344 53.3672 3.52344H48.1875V10.6719H52.4531C52.4531 10.6719 53.4141 10.6328 55.3359 10.5547C55.6797 10.5547 55.9688 10.6406 56.2031 10.8125C56.4531 10.9688 56.5781 11.1953 56.5781 11.4922C56.5781 12.1484 56.1406 12.4766 55.2656 12.4766L54.2578 12.4531C53.7422 12.4062 53.3125 12.3828 52.9688 12.3828H48.1875V33.2891H53.3672C54.5234 33.2891 55.3438 33.2422 55.8281 33.1484C56.4062 33.0391 56.8594 32.9844 57.1875 32.9844ZM63.1875 35.2578C62.5469 35.2578 62.2266 34.9531 62.2266 34.3438C62.2266 33.875 62.5703 33.3438 63.2578 32.75C63.8828 32.1719 64.3906 31.6094 64.7812 31.0625C64.7812 31.0625 66.9453 27.9062 71.2734 21.5938L61.7578 1.83594H74.1797L79.8047 13.5547L84.7031 6.52344C85.6094 5.17969 86.2812 3.92188 86.7188 2.75C87.0625 1.96875 87.5312 1.57812 88.125 1.57812C88.7188 1.57812 89.0156 1.91406 89.0156 2.58594C89.0156 2.96094 88.6094 3.75781 87.7969 4.97656L80.7656 15.5469L90.1406 35H77.7656L72.2578 23.6094L66.2578 32.2344C65.0703 33.8906 64.2344 34.8516 63.75 35.1172C63.5625 35.2109 63.375 35.2578 63.1875 35.2578ZM119.672 2.44531C119.672 3.16406 118.914 3.52344 117.398 3.52344H111.961V35H99.9609V3.52344H96.4453C95.2422 3.52344 94.4141 3.57812 93.9609 3.6875C93.3672 3.8125 92.9375 3.875 92.6719 3.875C91.875 3.875 91.4766 3.5625 91.4766 2.9375C91.4766 2.20313 92.25 1.83594 93.7969 1.83594H114.703C115.781 1.83594 116.578 1.78906 117.094 1.69531C117.719 1.58594 118.188 1.53125 118.5 1.53125C119.281 1.53125 119.672 1.83594 119.672 2.44531Z" fill="black" />
                        <path fill="#0C462E" d="M7.09766 44.4629L6.75732 44.4546C6.63558 44.4435 6.48063 44.438 6.29248 44.438H4.43311V52H0.199707V40.2544H6.79053L7.6123 40.2295H7.76172C8.17676 40.2295 8.38428 40.3512 8.38428 40.5947C8.38428 40.6888 8.34554 40.7773 8.26807 40.8604C8.19613 40.9378 8.11589 40.9766 8.02734 40.9766C7.88346 40.9766 7.74512 40.9627 7.6123 40.9351C7.35775 40.8797 7.02572 40.8521 6.61621 40.8521H4.43311V43.8403H6.10156C6.10156 43.8403 6.44466 43.8265 7.13086 43.7988C7.42969 43.7988 7.5791 43.9095 7.5791 44.1309C7.5791 44.3522 7.41862 44.4629 7.09766 44.4629ZM15.4067 47.9741L16.0874 48.0239C17.0614 48.0239 17.8887 47.6836 18.5693 47.0029C19.25 46.3223 19.5903 45.4756 19.5903 44.4629C19.5903 43.1348 19.0065 42.1497 17.8389 41.5078C17.1969 41.1536 16.5107 40.9489 15.7803 40.8936C15.4704 40.8659 15.1826 40.8521 14.917 40.8521H14.3525C14.2363 40.8521 14.134 40.8548 14.0454 40.8604V52H9.81201V40.2544C11.1069 40.2544 12.1556 40.2544 12.958 40.2544C13.7604 40.2544 14.2834 40.2572 14.5269 40.2627C14.7703 40.2682 14.9862 40.2765 15.1743 40.2876C15.368 40.2931 15.5479 40.3014 15.7139 40.3125C15.9574 40.3346 16.3005 40.3872 16.7432 40.4702C17.1914 40.5532 17.6341 40.7109 18.0713 40.9434C18.5085 41.1758 18.8848 41.4635 19.2002 41.8066C19.8809 42.5371 20.2212 43.4059 20.2212 44.4131C20.2212 45.4092 19.9058 46.2891 19.2749 47.0527C18.6274 47.833 17.7642 48.3366 16.6851 48.5635C17.1997 50.1572 17.8555 51.109 18.6523 51.4189C18.8958 51.513 19.1393 51.5601 19.3828 51.5601L20.0386 51.4023C20.2433 51.4023 20.3457 51.5075 20.3457 51.7178C20.3457 52.0111 20.0026 52.1577 19.3164 52.1577C18.8184 52.1577 18.3618 52.0194 17.9468 51.7427C17.2993 51.3553 16.7487 50.6027 16.2949 49.4849L16.0542 48.8955C16.0155 48.8014 15.9795 48.7433 15.9463 48.7212C15.9186 48.6991 15.866 48.688 15.7886 48.688C15.7166 48.688 15.653 48.6935 15.5977 48.7046L15.3984 48.7129C15.1771 48.7129 15.0249 48.6714 14.9419 48.5884C14.8644 48.5054 14.8257 48.4196 14.8257 48.3311C14.8257 48.0931 15.0194 47.9741 15.4067 47.9741ZM32.6309 40.603L32.5811 41.6323V46.5962C32.5811 48.2342 32.1107 49.5651 31.1699 50.5889C30.207 51.6348 28.9287 52.1577 27.335 52.1577C25.6305 52.1577 24.3024 51.6237 23.3506 50.5557C22.4652 49.5762 22.0225 48.32 22.0225 46.7871V40.2544H26.2642V51.4521C26.6903 51.513 27.1579 51.5435 27.667 51.5435C28.1816 51.5435 28.7018 51.4411 29.2275 51.2363C29.7588 51.0316 30.2236 50.7106 30.6221 50.2734C31.4854 49.3327 31.9225 47.9575 31.9336 46.1479V41.6489C31.9336 41.4829 31.9198 41.2865 31.8921 41.0596C31.87 40.8327 31.8589 40.6777 31.8589 40.5947C31.8589 40.307 31.9945 40.1631 32.2656 40.1631C32.5091 40.1631 32.6309 40.3097 32.6309 40.603ZM43.8369 40.4702C43.8369 40.7248 43.5685 40.8521 43.0317 40.8521H41.106V52H36.856V40.8521H35.6108C35.1847 40.8521 34.8914 40.8714 34.731 40.9102C34.5207 40.9544 34.3685 40.9766 34.2744 40.9766C33.9922 40.9766 33.8511 40.8659 33.8511 40.6445C33.8511 40.3844 34.125 40.2544 34.6729 40.2544H42.0771C42.459 40.2544 42.7412 40.2378 42.9238 40.2046C43.1452 40.1659 43.3112 40.1465 43.4219 40.1465C43.6986 40.1465 43.8369 40.2544 43.8369 40.4702ZM47.6802 50.5225C46.6675 50.5225 45.9757 50.5142 45.605 50.4976L45.3643 51.0703C45.2923 51.2308 45.2259 51.3996 45.165 51.5767C45.0378 51.9198 44.8607 52.0913 44.6338 52.0913C44.5286 52.0913 44.4429 52.0581 44.3765 51.9917C44.3101 51.9253 44.2769 51.8561 44.2769 51.7842C44.2769 51.6624 44.3294 51.5269 44.4346 51.3774C44.6006 51.145 44.7638 50.8407 44.9243 50.4644C44.4484 50.4201 44.2104 50.2817 44.2104 50.0493C44.2104 49.8169 44.346 49.7007 44.6172 49.7007C44.7832 49.7007 44.9769 49.7284 45.1982 49.7837L49.3403 39.7231L55.0181 52H50.6934L50.0044 50.5225H47.6802ZM45.8706 49.8501C46.4019 49.8944 46.8778 49.9165 47.2983 49.9165H49.7305L47.6553 45.4424L45.8706 49.8501ZM56.8608 51.4023C56.6672 51.2917 56.4984 51.1755 56.3545 51.0537C56.2161 50.932 56.147 50.8019 56.147 50.6636C56.147 50.3979 56.2604 50.2651 56.4873 50.2651C56.6367 50.2651 56.8027 50.3481 56.9854 50.5142C57.168 50.6802 57.3727 50.8268 57.5996 50.9541C57.8265 51.0758 58.0728 51.181 58.3384 51.2695C58.8862 51.4521 59.3926 51.5435 59.8574 51.5435C60.3223 51.5435 60.6792 51.513 60.9282 51.4521C61.1828 51.3913 61.3958 51.3083 61.5674 51.2031C61.9326 50.9762 62.1152 50.6857 62.1152 50.3315C62.1152 50.005 61.9575 49.6758 61.6421 49.3438C61.3765 49.0615 61.0002 48.724 60.5132 48.3311L59.0938 47.2188C57.6715 46.123 56.8332 45.1214 56.5786 44.2139C56.4901 43.8984 56.4458 43.547 56.4458 43.1597C56.4458 42.7723 56.5316 42.3905 56.7031 42.0142C56.8802 41.6379 57.1403 41.3086 57.4834 41.0264C58.2194 40.4121 59.221 40.105 60.4883 40.105C61.1357 40.105 61.7168 40.2018 62.2314 40.3955C62.7461 40.5837 63.0975 40.7524 63.2856 40.9019C63.4738 41.0513 63.5679 41.1868 63.5679 41.3086C63.5679 41.5632 63.4627 41.6904 63.2524 41.6904C63.1307 41.6904 63.0007 41.6296 62.8623 41.5078C62.724 41.3861 62.569 41.2809 62.3975 41.1924C62.2314 41.0983 62.0405 41.0153 61.8247 40.9434C61.3599 40.7884 60.9033 40.7109 60.4551 40.7109C59.6305 40.7109 59.2183 40.9821 59.2183 41.5244C59.2183 41.7513 59.293 41.9616 59.4424 42.1553C59.708 42.4928 60.2254 42.9771 60.9946 43.6079C61.7694 44.2332 62.3892 44.7811 62.854 45.2515C63.3244 45.7218 63.6813 46.1452 63.9248 46.5215C64.3122 47.1136 64.5059 47.7306 64.5059 48.3726C64.5059 49.009 64.3924 49.5513 64.1655 49.9995C63.9442 50.4422 63.6315 50.8241 63.2275 51.145C62.3753 51.8201 61.3184 52.1577 60.0566 52.1577C58.7949 52.1577 57.7297 51.9059 56.8608 51.4023Z" />
                      </svg>
                    </div>
                  </Link>

                </div>
                <div className='flex'>
                  <div className="hidden sm:ml-6 sm:flex  sm:space-x-10 ">
                    {
                      navBarItems.map((link) => (
                        <Link
                          key={link.title}
                          href="/"
                          className={classNames(isActive(link.title) ? 'border-green' : '', 'inline-flex items-center  border-b-2  px-1 text-sm font-medium text-gray-900')}
                        ><Disclosure.Button onClick={() => handelClick(link.title)} className='h-full inline-flex items-center'>
                            {firstLetterToUpperCase(link.title)}
                          </Disclosure.Button>
                        </Link>
                      ))
                    }
                    <SignInOut handelClick={handelClickSignInOut} />
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <button
                    type="button"
                    className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >

                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <div className="-mr-2 flex items-center sm:hidden ">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white hover:text-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light-green">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">

              <div className="space-y-1 pb-3 pt-2">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                {
                  navBarItems.map((link) => (
                    <Link
                      key={link.title}
                      href="/"
                      className={classNames(isActive(link.title) ? ' border-l-4 border-green bg-light-green' : '', 'block  py-2 pl-3 pr-4 text-base font-medium text-green')}

                    ><Disclosure.Button onClick={() => handelClick(link.title)} className='h-full inline-flex items-center'>
                        {firstLetterToUpperCase(link.title)}
                      </Disclosure.Button>
                    </Link>
                  ))
                }

              </div>
              <div className="border-t border-gray-200 pb-3 pt-4 ">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">Tom Cook</div>
                    <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                  </div>
                  <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Settings
                  </Disclosure.Button>

                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </SessionProviderWrapper>

  )
}