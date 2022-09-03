import { useRouter } from "next/router";

export default function FooterTwo() {
  const router = useRouter();

  return (
    <div className="md:px-20 p-6 md:mt-20 mt-6 grid md:grid-cols-4 gap-12 md:gap-0">
      <div className="space-y-4">
        <div className="font-semibold">Triift Africa.</div>
        <div className="space-y-2 text-gray-600">
          <div>
            <a
              href="http://www.bit.ly/TriiftCapital"
              target="_blank"
              rel="noreferrer"
            >
              Apply For Capital
            </a>
          </div>
          <div>
            <a
              href="https://paystack.com/pay/consulttriiftafrica"
              target="_blank"
              rel="noreferrer"
            >
              Growth Advisory
            </a>
          </div>
          <div>
            <a
              href="https://bit.ly/RequestDocumentTA"
              target="_blank"
              rel="noreferrer"
            >
              Business Documentation
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="font-semibold">Learn</div>
        <div className="space-y-2 text-gray-600">
          <div>
            <a href="http://t.me/triiftafrica" target="_blank" rel="noreferrer">
              Founder Community
            </a>
          </div>
          <div>
            <a
              href="https://selar.co/m/TriiftAfrica"
              target="_blank"
              rel="noreferrer"
            >
              Resources and Templates
            </a>
          </div>
          <div>
            <a
              href="https://bit.ly/TAPrograms"
              target="_blank"
              rel="noreferrer"
            >
              Trainings & Programs
            </a>
          </div>
          <div>
            <a
              href="https://medium.com/triift-africa"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="font-semibold">About Us</div>
        <div className="space-y-2 text-gray-600">
          <div>
            <a
              href="https://www.triift.africa/about"
              target="_blank"
              rel="noreferrer"
            >
              Triift Africa
            </a>
          </div>
          <div>
            <a
              href="https://bit.ly/TAPictures"
              target="_blank"
              rel="noreferrer"
            >
              Gallery
            </a>
          </div>

          <div>
            <a
              href="https://bit.ly/WebNewsletterTA"
              target="_blank"
              rel="noreferrer"
            >
              Subscribe to Newsletter
            </a>
          </div>

          <div>
            <a href="privacy-policy">
              Privacy Policy
            </a>
          </div>

          <div>
            <a href="terms-of-use">
              Terms of Use
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="font-semibold">Connect With Us</div>
        <div className="space-y-2 text-gray-600">
          <div>
            <a
              href="mailto:hello@triift.africa"
              target="_blank"
              rel="noreferrer"
            >
              Hello@triift.africa
            </a>
          </div>
          <div>
            <a
              href="https://bit.ly/ContactUsTA"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
