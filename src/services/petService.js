const index = async () => {
    try {
        const res = await fetch('http://localhost:3000/pets')
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export {
    index
}