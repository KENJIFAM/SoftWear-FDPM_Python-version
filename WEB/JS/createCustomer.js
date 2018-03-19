$('#js--button-submit-customer').on('click', function() {

    let form = document.getElementById('js--form-id-customer');
    let name = $('#name').val();
    let email = $('#email').val();
    let description = $('#description').val();

    let data = {
        'name': name,
        'email': email,
        'description': description
    };

    fetch('http://10.114.32.86:8080/customer/', {
        'method': 'POST',
        'body': JSON.stringify(data),
        'headers': new Headers({'Content-Type': 'application/json'})
    })
        .then(response => console.log('Success', response))
        .then(loadSelectCustomer())
        .catch(error => console.error(error));
    form.reset();
    console.log('created');
    loadSection($('#js--select-product'));
  });
