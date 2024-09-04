import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      <p className="h2">Webolitics unlocks the potential of AI powered Apps</p>
    </div>
  );
};

export default Heading;
