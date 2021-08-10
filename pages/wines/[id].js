import { useRouter } from "next/dist/client/router";
import WineCard from "../../comp/WineCard";

const Wine = ({data}) => {

    const router = useRouter();
    const id = router.query.id
    const [ wine ] = data.filter(w => w._id === id)

    return (
        <div>
            <WineCard type={wine.type} brand={wine.brand} />
        </div>
    );
}

// Hit wine 
export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/wines')
    const data = await res.json()
    

    return {
        props:{ data }
    }
}

export default Wine;