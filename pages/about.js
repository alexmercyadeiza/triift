import Footer from "../components/Footer";
import Header from "../components/Header";
import Analytics from '../components/Analytics';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function About() {

  const router = useRouter();

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
          <div className="space-y-10 md:space-y-16">
            <div className="text-2xl font-medium leading-tight md:text-[38px]">
              We&rsquo;re reimagining opportunities, so growing businesses in
              Africa can reach their full potential, and go beyond.
            </div>
            <div
              className="h-52 rounded-t-xl bg-cover bg-top md:h-full"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1488905971602-47901d26961b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,
              }}
            ></div>
          </div>

          <div className="space-y-8 pb-10 self-center md:text-lg font-light">
            <div className="">
              We&rsquo;re here to serve Africa&rsquo;s growing businesses.
            </div>
            <div>
              Across every corner of Africa, businesses are springing up by the
              second, doing what they know best; making the best of what they
              have and going against the tide to succeed at any cost. They defy
              the odds to defend a dream, they&rsquo;ve got grit and guts,
              they&rsquo;re doing things differently, inventing new paths,
              breaking the old way, and standing tall amidst challenges that
              threaten their existence.
            </div>
            <div>
              We know these businesses, they are the wooden shed restaurants
              with finger licking local delicacies, they are the fashion
              designers going long hours to make sure sunday&rsquo;s best is
              truly the best, they are the delivery companies weaving through
              traffic to get you your orders, they are everywhere, and we see
              them. What do we know? Africa&rsquo;s Medium, and small businesses
              experience challenges that go beyond conventional business and
              financial structures. This is why we built Triift Africa; to
              unlock growth by addressing these pockets of challenges, and
              smoothening the path to success for MSMEs in Africa.
            </div>
            <div>
              To reach full potential, Africa&rsquo;s businesses need products
              and services that match their grit and determination, empower
              their unconventional style of thinking, and keep them moving in
              the direction of growth. So, we are building for every touch point
              they&rsquo;ll need along the way. While they build Africa&rsquo;s
              resilient economic future, we&rsquo;ll be building everything
              these businesses will need to launch confidently, grow
              effortlessly, and scale exponentially.
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
