// import section from '../../public/images/section_line.png'

type Props = {
  title: string;
  user?: boolean;
  category?: boolean;
};

export default function Headung({ title, user, category }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {user ? (
        <h1 className="text-4xl capitalize font-black">{title}</h1>
      ) : category ? (
        <h1 className="text-4xl capitalize font-black">
          Category {title}
        </h1>
      ) : (
        <h1 className="text-4xl uppercase font-black">{title}</h1>
      )}

      {/* <img src={section} alt="" /> */}
    </div>
  );
}