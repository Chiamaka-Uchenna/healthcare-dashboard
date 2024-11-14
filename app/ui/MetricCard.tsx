

type MetricCardProps = {
  color: string;
  icon: React.ReactNode;
  value: number;
  label: string;
  level: string;
};

export default function MetricCard({
  color,
  icon,
  value,
  label,
  level,
}: MetricCardProps) {
  return (
    <div className={`p-4 rounded-lg text-start flex flex-col justify-start ${color}`}>
      <div className="text-3xl mb-2 rounded-full w-16 text-center p-4 bg-white">{icon}</div>
      <p className="manrope-medium">{label}</p>
      <div className="manrope-extrabold">{value}</div>
      <p className="body-regular">
        {level}
      </p>
    </div>
  );
}
