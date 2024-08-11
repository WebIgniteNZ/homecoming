const { default: LinksPart } = require("./Header/LinksPart");

export default function MobileLinks({ onClick }) {
  return (
    <ul
      className={`font-bold hover:*:text-pink   flex flex-col  uppercase w-full  justify-between px-8  border-pink max-h-[600px] mb-auto`}>
      <LinksPart
        className={`py-[clamp(8px,5%,16px)] xl:py-[clamp(16px,11%,16px)] border-b last:border-none  border-white/30 text-xl leading-10 `}
        onClick={onClick}
      />
    </ul>
  );
}
