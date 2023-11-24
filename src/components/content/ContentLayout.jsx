import CardProduct from "./card-product/CardProduct";
import { Steps } from "./steps-section/Steps";

export const ContentLayout = () => {
  return (
    <section className="grid gap-6 sm:gap-12 px-4 max-w-6xl">
      <div className="grid gap-6 text-center">
        <h1 className="text-3xl sm:text-4xl 2xl:text-5xl">Wait ! Your Order In Progress.</h1>
        <p className="text-base 2xl:text-2xl text-gray">
          Lorem ipsum dolor sit Amet, consectetur Adipiscing
        </p>
      </div>
      <Steps />
      <CardProduct/>
    </section>
  );
}