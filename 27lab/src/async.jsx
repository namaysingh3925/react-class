import React from 'react'

const async = () => {
    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                console.log(response.data);
            }
            catch (error) {
                console.log(error);
            }

        }

    }, [])

    return (
        <div>

        </div>
    )
}

export default async