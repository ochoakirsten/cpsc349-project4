const USERNAME = 'ADMIN_EMAIL'
const PASSWORD = 'ADMIN_PASSWORD'

const U_USERNAME = 'USER_EMAIL'
const U_PASSWORD = 'USER_PASSWORD'
const pb = new PocketBase('http://127.0.0.1:8090')
//below is authentication for admins from ex 4 
//commented b/c need to have it read from input 
//const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
console.log(authData)

//below is authentication for user.
const authData = await pb.collection('users').authWithPassword()

const root = ReactDOM.createRoot(document.getElementById('root'))


//creating data
const data = {
    "title": "test"
};

const record = await pb.collection('reading_list').create(data)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

