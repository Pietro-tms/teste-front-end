type categorieCardProps = {
    title: string;
    img: string;
}


const CategorieCard = ({title, img}: categorieCardProps) => {
  return (
    <div>
        <div>
            <img src={img} alt={`${img}`} />
        </div>
        <span>
            {title}
        </span>
    </div>
  )
}

export default CategorieCard