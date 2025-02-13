document.addEventListener("DOMContentLoaded", function () {
    fetch('https://api.escuelajs.co/api/v1/users')
        .then(response => response.json())
        .then(data => {
            let tabla = "";

            data.forEach(user => {
                tabla += `
                    <tr>
                        <td><img src="${user.avatar}" alt="Avatar" class="avatar-img"></td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.password}</td>
                    </tr>
                `;
            });

            document.getElementById("tblUsers").innerHTML = tabla;
        })
        .catch(error => console.error('Error al obtener los datos: ', error));
});