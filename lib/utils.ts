export const isServer = typeof window === 'undefined'

export const transformToPercentage = (float: string) => {
  const parsed = parseFloat(float)

  return Math.round(parsed * 100)
}
