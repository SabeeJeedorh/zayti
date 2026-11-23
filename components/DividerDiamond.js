export default function DividerDiamond({ className = "", dark = false }) {
  const line = dark ? "bg-[#FBF6ED]/30" : "bg-[#C38738]/45"
  const dot = "bg-[#C38738]"
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`h-px w-10 ${line}`} />
      <span className={`w-1.5 h-1.5 rotate-45 ${dot}`} />
      <span className={`h-px w-10 ${line}`} />
    </div>
  );
}
