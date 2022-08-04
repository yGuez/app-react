import React from "react"

interface CardProps {
    label : string,
    picture : string,
    title : string
}

const Card:React.FC<CardProps> = ({ label, picture, title }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <span>{label}</span>
      <img src={picture} alt="freelance" height={80} width={80} />
      <span>{title}</span>
    </div>
  )
}

export default Card
