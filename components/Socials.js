import { FbIcon, InstIcon, TiktokIcon, TwitterIcon } from "./UI/icons";
const socials = [
  { id: "insta", icon: InstIcon, link: "https://www.instagram.com/juicyfest.co/" },
  { id: "fb", icon: FbIcon, link: "https://www.facebook.com/juicyfest.co/" },
  { id: "twitter", icon: TwitterIcon, link: "https://twitter.com/juicyfestco" },
  { id: "tiktok", icon: TiktokIcon, link: "https://www.tiktok.com/@juicyfest.co" },
];
export default function Socials() {
  return (
    <div className="flex gap-7 ">
      {socials.map((link) => (
        <a
          href={link.link}
          key={link.id}
          className="w-6 h-6 inline-flex justify-center items-center grayscale hover:grayscale-0 text-white hover:text-pink transition-all hover:odd:rotate-12 hover:even:-rotate-12">
          <link.icon />
        </a>
      ))}
    </div>
  );
}
