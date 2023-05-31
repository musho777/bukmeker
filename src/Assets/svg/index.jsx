import Svg, { Path,Rect } from "react-native-svg"

export const Eye = () =>{
    return <Svg
      width={22}
      height={19}
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10.844 6.25l2.906 2.897V9A2.75 2.75 0 0011 6.25h-.156zm-3.942.733l1.421 1.421A2.525 2.525 0 008.25 9 2.75 2.75 0 0011 11.75c.202 0 .403-.027.596-.073l1.42 1.42a4.543 4.543 0 01-2.016.486A4.584 4.584 0 016.417 9c0-.724.183-1.402.485-2.017zM1.833 1.914l2.09 2.09.413.413A10.847 10.847 0 00.916 9c1.586 4.024 5.5 6.875 10.084 6.875 1.42 0 2.777-.275 4.015-.77l.394.385 2.677 2.677 1.164-1.165L2.997.75M11 4.417A4.584 4.584 0 0115.583 9c0 .587-.119 1.155-.33 1.668l2.686 2.686A10.857 10.857 0 0021.083 9C19.498 4.976 15.583 2.125 11 2.125c-1.283 0-2.512.23-3.667.642l1.99 1.97A4.628 4.628 0 0111 4.417z"
        fill="#748189"
      />
    </Svg>
}

export const MobileIcone  = () =>{
  return <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width={30} height={30} rx={15} fill="#40A789" />
    <Rect
      x={10}
      y={8}
      width={10}
      height={14}
      rx={1}
      stroke="#fff"
      strokeWidth={2}
    />
    <Rect x={9.5} y={19.5} width={11} height={1} rx={0.5} stroke="#fff" />
    <Rect x={13.5} y={20.5} width={3} height={1} rx={0.5} stroke="#40A789" />
  </Svg>
}

export const Arrow = () =>{
  return <Svg
  width={16}
  height={16}
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <Path
    d="M15 7H3.83l4.88-4.88A1.008 1.008 0 008.387.483.996.996 0 007.3.7L.71 7.29a.996.996 0 000 1.41l6.59 6.59a.997.997 0 001.41-1.41L3.83 9H15c.55 0 1-.45 1-1s-.45-1-1-1z"
    fill="#748189"
  />
</Svg>
}

export const RegBlock = ({title}) =>{
  if(title){
    return <Svg
    width={34}
    height={34}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width={34} height={34} rx={17} fill="#40A789" />
    <Rect
      x={11}
      y={9}
      width={12}
      height={16}
      rx={1}
      stroke="#fff"
      strokeWidth={2}
    />
    <Rect x={10.5} y={22.5} width={13} height={1} rx={0.5} stroke="#fff" />
    <Rect x={15.5} y={23.5} width={3} height={1} rx={0.5} stroke="#40A789" />
  </Svg>
  }
  else {
    return <Svg
    width={34}
    height={34}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width={34} height={34} rx={17} fill="#40A789" />
    <Rect x={10} y={8} width={14} height={18} rx={2} fill="#fff" />
    <Rect x={12.5} y={12.5} width={7} height={1} rx={0.5} stroke="#40A789" />
    <Rect x={12.5} y={15.5} width={5} height={1} rx={0.5} stroke="#40A789" />
    <Rect x={12.5} y={18.5} width={7} height={1} rx={0.5} stroke="#40A789" />
  </Svg>
  }
}