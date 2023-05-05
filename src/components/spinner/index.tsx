const Spinner = ({ extraClass }: { extraClass?: string }) => {
  return (
    <span
      className={`animate-spin border-8 border-b-transparent rounded-full w-12 h-12 border-gray-800 dark:border-slate-400 dark:border-b-transparent ${extraClass}`}
    />
  );
};

export default Spinner;
