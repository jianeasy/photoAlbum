import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const useAxios = (config: AxiosRequestConfig<any>) => {
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(null)
    const [res, setRes] = useState(null)
    useEffect(() => {
        setLoading(true)
        axios(config)
            .then(setRes)
            .catch(setErr)
            .finally(() => {
                setLoading(false)
            })
    }, [])
    return { loading, err, res }
}
export default useAxios
