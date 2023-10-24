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
              href=" https://banking.triift.africa"
              target="_blank"
              rel="noreferrer"
            >
              Save
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
              href="https://forms.gle/ZxdEJ7BYq7fxBB2y9"
              target="_blank"
              rel="noreferrer"
            >
              Register your Business
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="font-semibold">Learn</div>
        <div className="space-y-2 text-gray-600">
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
            <a href="https://chat.whatsapp.com/HuJPzJYooPa6vaXgDqHw19" target="_blank" rel="noreferrer">
             Free Founder Community
            </a>
          </div>
          <div>
            <a href="https://paystack.com/pay/savvytriift" target="_blank" rel="noreferrer">
              Exclusive Founder Community
            </a>
          </div>
          <div>
            <a
              href="https://medium.com/triift-africa/triift-africa-programs-9e1211802c86"/* "https://bit.ly/TAPrograms" */
              target="_blank"
              rel="noreferrer"
            >
              Trainings & Programs
            </a>
          </div>
          <div>
            <a
              href="https://blog.triift.africa/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="https://www.start.triift.africa"
              target="_blank"
              rel="noreferrer"
            >
             Start Bootcamp
            </a>
          </div>
         {/*  <div>
            <a
              href="http://triiftafrica.eo.page/newsletter"
              target="_blank"
              rel="noreferrer"
            >
             Newsletter
            </a>
          </div> */}
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
          {/* <div>
            <a
              href="https://bit.ly/TAPictures"
              target="_blank"
              rel="noreferrer"
            >
              Gallery
            </a>
          </div> */}

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
            <a href="https://privacy-policy">
              Privacy Policy
            </a>
          </div>

          <div>
            <a href="https://terms-of-use">
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
            
            +234 903 5333 965

          </div>
          <div>
          
            +234 810 9229 773

          </div>
          <div>
           
            +234 701 539 0192

          </div>
          <div className="flex pt-10" >
            <div className="mr-4"> <img src="https://i.ibb.co/Hd9fFgC/coming-soon-2google.jpg" alt="coming-soon-2google" border="0" width="150"/></div>
            <div> <img src="https://i.ibb.co/D1WvVN1/coming-soon-2apple.jpg" alt="coming-soon-2apple" border="0" width="150"/></div>
          </div>
         
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}
