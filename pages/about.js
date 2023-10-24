import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Analytics from '../components/Analytics';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, {useState} from 'react';

export default function About() {

  const router = useRouter();

  const [isFirstAccordionOpen, setIsFirstAccordionOpen] = useState(true);
  const toggleFirstAccordion = () => {
    setIsFirstAccordionOpen(prevState => !prevState);
  };
  



  return (
    <>
      <Analytics />

      <Head>
        <title>About Us &mdash; Triift Africa.</title>
        <meta name="description" content="Grow your business with Triift." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid h-screen text-black">
        <Header />
        {/* <div className="p-6 md:p-10">
        <div className="flex items-center justify-between">
          <img
            className="w-16 md:w-28"
            src="https://ik.imagekit.io/et8vxrzxxdj/triift/triift-logo_-LUiHuLkn.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660405535591"
            alt="Triift Africa."
          />

          <div className="btn btn-outline border-purple-one px-6 capitalize text-purple-one hover:border-purple-one hover:bg-purple-one md:hidden">
            Get capital
          </div>

          <div className="hidden items-center space-x-7 font-medium capitalize md:flex">
            <div className="btn btn-outline border-purple-one px-6 capitalize text-purple-one hover:border-purple-one hover:bg-purple-one">
              Get capital
            </div>
            <div className="border-b border-purple-one border-opacity-20 text-purple-one">
              about us
            </div>
            <div>blog</div>
            <div>resources</div>
          </div>
        </div>
      </div> */}

        <div className="grid gap-10 min-h-screen p-6 md:grid-cols-2 md:gap-20 md:p-20">
          {/* <div className="space-y-10 md:space-y-16">
            
            <div className="text-2xl font-medium leading-tight md:text-[38px]">
              We&rsquo;re reimagining opportunities, so underserved businesses in Africa 
              can reach their full potential, and go beyond.

            </div>

            <div
              className="h-52 rounded-t-xl  bg-top md:h-full"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1488905971602-47901d26961b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`, 
                marginTop: 60, backgroundRepeat: "no-repeat", height: '80vh'
              }}
            ></div>
          </div> */}

          <div className="space-y-10 md:space-y-16">
            <div className="text-2xl font-medium leading-tight md:text-[38px]">
              We&rsquo;re reimagining opportunities, so growing businesses in
              Africa can reach their full potential, and go beyond.
            </div>
            <div
              className="h-52 rounded-xl bg-cover bg-top md:h-screen"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1488905971602-47901d26961b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,
              }}
            ></div>
          </div>

          <div className="space-y-8 pb-8 self-center md:text-lg font-light mt-10">

            <div className="">
              We&rsquo;re here to serve Africa&rsquo;s growing businesses.
            </div>
            <div>
            Across every corner of Africa, businesses are springing up by the second, 
            doing what they know best; making the best of what they have and going against 
            the tide to succeed at any cost. They defy the odds to defend a dream, they&rsquo;ve 
            got grit and guts, they&rsquo;re doing things differently, inventing new paths, 
            breaking the old way, and standing tall amidst challenges that threaten their existence.

            </div>
            <div>
            We know these businesses, they are the wooden shed restaurants with finger licking local delicacies,
             they are the fashion designers going long hours to make sure sunday&rsquo;s best is truly the best, 
             they are the delivery companies weaving through traffic to get you your orders, they are everywhere,
              and we see them. What do we know? Africa&rsquo;s Medium, and small businesses experience challenges 
              that go beyond conventional business and financial structures. This is why we built Triift Africa;
              to unlock growth by addressing these pockets of challenges, and smoothing the path to success for 
              MSMEs in Africa.
            </div>
            <div className='mb-8 pb-8'>
             To reach full potential, Africa&rsquo;s businesses need products and services that match their grit 
             and determination, empower their unconventional style of thinking, and keep them moving in the
             direction of growth. So, we are building for every touch point they&rsquo;ll need along the way. 
             While they build Africa&rsquo;s resilient economic future, we&rsquo;ll be building everything these 
             businesses will need to launch confidently, grow effortlessly, and scale exponentially.

            </div>

            {/* Q N A  */}
            <div className="container mx-auto md:py-4 ">
              <div className="text-xl text-center font-semibold m-8 md:text-[24px]">FAQs</div>
                <div className="d mx-auto">
                <Accordion allowZeroExpanded>
                  <AccordionItem defaultExpanded={true}>
                    <AccordionItemHeading /* className="bg-[#e3dcfc] p-4" */  className={`bg-[#e3dcfc] rounded-t-xl p-4 ${isFirstAccordionOpen ? 'open' : ''} `}>
                      <AccordionItemButton className='font-semibold text-xl' onClick={toggleFirstAccordion}>
                        1. What are the benefits of using Triift Africa? 
                      </AccordionItemButton>
                    </AccordionItemHeading>
                      <AccordionItemPanel  className={`bg-white p-4 ${isFirstAccordionOpen ? 'block' : 'hidden'}`}>
                        <p className='px-10 py-2 text-justify'>
                          Access to low-interest loans tailored for every stage 
                          of your business.Flexible repayment plans to suit your 
                          cash flow and business needs.Dedicated customer support 
                          that puts you and your needs first Community network with 
                          fellow entrepreneurs for learning and collaboration Business
                          training and resources to help you start and grow your 
                          business with confidence. Regular updates on industry trends 
                          and opportunities Hassle-free saving options Register
                          your business with ease.
                        </p>
                      </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading className="rounded-t-xl bg-[#e3dcfc] p-4">
                      <AccordionItemButton className='font-semibold text-xl'>
                        2. How does Access Funding work?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                      <AccordionItemPanel className="bg-white p-4">
                        <p className='px-10 py-2 text-justify'>
                          We work with partners who believe in supporting business 
                          owners by making grants or no interest loans available 
                          through Triift Africa. Triift Africa also provides loans 
                          between 10,000-1,000,000 for up to 6 months with interest 
                          from 6% to businesses that have been operating for up to 
                          6 months with consistent cash flow. We have supported over 
                          1206 businesses and prioritise business owners who are 
                          committed to growing their business and can demonstrate
                          clear use of the funds
                        </p>
                      </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading className="rounded-t-xl bg-[#e3dcfc] p-4">
                      <AccordionItemButton className='font-semibold text-xl'>
                      3. How do I join the Business community?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                      <AccordionItemPanel className="bg-white p-4">
                        <p className='px-10 py-2 text-justify'>
                          In our community we promote peer to peer learning, share business tips
                          and opportunities, provide discounted and FREE perks to partners  to help
                          you grow. You can join our FREE community  
                          <a className='font-semibold pl-2 text-red-500 underline' href="https://chat.whatsapp.com/HuJPzJYooPa6vaXgDqHw19">HERE</a>, 
                          You can join our Exclusive community with access to more business support 
                          <a className='font-semibold pl-2 text-red-500 underline' href="https://paystack.com/pay/savvytriift">HERE.</a>
                        </p>
                      </AccordionItemPanel>
                  </AccordionItem>


                  <AccordionItem>
                    <AccordionItemHeading className=" rounded-t-xl bg-[#e3dcfc] p-4">
                      <AccordionItemButton className='font-semibold text-xl'>
                        4. Is Triift Africa a Bank?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                      <AccordionItemPanel className="bg-white p-4">
                        <p className='px-10 py-2 text-justify'> 
                          Not yet, but the registration, licenses and  partnership we have makes it possible
                          to offer business and financial support the way we currently do.
                        </p>
                      </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading className=" rounded-t-xl bg-[#e3dcfc] p-4">
                      <AccordionItemButton className='font-semibold text-xl'>
                      5. Are my Details Safe?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                      <AccordionItemPanel className="bg-white p-4">
                        <p className='px-10 py-2 text-justify'>
                          Triift Africa operates with the utmost care, due diligence and integrity 
                          that ensures that every money saved with us or data provided to us  is 
                          kept securely. We guarantee low possibility of fraud on our system by 
                          implementing stringent adherence protocols. These measures safeguard 
                          all data and details provided to us, aligning with Data Protection Laws 
                          and Payment Card Industry Data Security Standard (PCI DSS) guidelines.
                        </p>
                      </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
                </div>
            </div>

            
           
              <Footer />
            
            </div>

        </div>
      </div>
    </>
  );
};
