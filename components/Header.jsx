import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <div className="p-6 md:p-10">
      <div className="flex items-center justify-between">
        <img
          onClick={() => router.push("/")}
          className="w-16 md:w-28 cursor-pointer"
          src="https://ik.imagekit.io/et8vxrzxxdj/triift/triift-logo_-LUiHuLkn.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660405535591"
          alt="Triift Africa."
        />

        <div className="border-purple-one hover:bg-purple-one text-purple-one hover:border-purple-one btn btn-outline px-6 capitalize md:hidden">
          Get capital
        </div>

        <div className="hidden items-center space-x-7 font-medium capitalize md:flex">
          <div
            onClick={() => router.push("http://www.bit.ly/TriiftCapital")}
            className="cursor-pointer border-purple-one hover:bg-purple-one text-purple-one hover:border-purple-one btn btn-outline px-6 capitalize"
          >
            Get capital
          </div>

          <a
            href="https://bit.ly/TriiftCalendar"
            className="hover:opacity-80 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            Book a session
          </a>

          <div
            onClick={() => router.push("/about")}
            className={
              router.pathname === "/about"
                ? `border-b border-purple-one border-opacity-20 text-purple-one`
                : `hover:opacity-80 cursor-pointer`
            }
          >
            about us
          </div>

          <a
            href="https://medium.com/triift-africa"
            className="hover:opacity-80 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            blog
          </a>
          <a
            href="https://selar.co/m/TriiftAfrica"
            className="hover:opacity-80 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            resources
          </a>
        </div>
      </div>
    </div>
  );
}
