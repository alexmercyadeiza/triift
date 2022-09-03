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
                Grow your business <br />
                with triift.
              </div>

              {/* {JSON.stringify(email)} */}

              <div className="text-sm leading-6">
                Starting out, or growing a business? Get access to Smart
                Capital, Advisory, Business Templates, Tools, and Resources to
                Move your Business Forward, Faster.
              </div>
              <div className="flex space-x-2 md:space-x-5 rounded-md overflow-hidden">
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
              </div>
            </div>

            <div
              className="h-60 w-full place-self-center bg-center bg-black bg-cover p-10 md:h-[31rem] md:rounded-l-3xl md:bg-center"
              style={{
                backgroundImage: `url('https://ik.imagekit.io/et8vxrzxxdj/triift/bakery-owner_8pY64BP7f.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660409502545')`,
              }}
            ></div>
          </div>
        </div>

        <div className="md:px-20 p-6 md:mt-40 mt-6 space-y-8">
          <div className="md:text-5xl md:w-1/2 tracking-tight text-2xl font-semibold">
            How we help growing business owners.
          </div>
          <div className="md:w-1/2">
            We think of ourselves as long term growth partners, and we&rsquo;re
            proud to keep helping business owners stay focused on what matters
            most; their business. Here&rsquo;s how
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
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
            </div>

            <div className="space-y-6">
              <div
                className="h-96 rounded-xl bg-center bg-cover"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80')`,
                }}
              ></div>
              {/* <div className="bg-gray-100 p-10">
            </div> */}
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
            </div>

            <div className="space-y-6">
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
            </div>

            <div className="space-y-6">
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
            </div>

            <div className="space-y-6">
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
            </div>

            <div className="space-y-6">
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
            </div>
          </div>
        </div>

        <div className="md:px-20 px-6 bg-[#D7CBFF] pt-14 pb-20 md:pb-14 md:mt-20 mt-6 space-y-8 grid place-items-center">
          <div className="hidden md:grid text-3xl text-center text-black">
            See how we are supporting passions, growing businesses, <br /> and
            reimagining growth opportunities for MSMEs in Africa.
          </div>

          <div className="text-2xl md:hidden grid text-center text-black">
            See how we are supporting passions, growing businesses, and
            reimagining growth opportunities for MSMEs in Africa.
          </div>

          <div className="text-center">
            Small Business Tips, Expert Insights, Support Articles, Resources,
            Product Updates, and Case Studies delivered freshly to your inbox!
          </div>

          <div
            onClick={() => router.push("https://bit.ly/WebNewsletterTA")}
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
    </div>
  );
}