import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { createClient } from "contentful";
import Companion from "../Companion";
import GA from "../Ga";
import PaymetPlans from "../PaymentPlans";
import Refunds from "../Refunds";
import Vip from "../Vip";
import VVip from "../VVip";
import styles from "./ticket.module.scss";
const client = createClient({
  space: process.env.NEXT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_APP_CONTENTFUL_API_TOKEN,
});
export async function generateStaticParams({ params }) {
  const res = await client.getEntries({
    content_type: "tickets",
    "fields.slug": params.slug,
  });
  const paths = res.items.map((item) => ({ slug: item.fields.slug, id: item.sys.id }));
  return paths;
}
export async function getTicketInfo(slug) {
  const res = await client.getEntries({ content_type: "tickets", "fields.slug": slug });

  if (!res) {
    return {};
  }
  return res.items?.[0] ?? {};
}

const tabs = {
  vip: <Vip />,
  wip: <VVip />,
  refunds: <Refunds />,
  ga: <GA />,
  "payment-plans": <PaymetPlans />,
  companion: <Companion />,
};
const options = {
  renderNode: {
    [BLOCKS.LIST_ITEM]: (node, children) => {
      const transformedChildren = documentToReactComponents(node, {
        renderMark: options.renderMark,
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [BLOCKS.LIST_ITEM]: (node, children) => children,
        },
      });
      return <li>{transformedChildren}</li>;
    },
  },
};
export default async function Tab({ params }) {
  const ticket_info = await getTicketInfo(params.slug);
  const { heading, ticket_Info } = ticket_info?.fields || {};

  return (
    <div className="flex flex-col text-black xl:text-xl ">
      <h5 className="text-3xl uppercase text-pink font-bold  mb-5 text-center">{heading}</h5>
      <div className={styles.ticket_info}>{documentToReactComponents(ticket_Info, options)}</div>
    </div>
  );
}
