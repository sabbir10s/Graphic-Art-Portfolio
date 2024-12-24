export const Button = (props) => {
  const { link, title, type } = props;
  return (
    <a
      href={link}
      className={`btn_effect inline-block py-[10px] w-32 text-center tracking-wider rounded ${
        type === "fill"
          ? "bg-primary text-white border border-primary hover:bg-primary/90 duration-300"
          : "bg-accent text-light border border-primary"
      }`}
    >
      {title}
    </a>
  );
};

export default Button;
