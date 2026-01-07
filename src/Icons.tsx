type SkillCardProps = {
  name: string
  icon: string
}

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div
      className="
        cursor-pointer
        group
        flex  items-center justify-center
        p-1
        h-7
        rounded-lg
        sm:gap-2
        gap-1
        border border-gray-200
        border-dashed
        shadow-sm
        transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
        hover:border-gray-400
      "
    >
      {/* Icon */}
      <i
        className={`${icon} text-lg  transition-transform duration-300 group-hover:scale-110`}
        
      />

      {/* Label */}
      <span
        className="
           text-[10px] font-medium tracking-wide
          text-gray-400
          transition-all duration-300
         
        "
      >
        {name}
      </span>
    </div>
  )
}

