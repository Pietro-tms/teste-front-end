import "./Input.scss"

type inputProps = {
    placeholder: string
    type: string
}

const Input = ({placeholder, type}: inputProps) => {
  return (
    <input className="input" type={type} placeholder={placeholder}/>
  )
}

export default Input