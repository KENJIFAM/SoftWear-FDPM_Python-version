$(document).ready(function() {
  document.getElementById("js--delete-customer").addEventListener('click', function() {
    deleteCustomer();

    //Loads all customers page
    $("section").load("selectCustomer.html #js--select-customer");
    $.getScript("WEB/JS/selectCustomer.js");
  });
});

function deleteCustomer() {
  return fetch("http://10.114.32.86:8080/customer/" + customerId, {
    'method': 'DELETE'
  })
  .then(response => response.json());
}
