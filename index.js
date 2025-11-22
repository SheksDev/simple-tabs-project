const initApp = () => {

  let currentTab = null;
  const texts = document.querySelectorAll('#text');
  const tabs = document.querySelectorAll('#tab');
  const underline = document.querySelector(".underline");

  function moveUnderline(activeTab) {
    underline.style.width = activeTab.offsetWidth + "px";
    underline.style.left = activeTab.offsetLeft + "px";
    }

  function showTab() {

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabNumber = tab.dataset.forTab;
        currentTab = tabNumber;
    
        const toActivate = document.querySelector(`#text[data-tab="${currentTab}"]`);
    
        texts.forEach(text => {
          text.classList.remove('active');
          text.classList.add('nonactive');
        });

        tabs.forEach(tab => {
          tab.classList.remove('alpha');
          tab.classList.remove('hero');
          tab.style.color = "gray";
        });

        moveUnderline(tab);
        tab.style.color = "#DDA0DD"
        toActivate.classList.remove('nonactive')
        toActivate.classList.add('active');
      })
    })
  }
  showTab();
}
document.addEventListener('DOMContentLoaded', initApp)