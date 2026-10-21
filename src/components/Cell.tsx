export default function Cell({
  index,
  value,
  onSelect,
}: {
  index: number;
  value: string;
  onSelect: (index: number) => void;
}) {
  return (
    <div
      className="flex items-center justify-center aspect-square border border-gray-300 text-5xl cursor-pointer"
      onClick={() => onSelect(index)}
    >
      {value}
    </div>
  );
}
