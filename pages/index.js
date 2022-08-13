import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Triift Africa.</title>
        <meta name="description" content="Grow your business with Triift." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen flex-col justify-between text-black">
        <Header />

        <div className="">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-10 p-6 md:p-0 md:px-20">
              {/* <!-- <div className="text-8xl font-medium leading-[90px] tracking-tight">Grow your business <br />with triift.</div> --> */}
              <div className="text-5xl font-semibold tracking-tight md:text-[80px] md:leading-[85px]">
                Grow your business <br />
                with triift.
              </div>

              <div className="text-sm leading-6">
                Starting out, or growing a business? Get access to Smart
                Capital, Advisory, <br />
                Business Templates, Tools, and Resources to Move your Business
                Forward, Faster.
              </div>
              <div className="flex space-x-2 md:space-x-5">
                <button className="bg-purple-one hover:bg-purple-two btn rounded-md border-none font-medium lowercase">
                  <span className="uppercase">J</span>oin the waitlist
                </button>
                <button
                  onClick={() => router.push("http://www.bit.ly/TriiftCapital")}
                  className="border-purple-one hover:bg-purple-one text-purple-one hover:border-purple-one btn btn-outline px-6 font-medium capitalize"
                >
                  Get capital
                </button>
              </div>
            </div>

            <div
              className="h-52 w-full place-self-center bg-black bg-cover p-10 md:h-full md:rounded-l-3xl md:bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1488905971602-47901d26961b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,
              }}
            ></div>
          </div>
        </div>

        <Footer p={10} />
      </div>
    </div>
  );
}
