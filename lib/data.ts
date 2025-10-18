export interface PricingPlan {
  id: string
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$9',
    description: 'Perfect for individuals and small projects',
    features: [
      '5 projects',
      '10GB storage',
      'Basic support',
      'API access',
      'Mobile app',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$29',
    description: 'Best for growing teams and businesses',
    features: [
      'Unlimited projects',
      '100GB storage',
      'Priority support',
      'Advanced API access',
      'Mobile app',
      'Team collaboration',
      'Advanced analytics',
    ],
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$99',
    description: 'For large organizations with advanced needs',
    features: [
      'Unlimited everything',
      'Unlimited storage',
      '24/7 dedicated support',
      'Custom API integrations',
      'Mobile app',
      'Advanced team features',
      'Custom analytics',
      'SLA guarantee',
      'Custom contracts',
    ],
  },
]