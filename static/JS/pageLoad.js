/*
If you want button to open a specific view to section.
Add class to the button formed like: 'button' + <verb> + <target>.
Example: class='js--button-view-project' opens project view form viewProject.html.
And the divs inside sections have to have class='theNameOfTheHTML'
Example: in viewCustomer.html <div class='viewCustomer'> ... </div>
*/
const loadSection = function(show) {
  section.children().hide();
  show.show();
};

var section;
var body;

$(document).ready(function() {
  section = $('section');
  body = $('body');

  //Home
  body.on('click', '.js--button-home', function() {
    loadSection($('#js--home'));
  });
  //Select customer
  body.on('click', '.js--button-select-customer', function() {
    if ($('#js--select-customer').length == 0) {
        console.log('customer');
      $.get('static/selectCustomer.html', function(data) {
        section.append(data);
        $.getScript('static/JS/selectCustomer.js', () => {loadSelectCustomer(); console.log('cus-js')});
      });
    } else {
      loadSelectCustomer();
    }
    loadSection($('#js--select-customer'));
  });
  //Create customer
  body.on('click', '.js--button-create-customer', function() {
    if ($('#js--create-customer').length == 0) {
      $.get('static/createCustomer.html', function(data) {
        section.append(data);
        $.getScript('static/JS/createCustomer.js');
      });
    }
    loadSection($('#js--create-customer'));
  });

  //Select project
  body.on('click', '.js--button-select-project', function() {
    if ($('#js--select-project').length == 0) {
      $.get('static/selectProject.html', function(data) {
        section.append(data);
        $.getScript('static/JS/selectProject.js', () => loadSelectProject());
      });
    } else {
      loadSelectProject();
    }
    loadSection($('#js--select-project'));
  });
  //Create project
  body.on('click', '.js--button-create-project', function() {
    if ($('#js--create-project').length == 0) {
      $.get('static/createProject.html', function(data) {
        section.append(data);
        $.getScript('static/JS/createProject.js');
      });
    }
    loadSection($('#js--create-project'));
  });

  //View colors
  body.on('click', '.js--button-view-colors', function() {
    if ($('#js--all-colors').length == 0) {
      $.get('static/viewColors.html', function(data) {
        section.append(data);
        $.getScript('static/JS/viewColors.js', () => loadViewColors());
      });
    } else {
      loadViewColors();
    }
    loadSection($('#js--all-colors'));
  });
  //Create color
  body.on('click', '.js--button-create-colors', function() {
    if ($('#js--create-colors').length == 0) {
      $.get('static/createColors.html', function(data) {
        section.append(data);
        $.getScript('static/JS/createColors.js');
      });
    }
    loadSection($('#js--create-colors'));
  });

  //View materials
  body.on('click', '.js--button-view-materials', function() {
    if ($('#js--all-materials').length == 0) {
      $.get('static/viewMaterials.html', function(data) {
        section.append(data);
        $.getScript('static/JS/viewMaterials.js', () => loadMaterials());
      });
    } else {
      loadMaterials();
    }
    loadSection($('#js--all-materials'));
  });
  //Create materials
  body.on('click', '.js--button-create-materials', function() {
    if ($('#js--create-materials').length == 0) {
      $.get('static/createMaterials.html', function(data) {
        section.append(data);
        $.getScript('static/JS/createMaterials.js');
      });
    }
    loadSection($('#js--create-materials'));
  });
  //view single material
  body.on('click', '.js--button-view-material', function() {
    materialId = this.id;
    if ($('#js--view-material').length == 0) {
      $.get('static/viewSingleMaterial.html', function(data) {
        section.append(data);
        $.getScript('static/JS/viewSingleMaterial.js', () => loadSingleMaterial());
      });
    } else {
      loadSingleMaterial();
    }
    loadSection($('#js--view-material'));
  });
  //Select product WWWW
  body.on('click', '.js--button-select-product', function() {
    if ($('#js--select-product').length == 0) {
      $.get('static/selectProduct.html', function(data) {
        section.append(data);
        $.getScript('static/JS/selectProduct.js', () => loadSelectProduct());
      });
    } else {
      loadSelectProduct();
    }
    loadSection($('#js--select-product'));
  });
  //Create product
  body.on('click', '.js--button-create-product', function() {
    console.log($('#js--create-product').length);
    if ($('#js--create-product').length == 0) {
      $.get('static/createProduct.html', function(data) {
        section.append(data);
        $.getScript('static/JS/createProduct.js');
      });
    }
    loadSection($('#js--create-product'));
  });
});
