const phone = document.getElementById('phone')

phone.addEventListener('input', ()=>{
    phone.value = phone.value.replace(/[^0-9+\-\(\)\s]/g, '');
})