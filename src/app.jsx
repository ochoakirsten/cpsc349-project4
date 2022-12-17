const USERNAME = 'ADMIN_EMAIL'
const PASSWORD = 'ADMIN_PASSWORD'

const pb = new PocketBase('http://127.0.0.1:8090')

const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
console.log(authData)

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

