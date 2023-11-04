import Navigation from "@/components/navigator";

const Contacts = () => {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-24  mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16  lg:pt-32">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-4 text-zinc-400 mb-5">
            What I Do Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris ipsum sit nibh amet egestas tellus.
          </p>
        </div>
        <div className="grid grid-cols-4  gap-4">
          <div className="backdrop-saturate-200 bg-white/30 aspect-square">fdfd</div>
          <div className="backdrop-saturate-200 bg-white/30 aspect-square">fdfd</div>
          <div className="backdrop-saturate-200 bg-white/30 aspect-square">fdfd</div>
          <div className="backdrop-saturate-200 bg-white/30 aspect-square">fdfd</div>

        </div>
      </div>
    </div>
  );
};
export default Contacts;
