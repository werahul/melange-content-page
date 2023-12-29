import React, {useState, useEffect} from 'react'
import { Home } from '.'
import { Preloader } from '../Layout'

const HomeWithLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        };

        fetchData();
    }, []);
    return (
        <div>
            {loading ? <Preloader /> : <Home />}
        </div>
    )
}

export default HomeWithLoader