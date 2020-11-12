AOS.init();

let users = [];

async function getUsers() {
    const response = await fetch('http://localhost:5500/api/users')
    users = await response.json();

    userToTableRow()
}

getUsers()

function userToTableRow() {
    const tbody = document.querySelector('tbody')
    users.forEach(user => {
       tbody.innerHTML += createRow(user)
    })
}

function createRow(user) {
    return `
<tr data-aos="fade-up">
    <td class="px-6 py-4 whitespace-no-wrap">
        <div class="flex items-center">
        
        <div class="ml-4">
            <div class="text-sm leading-5 text-gray-500">
            ${user.email}
            </div>
        </div>
        </div>
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        ${user.role.name}
    </td>
</tr>
`
}