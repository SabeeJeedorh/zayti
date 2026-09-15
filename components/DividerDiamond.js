export default function DividerDiamond({ className = "", dark = false }) {
  const line = dark ? "bg-ivory/30" : "bg-bronze/40";
  const dot = dark ? "bg-bronze" : "bg-bronze";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`h-px w-10 ${line}`} />
      <span className={`w-1.5 h-1.5 rotate-45 ${dot}`} />
      <span className={`h-px w-10 ${line}`} />
    </div>
  );
}
