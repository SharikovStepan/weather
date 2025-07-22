function Button(props) {
  return (

      <button onClick={props.onClick} className={`w-fit px-5 py-1 rounded-md cursor-pointer card-bg hover:bg-scn dark:hover:bg-scn-dark transition-all text-2xl sm:text-xl md:text-2xl lg:text-3xl ${props.className}`}>
        {props.children}
      </button>

  );
}
export default Button;
