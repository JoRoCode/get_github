const getCoderData = async(login) => {
    let res = await fetch(`https://api.github.com/users/${login}`)
    let data = await res.json()
    console.log(data)
    user_info.innerText = data.name + " has " + data.followers + " followers"
}