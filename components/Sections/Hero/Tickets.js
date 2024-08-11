import { StarIcon } from "../../UI/icons";
import styles from "./Tickets.module.scss";
const tickets = [
  {
    id: "ga",
    title: "GENERAL ADMISSION",
    price: 99,
    inclusives: [
      <p key="1">
        Entry into <b>HOME COMING</b>, via the <b>&apos;GA&apos; </b>Entry Lanes.
      </p>,
      <p key="2">
        Admission to the <b>&apos;GA&apos;</b> (General Admission) area of <b>HOME COMING</b> 2025.
      </p>,
      <p key="3">Access to food and merchandise vendors.</p>,
      <p key="4">
        Access to <b>&apos;GA&apos;</b> bars.
      </p>,
      <p key="5">
        Access to <b>&apos;GA&apos;</b> Toilets.
      </p>,
      <p key="6">Access to water refill stations.</p>,
    ],
    link: process.env.NEXT_PUBLIC_LINK,
  },
  {
    id: "vip",
    title: "VIP",
    price: 350,
    inclusives: [
      <p key="1">
        Front of stage viewing from our limited <b>&apos;VIP&apos;</b> Section.
      </p>,
      <p key="2">
        Entry into <b> HOME COMING</b> 2025, via your own dedicated <b>&apos;VIP&apos;</b> Entry
        Lanes.
      </p>,
      <p key="3">
        Access to the <b>&apos;VIP&apos;</b> area&apos;s dedicated bar, food vendors and toilets.
      </p>,
      <p key="4">Access to water refill stations.</p>,
      <p key="5">
        Flexibility - with a <b>&apos;VIP&apos;</b> ticket you&apos;ll also have access to the{" "}
        <b>&apos;GA&apos;</b> area, which means you can move between the two areas as you wish.
      </p>,
      <p key="6">Access to merchandise vendors.</p>,
    ],
    link: process.env.NEXT_PUBLIC_LINK,
  },
  {
    id: "vvip",
    title: "VVIP (R18 EXCLUSIVE) ",
    price: 999,
    inclusives: [
      <p key="1">
        Priority entry into <b>HOME COMING</b> 2025, via your own dedicated Entry Lanes.
      </p>,
      <p key="2">
        Full access to HOME COMING <b>&apos;VVIP&apos;</b> Section.
      </p>,
      <p key="3">
        Unobstructed views of the main stage from our <b>&apos;VVIP&apos;</b> area, which also
        features a dedicated viewing platform.
      </p>,
      <p key="4">
        <b>&apos;VVIP&apos;</b> seating and shaded areas. Luxury toilets. A private{" "}
        <b>&apos;VVIP&apos;</b> only bar. Complimentary catering. Unlimited complimentary standard
        alcoholic beverages (*alcohol rules apply) Unlimited complimentary soft drinks.
      </p>,
      <p key="6">Access to complimentary water and water refill stations.</p>,
      <p key="5">
        Flexibility - with a <b>&apos;VVIP&apos;</b> ticket you have full admission to HOME COMING
        2025&apos;s festival grounds to move between <b>&apos;VVIP&apos;</b>, <b>&apos;VIP&apos;</b>{" "}
        and <b>&apos;GA&apos;</b> as you wish
      </p>,
    ],
    link: process.env.NEXT_PUBLIC_LINK,
  },
  {
    id: "under",
    title: "UNDER 14",
    price: 79,
    inclusives: [
      <p key="1">
        Access to the <b>&apos;VIP&apos;</b> & <b>&apos;GA&apos;</b> area&apos;s food vendors and
        toilets.
      </p>,
      <p key="2">Access to water refill stations.</p>,
      <p key="3">Access to merchandise vendors.</p>,
    ],
    link: process.env.NEXT_PUBLIC_LINK,
  },
];
export default function Tickets() {
  const targetDate = Date.UTC(2024, 7, 12, 7, 0, 0);
  const showBuyTickets = Date.now() >= targetDate;
  return (
    <div className={`${styles.wrapper} wrapper`}>
      <h3 className="text-2xl lg:text-40 xl:text-6xl">TICKET OPTIONS</h3>
      <div id="tickets" className={styles.ticketsWrapper}>
        <div className={styles.ticketsList}>
          {tickets.map((ticket) => (
            <div key={ticket.id} className={`${styles.ticket} ${styles?.[ticket.id]}`}>
              <h5>{ticket.title}</h5>
              <div className={styles.price}>${ticket.price}</div>
              <div className="px-5 xl:px-7 2xl:px-10 flex flex-col gap-5 lg:gap-12 flex-grow">
                <ul>
                  {ticket.inclusives.map((inc, i) => (
                    <li key={i}>
                      <StarIcon /> {inc}
                    </li>
                  ))}
                </ul>
                {showBuyTickets && <a href={ticket.link}>buy tickets</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[calc(100%-40px)] lg:w-full bg-pink pt-9 pb-8 px-5 rounded-[10px] text-white font-germania lg:text-xl text-center ">
        GROUP PACKAGE OPTIONS AVAILABLE BUY 6 TICKETS GET 1 FREE
      </div>
    </div>
  );
}
