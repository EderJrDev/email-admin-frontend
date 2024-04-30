interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <h2 className="my-3 font-semibold text-2xl text-blue-700 capitalize">
      {title}
    </h2>
  );
};

export default Title;
