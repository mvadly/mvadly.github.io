interface BubbleProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

const Bubble = (props: BubbleProps) => {
  return (
    <div className={`bg-${props.bgColor || "slate"}-800 p-4 rounded-lg shadow-lg relative w-max`}>
      <p className={`text-lg font-medium text-${props.textColor || "white"}-100"`}>{props.children}</p>
      <div className={`absolute bg-${props.bgColor || "slate"}-800 w-5 h-5 rotate-45 right-4 `}></div>
    </div>
  );
};

export default Bubble;
