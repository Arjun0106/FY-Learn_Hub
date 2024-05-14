import { cn } from '../../lib/classname.ts';

type CategoryFilterButtonProps = {
  category: string;
  selected: boolean;
  onClick: () => void;
};

export function CategoryFilterButton(props: CategoryFilterButtonProps) {
  const { category, selected, onClick } = props;

  return (
    <button
      className={cn(
        'border-b bg-gradient-to-l py-1.5 pr-3 text-center text-sm text-black hover:text-white sm:text-right',
        {
          'from-black font-semibold text-white':
            selected && category !== 'All Roadmaps',
          'font-semibold text-black':
            selected && category === 'All Roadmaps',
          'hover:from-black': category !== 'All Roadmaps',
        },
      )}
      type="button"
      onClick={onClick}
    >
      {category}
    </button>
  );
}
