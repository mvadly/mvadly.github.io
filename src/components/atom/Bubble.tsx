interface BubbleProps {
  children: React.ReactNode;
}

const Bubble = (props: BubbleProps) => {
  return (
    <div className="bg-slate-800 p-4 rounded-lg shadow-lg relative w-max">
      <p className="text-lg font-medium text-slate-100">{props.children}</p>
      <div className="absolute bg-slate-800 w-5 h-5 rotate-45 right-4 "></div>
    </div>
  );
};

export default Bubble;
