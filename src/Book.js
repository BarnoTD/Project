export const Book = ({ book: { author, title, img }, number }) => {
  console.log(number + 1);
  return (
    <article className="book">
      <img alt={title} src={img} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">#{number + 1}</span>
    </article>
  );
};
