interface Props {
  children: React.ReactNode;
}

const GridCard = ({ children }: Props) => {
  return (
    <section className="flex flex-wrap justify-center gap-4">
      {children}
    </section>
  );
};

export default GridCard;
