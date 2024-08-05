export default function PaymetPlans() {
  return (
    <div className="flex flex-col text-black xl:text-xl">
      <h5 className="text-3xl uppercase text-pink font-bold mb-5 text-center">Payment Plans</h5>
      <p className="mb-5">
        We want to make sure the Juicy Fest experience is available to everyone. We have short and
        long-term payment plan options to suit all budgets.
      </p>
      <p>
        <b>Instant purchase:</b>
      </p>
      <p className="mb-5 ">
        Pay your tickets upfront using your debit or credit card now and your job is done – you can
        sit back and relax until the Juicy Fest tour comes to a city near you.
      </p>
      <p>
        <b>Long-term easy finance:</b>
      </p>
      <p className="mb-5">
        This option gives you up to 10 weeks to pay off your selected passes to Juicy Fest 2025.
        When selecting this payment option, a $30 administration fee is added to secure your
        purchase. You&apos;ll need to keep up to date with your payment schedule to ensure it
        doesn&apos;t cancel out.
      </p>
      <p>
        <b>Afterpay:</b>
      </p>
      <p>
        Buy Now, Pay Later with afterpay. You can lock in your Juicy Fest tickets with one payment
        upfront and the remaining to be paid over four weeks. To find out more about AfterPay{" "}
        <a target="_blank" href="https://www.afterpay.com/en-NZ" className="text-pink underline">
          click here
        </a>
        .
      </p>
    </div>
  );
}
