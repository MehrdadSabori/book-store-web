import Swal from 'sweetalert2'

const ShowAlert = (icon, title, darkMode) =>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
        customClass: {
          popup: darkMode ? 'dark-toast-popup dark-toast-container' : '',
          title: 'title_toast' 
        },
      });
    
      Toast.fire({
        icon,
        title,
      });
}

export {ShowAlert}