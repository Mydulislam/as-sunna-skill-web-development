/* =====================================================
                    Navigation Tabs:
========================================================*/
document.getElementById('tabContainer').addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      const tabId = event.target.getAttribute('href').substring(1);
      const tabContent = document.getElementById(tabId);
      // Hide all tab contents
      document.querySelectorAll('#tabContent > div').forEach(function (tab) {
        tab.style.display = 'none';
      });
      // Show the selected tab content
      tabContent.style.display = 'block';
    }
  });

  



/* =====================================================
            Todo List with Deletion:
========================================================*/


document.getElementById('todoList').addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    const listItem = event.target.closest('li');
    if (listItem) {
      listItem.remove();
    }
  }
});




/* =====================================================
                Dropdown Menus:
========================================================*/


document.getElementById('menu').addEventListener('click', function (event) {
    if (event.target.parentElement.querySelector('ul')) {
      const submenu = event.target.parentElement.querySelector('ul');
      submenu.classList.toggle('show');
    }
  });
  
/* =====================================================

========================================================*/
/* =====================================================

========================================================*/
/* =====================================================

========================================================*/
/* =====================================================

========================================================*/