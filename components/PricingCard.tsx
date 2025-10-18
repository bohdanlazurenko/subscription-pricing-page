import { CheckIcon } from '@/components/ui/CheckIcon'

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

export function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`
        relative rounded-2xl p-8
        ${
          highlighted
            ? 'bg-white shadow-xl ring-2 ring-indigo-600 ring-offset-2'
            : 'bg-white/60 backdrop-blur-sm border border-gray-200'
        }
      `}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold text-white">
            Most popular
          </span>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
        <p className="mt-4 text-sm text-gray-600">{description}</p>
        <p className="mt-6 flex items-baseline justify-center gap-x-1">
          <span className="text-5xl font-bold tracking-tight text-gray-900">
            {price}
          </span>
          <span className="text-sm font-semibold leading-6 text-gray-600">
            /month
          </span>
        </p>
      </div>
      
      <ul
        role="list"
        className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
      >
        {features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>
      
      <button
        className={`
          mt-8 block w-full rounded-lg px-3 py-3 text-center text-sm font-semibold leading-6
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
          transition-colors
          ${
            highlighted
              ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
              : 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
          }
        `}
      >
        Get started
      </button>
    </div>
  )
}