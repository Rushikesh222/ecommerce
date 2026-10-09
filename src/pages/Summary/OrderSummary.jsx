export const OrderSummary = () => {
  return (
    <div className="mt-16 flex w-full flex-col items-center justify-center px-4 text-center md:mt-24">
      <i className="fa-regular fa-circle-check mb-6 text-5xl text-[#24e916] md:text-6xl"></i>
      <h2 className="mb-6 text-2xl font-semibold md:text-4xl">
        Order Confirmed! Thanks for your order!
      </h2>
      <small className="mb-6 max-w-xl text-base md:text-xl">
        The order confirmation has been sent to the respective company.
      </small>
    </div>
  );
};
