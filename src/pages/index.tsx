import React from 'react'
import tw from 'twin.macro'
import { Logo, Layout, Button, Link } from '../components'
import GroomsBride from '../images/groomsbride.png'
// import QRImage from '../images/qrocbc.png'
// import Paynow from './images/paynow.jpg'
// import Googlepay from '../images/googlepay.jpg'
import { Player } from '@lottiefiles/react-lottie-player'
import Butterfly from '../images/butterfly.json'
import Modal from '../components/Modal'
import Secondlogo from '../components/Secondlogo'
const App = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [showGiving, setShowGiving] = React.useState(false)
  return (
    <Layout css={tw`min-h-screen bg-gold-100 overflow-hidden relative`}>
      <div tw="absolute -top-16 -right-16 w-48 h-48 bg-cover transform rotate-180 bg-gingko z-10" />
      <div
        className="container"
        tw="mx-auto flex flex-col items-center relative"
      >
        <div tw="p-5 block mt-24">
          <Logo />
        </div>
        <div tw=" -mt-64 p-5 block">
          <Secondlogo />
        </div>
        <div
          tw="mx-auto w-full leading-loose font-sans p-1"
          style={{ maxWidth: 640 }}
        >
          <img src="/images/2-removebg.png" tw="w-full" />
        </div>

        <div tw="w-20 h-20 absolute ml-40 top-32">
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src={Butterfly}
            style={{ height: '100%', width: '100%' }}
          ></Player>
        </div>
      </div>
      <div tw="py-24 bg-white relative">
        <div tw="absolute left-0 right-0 h-10 bg-white" style={{ top: -40 }} />
        <div tw="absolute -top-36 -left-16 w-48 h-48 bg-cover transform bg-gingko" />
        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12">
            Wedding Schedule
          </div>

          <div tw="text-center">
            We're really happy that you're here! We promise you a great time and
            lots of fun
          </div>
          <div tw="grid grid-cols-2 gap-4 text-center font-poppin text-gold-900 py-20">
            <div tw="col-span-full sm:col-span-1 flex flex-col items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold">
              Welcome to Manu & Manu ki Shaadi!
            </div>
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin">
              <div tw="text-lg">TUESDAY</div>
              <div tw="font-bold">10.05.2022</div>
              <div tw="text-lg">HALDI CEREMONY</div>
              <div tw="text-lg mb-4">16.30 P.M.</div>

              <div tw="text-lg">TUESDAY</div>
              <div tw="font-bold">10.05.2022</div>
              <div tw="text-lg">SANGEET CEREMONY</div>
              <div tw="text-lg mb-4">20.00 P.M.</div>

              <div tw="col-span-full sm:col-span-1 flex flex-col items-center justify-center text-3xl tracking-widest sm:mb-0 mb-6 mt-8 font-bold px-6">
                Lots of Dhamaal, Masti and Dhoom Dhadaka to follow.
              </div>

              <div tw="text-lg">Wednesday</div>
              <div tw="font-bold">11.05.2022</div>
              <div tw="text-lg">WEDDING CEREMONY</div>
              <div tw="text-lg mb-4">From 19.00 P.M.</div>

              <div tw="px-12 mt-12">
                <div tw="flex mb-4">
                  <Link isPrimary={true} href="#">
                    Can't Wait?
                  </Link>
                </div>
                <div tw="flex">
                  <Link isSecondary={true} href="#">
                    We Can't Either!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div tw="py-24 bg-white bg-opacity-30 relative">
        <div tw="absolute -top-24 -right-16 w-48 h-48 bg-cover transform rotate-180 bg-gingko" />
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
        >
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-24 mt-12">
            Their Little Story
          </div>
          <div
            tw="mx-auto w-full leading-loose font-sans p-1"
            style={{ maxWidth: 640 }}
          >
            <img src="/images/manuMap-removebg.png" tw="w-full" />
          </div>
        </div>
      </div>

      <div tw="py-24 bg-gold-100 relative text-center font-sans">
        <a href="https://github.com/rho-hn" tw="font-semibold">
          Made with love by Rohan :)
        </a>
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </Layout>
  )
}

export default App
