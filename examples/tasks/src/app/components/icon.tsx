import React from 'react'

type CreaeIconProps = {
  width?: string | number
  height?: string | number
  viewBox?: string
  d: string
}

const createIcon = ({
  width = '32px',
  height = '32px',
  viewBox = '0 0 32 32',
  d,
}: CreaeIconProps) => (props: JSX.IntrinsicElements['svg']) => (
  <svg
    {...props}
    width={width}
    height={height}
    viewBox={viewBox}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={d} fill="#fff" fillRule="nonzero" />
  </svg>
)

const icons = {
  'git-pull-request': createIcon({
    d:
      'M4.8,12.598372 C2.03963646,11.8879036 0,9.38214309 0,6.4 C0,2.8653776 2.8653776,0 6.4,0 C9.9346224,0 12.8,2.8653776 12.8,6.4 C12.8,9.38214309 10.7603635,11.8879036 8,12.598372 L8,30.4 C8,31.2836556 7.2836556,32 6.4,32 C5.5163444,32 4.8,31.2836556 4.8,30.4 L4.8,12.598372 Z M24,19.401628 L24,9.6 C24,8.7163444 23.2836556,8 22.4,8 L17.6,8 C16.7163444,8 16,7.2836556 16,6.4 C16,5.5163444 16.7163444,4.8 17.6,4.8 L22.4,4.8 C25.0509668,4.8 27.2,6.9490332 27.2,9.6 L27.2,19.401628 C29.9603635,20.1120964 32,22.6178569 32,25.6 C32,29.1346224 29.1346224,32 25.6,32 C22.0653776,32 19.2,29.1346224 19.2,25.6 C19.2,22.6178569 21.2396365,20.1120964 24,19.401628 Z M25.6,28.8 C27.3673112,28.8 28.8,27.3673112 28.8,25.6 C28.8,23.8326888 27.3673112,22.4 25.6,22.4 C23.8326888,22.4 22.4,23.8326888 22.4,25.6 C22.4,27.3673112 23.8326888,28.8 25.6,28.8 Z M6.4,9.6 C8.1673112,9.6 9.6,8.1673112 9.6,6.4 C9.6,4.6326888 8.1673112,3.2 6.4,3.2 C4.6326888,3.2 3.2,4.6326888 3.2,6.4 C3.2,8.1673112 4.6326888,9.6 6.4,9.6 Z',
  }),
}

type IconName = keyof typeof icons

type IconProps = { name: IconName } & JSX.IntrinsicElements['svg']

export const Icon = ({ name, ...rest }: IconProps) => {
  const IconComponent = icons[name]

  return <IconComponent {...rest} />
}
