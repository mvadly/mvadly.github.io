interface ButtonProps {
  children: React.ReactNode;
  attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  color: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`bg-${props.color}-500 hover:bg-${props.color}-600 px-5 py-3 w-max rounded-md my-3 cursor-pointer`} onClick={props.onclick} type={props.type || "button"}>{props.children}</button>
  )
}

export default Button