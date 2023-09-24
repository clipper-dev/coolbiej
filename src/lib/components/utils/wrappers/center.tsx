export function CenterX({ children, className }: Props) {
  return (
    <div className={"w-full flex justify-center " + className}>{children}</div>
  );
}
export function CenterY({ children, className }: Props) {
  return (
    <div className={"w-full flex items-center " + className}>{children}</div>
  );
}
