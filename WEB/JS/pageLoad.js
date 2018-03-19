/*wwwwwwww
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
      $.get('WEB/selectCustomer.html', function(data) {
        section.append(data);
        $.getScript('WEB/JS/selectCustomer.js', () => {loadSelectCustomer(); console.log('cus-js')});
      });
    } else {
      loadSelectCustomer();
    }
    loadSection($('#js--select-customer'));
  });
  //Create customer
  body.on('click', '.js--button-create-customer', function() {
    if ($('#js--create-customer').length == 0) {
      $.get('WEB/createCustomer.html', function(data) {
        section.append(data);
        $.getScript('WEB/JS/createCustomer.js');
      });
    }
    loadSection($('#js--create-customer'));
  });

  //Select project
  body.on('click', '.js--button-select-project', function() {
    if ($('#js--select-project').length == 0) {
      $.get('WEB/selectProject.html', function(data) {
        section.append(data);
        $.getScript('WEB/JS/selectProject.js', () => loadSelectProject());
      });
    } else {
      loadSelectProject();
    }
    loadSection($('#js--select-project'));
  });
  //Create project
  body.on('click', '.js--button-create-project', function() {
    if ($('#js--create-project').length == 0) {
      $.get('WEB/createProject.html', function(data) {
        section.append(data);
        $.getScript('WEB/JS/createProject.js');
      });
    }
    loadSection($('#js--create-project'));
  });

  //View colors
  body.on('click', '.js--button-view-colors', function() {
    if ($('#js--all-colors').length == 0) {
      $.get('WEB/viewColors.html', function(data) {
        section.append(data);
        $.getScript('WEB/JS/viewColors.js', () => loadViewColors());
      });
    } else {
      loadViewColors();
    }
    loadSection($('#js--all-colors'));
  });
  //Create color
  body.on('click', '.js--button-create-colors', function() {
    if ($('#js--create-colors').length == 0) {
      $.get('WEB/createColors.html', function(data) {
        section.append(data);
        $.getScript('WEB/JS/createColors.js');
      });
    }
    loadSection($('#js--create-colors'));
  });

  //View materials
  body.on('click', '.js--button-view-materials', function() {
    if ($('#js--all-materials').length == 0) {
      $.get('WEB/viewMaterials.html', function(data) {
        section.append(data);
        $.getScript('WEB/JS/viewMaterials.js', () => loadMaterials());
      });
    } else {
      loadMaterials();
    }
    loadSection($('#js--all-materials'));
  });
  //Create materials
  body.on('click', '.js--button-create-materials', function() {
    if ($('#js--create-materials').length == 0) {
      $.get('WEB/createMaterials.html', function(data) {
        section.append(data);
        $.getScript('WEB/JS/createMaterials.js');
      });
    }
    loadSection($('#js--create-materials'));
  });
  //view single material
  body.on('click', '.js--button-view-material', function() {
    materialId = this.id;
    if ($('#js--view-material').length == 0) {
      $.get('WEB/viewSingleMaterial.html', function(data) {
        section.append(data);
        $.getScript('WEB/JS/viewSingleMaterial.js', () => loadSingleMaterial());
      });
    } else {
      loadSingleMaterial();
    }
    loadSection($('#js--view-material'));
  });
  //Select product WWWW
  body.on('click', '.js--button-select-product', function() {
    if ($('#js--select-product').length == 0) {
      $.get('WEB/selectProduct.html', function(data) {
        section.append(data);
        $.getScript('WEB/JS/selectProduct.js', () => loadSelectProduct());
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
      $.get('WEB/createProduct.html', function(data) {
        section.append(data);
        $.getScript('WEB/JS/createProduct.js');
      });
    }
    loadSection($('#js--create-product'));
  });
});
