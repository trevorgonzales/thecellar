import style from '../../styles/WineList.module.css' 
import Image from 'next/image'
import star from '../../public/star.svg'
import redImg from '../../public/red-wine2.jpg'
import whiteImg from '../../public/white-wine.jpg'
import Link from 'next/link'

const index = ({ wines }) => {
    return (
        <div className={style.container}>
           { wines.map(w => {
              return (
                <div className={`${w.color === 'red' ? style.card_red : style.card_white}`}>
                    <Link href={`/wines/${w._id}`}>
                      <a>{w.brand}</a>
                    </Link>
                    {/* <div className={style.star}>
                        <Image src={star} height="24" width="24"></Image>
                        <p>{w.rating}</p>
                    </div>
                    <div className={style.details}>
                        <p className={style.brand}>{w.brand}</p>
                        <h2 className={style.header}>{w.type} {w.year}</h2>
                    </div> */}
                </div>
              )
           })}

           <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&family=Playfair+Display:wght@700&display=swap');

            html,
            body {
                padding: 0;
                margin: 0;
                font-family: 'Inter', sans;
                font-size: 14px;
            }
            
            * {
                box-sizing: border-box;
            }
           `}</style>
        </div>
    );
}

export default index;

index.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/wines')
    const wines = await res.json()

    return { wines }
}
