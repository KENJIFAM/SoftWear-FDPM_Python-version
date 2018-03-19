$(document).ready(function() {
  document.getElementById("js--delete-project").addEventListener('click', function() {
    deleteProject();

    //Loads all projects page
    $("section").load("selectProject.html #js--select-project");
    $.getScript("JS/selectProject.js");
  })
});

function deleteProject() {
  return fetch("http://10.114.32.86:8080/project/" + projectId, {
    'method': 'DELETE'
  })
  .then(response => response.json());
}
