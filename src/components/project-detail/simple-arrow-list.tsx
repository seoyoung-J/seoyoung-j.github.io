export function SimpleArrowList({
  items,
  columns = false,
}: {
  items?: string[];
  columns?: boolean;
}) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ul
      className={
        columns
          ? "grid gap-2 text-sm leading-7 text-foreground sm:grid-cols-2"
          : "space-y-2 text-sm leading-7 text-foreground sm:text-base"
      }
    >
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-0.5 text-[#5F73C6] dark:text-[#8998D8]">
            -&gt;
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
