const useToken = () => {
    let token = localStorage.getItem("crmToken")
    let AuthToken = token ?? null

    return {
        Authorization: `Bearer ${AuthToken}`
    }
}

export default useToken;