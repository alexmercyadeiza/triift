import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import Analytics from "../components/Analytics";

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

    toast.success('Thank you for joining our waitlist.')
    // console.log(data);
    // .then((response) => response.text())
    // .then((result) => console.log(result))
    // .catch((error) => console.log("error", error));
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

      <div className="flex h-screen flex-col justify-between text-black">
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
                        router.push("https://bit.ly/TriiftCalendar")
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
                backgroundImage: `url('https://images.unsplash.com/photo-1488905971602-47901d26961b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,
              }}
            ></div>
          </div>
        </div>

        <div className="p-6 md:p-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
