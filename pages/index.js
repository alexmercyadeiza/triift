import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import Analytics from "../components/Analytics";
import FooterTwo from '../components/FooterTwo';
 

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const saveEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer keyozp0vbec017Aqb");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "brw=brwjBR3cILxJgdyvM");

    var raw = JSON.stringify({
      fields: {
        "Email Address": email,
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const res = await fetch(
      "https://api.airtable.com/v0/appcJI04B7pdrBZpS/Projects",
      requestOptions
    );

    const data = await res.json();

    if (data) setLoading(false);

    setEmail("");

    if (data.id.length > 0) setSuccess(true);

    toast.success("Thank you for joining our waitlist.");
  };

  const submitEmail = (e) => {
    e.preventDefault();
    saveEmail();
  };

  // Feedback data
  const feedbackData = [
    {
      id: 1,
    content:
      "I took a loan to buy an oven and bulk materials for my fish roll business...",
    author: "Oluwanifemi Samuel (Nifty cakes)",
    image: (
      <div>
        <a href="https://ibb.co/N1dWSLp"><img src="https://i.ibb.co/WD4BtcF/Image1.jpg" /></a>
      </div>
    ),
  },
    {
      id: 2,
      content:
        "I had an idea in my mind about the business I wanted to start but I wasn't sure how to go about it and I definitely didn't just want to start without the right knowledge necessary to scale the business. Working with Triift Africa, I have been able to draft out a business model canvas, set up strong structures that can help me to support the business and run it. I know what to do, how to do it and why I'm doing it.",
      author: "Kene Ochi",
      image: "https://ik.imagekit.io/et8vxrzxxdj/triift/bakery-owner_8pY64BP7f.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660409502545",
    },
    {
      id: 3,
      content:
        "When I was in 300 Level in school, I got funding from Triift Africa to get a camera. My photography gig was helping to cover my tuition, living expenses and support my parents and siblings back home. And because I had to borrow or rent a camera sometimes made me miss some gigs. The finance from Triift Africa really changed my story as it impacted my growth and career.",
      author: "Elijah Adesina",
      image: "https://ibb.co/N1dWSLp",
    }
  ];


  

  return (
    <div>
      <Analytics />
      <Head>
        <title>Triift Africa.</title>
        <meta name="description" content="Grow your business with Triift." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-black">
        <Header />

        <div className="">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-10 self-center p-6 md:p-0 md:px-20">
              {/* <!-- <div className="text-8xl font-medium leading-[90px] tracking-tight">Grow your business <br />with triift.</div> --> */}
              <div className="text-5xl font-semibold tracking-tight md:text-[80px] md:leading-[85px]">
                Money for <br />
                Your Business.
              </div>

              {/* {JSON.stringify(email)} */}

              <div className="text-sm leading-6">
                Starting out or growing a business? With or without a
                smartphone? Save, join our community, access funding or business
                support and training you need to move forward faster.
              </div>

              <button
                onClick={() => router.push("https://banking.triift.africa")}
                className="cursor-pointer border-none bg-purple-one hover:bg-purple-two text-white btn px-6 capitalize"
              >
                Sign up now
              </button>
              {/* <div className="flex space-x-2 md:space-x-5 rounded-md overflow-hidden">
                {!success ? (
                  <form
                    onSubmit={saveEmail}
                    className="flex items-center border-gray-300 rounded-md border"
                  >
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-l-md border-none px-4 text-lg focus:border-0 focus:bg-white focus:ring-0"
                      placeholder="Email address"
                      required
                    />

                    <button
                      type="submit"
                      className={`${
                        loading && `loading`
                      } bg-purple-one hover:bg-purple-two btn rounded-l-none rounded-r-md border-none font-medium lowercase`}
                    >
                      <span className="uppercase">J</span>oin the waitlist
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() =>
                        router.push("http://www.bit.ly/TriiftCapital")
                      }
                      className="bg-purple-one text-white border-none hover:bg-purple-two btn px-6 font-medium capitalize"
                    >
                      Apply for capital
                    </button>

                    <button
                      onClick={() =>
                        router.push(
                          "https://paystack.com/pay/consulttriiftafrica"
                        )
                      }
                      className="btn-outline border-purple-one text-purple-one hover:bg-purple-one hover:text-white btn px-6 font-medium capitalize"
                    >
                      Book a session
                    </button>
                  </div>
                )}
              </div> */}
            </div>

            <div
              className="h-60 w-full place-self-center bg-center bg-black bg-cover p-10 md:h-[31rem] md:rounded-l-3xl md:bg-center"
              style={{
                backgroundImage: `url('https://ik.imagekit.io/et8vxrzxxdj/triift/bakery-owner_8pY64BP7f.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660409502545')`,
              }}
            ></div>
          </div>
        </div>

        {/* New Section */}
        <div className="md:px-20 p-6 md:mt-40 mt-6 space-y-8">
          <div className="md:text-5xl md:w-1/2 tracking-tight text-2xl font-semibold">
            How we help growing business owners.
          </div>
          <div className="md:w-1/2">
            We think of ourselves as long term growth partners for underserved
            businesses , and we&rsquo;re proud to keep helping business owners
            stay focused on what matters most - their business. Here&rsquo;s how
          </div>

          {/* Sub Sections */}
          <div className="grid md:grid-cols-3 gap-16">
            {/* <div className="space-y-6">
              <div
                className="h-96 rounded-xl bg-center bg-cover"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/7983134/pexels-photo-7983134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                }}
              ></div>
              <div className="text-xl font-semibold">Capital</div>
              <div>
                Need cash to stock up shop, finance an invoice, upgrade your
                equipments, open a new store, hire more hands, or expand your
                business? Focus on growing your business with capital that keeps
                you running smoothly.
              </div>

              <div
                onClick={() => router.push("http://www.bit.ly/TriiftCapital")}
                className="text-purple-one hover:text-purple-two cursor-pointer flex items-center space-x-3"
              >
                <div className="capitalize">Apply for capital</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div> */}

            <div className="space-y-6">
              <div
                className="h-96 rounded-xl bg-center bg-cover"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/7983134/pexels-photo-7983134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                }}
              ></div>
              <div className="text-xl font-semibold">Save</div>
              <div>
                Put money aside however and whenever you like even without a
                smartphone or bank account. Made for micro and growing business
                owners looking for a community to save with. Save from your bank
                or with our ussd code, airtime, web or mobile app or our agent
                network.
              </div>

              <div
                onClick={() => router.push("https://banking.triift.africa")}
                className="text-purple-one hover:text-purple-two cursor-pointer flex items-center space-x-3"
              >
                <div className="capitalize">Save Now</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>

            {/* <div className="space-y-6">
              <div
                className="h-96 rounded-xl bg-center bg-cover"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80')`,
                }}
              ></div>
              <div className="text-xl font-semibold">Growth Advisory</div>
              <div>
                One size never fits all with unique businesses like yours.
                Connect with our experts and get tailored, hands on advisory
                that unearths growth opportunities for your specific business
                context without the fluff.
              </div>

              <div
                onClick={() =>
                  router.push("https://paystack.com/pay/consulttriiftafrica")
                }
                className="text-purple-one hover:text-purple-two cursor-pointer flex items-center space-x-3"
              >
                <div className="capitalize">Schedule a Session</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div> */}

            <div className="space-y-6">
              <div
                className="h-96 rounded-xl bg-center bg-cover"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80')`,
                }}
              ></div>
              <div className="text-xl font-semibold">Funding</div>
              <div>
                Need cash to stock up, finance an invoice, upgrade your
                equipment, open a new store, hire more hands, or expand your
                business? Get access to our grant partners or between 10,0000-1
                million naira from 5% interest with zero collateral for up to 6
                months. Focus on growing your business with capital that keeps
                you running smoothly.
              </div>

              <div
                onClick={() => router.push("https://banking.triift.africa")}
                className="text-purple-one hover:text-purple-two cursor-pointer flex items-center space-x-3"
              >
                <div className="capitalize">Apply for Capital</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>

            {/* <div className="space-y-6">
              <div
                className="h-96 rounded-xl bg-center bg-cover"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/3894378/pexels-photo-3894378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                }}
              ></div>
              <div className="text-xl font-semibold">Founder Community</div>
              <div>
                Grow together with a community of business owners designed to
                help you thrive. Build rich relationships, learn from shared
                growth experiences, and grow your business with expert tips from
                growing business founders like yourself.
              </div>

              <div
                onClick={() => router.push("http://t.me/triiftafrica")}
                className="text-purple-one hover:text-purple-two cursor-pointer flex items-center space-x-3"
              >
                <div className="capitalize">Join the Community</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div> */}

            <div className="space-y-6">
              <div
                className="h-96 rounded-xl bg-center bg-cover"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/3894378/pexels-photo-3894378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                }}
              ></div>
              <div className="text-xl font-semibold">Growth Advisory</div>
              <div>
                One size never fits all with unique businesses like yours.
                Connect with our experts and get tailored, hands on advisory
                that guides you to start, get funding or address specific
                business concerns without the fluff.
              </div>

              <div
                onClick={() =>
                  router.push("https://paystack.com/pay/consulttriiftafrica")
                }
                className="text-purple-one hover:text-purple-two cursor-pointer flex items-center space-x-3"
              >
                <div className="capitalize">Schedule a session</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>

            {/* 2nd Row */}

            {/* <div className="space-y-6">
              <div
                className="h-96 rounded-xl bg-center bg-cover"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/8962454/pexels-photo-8962454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                }}
              ></div>
              <div className="text-xl font-semibold">
                Resources and Templates
              </div>
              <div>
                All you need to begin, operate, and grow your business. From
                marketing to business finance, and more, Never be lost again
                with rich courses, resources and templates built to help you
                unleash next level business growth.
              </div>

              <div
                onClick={() => router.push("https://selar.co/m/TriiftAfrica")}
                className="text-purple-one hover:text-purple-two cursor-pointer flex items-center space-x-3"
              >
                <div className="capitalize">See Available Resources</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div> */}

            <div className="space-y-6">
              <div
                className="h-96 rounded-xl bg-center bg-cover"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/8962454/pexels-photo-8962454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                }}
              ></div>
              <div className="text-xl font-semibold">Business Registration</div>
              <div>
                Make it official with our seamless business registration process
                that only takes a few days.
              </div>

              <div
                onClick={() =>
                  router.push("https://forms.gle/ZxdEJ7BYq7fxBB2y9")
                }
                className="text-purple-one hover:text-purple-two cursor-pointer flex items-center space-x-3"
              >
                <div className="capitalize">Register your business</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>

            {/*  <div className="space-y-6">
              <div
                className="h-96 rounded-xl bg-center bg-cover"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1429216967620-ece20ff3a5f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80')`,
                }}
              ></div>
              <div className="text-xl font-semibold">
                Business Documentations
              </div>
              <div>
                Get business plans, pitch decks, market research, investment
                proposals, feasibility studies, financial models, company
                profile and other robust documents that helps you attract
                investment, make data-driven decisions, and positions you for
                growth.
              </div>

              <div
                onClick={() => router.push("https://bit.ly/RequestDocumentTA")}
                className="text-purple-one hover:text-purple-two cursor-pointer flex items-center space-x-3"
              >
                <div className="capitalize">Request a Document</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div> */}

            <div className="space-y-6">
              <div
                className="h-96 rounded-xl bg-center bg-cover"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1429216967620-ece20ff3a5f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80')`,
                }}
              ></div>
              <div className="text-xl font-semibold">Community</div>
              <div>
                Grow together with a community of business owners designed to
                help you thrive. Build rich relationships, learn from shared
                growth experiences, and grow your business with expert tips from
                growing business owners like yourself.
              </div>

              <div
                onClick={() =>
                  router.push(
                    "https://chat.whatsapp.com/HuJPzJYooPa6vaXgDqHw19"
                  )
                }
                className="text-purple-one hover:text-purple-two cursor-pointer flex items-center space-x-3"
              >
                <div className="capitalize">Join the community</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>

            {/* <div className="space-y-6">
              <div
                className="h-96 rounded-xl bg-center bg-cover"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1487724077104-5196c4e819fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80')`,
                }}
              ></div>
              <div className="text-xl font-semibold">Our Blog</div>
              <div>
                What you need to know about building a business from day one.
                Explore Fresh takes, explainers, deep dives, easily digestible
                business wisdom, and simple breakdowns you need to level up your
                growing business.
              </div>

              <div
                onClick={() => router.push("medium.com/triift-africa")}
                className="text-purple-one hover:text-purple-two cursor-pointer flex items-center space-x-3"
              >
                <div className="capitalize">Read Our Blog</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div> */}

            <div className="space-y-6">
              <div
                className="h-96 rounded-xl bg-center bg-cover"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1487724077104-5196c4e819fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80')`,
                }}
              ></div>
              <div className="text-xl font-semibold">Learn</div>
              <div>
                All you need to begin, operate, and grow your business. From
                marketing to business finance, and more, Never be lost again
                with our collection of rich courses, resources and templates
                built to help you unleash next level business growth.
              </div>

              <div
                onClick={() => router.push("https://selar.co/m/TriiftAfrica")}
                className="text-purple-one hover:text-purple-two cursor-pointer flex items-center space-x-3"
              >
                <div className="capitalize">See available resources</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* next session */}
        <div className="md:px-20 px-6 pt-20 pb-20 md:pb-20 md:mt-20 mt-6 bg-[#e3dcfc]  space-y-8 grid place-items-center">
          <div className=" md:grid text-3xl text-center font-semibold text-black">
            Who are we Supporting?
          </div>

          <div className="text-center ">
            Businesses in every sector, online or offline whether you are :
          </div>

          <div
            className="grid  md:grid-cols-3 gap-32"
            style={{ marginTop: 60 }}
          >
            <div className="space-y-6">
              <div className="h-60 w-60 rounded-full bg-center /* bg-cover */">
                <a href="https://ibb.co/dghvR6z">
                  <img
                    src="https://i.ibb.co/9tM072C/triiif.jpg"
                    alt="triiif"
                    border="0"
                    style={{
                      width: "180px",
                      height: "180px",
                      borderRadius: "50%",
                    }}
                  />
                </a>
              </div>

              <div className="text-center text-xl font-semibold">START</div>
              <p className="text-center">Students and recent graduates</p>
            </div>

            <div className="space-y-6">
              <div className="h-60 w-60 rounded-full bg-center /* bg-cover */">
                <a href="https://ibb.co/wcRB9yd">
                  <img
                    src="https://i.ibb.co/Drtzx41/triff2.jpg"
                    alt="triff2"
                    border="0"
                    style={{
                      width: "180px",
                      height: "180px",
                      borderRadius: "50%",
                    }}
                  />
                </a>
              </div>
              <div className="text-center text-xl font-semibold">SABI</div>
              <p className="text-center">
                Informal and Unbanked micro <br />
                business owners{" "}
              </p>
            </div>

            <div className="space-y-6">
              <div className="h-60 w-60 rounded-full bg-center " /* bg-cover */>
                <a href="https://ibb.co/SnttdXL">
                  <img
                    src="https://i.ibb.co/Phcc9ZS/triiftt.jpg"
                    alt="triiftt"
                    border="0"
                    style={{
                      width: "180px",
                      height: "180px",
                      borderRadius: "50%",
                    }}
                  />
                </a>
              </div>

              <div className="text-xl font-semibold text-center">SAVVY</div>
              <p className="text-center">
                Business owners that are banked
                <br /> and have an online presence
              </p>
            </div>
          </div>
        </div>

        {/* table */}

        <div className="w-full max-w-4xl mx-auto my-10 py-10">
          <div className="my-4 md:text-3xl text-2xl text-center font-semibold text-black mb-6 pb-6">
            Subscribe to our Membership plans
          </div>
          <div className="mx-4">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="py-6 border px-4 text-xl">
                    Membership Benefits
                  </th>
                  <th className="py-6 border px-4  text-xl">Free</th>
                  <th className="py-6 border px-4 text-xl">
                    Paid (7500 per year)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 border px-4 text-center font-bold">
                    Contribution platform
                  </td>
                  <td className="py-4 border px-4 text-center">
                    <p className="text-3xl">✓</p>
                  </td>
                  <td className="py-4 border px-4 text-center">
                    <p className="text-3xl">✓</p>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 border px-4 text-center font-bold">
                    Free Loan Processing
                  </td>
                  <td className="py-4 border px-4 text-center">
                    <p className="text-3xl">x</p>
                  </td>
                  <td className="py-4 border px-4 text-center">
                    <p className="text-3xl">✓</p>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 border px-4 text-center font-bold">
                    Discount on resources
                  </td>
                  <td className="py-4 border px-4 text-center">
                    <p className="text-3xl">x</p>
                  </td>
                  <td className="py-4 border px-4 text-center">
                    <p className="text-3xl">✓</p>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 border px-4 text-center font-bold">
                    Exclusive event with founders
                    <br /> and top business experts
                  </td>
                  <td className="py-4 border px-4 text-center">
                    <p className="text-3xl">x</p>
                  </td>
                  <td className="py-4 border px-4 text-center">
                    <p className="text-3xl">✓</p>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 border px-4 text-center font-bold">
                    Perks and discount from <br />
                    Partners
                  </td>
                  <td className="py-4 border px-4 text-center font-bold">
                    Some
                  </td>
                  <td className="py-4 border px-4 text-center font-bold">
                    All
                  </td>
                </tr>
                <tr>
                  <td className="py-4 border px-4 text-center font-bold">
                    Community
                  </td>
                  <td className="py-4 border px-4 text-center font-bold">
                    Free Community
                  </td>
                  <td className="py-4 border px-4 text-center font-bold">
                    Exclusive community
                  </td>
                </tr>
                <tr>
                  <td className="py-4 border px-4 text-center font-bold ">
                    Join
                  </td>
                  <td className="py-4 border px-4 text-center">
                    {/* <a href="https://chat.whatsapp.com/HuJPzJYooPa6vaXgDqHw19" className="text-center text-blue-500">Join</a> */}
                    <button
                      onClick={() =>
                        router.push(
                          "https://chat.whatsapp.com/HuJPzJYooPa6vaXgDqHw19"
                        )
                      }
                      className="cursor-pointer border-none bg-purple-one hover:bg-purple-two text-white btn px-6 capitalize"
                    >
                      Join Now
                    </button>
                  </td>
                  <td className="py-4 border px-4 text-center ">
                    {/* <a href="https://paystack.com/pay/savvytriift" className="text-blue-700">Join</a> */}
                    <button
                      onClick={() =>
                        router.push("https://paystack.com/pay/savvytriift")
                      }
                      className="cursor-pointer border-none bg-purple-one hover:bg-purple-two text-white btn px-6 capitalize"
                    >
                      Join Now
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Feedback Section */}
        <section className="md:px-20 px-6  pt-10 pb-20 md:pb-36 md:mt-20 mt-6 space-y-8 grid place-items-center bg-[#e3dcfc]">
          <div className="my-4 md:text-3xl text-2xl text-center font-semibold text-black py-8">
            Feedback from our Community
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg mx-8">
              <div className="relative">
                <img
                  className="w-full h-auto rounded-lg"
                  src="https://i.ibb.co/CwJXm81/Image2.jpg"
                  alt="Image1"
                  style={{ height: 300, width: 400 }}
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 rounded-t-lg">
                  <p className="text-white text-center py-40 text-2xl ">
                    Nifty cakes
                  </p>
                </div>
              </div>
              <div className="p-4 text-black text-justify">
                I took a loan to buy an oven and bulk materials for my fish roll
                business. The funding made it easier for me to expand my
                business and match with the demand I was getting and I really
                liked the way the loan was structured in a way that truly
                supported my growth with a reasonable interest rate and flexible
                repayment terms.
              </div>
              <p className="text-purple-one font-bold text-center pb-4">
                Oluwanifemi Samuel (Nifty cakes)
              </p>
            </div>

            <div className="p-6 border border-gray-300 rounded-lg shadow-lg mx-8">
              <div className="relative">
                <img
                  className="w-full h-auto rounded-lg"
                  src="https://i.ibb.co/vhjjDcb/Image-222.jpg"
                  alt="Image1"
                  style={{ height: 300, width: 400 }}
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300">
                  <p className="text-white text-center py-40 text-2xl">
                    Kene Ochi
                  </p>
                </div>
              </div>
              <div className="p-4 text-black text-justify">
                I had an idea in my mind about the business I wanted to start,
                but I wasn&lsquo;t sure how to go about it, and I definitely
                didn&lsquo;t just want to start without the right knowledge
                necessary to scale the business. Working with Triift Africa, I
                have been able to draft out a business model canvas, set up
                strong structures that can help me to support the business and
                run it. I know what to do, how to do it, and why I&lsquo;m doing
                it.
              </div>
              <p className="text-purple-one font-bold text-center pb-4">
                Kene Ochi
              </p>
            </div>

            <div className="p-6 border border-gray-300 rounded-lg shadow-lg mx-8">
              <div className="relative">
                <img
                  className="w-full h-auto rounded-lg"
                  src="https://i.ibb.co/WD4BtcF/Image1.jpg"
                  alt="Image1"
                  style={{ height: 300, width: 400 }}
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 rounded-t-lg">
                  <p className="text-white text-center py-40 text-2xl ">
                    Elight Pictures
                  </p>
                </div>
              </div>
              <div className="p-4 text-black text-justify text-md `">
                When I was in 300 Level in school, I got funding from Triift
                Africa to get a camera. My photography gig was helping to cover
                my tuition, living expenses and support my parents and siblings
                back home. And because I had to borrow or rent a camera
                sometimes made me miss some gigs. The finance from Triift Africa
                really changed my story as it impacted my growth and career.
              </div>
              <p className="text-purple-one font-bold text-center pb-4">
                Elijah Adesina (Elight Pictures)
              </p>
            </div>
          </div>
        </section>

        {/* Our Partners  */}
        {/*   <div className="my-4 md:text-3xl text-2xl text-center font-semibold text-black mt-14 pt-14">
          Our Partners
        </div>
               
            <div className="flex justify-center items-center mt-4">
              <a href="https://imgbb.com/"><img src="https://i.ibb.co/ykM3Vt8/logo1.jpg" alt="logo1" border="0" width="300" /> </a>
              <a href="https://imgbb.com/"><img src="https://i.ibb.co/3SxB8qy/logo2.jpg" alt="logo2" border="0" width="300"/> </a>
              <a href="https://imgbb.com/"><img src="https://i.ibb.co/sRGDvcP/logo3.jpg" alt="logo3" border="0" width="300"/> </a>
            </div>  */}
      </div>

      {/* Newsletter Session */}
      <div className="md:px-20 px-6  pt-36 pb-20 md:pb-36 md:mt-20 mt-6 space-y-8 grid place-items-center">
        <div className="hidden md:grid text-3xl text-center font-semibold text-black">
          See how we are supporting passions, growing businesses, <br />
          and reimagining growth opportunities for MSMEs in Africa.
        </div>

        <div className="text-2xl md:hidden grid text-center text-black">
          See how we are supporting passions, growing businesses, and
          reimagining growth opportunities for MSMEs in Africa.
        </div>

        <div className="text-center">
          Small Business Tips, Expert Insights, Support Articles, Resources,
          L.FC Product Updates, and Case Studies delivered freshly to your
          inbox!
        </div>

        <div
          onClick={() => router.push("http://triiftafrica.eo.page/newsletter")}
          className="cursor-pointer border-none bg-purple-one hover:bg-purple-two text-white btn px-6 capitalize"
        >
          Subscribe to our Newsletter
        </div>
      </div>

      <FooterTwo />

      <div className="p-6 md:p-10">
        <Footer />
      </div>
    </div>
  );
}