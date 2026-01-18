interface DifficultyFilterProps {
  selected: string[];
  onChange: (difficulties: string[]) => void;
}

const difficulties = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const DifficultyFilter = ({ selected, onChange }: DifficultyFilterProps) => {
  const toggleDifficulty = (difficulty: string) => {
    if (selected.includes(difficulty)) {
      onChange(selected.filter((d) => d !== difficulty));
    } else {
      onChange([...selected, difficulty]);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs sm:text-sm text-muted-foreground mr-1 sm:mr-2">Filter:</span>
      {difficulties.map((diff) => (
        <button
          key={diff.value}
          onClick={() => toggleDifficulty(diff.value)}
          className={`difficulty-badge difficulty-${diff.value} transition-all text-xs sm:text-sm ${
            selected.includes(diff.value)
              ? "ring-2 ring-offset-2 ring-offset-background ring-current"
              : "opacity-60 hover:opacity-100"
          }`}
        >
          {diff.label}
        </button>
      ))}
      {selected.length > 0 && (
        <button
          onClick={() => onChange([])}
          className="text-xs text-muted-foreground hover:text-foreground ml-1 sm:ml-2 underline"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default DifficultyFilter;
