import Swal from 'sweetalert2';

const success = (text) => {
    Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: text,
    });
}

const errorMessage = (text) => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: text,
    });
}

export { success, errorMessage }