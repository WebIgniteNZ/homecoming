export const openBuyModal = () => {
  const event = new CustomEvent("showBuyModal");

  document.dispatchEvent(event);
};
