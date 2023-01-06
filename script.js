const notifications = document.querySelector(".notifications"),
buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {

    timer: 5000,
    success: {
        icon: `fa-circle-check`,
        text: `Success: This is a success toast`
    },

    error: {
        icon: `fa-circle-xmark`,
        text: `Error: This is a error toast`
    },

    warning: {
        icon: `fa-circle-exclamation`,
        text: `Warning: This is a warning toast`
    },

    info: {
        icon: `fa-circle-info`,
        text: `Info: This is a info toast`
    },

};

const removeToast = (toast) => {
    toast.classList.add("hide");

    if (toast.timeoutId) clearTimeout(toast.timeoutId); //clearing the timeout for the toast

    setTimeout(() => toast.remove(), 500)
}

const createToast = (id) => {

    // Getting the icon and the toast based on the id
    const {icon, text} = toastDetails[id];

    const toast = document.createElement("li") // This create for the new element for the toast
    toast.className = `toast ${id}`; // Setting the class for the toast

    // Setting the innerHTML fro the toast
    toast.innerHTML = `<div class="column">
                        <i class="fa-solid ${icon}"></i>
                        <span>${text}</span>
                    </div>
                    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;

    notifications.appendChild(toast); // Append child toast to the notification ul

    // Setting timeout to remove a toat
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);

};

buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});