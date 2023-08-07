import Link from "next/link"
import { AllCardsRepo } from "../components/AllCardsRepo"

const Dashboard = async () => {

    return (
        <>
            <h2>Soy Dashboard</h2>
            <Link href='/'>Volver a la HOME</Link>
            <AllCardsRepo/>
        </>
    )
}

export default Dashboard