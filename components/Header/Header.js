class Header {
  handlerOpenShoppingPage() {
    shoppingPage.render();
  }

  render(count) {
    const html = `
            <div class="header-container">
            <div class="header-container__title">Shop</div>
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                Сейчас в корзине:
                    ${count}
                </div>
            </div>
        `;

    ROOT_HEADER.innerHTML = html;
  }
};

const headerPage = new Header();
