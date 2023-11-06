import React from 'react'
import './Donation.css'
import NavBar from '../Components/NavBar'
import Banner from '../Components/banner'
import Footer from '../Components/Footer'
import { SiPaytm,SiGooglepay,SiAmazonpay,SiPhonepe } from 'react-icons/si';
export default function Donation() {
  return (
    <>
    <section className='DonationBanner'>
        <p className="DonationSubHeading">Donation...</p>
        <h1 className='DonationBannerHeading'>
            Making a Donation for Better Future
        </h1>
    </section>
    <section className='BankDetailsSection'>
        <div className="QRDetails">
                <h1 className="QrHeading">
                    Donate Here
                </h1>
                <img src="./assets/QrCode.png" alt="QRScanner" />
                <h1 className='Accept'>Accepted Payment Methods</h1>
                <div className='QRicons'>
                <SiPaytm className='QrIcon'/>
                <SiGooglepay className='QrIcon'/>
                <SiPhonepe className='QrIcon'/>
                <SiAmazonpay className='QrIcon'/>
                </div>
        </div>
        <div className="BankDetails">
            <h1 className="BankHeading">Bank Details</h1>
                <p>Bank Of Baroda</p>
                <p>City:<span>Nagpur</span></p>
                <p>Contact No:<span>+91 8010996763</span></p>
                <p>Account Name:<span>Suvidha Mahila Mandal</span></p>
                <p>Account Number:<span>97840100027609</span></p>
                <p>IFSC Code:<span>BARB0DBKPAR </span></p>
            <button className='COPY'>Copy Account Details</button>
        </div>
    </section>
    <Banner/>
    </>
  )
}
